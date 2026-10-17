import { test } from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import {
  parseSitemapRoutes,
  routeToFilePath,
  hasRenderedContent,
  auditRoutes,
  hydratedRoutes,
  isPageError,
} from "./prerender.mjs";

test("parseSitemapRoutes extracts pathnames from <loc> entries", () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://alu-studio.com/home/</loc></url>
  <url><loc> https://alu-studio.com/pikgeon/faq/ </loc></url>
</urlset>`;
  assert.deepEqual(parseSitemapRoutes(xml), ["/home/", "/pikgeon/faq/"]);
});

test("parseSitemapRoutes returns empty list for empty sitemap", () => {
  assert.deepEqual(parseSitemapRoutes("<urlset></urlset>"), []);
});

test("parseSitemapRoutes keeps lastmod-bearing entries intact", () => {
  const xml = `<url><loc>https://alu-studio.com/sotto/</loc><lastmod>2026-01-01</lastmod></url>`;
  assert.deepEqual(parseSitemapRoutes(xml), ["/sotto/"]);
});

test("routeToFilePath maps trailing-slash route to its index.html", () => {
  assert.equal(
    routeToFilePath("_site", "/pikgeon/faq/"),
    join("_site", "pikgeon", "faq", "index.html")
  );
});

test("routeToFilePath handles route without trailing slash", () => {
  assert.equal(
    routeToFilePath("_site", "/home"),
    join("_site", "home", "index.html")
  );
});

test("hasRenderedContent rejects an empty CSR shell", () => {
  const shell = `<!doctype html><html><head><title>x</title></head>
<body><div id="root"></div><script src="/a.js"></script></body></html>`;
  assert.equal(hasRenderedContent(shell), false);
});

test("hasRenderedContent accepts a rendered page", () => {
  const rendered = `<!doctype html><html><head><title>x</title></head>
<body><div id="root"><h1>Pikgeon</h1><p>${"Track postcards with on-device OCR. ".repeat(3)}</p></div></body></html>`;
  assert.equal(hasRenderedContent(rendered), true);
});

test("hasRenderedContent rejects text without headings", () => {
  const noHeadings = `<body><div id="root"><p>${"text ".repeat(30)}</p></div></body>`;
  assert.equal(hasRenderedContent(noHeadings), false);
});

test("hasRenderedContent ignores script/style text", () => {
  const scriptOnly = `<body><div id="root"><h1>t</h1></div><script>${"var x = 1;".repeat(20)}</script></body>`;
  assert.equal(hasRenderedContent(scriptOnly), false);
});

test("auditRoutes passes a route with exactly one h1", () => {
  const pages = new Map([["/pikgeon/", `<body><h1 class="hero">Pikgeon</h1><p class="h1">Pikgeon</p></body>`]]);
  assert.deepEqual(auditRoutes(pages), []);
});

test("auditRoutes flags a route with two h1s or none", () => {
  const pages = new Map([
    ["/pikgeon/", `<body><h1>Hero</h1><footer><h1>Pikgeon</h1></footer></body>`],
    ["/babbby/", `<body><h2>Only h2</h2><header>x</header></body>`],
  ]);
  assert.deepEqual(auditRoutes(pages), [
    "/pikgeon/: expected exactly one <h1>, found 2",
    "/babbby/: expected exactly one <h1>, found 0",
  ]);
});

const dingposPage = (title, description, extraHead = "") =>
  `<html><head><title>${title}</title><meta name="description" content="${description}" />${extraHead}</head><body><h1>t</h1></body></html>`;

test("auditRoutes flags duplicate dingpos titles and descriptions", () => {
  const pages = new Map([
    ["/dingpos/", dingposPage("DingPOS", "Root copy")],
    ["/dingpos/privacy/", dingposPage("Privacy — DingPOS", "Root copy")],
    ["/dingpos/terms/", dingposPage("DingPOS", "Terms copy")],
  ]);
  assert.deepEqual(auditRoutes(pages), [
    "/dingpos/privacy/: description duplicates /dingpos/",
    "/dingpos/terms/: title duplicates /dingpos/",
  ]);
});

test("auditRoutes flags duplicate sotto meta, checked apart from dingpos", () => {
  const pages = new Map([
    ["/dingpos/", dingposPage("Same", "Same")],
    ["/sotto/", dingposPage("Same", "Same")],
    ["/sotto/ja/", dingposPage("Same", "Other")],
  ]);
  assert.deepEqual(auditRoutes(pages), ["/sotto/ja/: title duplicates /sotto/"]);
});

test("auditRoutes does not require unique meta outside the multi-page apps", () => {
  const pages = new Map([
    ["/pikgeon/", dingposPage("Pikgeon", "Same")],
    ["/pikgeon/faq/", dingposPage("Pikgeon", "Same")],
  ]);
  assert.deepEqual(auditRoutes(pages), []);
});

test("auditRoutes flags JSON-LD that does not parse", () => {
  const broken = `<script type="application/ld+json">{"@type": </script>`;
  const pages = new Map([["/sotto/", dingposPage("Sotto", "x", broken)]]);
  const errors = auditRoutes(pages);
  assert.equal(errors.length, 1);
  assert.match(errors[0], /^\/sotto\/: JSON-LD does not parse/);
});

const localePage = (lang, title, links) =>
  `<html lang="${lang}"><head><title>${title}</title><meta name="description" content="${title}" />${links
    .map(([h, p]) => `<link rel="alternate" hreflang="${h}" href="https://alu-studio.com${p}">`)
    .join("")}</head><body><h1>t</h1></body></html>`;

const TRIO = [
  ["en", "/dingpos/pricing/"],
  ["zh-Hant", "/dingpos/zh-hant/pricing/"],
  ["x-default", "/dingpos/pricing/"],
];

test("auditRoutes accepts a reciprocal hreflang pair with matching html lang", () => {
  const pages = new Map([
    ["/dingpos/pricing/", localePage("en", "Pricing", TRIO)],
    ["/dingpos/zh-hant/pricing/", localePage("zh-Hant", "價格", TRIO)],
  ]);
  assert.deepEqual(auditRoutes(pages), []);
});

test("auditRoutes flags wrong html lang, missing self and non-reciprocal sets", () => {
  const pages = new Map([
    ["/dingpos/pricing/", localePage("en", "Pricing", TRIO)],
    ["/dingpos/zh-hant/pricing/", localePage("en", "價格", TRIO.slice(1))],
    ["/dingpos/terms/", localePage("en", "Terms", [["zh-Hant", "/dingpos/zh-hant/terms/"]])],
  ]);
  assert.deepEqual(auditRoutes(pages), [
    "/dingpos/pricing/: hreflang set is not reciprocated by /dingpos/zh-hant/pricing/",
    '/dingpos/zh-hant/pricing/: <html lang="en"> but hreflang says zh-Hant',
    "/dingpos/zh-hant/pricing/: hreflang set is not reciprocated by /dingpos/pricing/",
    "/dingpos/terms/: hreflang set does not list the page itself",
  ]);
});

test("auditRoutes skips reciprocity for sitemap alternates left out of a partial render", () => {
  const pages = new Map([["/dingpos/pricing/", localePage("en", "Pricing", TRIO)]]);
  const sitemap = new Set(["/dingpos/pricing/", "/dingpos/zh-hant/pricing/"]);
  assert.deepEqual(auditRoutes(pages, sitemap), []);
  assert.deepEqual(auditRoutes(pages, new Set(["/dingpos/pricing/"])), [
    "/dingpos/pricing/: hreflang points at /dingpos/zh-hant/pricing/, which is not a sitemap route",
  ]);
});

test("hydratedRoutes keeps only the apps that hydrate, in every language", () => {
  assert.deepEqual(
    hydratedRoutes(["/home/", "/dingpos/", "/dingpos/zh-hant/pricing/", "/pikgeon/faq/", "/dingposx/", "/sotto/ar/guides/"]),
    ["/dingpos/", "/dingpos/zh-hant/pricing/", "/sotto/ar/guides/"]
  );
});

test("isPageError ignores requests aborted outside the local origin", () => {
  assert.equal(isPageError("Failed to load resource: net::ERR_FAILED"), false);
  assert.equal(isPageError("Minified React error #418; visit https://react.dev/errors/418"), true);
});
