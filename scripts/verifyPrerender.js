/**
 * Reads the built HTML on disk for every URL in public/sitemap.xml and prints a table of
 * title, canonical, meta description presence and visible body text size. Independent of
 * the prerenderer: it parses files only, so it verifies what will actually ship.
 *
 * Exits non-zero if any canonical differs from its own URL or any page has < 500 chars.
 */
import { existsSync, readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const SITE_ORIGIN = process.env.VITE_PUBLIC_SITE_URL || 'https://themukteshwarbungalow.in';
const MIN_BODY_CHARS = 500;

function attr(html, selectorRe) {
  const m = html.match(selectorRe);
  return m ? m[1].trim() : '';
}

/** Visible text: drop head, script, style and noscript, then collapse tags and entities. */
function visibleText(html) {
  const match = html.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const body = match ? match[1] : '';
  return body
    .replace(/<(script|style|noscript|template)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;|&#\d+;/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function inspect(file) {
  const html = readFileSync(file, 'utf8');
  return {
    title: attr(html, /<title[^>]*>([\s\S]*?)<\/title>/i),
    canonical: attr(html, /<link[^>]+rel=["']canonical["'][^>]*href=["']([^"']+)["']/i)
      || attr(html, /<link[^>]+href=["']([^"']+)["'][^>]*rel=["']canonical["']/i),
    description: attr(html, /<meta[^>]+name=["']description["'][^>]*content=["']([^"']*)["']/i),
    robots: attr(html, /<meta[^>]+name=["']robots["'][^>]*content=["']([^"']*)["']/i),
    jsonLd: /application\/ld\+json/i.test(html),
    og: /property=["']og:title["']/i.test(html),
    twitter: /name=["']twitter:title["']/i.test(html),
    bodyChars: visibleText(html).length
  };
}

function sitemapPaths() {
  const xml = readFileSync(path.join(ROOT, 'public', 'sitemap.xml'), 'utf8');
  return [...new Set([...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => new URL(m[1]).pathname))];
}

function fileFor(routePath) {
  return routePath === '/' ? path.join(DIST, 'index.html') : path.join(DIST, routePath, 'index.html');
}

function truncate(s, n) {
  return s.length <= n ? s.padEnd(n) : s.slice(0, n - 1) + '…';
}

const COLS = [['URL', 46], ['TITLE', 52], ['CANONICAL', 50], ['DESC', 4], ['JSON-LD', 7], ['OG/TW', 5], ['BODY CHARS', 10]];
const rows = [];
const failures = [];

for (const routePath of sitemapPaths()) {
  const file = fileFor(routePath);
  if (!existsSync(file)) {
    failures.push(routePath + ': no built HTML at ' + path.relative(ROOT, file));
    rows.push([routePath, 'MISSING FILE', '-', 'N', '-', '-', '0']);
    continue;
  }

  const r = inspect(file);
  const expected = SITE_ORIGIN + routePath;
  const canonicalOk = r.canonical.replace(/\/$/, '') === expected.replace(/\/$/, '');

  if (!canonicalOk) failures.push(routePath + ': canonical "' + r.canonical + '" != "' + expected + '"');
  if (r.bodyChars < MIN_BODY_CHARS) failures.push(routePath + ': ' + r.bodyChars + ' body chars (min ' + MIN_BODY_CHARS + ')');
  if (!r.description) failures.push(routePath + ': missing meta description');
  if (!r.jsonLd) failures.push(routePath + ': missing JSON-LD');

  rows.push([
    routePath,
    r.title,
    (canonicalOk ? '' : '!! ') + r.canonical,
    r.description ? 'Y' : 'N',
    r.jsonLd ? 'Y' : 'N',
    (r.og ? 'Y' : 'N') + '/' + (r.twitter ? 'Y' : 'N'),
    String(r.bodyChars)
  ]);
}

const header = COLS.map(([name, w]) => truncate(name, w)).join(' | ');
console.log('\n' + header);
console.log(COLS.map(([, w]) => '-'.repeat(w)).join('-+-'));
for (const row of rows) {
  console.log(row.map((cell, i) => truncate(String(cell), COLS[i][1])).join(' | '));
}

const notFound = path.join(DIST, '404.html');
if (existsSync(notFound)) {
  const r = inspect(notFound);
  console.log('\n404.html  title="' + r.title + '"  robots="' + r.robots + '"  body chars=' + r.bodyChars);
  if (!/noindex/i.test(r.robots)) failures.push('404.html: robots is "' + r.robots + '", expected noindex');
} else {
  failures.push('dist/404.html missing (ErrorDocument 404 would have nothing to serve)');
}

console.log('\n' + rows.length + ' sitemap URLs checked.');
if (failures.length) {
  console.error('\nFAILED ' + failures.length + ' check(s):');
  failures.forEach((f) => console.error('  - ' + f));
  process.exit(1);
}
console.log('All canonicals self-referencing, all pages have a description, JSON-LD and > ' + MIN_BODY_CHARS + ' chars of body text.\n');
