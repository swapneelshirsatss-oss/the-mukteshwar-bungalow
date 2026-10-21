/**
 * Prerenders every URL in public/sitemap.xml (plus the 404 page) into static HTML
 * inside dist/, so crawlers get a unique title, canonical, meta and body text without
 * running JavaScript. The app still boots and runs as a normal SPA in the browser.
 *
 * Head tags are produced by SEOHead's useEffect, so the only faithful way to capture
 * them is to run the page in a real browser and snapshot the resulting DOM.
 */
import { createServer } from 'http';
import { existsSync, readFileSync, mkdirSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer-core';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_ORIGIN = process.env.VITE_PUBLIC_SITE_URL || 'https://themukteshwarbungalow.in';

/** Route that cannot match any real page, used to capture the NotFound view. */
const NOT_FOUND_PROBE = '/__prerender_404__';
const MIN_BODY_CHARS = 500;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff2': 'font/woff2', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml'
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
  if (!found) throw new Error('No Chrome found. Set CHROME_PATH to a Chrome/Chromium binary.');
  return found;
}

function sitemapPaths() {
  const xml = readFileSync(path.join(ROOT, 'public', 'sitemap.xml'), 'utf8');
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (!locs.length) throw new Error('No <loc> entries found in public/sitemap.xml');
  return [...new Set(locs.map((loc) => new URL(loc).pathname))];
}

/** Static server over dist/ that falls back to index.html, so the SPA router resolves any path. */
function startServer() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent(req.url.split('?')[0]);
    let file = path.join(DIST, urlPath);
    if (!file.startsWith(DIST)) {
      res.writeHead(403);
      res.end();
      return;
    }
    if (existsSync(file) && !path.extname(file)) file = path.join(file, 'index.html');
    if (!existsSync(file) || !path.extname(file)) file = path.join(DIST, 'index.html');
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
    res.end(readFileSync(file));
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

async function snapshot(page, origin, routePath) {
  await page.goto(origin + routePath, { waitUntil: 'networkidle2', timeout: 60000 });
  // SEOHead writes the head in an effect; wait for the canonical it always sets.
  await page.waitForFunction(() => !!document.querySelector('link[rel="canonical"]'), { timeout: 30000 });

  return page.evaluate((siteOrigin) => {
    // GTM's inline snippet re-injects this on every real page load; a captured copy
    // would make the container load twice.
    document.querySelectorAll('script[src*="googletagmanager.com"]').forEach((el) => el.remove());
    document.querySelectorAll('iframe[src*="googletagmanager.com"]').forEach((el) => {
      if (!el.closest('noscript')) el.remove();
    });

    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
    return {
      html: '<!doctype html>\n' + document.documentElement.outerHTML,
      title: document.title,
      canonical: canonical.startsWith('http') ? canonical : siteOrigin + canonical,
      description: document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
      robots: document.querySelector('meta[name="robots"]')?.getAttribute('content') || '',
      bodyChars: (document.body.innerText || '').replace(/\s+/g, ' ').trim().length
    };
  }, SITE_ORIGIN);
}

function writePage(routePath, html) {
  const outFile = routePath === '/'
    ? path.join(DIST, 'index.html')
    : path.join(DIST, routePath, 'index.html');
  mkdirSync(path.dirname(outFile), { recursive: true });
  writeFileSync(outFile, html, 'utf8');
  return path.relative(DIST, outFile).replace(/\\/g, '/');
}

async function main() {
  if (!existsSync(path.join(DIST, 'index.html'))) {
    throw new Error('dist/index.html missing. Run `vite build` before prerendering.');
  }

  const routes = sitemapPaths();
  const server = await startServer();
  const origin = 'http://127.0.0.1:' + server.address().port;
  const browser = await puppeteer.launch({
    executablePath: findChrome(),
    headless: true,
    args: ['--no-sandbox', '--disable-dev-shm-usage']
  });

  const failures = [];
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    await page.setRequestInterception(true);
    page.on('request', (req) => {
      // Nothing external is needed to render, and blocking keeps live tags out of the snapshot.
      const blocked = /googletagmanager\.com|google-analytics\.com|fonts\.googleapis\.com|fonts\.gstatic\.com/;
      if (blocked.test(req.url())) req.abort().catch(() => {});
      else req.continue().catch(() => {});
    });

    console.log('\nPrerendering ' + routes.length + ' routes + 404 from ' + origin + '\n');

    for (const routePath of routes) {
      const result = await snapshot(page, origin, routePath);
      const expected = SITE_ORIGIN + routePath;
      const out = writePage(routePath, result.html);

      if (result.canonical.replace(/\/$/, '') !== expected.replace(/\/$/, '')) {
        failures.push(routePath + ': canonical is "' + result.canonical + '", expected "' + expected + '"');
      }
      if (result.bodyChars < MIN_BODY_CHARS) {
        failures.push(routePath + ': only ' + result.bodyChars + ' chars of body text (min ' + MIN_BODY_CHARS + ')');
      }
      if (!result.description) failures.push(routePath + ': no meta description');
      if (!result.title) failures.push(routePath + ': no title');

      console.log('  ok  ' + routePath.padEnd(48) + String(result.bodyChars).padStart(6) + ' chars  -> ' + out);
    }

    // 404: same app, unmatched route, written to the file ErrorDocument serves.
    const notFound = await snapshot(page, origin, NOT_FOUND_PROBE);
    writeFileSync(path.join(DIST, '404.html'), notFound.html, 'utf8');
    if (!/noindex/i.test(notFound.robots)) {
      failures.push('404.html: robots meta is "' + notFound.robots + '", expected noindex');
    }
    console.log('  ok  404.html -> robots="' + notFound.robots + '"');
  } finally {
    await browser.close();
    server.close();
  }

  if (failures.length) {
    console.error('\nPrerender failed ' + failures.length + ' check(s):');
    failures.forEach((f) => console.error('  - ' + f));
    process.exit(1);
  }
  console.log('\nPrerendered ' + routes.length + ' routes + 404.html into dist/\n');
}

main().catch((err) => {
  console.error('\nPrerender error:', err.message);
  process.exit(1);
});
