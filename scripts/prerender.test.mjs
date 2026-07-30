import { test } from "node:test";
import assert from "node:assert/strict";
import { join } from "node:path";
import {
  parseSitemapRoutes,
  routeToFilePath,
  hasRenderedContent,
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
