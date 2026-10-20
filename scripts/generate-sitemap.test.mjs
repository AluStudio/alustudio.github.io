import { test } from "node:test";
import assert from "node:assert/strict";
import {
  sourcesForRoute,
  injectLastmod,
  LASTMOD_SOURCES,
  dingposRules,
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

test("sourcesForRoute: every dingpos support article maps to its language's faq pack", () => {
  assert.deepEqual(sourcesForRoute("/dingpos/support/tax-calculation/"), [
    "dingpos/src/data/faq/articles.en.js",
    "dingpos/src/data/faq/index.js",
    "dingpos/src/data/faq/version.js",
    "dingpos/index.html",
    "dingpos/scripts/copy-spa-pages.js",
  ]);
});

test("sourcesForRoute: dingpos pricing tracks the plan data, not just the page", () => {
  assert.deepEqual(sourcesForRoute("/dingpos/pricing/"), [
    "dingpos/src/pages/PricingPage.jsx",
    "dingpos/src/locales/en",
    "dingpos/index.html",
    "dingpos/scripts/copy-spa-pages.js",
    "dingpos/src/pages/pricing.scss",
    "dingpos/src/data/plans.js",
    "dingpos/src/components/Price.jsx",
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
    // Excluded paths are checked too: a typo there would silently exclude nothing.
    for (const p of paths.map((path) => path.replace(/^:\(exclude\)/, ""))) {
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

test("sourcesForRoute: each dingpos language's pages track its own strings and pack, not another language's", () => {
  const swapLanguage = (paths, from, to) =>
    paths.map((p) => p.replace(`locales/${from}`, `locales/${to}`).replace(`articles.${from}.js`, `articles.${to}.js`));
  for (const [root, code] of [["zh-hant", "zh-Hant"], ["zh-hans", "zh-Hans"]]) {
    for (const sub of ["support/tax-calculation/", "pricing/", "privacy/", "terms/"]) {
      assert.deepEqual(
        sourcesForRoute(`/dingpos/${root}/${sub}`),
        swapLanguage(sourcesForRoute(`/dingpos/${sub}`), "en", code),
        `/dingpos/${root}/${sub}`,
      );
    }
  }
  assert.deepEqual(sourcesForRoute("/dingpos/zh-hant/support/free-trial/"), [
    "dingpos/src/data/faq/articles.zh-Hant.js",
    "dingpos/src/data/faq/index.js",
    "dingpos/src/data/faq/version.js",
    "dingpos/index.html",
    "dingpos/scripts/copy-spa-pages.js",
  ]);
});

test("dingposRules: a translated language gets its own prefix, strings and pack", () => {
  // es-419's URL prefix is its hreflang ("es"); its files keep the app's code.
  const rules = dingposRules({ code: "es-419", pathPrefix: "es" });
  assert.deepEqual(sourcesForRoute("/dingpos/es/support/free-trial/", rules), [
    "dingpos/src/data/faq/articles.es-419.js",
    "dingpos/src/data/faq/index.js",
    "dingpos/src/data/faq/version.js",
    "dingpos/index.html",
    "dingpos/scripts/copy-spa-pages.js",
  ]);
  assert.ok(sourcesForRoute("/dingpos/es/terms/", rules).includes("dingpos/src/locales/es-419"));
  const root = sourcesForRoute("/dingpos/es/", rules);
  assert.deepEqual(root.slice(0, 1), ["dingpos/src"]);
  assert.ok(root.includes(":(exclude)dingpos/src/locales/en"));
  assert.ok(!root.includes(":(exclude)dingpos/src/locales/es-419"));
  assert.equal(sourcesForRoute("/dingpos/pricing/", rules), null);
});

test("sourcesForRoute: every sotto language mirrors its English page, guides map to the packs", () => {
  for (const root of ["zh-hant", "zh-hans", "ja", "ko", "de", "es", "fr", "it", "pt-br", "ru", "ar"]) {
    for (const sub of ["guides/gift-log/", "guides/", "faq/", "privacy/", "terms/", ""]) {
      assert.deepEqual(sourcesForRoute(`/sotto/${root}/${sub}`), sourcesForRoute(`/sotto/${sub}`), `/sotto/${root}/${sub}`);
    }
  }
  assert.ok(sourcesForRoute("/sotto/ar/guides/find-ring-size-secretly/").includes("sotto/src/data/guides"));
});

test("sourcesForRoute: a dingpos language root tracks the shared app, not another language's strings or pack", async () => {
  // Shipping bn once re-dated every language's root, because the root rule was the whole src tree.
  const { readFileSync } = await import("node:fs");
  const registry = JSON.parse(readFileSync(new URL("../dingpos/l10n/languages.json", import.meta.url), "utf8"));
  for (const { code, pathPrefix, shipped } of registry.languages) {
    if (!shipped) continue;
    const sources = sourcesForRoute(`/dingpos/${pathPrefix ? `${pathPrefix}/` : ""}`);
    assert.ok(sources.includes("dingpos/src"), code);
    assert.ok(sources.includes("dingpos/index.html"), code);
    for (const other of registry.languages) {
      const excluded = [`:(exclude)dingpos/src/locales/${other.code}`, `:(exclude)dingpos/src/data/faq/articles.${other.code}.js`];
      for (const path of excluded) {
        assert.equal(sources.includes(path), other.code !== code, `${code} root, ${path}`);
      }
    }
  }
});
