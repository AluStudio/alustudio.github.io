/**
 * Prerender every sitemap route in _site/ to static HTML.
 *
 * Why this exists: all five sub-apps are client-side-rendered React SPAs, so the
 * HTML they ship has an empty <div id="root">. AI crawlers (GPTBot, ClaudeBot,
 * PerplexityBot, OAI-SearchBot, CCBot ...) fetch HTML but never execute
 * JavaScript, so they see a blank page. Bing's renderer is also limited. This
 * step boots a headless browser over the assembled site, lets each route render,
 * and writes the rendered DOM back into that route's index.html — so the initial
 * HTML response carries the real content for every crawler.
 *
 * Route source of truth is _site/sitemap.xml: if a URL is in the sitemap it must
 * exist on disk and must prerender, and nothing outside the sitemap is touched.
 *
 * Usage:
 *   node scripts/prerender.mjs            # prerender all sitemap routes
 *   node scripts/prerender.mjs --app pikgeon   # limit to one app (pilot / debug)
 *
 * Exits non-zero if any route fails a gate, so CI blocks on a bad snapshot.
 */

import { createServer } from "node:http";
import { readFile, writeFile, stat } from "node:fs/promises";
import { join, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";
import { APPS, SITE_ORIGIN } from "./site-config.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(repoRoot, "_site");

/** Minimum rendered text length (chars) for a route to count as non-empty. */
const MIN_TEXT_LENGTH = 200;

/**
 * Share of CJK characters expected in the rendered text, by script of the app's
 * canonical locale. A truthful `<html lang>` is not enough on its own: an app
 * whose client-side detector picks the wrong language will happily render
 * English under a zh-Hant attribute. Measured spread on this site is 0-0.8% for
 * Latin pages (a few CJK glyphs come from the language switcher labels) and
 * 68-75% for Chinese pages, so these bounds have a wide margin.
 */
const CJK_RATIO_BOUNDS = { cjk: { min: 0.3 }, latin: { max: 0.1 } };
const NAV_TIMEOUT_MS = 30_000;

/**
 * Canonical language tag -> what the browser should actually be told.
 * Chrome wants a real UI locale (`zh-TW`), while the app's i18n resolves that to
 * its own tag (`zh-Hant`); the assertion still compares against the canonical tag.
 */
const BROWSER_LOCALE = {
  en: { lang: "en-US", languages: ["en-US", "en"], accept: "en-US,en;q=0.9" },
  "zh-Hant": { lang: "zh-TW", languages: ["zh-TW", "zh"], accept: "zh-TW,zh;q=0.9" },
};

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".pdf": "application/pdf",
};

/** Resolve a URL pathname to a file inside _site/, mirroring Cloudflare's html_handling. */
async function resolveFile(pathname) {
  const clean = decodeURIComponent(pathname.split("?")[0].split("#")[0]);
  const candidates = clean.endsWith("/")
    ? [join(siteDir, clean, "index.html")]
    : [join(siteDir, clean), join(siteDir, `${clean}/index.html`)];

  for (const candidate of candidates) {
    if (!candidate.startsWith(siteDir)) continue; // path traversal guard
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      // try next candidate
    }
  }
  return null;
}

function startServer() {
  const server = createServer(async (req, res) => {
    const file = await resolveFile(new URL(req.url, "http://localhost").pathname);
    if (!file) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("Not found");
      return;
    }
    try {
      const body = await readFile(file);
      const type = MIME[extname(file)] ?? "application/octet-stream";
      // <video> issues Range requests; without 206 support Chrome aborts them
      // and the abort shows up as a spurious resource failure.
      const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range ?? "");
      if (range) {
        const start = range[1] ? Number(range[1]) : 0;
        const end = range[2] ? Number(range[2]) : body.length - 1;
        res.writeHead(206, {
          "content-type": type,
          "accept-ranges": "bytes",
          "content-range": `bytes ${start}-${end}/${body.length}`,
        });
        res.end(body.subarray(start, end + 1));
        return;
      }
      res.writeHead(200, { "content-type": type, "accept-ranges": "bytes" });
      res.end(body);
    } catch (err) {
      res.writeHead(500, { "content-type": "text/plain" });
      res.end(String(err));
    }
  });

  return new Promise((resolve) => {
    server.listen(0, "127.0.0.1", () => resolve({ server, port: server.address().port }));
  });
}

/** Read sitemap.xml and return route pathnames ("/pikgeon/privacy/") grouped by app. */
async function readSitemapRoutes() {
  const xml = await readFile(join(siteDir, "sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) throw new Error("No <loc> entries found in _site/sitemap.xml");

  const routes = [];
  for (const loc of locs) {
    if (!loc.startsWith(SITE_ORIGIN)) {
      throw new Error(`sitemap URL outside ${SITE_ORIGIN}: ${loc}`);
    }
    const pathname = new URL(loc).pathname;
    const appName = pathname.split("/").filter(Boolean)[0];
    const app = APPS.find((a) => a.name === appName);
    if (!app) throw new Error(`sitemap URL does not map to a known app: ${loc}`);
    routes.push({ url: loc, pathname, app });
  }
  return routes;
}

/** Render one route and write the snapshot back. Returns a result record. */
async function prerenderRoute(browser, port, route) {
  const { pathname, app } = route;
  const file = await resolveFile(pathname);
  if (!file) {
    return { pathname, ok: false, errors: [`no file on disk for sitemap route ${pathname}`] };
  }

  const page = await browser.newPage();
  const errors = [];
  const resourceErrors = [];

  page.on("pageerror", (err) => errors.push(`pageerror: ${err.message}`));
  page.on("console", (msg) => {
    // "Failed to load resource" carries no URL; the response listener below
    // reports the same failures with the URL and status, so skip the noise.
    if (msg.type() === "error" && !/Failed to load resource/.test(msg.text())) {
      resourceErrors.push(`console: ${msg.text()}`);
    }
  });
  page.on("response", (res) => {
    if (res.status() >= 400) resourceErrors.push(`HTTP ${res.status()} ${res.url()}`);
  });
  page.on("requestfailed", (req) => {
    // Chrome routinely aborts media range requests once it has enough metadata;
    // that says nothing about whether the HTML rendered correctly.
    const benignMediaAbort =
      req.failure()?.errorText === "net::ERR_ABORTED" &&
      /\.(mp4|webm|mov|m4v)(\?|$)/i.test(req.url());
    if (!benignMediaAbort) {
      resourceErrors.push(`requestfailed: ${req.url()} (${req.failure()?.errorText})`);
    }
  });

  try {
    const browserLocale = BROWSER_LOCALE[app.locale];
    await page.setExtraHTTPHeaders({ "Accept-Language": browserLocale.accept });
    // Chrome's --lang flag does not reliably change navigator.language in headless
    // mode, and Accept-Language only affects HTTP requests. Client-side language
    // detectors read navigator, so without this override an app can quietly
    // render a different language than the one this route is indexed in.
    await page.evaluateOnNewDocument(
      (lang, languages) => {
        Object.defineProperty(navigator, "language", { get: () => lang });
        Object.defineProperty(navigator, "languages", { get: () => languages });
      },
      browserLocale.lang,
      browserLocale.languages
    );
    const response = await page.goto(`http://127.0.0.1:${port}${pathname}`, {
      waitUntil: "networkidle0",
      timeout: NAV_TIMEOUT_MS,
    });
    if (!response || !response.ok()) {
      errors.push(`HTTP ${response?.status()} from local server`);
    }

    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return root && root.children.length > 0;
      },
      { timeout: NAV_TIMEOUT_MS }
    );

    const metrics = await page.evaluate(() => {
      const root = document.getElementById("root");
      const compact = (root ? root.textContent : "").replace(/\s/g, "");
      const cjkCount = (compact.match(/[\u4e00-\u9fff]/g) || []).length;
      return {
        lang: document.documentElement.lang,
        cjkRatio: compact.length > 0 ? cjkCount / compact.length : 0,
        // textContent (not innerText) on purpose: it includes text that is
        // collapsed by CSS, which is exactly what a crawler reads.
        textLength: root ? root.textContent.trim().length : 0,
        headings: document.querySelectorAll("h1, h2, h3").length,
        faqTitles: document.querySelectorAll(".faq-card__title").length,
        faqAnswers: document.querySelectorAll(".faq-card__answer").length,
        title: document.title,
      };
    });

    if (metrics.lang !== app.locale) {
      errors.push(`<html lang> is "${metrics.lang}", expected "${app.locale}"`);
    }

    const expectsCjk = app.locale.startsWith("zh") || app.locale.startsWith("ja");
    const percent = (metrics.cjkRatio * 100).toFixed(1);
    if (expectsCjk && metrics.cjkRatio < CJK_RATIO_BOUNDS.cjk.min) {
      errors.push(
        `rendered text is only ${percent}% CJK but the canonical locale is "${app.locale}" — the app resolved a different language`
      );
    }
    if (!expectsCjk && metrics.cjkRatio > CJK_RATIO_BOUNDS.latin.max) {
      errors.push(
        `rendered text is ${percent}% CJK but the canonical locale is "${app.locale}" — the app resolved a different language`
      );
    }
    if (metrics.textLength < MIN_TEXT_LENGTH) {
      errors.push(`rendered text too short (${metrics.textLength} < ${MIN_TEXT_LENGTH})`);
    }
    if (metrics.headings === 0) {
      errors.push("no headings in rendered DOM");
    }
    if (metrics.faqAnswers !== metrics.faqTitles) {
      errors.push(
        `FAQ answers not all in DOM (${metrics.faqAnswers} answers vs ${metrics.faqTitles} questions)`
      );
    }
    if (resourceErrors.length > 0) {
      errors.push(...new Set(resourceErrors));
    }

    if (errors.length === 0) {
      const html = await page.evaluate(
        () => `<!doctype html>\n${document.documentElement.outerHTML}\n`
      );
      await writeFile(file, html, "utf8");
    }

    return { pathname, ok: errors.length === 0, errors, metrics };
  } catch (err) {
    errors.push(String(err.message ?? err));
    return { pathname, ok: false, errors };
  } finally {
    await page.close();
  }
}

async function main() {
  const appFilter = process.argv.includes("--app")
    ? process.argv[process.argv.indexOf("--app") + 1]
    : null;

  const allRoutes = await readSitemapRoutes();
  const routes = appFilter ? allRoutes.filter((r) => r.app.name === appFilter) : allRoutes;
  if (routes.length === 0) {
    console.error(appFilter ? `No sitemap routes for app "${appFilter}"` : "No routes to render");
    process.exit(1);
  }

  const { server, port } = await startServer();
  console.log(`serving _site/ on http://127.0.0.1:${port}`);

  const results = [];
  const locales = [...new Set(routes.map((r) => r.app.locale))];

  try {
    for (const locale of locales) {
      const browser = await puppeteer.launch({
        headless: true,
        args: [
          `--lang=${BROWSER_LOCALE[locale].lang}`,
          "--no-sandbox",
          "--disable-dev-shm-usage",
        ],
      });
      try {
        for (const route of routes.filter((r) => r.app.locale === locale)) {
          const result = await prerenderRoute(browser, port, route);
          results.push(result);
          const mark = result.ok ? "ok  " : "FAIL";
          const detail = result.metrics
            ? `${result.metrics.textLength} chars, ${result.metrics.headings} headings, ` +
              `lang=${result.metrics.lang}, cjk=${(result.metrics.cjkRatio * 100).toFixed(0)}%`
            : "";
          console.log(`  ${mark} ${result.pathname} ${detail}`);
          for (const err of result.errors ?? []) console.log(`       - ${err}`);
        }
      } finally {
        await browser.close();
      }
    }
  } finally {
    server.close();
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\nprerendered ${results.length - failed.length}/${results.length} routes`);
  if (failed.length > 0) {
    console.error(`FAILED: ${failed.map((r) => r.pathname).join(", ")}`);
    process.exit(1);
  }
}

await main();
