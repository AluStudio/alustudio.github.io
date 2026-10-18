/**
 * Post-build: copy index.html into sub-route directories so the site
 * serves HTTP 200 (not 404) for SPA routes like /dingpos/privacy, and
 * rewrite each copy's canonical/og:url to its own route URL (not the
 * app root) so search engines don't see duplicate-content canonicals.
 *
 * Each copy also gets its own <title>/description: a self-canonical route
 * that still carries the app root's title and snippet is only half-fixed —
 * 40+ sitemap URLs introducing themselves identically is the same
 * duplicate-content signal in a different field. Support articles also get a
 * BreadcrumbList (DingPOS → Support → article) written into the static head.
 *
 * Every page exists once per shipped language of l10n/languages.json —
 * English unprefixed, every other language under /dingpos/<pathPrefix>/ —
 * with its own <html lang>, og:locale and the full hreflang set, so each
 * language is separately indexable (docs/specs/seo-aeo.md §多語系 URL).
 *
 * FAQ article routes are derived from the FAQ data modules, so adding
 * an article automatically ships its static route. Every language must have
 * exactly en's UI keys (there is no fallback language), every pack must agree
 * with en on slugs and `since`, related links must resolve, no two pages
 * may share a title or description, and sitemap.xml must list exactly the
 * pages built here, in every language — validated here so a drift fails the
 * build instead of 404ing (or going unindexed) in production.
 *
 * `--write-sitemap` rewrites the DingPOS block of sitemap.xml from the page
 * list instead of checking it, then exits without writing pages.
 */

import process from "node:process";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  setSelfCanonical,
  setPageMeta,
  addJsonLd,
  breadcrumbList,
  setHtmlLang,
  setLanguageAlternates,
} from "../../scripts/rewrite-seo-tags.mjs";
import { VERIFIED_APP_VERSION } from "../src/data/faq/version.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");
const sitemapPath = join(__dirname, "..", "..", "sitemap.xml");
const registryPath = join(__dirname, "..", "l10n", "languages.json");
const writeSitemap = process.argv.includes("--write-sitemap");

const BASE_URL = "https://alu-studio.com/dingpos";
const SITE_NAME = "DingPOS";
const DESCRIPTION_MAX = 155;

const readLocale = (code) =>
  JSON.parse(readFileSync(join(__dirname, "..", "src", "locales", code, "translation.json"), "utf8"));

const readFaq = (code) => import(pathToFileURL(join(__dirname, "..", "src", "data", "faq", `articles.${code}.js`)).href);

// Every shipped language gets its own URL tree; en, the registry's first
// entry, is the unprefixed x-default. src/i18n.js reads the same registry.
const LOCALES = await Promise.all(
  JSON.parse(readFileSync(registryPath, "utf8"))
    .languages.filter((l) => l.shipped)
    .map(async ({ code, hreflang, pathPrefix, ogLocale }) => ({
      code,
      hreflang,
      pathPrefix: pathPrefix ? `${pathPrefix}/` : "",
      ogLocale,
      faq: await readFaq(code),
      ui: readLocale(code),
    })),
);
const DEFAULT_LOCALE = LOCALES[0];
const en = DEFAULT_LOCALE.faq;

const STATIC_ROUTES = [
  { path: "pricing", meta: (ui) => [ui.pricing.doc_title, ui.pricing.meta_description] },
  { path: "privacy", meta: (ui) => [ui.nav.privacy, ui.privacy.meta_description] },
  { path: "terms", meta: (ui) => [ui.nav.terms, ui.terms.meta_description] },
  { path: "support", meta: (ui) => [ui.support.doc_title, ui.support.meta_description] },
];

/** Absolute URL of `path` ("" = app root) in `locale`, trailing slash included. */
function routeUrl(locale, path) {
  return `${BASE_URL}/${locale.pathPrefix}${path ? `${path}/` : ""}`;
}

function fail(heading, errors) {
  if (!errors.length) return;
  console.error(`${heading}:`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}

// ── Locale completeness ─────────────────────────────────────
// A missing key renders the raw key (there is no fallback language), and an
// extra key is usually a typo of a real one.

/** Dotted path → value for every leaf; the generator's "//" note is not copy. */
function leaves(value, path = [], out = new Map()) {
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      if (key !== "//") leaves(child, [...path, key], out);
    }
  } else {
    out.set(path.join("."), value);
  }
  return out;
}

// `_before` / `_after` keys are the text on either side of an inline element
// (a <Price>); a language's word order can leave one side empty.
const mayBeEmpty = (key) => /_(before|after)$/.test(key);

function validateLocales() {
  const enKeys = leaves(DEFAULT_LOCALE.ui);
  const errors = [];
  for (const { code, ui } of LOCALES) {
    const keys = leaves(ui);
    for (const key of enKeys.keys()) if (!keys.has(key)) errors.push(`${code} is missing "${key}"`);
    for (const [key, value] of keys) {
      if (!enKeys.has(key)) errors.push(`${code} has "${key}", which en does not`);
      else if (typeof value !== "string") errors.push(`${code} "${key}" is not a string`);
      else if (!value.trim() && !mayBeEmpty(key)) errors.push(`${code} "${key}" is empty`);
    }
  }
  fail("Locale validation failed", errors);
}

validateLocales();

// ── FAQ data consistency guard ──────────────────────────────
const VERSION_PATTERN = /^\d+\.\d+(\.\d+)?$/;

/** Numeric comparison of App Store marketing versions ("2.10" > "2.9"). */
function compareVersions(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < Math.max(pa.length, pb.length); i++) {
    const diff = (pa[i] ?? 0) - (pb[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
}

/** Rules in src/data/faq/version.js; this checks the mechanical half. */
function validateFaqVersions(errors) {
  if (!VERSION_PATTERN.test(VERIFIED_APP_VERSION)) {
    errors.push(`VERIFIED_APP_VERSION "${VERIFIED_APP_VERSION}" is not a marketing version`);
    return;
  }
  const enSince = new Map(en.articles.map((a) => [a.slug, a.since]));
  for (const locale of LOCALES.filter((l) => l !== DEFAULT_LOCALE)) {
    for (const { slug, since } of locale.faq.articles) {
      if (enSince.has(slug) && enSince.get(slug) !== since) {
        errors.push(`article "${slug}" has since "${since}" in ${locale.code} but "${enSince.get(slug)}" in en`);
      }
    }
  }
  for (const { slug, since } of en.articles) {
    if (since === undefined) continue;
    if (!VERSION_PATTERN.test(since)) {
      errors.push(`article "${slug}" has since "${since}", not a marketing version`);
    } else if (compareVersions(since, VERIFIED_APP_VERSION) > 0) {
      errors.push(
        `article "${slug}" is since ${since}, newer than VERIFIED_APP_VERSION ${VERIFIED_APP_VERSION} — unreleased features stay off main`,
      );
    }
  }
}

function validateFaqPacks() {
  const enSet = new Set(en.articles.map((a) => a.slug));
  const errors = [];

  for (const { code, faq: pack } of LOCALES) {
    const slugs = pack.articles.map((a) => a.slug);
    const slugSet = new Set(slugs);
    if (slugs.length !== slugSet.size) errors.push(`duplicate slugs in ${code} pack`);
    if (pack !== en) {
      for (const slug of slugSet) if (!enSet.has(slug)) errors.push(`slug "${slug}" missing from en pack`);
      for (const slug of enSet) if (!slugSet.has(slug)) errors.push(`slug "${slug}" missing from ${code} pack`);
    }

    const catKeys = new Set(pack.categories.map((c) => c.key));
    for (const article of pack.articles) {
      if (!catKeys.has(article.category)) {
        errors.push(`[${code}] article "${article.slug}" references unknown category "${article.category}"`);
      }
      for (const related of article.related) {
        if (!slugSet.has(related)) {
          errors.push(`[${code}] article "${article.slug}" has dangling related link "${related}"`);
        }
      }
    }
  }

  validateFaqVersions(errors);

  fail("FAQ data validation failed", errors);
}

validateFaqPacks();

/** First paragraph of an article, trimmed to a snippet-sized description. */
function articleDescription(article) {
  const firstParagraph = article.content.find((b) => b.type === "p");
  const text = (firstParagraph?.text || article.question).trim();
  if (text.length <= DESCRIPTION_MAX) return text;
  return `${text.slice(0, DESCRIPTION_MAX - 1).trimEnd()}…`;
}

/** Every page of one locale, with its final title and description. */
function localeRoutes(locale) {
  const { ui, faq } = locale;
  return [
    { path: "", title: ui.hero.meta_title, description: ui.hero.meta_description },
    ...STATIC_ROUTES.map(({ path, meta }) => {
      const [title, description] = meta(ui);
      return { path, title: `${title} — ${SITE_NAME}`, description };
    }),
    ...faq.articles.map((article) => ({
      path: `support/${article.slug}`,
      title: `${article.question} — ${SITE_NAME}`,
      description: articleDescription(article),
      jsonLd: breadcrumbList([
        { name: SITE_NAME, url: routeUrl(locale, "") },
        { name: ui.support.doc_title, url: routeUrl(locale, "support") },
        { name: article.question, url: routeUrl(locale, `support/${article.slug}`) },
      ]),
    })),
  ];
}

const pages = LOCALES.flatMap((locale) =>
  localeRoutes(locale).map((route) => ({ ...route, locale, url: routeUrl(locale, route.path) })),
);

// Two pages introducing themselves identically are a duplicate-content signal,
// even across languages. zh-Hans is generated from zh-Hant, so a zh-Hant title
// with no character that converts comes out identical — give that entry a
// mainland wording in OVERRIDES (scripts/gen-zh-hans.mjs).
function validateUniqueMeta() {
  const errors = [];
  for (const field of ["title", "description"]) {
    const firstUrl = new Map();
    for (const page of pages) {
      const value = page[field];
      if (firstUrl.has(value)) errors.push(`${page.url} has the same ${field} as ${firstUrl.get(value)}: "${value}"`);
      else firstUrl.set(value, page.url);
    }
  }
  fail("Page meta validation failed", errors);
}

validateUniqueMeta();

// sitemap.xml is the URL membership list for prerender and lastmod; without
// this check a new article (or locale) ships live pages that are never
// submitted for indexing, and nothing fails. `--write-sitemap` regenerates
// the DingPOS block from `pages` instead.
const DINGPOS_LOC = /<loc>\s*(https:\/\/alu-studio\.com\/dingpos\/[^<\s]*)\s*<\/loc>/;

function validateSitemap() {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const listed = new Set(
    [...sitemap.matchAll(new RegExp(DINGPOS_LOC, "g"))].map((m) => m[1]),
  );
  const expected = new Set(pages.map((p) => p.url));
  fail("Sitemap validation failed", [
    ...[...expected].filter((u) => !listed.has(u)).map((u) => `sitemap.xml is missing ${u}`),
    ...[...listed].filter((u) => !expected.has(u)).map((u) => `sitemap.xml lists ${u} with no page (run with --write-sitemap)`),
  ]);
}

/** Replace the contiguous DingPOS <url> lines of sitemap.xml with one line per page. */
function rewriteSitemap() {
  const lines = readFileSync(sitemapPath, "utf8").split("\n");
  const at = lines.flatMap((line, i) => (DINGPOS_LOC.test(line) ? [i] : []));
  if (at.length && at[at.length - 1] - at[0] + 1 !== at.length) {
    fail("Sitemap rewrite failed", ["the DingPOS <url> lines of sitemap.xml are not contiguous"]);
  }
  const start = at.length ? at[0] : lines.findIndex((line) => line.trim() === "</urlset>");
  const block = pages.map((p) => `  <url><loc>${p.url}</loc></url>`);
  lines.splice(start, at.length, ...block);
  writeFileSync(sitemapPath, lines.join("\n"));
  console.log(`  ✓ sitemap.xml: ${block.length} DingPOS URLs in ${LOCALES.length} languages`);
}

if (writeSitemap) {
  rewriteSitemap();
  process.exit(0);
}

validateSitemap();

// Read once: dist/index.html is both the template and the en root's output.
const template = readFileSync(src, "utf8");

for (const { path, title, description, jsonLd, locale, url } of pages) {
  const versions = [
    ...LOCALES.map((l) => ({ hreflang: l.hreflang, href: routeUrl(l, path) })),
    { hreflang: "x-default", href: routeUrl(DEFAULT_LOCALE, path) },
  ];
  let html = setSelfCanonical(template, url);
  html = setHtmlLang(html, locale.hreflang);
  html = setPageMeta(html, { title, description });
  html = setLanguageAlternates(html, {
    ogLocale: locale.ogLocale,
    ogLocaleAlternates: LOCALES.filter((l) => l !== locale).map((l) => l.ogLocale),
    versions,
  });
  if (jsonLd) html = addJsonLd(html, jsonLd);

  const dest = join(dist, locale.pathPrefix, path, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
}
console.log(`  ✓ ${pages.length} pages in ${LOCALES.length} languages`);
