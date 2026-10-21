/**
 * Self-check for the delegated click tracking: loads the built site in a real browser,
 * clicks each kind of conversion element and asserts exactly one dataLayer push per click
 * with page_path and link_text. Navigation is suppressed so the page stays put.
 *
 * Run after `npm run build`:  node scripts/verifyDataLayer.js
 */
import assert from 'assert';
import { createServer } from 'http';
import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST = path.resolve(__dirname, '..', 'dist');

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.svg': 'image/svg+xml', '.jpg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.txt': 'text/plain', '.xml': 'application/xml'
};

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  const candidates = [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe',
    process.env.LOCALAPPDATA && `${process.env.LOCALAPPDATA}/Google/Chrome/Application/chrome.exe`,
    '/usr/bin/google-chrome',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  ];
  const found = candidates.find((p) => p && existsSync(p));
  if (!found) throw new Error('No Chrome found. Set CHROME_PATH.');
  return found;
}

function startServer() {
  const server = createServer((req, res) => {
    let file = path.join(DIST, decodeURIComponent(req.url.split('?')[0]));
    if (!file.startsWith(DIST)) { res.writeHead(403); res.end(); return; }
    if (existsSync(file) && !path.extname(file)) file = path.join(file, 'index.html');
    if (!existsSync(file) || !path.extname(file)) file = path.join(DIST, 'index.html');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(readFileSync(file));
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

/** Clicks the first element matching the predicate and returns the events it pushed. */
async function clickAndCollect(page, selector) {
  return page.evaluate((sel) => {
    window.__events = [];
    const el = document.querySelector(sel);
    if (!el) return { missing: true };
    el.click();
    return { events: window.__events.slice() };
  }, selector);
}

async function main() {
  const server = await startServer();
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await puppeteer.launch({
    executablePath: findChrome(), headless: true, args: ['--no-sandbox']
  });
  const failures = [];

  try {
    const page = await browser.newPage();
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      const blocked = /googletagmanager\.com|google-analytics\.com|fonts\.g/;
      if (blocked.test(req.url())) req.abort().catch(() => {});
      else req.continue().catch(() => {});
    });

    // Capture every push and stop links from navigating away.
    await page.evaluateOnNewDocument(() => {
      window.__events = [];
      window.dataLayer = [];
      const push = window.dataLayer.push.bind(window.dataLayer);
      window.dataLayer.push = (obj) => {
        if (obj && obj.event) window.__events.push(obj);
        return push(obj);
      };
      document.addEventListener('click', (e) => {
        const a = e.target && e.target.closest && e.target.closest('a[href]');
        if (a) e.preventDefault();
      });
      document.addEventListener('submit', (e) => e.preventDefault());
      window.open = () => null;
    });

    const cases = [
      { page: '/', label: 'whatsapp_click', selector: 'a[href*="wa.me"]', expect: 'whatsapp_click' },
      { page: '/contact', label: 'phone_click', selector: 'a[href^="tel:"]', expect: 'phone_click' },
      { page: '/contact', label: 'email_click', selector: 'a[href^="mailto:"]', expect: 'email_click' }
    ];

    for (const c of cases) {
      await page.goto(origin + c.page, { waitUntil: 'networkidle2' });
      const result = await clickAndCollect(page, c.selector);
      if (result.missing) { failures.push(`${c.label}: no element matching ${c.selector} on ${c.page}`); continue; }

      const matched = result.events.filter((e) => e.event === c.expect);
      try {
        assert.strictEqual(matched.length, 1, `expected 1 ${c.expect}, got ${matched.length} (${JSON.stringify(result.events.map((e) => e.event))})`);
        assert.ok(matched[0].link_text, 'link_text missing');
        assert.strictEqual(matched[0].page_path, c.page, 'page_path should be the page the click happened on');
        console.log(`  ok  ${c.expect.padEnd(20)} page_path=${matched[0].page_path}  link_text="${matched[0].link_text}"`);
      } catch (err) {
        failures.push(`${c.label}: ${err.message}`);
      }
    }

    // booking_cta_click: a Book / Check Availability control.
    await page.goto(origin + '/', { waitUntil: 'networkidle2' });
    const cta = await page.evaluate(() => {
      window.__events = [];
      const re = /\b(book|reserve|check\s*availability)\b/i;
      const el = [...document.querySelectorAll('a[href], button')]
        .find((e) => re.test((e.textContent || '').trim()) && !/wa\.me|tel:|mailto:/.test(e.getAttribute('href') || ''));
      if (!el) return { missing: true };
      const text = el.textContent.trim();
      el.click();
      return { events: window.__events.slice(), text, from: '/' };
    });
    if (cta.missing) failures.push('booking_cta_click: no Book/Check Availability control found on /');
    else {
      const matched = cta.events.filter((e) => e.event === 'booking_cta_click');
      try {
        assert.strictEqual(matched.length, 1, `expected 1 booking_cta_click, got ${matched.length} (${JSON.stringify(cta.events.map((e) => e.event))})`);
        assert.ok(matched[0].link_text, 'link_text missing');
        assert.strictEqual(matched[0].page_path, '/', 'page_path should be the page the click happened on');
        console.log(`  ok  booking_cta_click    page_path=${matched[0].page_path}  link_text="${matched[0].link_text}"`);
      } catch (err) {
        failures.push('booking_cta_click: ' + err.message);
      }
    }

    // booking_form_submit: only forms marked data-booking-form, not wizard steps.
    // The availability widget is on the homepage; the 3-step direct booking form marks
    // only its final step, which is not in the initial DOM.
    await page.goto(origin + '/', { waitUntil: 'networkidle2' });
    const submitted = await page.evaluate(() => {
      window.__events = [];
      const form = document.querySelector('form[data-booking-form]');
      if (!form) return { missing: true };
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return { events: window.__events.slice(), name: form.dataset.bookingForm };
    });
    if (submitted.missing) failures.push('booking_form_submit: no form[data-booking-form] on /');
    else {
      const matched = submitted.events.filter((e) => e.event === 'booking_form_submit');
      try {
        assert.strictEqual(matched.length, 1, `expected 1 booking_form_submit, got ${matched.length}`);
        assert.strictEqual(matched[0].form_id, submitted.name, 'form_id should be the data-booking-form value');
        assert.strictEqual(matched[0].page_path, '/', 'page_path should be the page the submit happened on');
        console.log(`  ok  booking_form_submit  page_path=${matched[0].page_path}  form_id="${matched[0].form_id}"`);
      } catch (err) {
        failures.push('booking_form_submit: ' + err.message);
      }
    }

    // An unmarked form must not report a booking submission.
    await page.goto(origin + '/contact', { waitUntil: 'networkidle2' });
    const unmarked = await page.evaluate(() => {
      window.__events = [];
      const form = [...document.querySelectorAll('form')].find((f) => !f.dataset.bookingForm);
      if (!form) return { missing: true };
      form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
      return { events: window.__events.slice() };
    });
    if (unmarked.missing) console.log('  --  no unmarked form on /contact to check');
    else if (unmarked.events.some((e) => e.event === 'booking_form_submit')) {
      failures.push('contact form wrongly reported booking_form_submit');
    } else {
      console.log('  ok  unmarked form        pushed no booking_form_submit');
    }
  } finally {
    await browser.close();
    server.close();
  }

  if (failures.length) {
    console.error('\nFAILED ' + failures.length + ' check(s):');
    failures.forEach((f) => console.error('  - ' + f));
    process.exit(1);
  }
  console.log('\nAll dataLayer conversion events fire once with page_path and link_text.\n');
}

main().catch((err) => { console.error('\nError:', err.message); process.exit(1); });
