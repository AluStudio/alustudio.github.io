import { test } from "node:test";
import assert from "node:assert/strict";
import {
  sourcesForRoute,
  injectLastmod,
  LASTMOD_SOURCES,
} from "./generate-sitemap.mjs";

test("sourcesForRoute: longest prefix wins (faq page over app root)", () => {
  assert.deepEqual(sourcesForRoute("/pikgeon/faq/"), [
    "pikgeon/src/pages/FaqPage.jsx",
    "pikgeon/src/locales",
    "pikgeon/index.html",
    "pikgeon/scripts/copy-spa-pages.js",
  ]);
});

test("sourcesForRoute: app root falls back to whole src tree", () => {
  assert.deepEqual(sourcesForRoute("/pikgeon/"), [
    "pikgeon/src",
    "pikgeon/index.html",
  ]);
});

test("sourcesForRoute: every dingpos support article maps to the faq packs", () => {
  assert.deepEqual(sourcesForRoute("/dingpos/support/tax-calculation/"), [
    "dingpos/src/data/faq",
    "dingpos/index.html",
    "dingpos/scripts/copy-spa-pages.js",
  ]);
});

test("sourcesForRoute: unknown route returns null", () => {
  assert.equal(sourcesForRoute("/unknown/"), null);
});

test("current sitemap.xml routes all have a lastmod rule", async () => {
  const { readFileSync } = await import("node:fs");
  const xml = readFileSync(new URL("../sitemap.xml", import.meta.url), "utf8");
  for (const m of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    const route = new URL(m[1]).pathname;
    assert.notEqual(
      sourcesForRoute(route),
      null,
      `route ${route} has no LASTMOD_SOURCES rule`
    );
  }
});

test("injectLastmod adds lastmod after each loc", () => {
  const xml = `<urlset>
  <url><loc>https://alu-studio.com/home/</loc></url>
</urlset>`;
  const out = injectLastmod(xml, () => "2026-07-01");
  assert.match(
    out,
    /<url><loc>https:\/\/alu-studio\.com\/home\/<\/loc><lastmod>2026-07-01<\/lastmod><\/url>/
  );
});

test("injectLastmod leaves URL untouched when no date is available", () => {
  const xml = `<url><loc>https://alu-studio.com/home/</loc></url>`;
  assert.equal(injectLastmod(xml, () => null), xml);
});

test("injectLastmod replaces a stale lastmod instead of duplicating", () => {
  const xml = `<url><loc>https://alu-studio.com/home/</loc><lastmod>2020-01-01</lastmod></url>`;
  const out = injectLastmod(xml, () => "2026-07-01");
  assert.equal((out.match(/<lastmod>/g) ?? []).length, 1);
  assert.match(out, /2026-07-01/);
});

test("LASTMOD_SOURCES rules are prefix-sorted sanely (no dead rules)", () => {
  for (const [prefix] of LASTMOD_SOURCES) {
    assert.ok(prefix.startsWith("/") && prefix.endsWith("/"), prefix);
  }
});

test("every LASTMOD_SOURCES path exists on disk (rename/typo guard)", async () => {
  const { existsSync } = await import("node:fs");
  for (const [prefix, paths] of LASTMOD_SOURCES) {
    for (const p of paths) {
      assert.ok(
        existsSync(new URL(`../${p}`, import.meta.url)),
        `rule ${prefix} references missing path: ${p}`
      );
    }
  }
});

test("sub-route rules include the app shell sources that shape final HTML", () => {
  for (const [prefix, paths] of LASTMOD_SOURCES) {
    const segs = prefix.split("/").filter(Boolean);
    if (segs.length < 2 || segs[0] === "home") continue; // app roots and home
    const app = segs[0];
    assert.ok(
      paths.includes(`${app}/index.html`),
      `${prefix} must track ${app}/index.html (JSON-LD / meta live there)`
    );
    assert.ok(
      paths.includes(`${app}/scripts/copy-spa-pages.js`),
      `${prefix} must track ${app}/scripts/copy-spa-pages.js (route meta rewrites)`
    );
  }
});
