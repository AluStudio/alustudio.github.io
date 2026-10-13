/**
 * Post-build prerender: render every sitemap route with headless Chrome and
 * write the rendered DOM back to that route's index.html inside _site/.
 *
 * Why: all major AI crawlers (GPTBot, ClaudeBot, PerplexityBot, CCBot...)
 * fetch HTML but never execute JavaScript, so a CSR-only SPA is invisible to
 * them. See docs/specs/seo-aeo.md (§前提事實) for the research.
 *
 * Design notes:
 * - Routes come from the sitemap inside the site dir — single source of
 *   truth; per-app route lists never need to be duplicated here.
 * - A tiny local static server mimics Cloudflare's html_handling
 *   (auto-trailing-slash) closely enough for rendering.
 * - External (non-localhost) requests are blocked so prerender output is
 *   deterministic and never waits on third parties.
 * - Every rendered page must pass a content sanity check; an empty render
 *   fails the build rather than silently shipping an empty shell.
 * - React's createRoot() re-renders over the prerendered DOM on the client
 *   (one flash swap) — accepted tradeoff, see docs/specs/seo-aeo.md §Prerender.
 *
 * Usage:
 *   node scripts/prerender.mjs [--site-dir _site] [--only /pikgeon/] [--concurrency 4]
 */

import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { join, extname, resolve } from "node:path";
import process from "node:process";

// --- pure helpers (unit-tested in prerender.test.mjs) ---

/** Extract pathname routes ("/pikgeon/faq/") from sitemap XML. */
export function parseSitemapRoutes(xml) {
  const routes = [];
  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    const url = new URL(match[1]);
    routes.push(url.pathname);
  }
  return routes;
}

/** Map a route pathname to the index.html file that serves it. */
export function routeToFilePath(siteDir, route) {
  const clean = route.replace(/\/+$/, "");
  return join(siteDir, clean, "index.html");
}

/** True when rendered HTML passes the minimum-content bar. */
export function hasRenderedContent(html) {
  const headings = /<h[1-3][\s>]/i.test(html);
  // strip tags, collapse whitespace, measure visible-ish text in <body>
  const body = html.match(/<body[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? "";
  const text = body
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return headings && text.length > 40;
}

function hreflangSet(html) {
  return [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(
    ([, hreflang, href]) => ({ hreflang, path: new URL(href).pathname }),
  );
}

const setKey = (set) => set.map((a) => `${a.hreflang} ${a.path}`).sort().join("\n");

/**
 * hreflang rules Google enforces silently: each version lists itself, every
 * version it names lists the identical set back, and <html lang> matches the
 * hreflang pointing at the page itself.
 */
function auditAlternates(route, html, pages) {
  const set = hreflangSet(html);
  if (set.length === 0) return [];
  const errors = [];
  const self = set.find((a) => a.path === route && a.hreflang !== "x-default");
  if (!self) return [`${route}: hreflang set does not list the page itself`];
  const lang = html.match(/<html\b[^>]*\blang="([^"]*)"/)?.[1];
  if (lang !== self.hreflang) errors.push(`${route}: <html lang="${lang}"> but hreflang says ${self.hreflang}`);
  for (const { path } of set) {
    if (path === route) continue;
    const other = pages.get(path);
    if (!other) errors.push(`${route}: hreflang points at ${path}, which is not a rendered route`);
    else if (setKey(hreflangSet(other)) !== setKey(set)) {
      errors.push(`${route}: hreflang set is not reciprocated by ${path}`);
    }
  }
  return errors;
}

/**
 * Cross-route SEO invariants over the rendered pages (Map route → html).
 * Returns human-readable violations; empty means every route passed.
 */
export function auditRoutes(pages) {
  const errors = [];
  // DingPOS ships 60+ routes from one template; a missing per-route meta
  // silently falls back to the app root's, so duplicates are checked there.
  const uniqueWithin = { prefix: "/dingpos/", title: new Map(), description: new Map() };
  for (const [route, html] of pages) {
    const h1Count = html.match(/<h1[\s>]/gi)?.length ?? 0;
    if (h1Count !== 1) errors.push(`${route}: expected exactly one <h1>, found ${h1Count}`);

    for (const [, json] of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
      try {
        JSON.parse(json);
      } catch (err) {
        errors.push(`${route}: JSON-LD does not parse (${err.message})`);
      }
    }

    errors.push(...auditAlternates(route, html, pages));

    if (route.startsWith(uniqueWithin.prefix)) {
      const meta = {
        title: html.match(/<title>([\s\S]*?)<\/title>/)?.[1],
        description: html.match(/<meta name="description" content="([^"]*)"/)?.[1],
      };
      for (const field of ["title", "description"]) {
        const value = meta[field];
        if (!value) {
          errors.push(`${route}: missing ${field}`);
          continue;
        }
        const seen = uniqueWithin[field];
        if (seen.has(value)) errors.push(`${route}: ${field} duplicates ${seen.get(value)}`);
        else seen.set(value, route);
      }
    }
  }
  return errors;
}

// --- static server ---

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function startServer(siteDir) {
  const server = createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    let filePath = join(siteDir, decodeURIComponent(url.pathname));
    if (url.pathname.endsWith("/")) filePath = join(filePath, "index.html");
    else if (existsSync(filePath) && statSync(filePath).isDirectory())
      filePath = join(filePath, "index.html");

    if (!existsSync(filePath)) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("not found");
      return;
    }
    res.writeHead(200, {
      "content-type": MIME[extname(filePath)] ?? "application/octet-stream",
    });
    res.end(readFileSync(filePath));
  });
  return new Promise((resolveStart) => {
    server.listen(0, "127.0.0.1", () =>
      resolveStart({ server, port: server.address().port })
    );
  });
}

// --- prerender ---

async function renderRoute(page, origin, route) {
  await page.goto(`${origin}${route}`, { waitUntil: "load", timeout: 30_000 });
  // React mounted = #root has children. 15s is generous for a local bundle.
  await page.waitForFunction(
    () => document.querySelector("#root")?.children.length > 0,
    { timeout: 15_000 }
  );
  // settle: let i18n/microtask-batched renders flush
  await new Promise((r) => setTimeout(r, 150));
  const html = await page.evaluate(
    () => "<!doctype html>\n" + document.documentElement.outerHTML
  );
  return html;
}

async function main() {
  const args = process.argv.slice(2);
  const getArg = (name, fallback) => {
    const i = args.indexOf(name);
    return i === -1 ? fallback : args[i + 1];
  };
  const siteDir = resolve(getArg("--site-dir", "_site"));
  const only = getArg("--only", null);
  const concurrency = Number(getArg("--concurrency", "4"));
  if (!Number.isInteger(concurrency) || concurrency < 1) {
    console.error(`✗ --concurrency must be a positive integer, got: ${getArg("--concurrency", "4")}`);
    process.exit(1);
  }

  const sitemapPath = join(siteDir, "sitemap.xml");
  if (!existsSync(sitemapPath)) {
    console.error(`✗ sitemap not found: ${sitemapPath}`);
    process.exit(1);
  }
  let routes = parseSitemapRoutes(readFileSync(sitemapPath, "utf8"));
  if (only) routes = routes.filter((r) => r.startsWith(only));
  if (routes.length === 0) {
    console.error("✗ no routes to prerender");
    process.exit(1);
  }

  // Only prerender routes whose files exist (partial local builds w/ --only).
  const missing = routes.filter((r) => !existsSync(routeToFilePath(siteDir, r)));
  if (missing.length > 0) {
    console.error(`✗ ${missing.length} sitemap route(s) have no index.html:`);
    for (const r of missing) console.error(`  - ${r}`);
    process.exit(1);
  }

  const { default: puppeteer } = await import("puppeteer");
  const { server, port } = await startServer(siteDir);
  const origin = `http://127.0.0.1:${port}`;
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
  });

  const failures = [];
  const rendered = new Map();
  let done = 0;
  const queue = [...routes];

  async function worker() {
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    // Block anything that isn't served by our local origin.
    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (req.url().startsWith(origin)) req.continue();
      else req.abort();
    });
    for (;;) {
      const route = queue.shift();
      if (!route) break;
      try {
        const html = await renderRoute(page, origin, route);
        if (!hasRenderedContent(html)) {
          throw new Error("rendered HTML failed content sanity check");
        }
        writeFileSync(routeToFilePath(siteDir, route), html);
        rendered.set(route, html);
        done += 1;
        console.log(`  ✓ ${route}`);
      } catch (err) {
        failures.push({ route, message: err.message });
        console.error(`  ✗ ${route} — ${err.message}`);
      }
    }
    await page.close();
  }

  await Promise.all(
    Array.from({ length: Math.min(concurrency, routes.length) }, worker)
  );

  await browser.close();
  server.close();

  console.log(`\nprerendered ${done}/${routes.length} routes`);
  if (failures.length > 0) {
    console.error(`✗ ${failures.length} route(s) failed — failing the build`);
    process.exit(1);
  }
  // Belt-and-braces: nothing may exit 0 unless every route was written.
  if (done !== routes.length) {
    console.error(`✗ only ${done}/${routes.length} routes were rendered — failing the build`);
    process.exit(1);
  }
  const auditErrors = auditRoutes(rendered);
  if (auditErrors.length > 0) {
    console.error(`✗ route audit failed (${auditErrors.length}) — failing the build`);
    for (const e of auditErrors) console.error(`  - ${e}`);
    process.exit(1);
  }
  console.log("route audit passed");
}

// Run only when invoked directly (not when imported by tests).
if (process.argv[1] && resolve(process.argv[1]) === resolve(new URL(import.meta.url).pathname)) {
  main();
}
