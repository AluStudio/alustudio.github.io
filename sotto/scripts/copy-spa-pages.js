/**
 * Post-build: write a real, self-canonical index.html for every Sotto page in
 * every language, so each route serves HTTP 200 with its own canonical,
 * og:url, title and description. Bots (Google Play, App Store review, AI
 * crawlers) do not execute JavaScript, so a client-side redirect trick would
 * not work for them.
 *
 * Every page exists once per language — English unprefixed, the other eleven
 * under /sotto/<prefix>/ — with its own <html lang> (and dir="rtl" for
 * Arabic), og:locale and the full hreflang set, so each language is separately
 * indexable (docs/specs/seo-aeo.md §多語系 URL). Guide pages also get a
 * BreadcrumbList (Sotto → Guides → guide) in the static head.
 *
 * Validated here so drift fails the build instead of shipping English
 * fallbacks, 404s or unindexed pages: every locale has exactly en's UI keys;
 * every guide pack has en's slugs, an answer-first opening, resolvable related
 * links and a snippet-sized summary; no two pages share a title or a
 * description; sitemap.xml lists exactly the pages built here.
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
import { DESCRIPTION_MAX } from "../../scripts/meta-description.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");
const sitemapPath = join(__dirname, "..", "..", "sitemap.xml");

const BASE_URL = "https://alu-studio.com/sotto";
const SITE_NAME = "Sotto";

const readLocale = (code) =>
  JSON.parse(readFileSync(join(__dirname, "..", "src", "locales", code, "translation.json"), "utf8"));

const readGuides = async (code) =>
  (await import(pathToFileURL(join(__dirname, "..", "src", "data", "guides", `guides.${code}.js`)).href)).articles;

// Every language gets its own URL tree; the first entry is the unprefixed
// x-default. `pathPrefix` mirrors supportedLanguages in src/i18n.js.
const LOCALE_DEFS = [
  { code: "en", pathPrefix: "", ogLocale: "en_US" },
  { code: "zh-Hant", pathPrefix: "zh-hant/", ogLocale: "zh_TW" },
  { code: "zh-Hans", pathPrefix: "zh-hans/", ogLocale: "zh_CN" },
  { code: "ja", pathPrefix: "ja/", ogLocale: "ja_JP" },
  { code: "ko", pathPrefix: "ko/", ogLocale: "ko_KR" },
  { code: "de", pathPrefix: "de/", ogLocale: "de_DE" },
  { code: "es", pathPrefix: "es/", ogLocale: "es_ES" },
  { code: "fr", pathPrefix: "fr/", ogLocale: "fr_FR" },
  { code: "it", pathPrefix: "it/", ogLocale: "it_IT" },
  { code: "pt-BR", pathPrefix: "pt-br/", ogLocale: "pt_BR" },
  { code: "ru", pathPrefix: "ru/", ogLocale: "ru_RU" },
  { code: "ar", pathPrefix: "ar/", ogLocale: "ar_AR", dir: "rtl" },
];

const LOCALES = await Promise.all(
  LOCALE_DEFS.map(async (def) => ({ ...def, ui: readLocale(def.code), guides: await readGuides(def.code) })),
);
const DEFAULT_LOCALE = LOCALES[0];

const STATIC_ROUTES = [
  { path: "faq", meta: (ui) => [ui.faq.meta_title, ui.faq.meta_description] },
  { path: "guides", meta: (ui) => [ui.guides.meta_title, ui.guides.meta_description] },
  { path: "privacy", meta: (ui) => [`${ui.privacy.title} — ${SITE_NAME}`, ui.privacy.meta_description] },
  { path: "terms", meta: (ui) => [`${ui.terms.title} — ${SITE_NAME}`, ui.terms.meta_description] },
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

function validateLocales() {
  const enKeys = leaves(DEFAULT_LOCALE.ui);
  const errors = [];
  for (const { code, ui } of LOCALES) {
    const keys = leaves(ui);
    for (const key of enKeys.keys()) if (!keys.has(key)) errors.push(`${code} is missing "${key}"`);
    for (const [key, value] of keys) {
      if (!enKeys.has(key)) errors.push(`${code} has "${key}", which en does not`);
      else if (typeof value !== "string" || !value.trim()) errors.push(`${code} "${key}" is empty`);
    }
  }
  fail("Locale validation failed", errors);
}

// ── Guide packs ─────────────────────────────────────────────

// Block types GuideBlocks.jsx renders; anything else would render nothing.
const GUIDE_BLOCK_TYPES = new Set(["p", "h2", "note", "list", "steps", "table"]);

function validateGuides() {
  const enSlugs = DEFAULT_LOCALE.guides.map((g) => g.slug);
  const errors = [];
  for (const { code, guides } of LOCALES) {
    const slugs = guides.map((g) => g.slug);
    if (slugs.join(" ") !== enSlugs.join(" ")) {
      errors.push(`${code} guides are [${slugs}] but en has [${enSlugs}] (same slugs, same order)`);
    }
    for (const guide of guides) {
      const at = `[${code}] guide "${guide.slug}"`;
      if (!guide.title?.trim()) errors.push(`${at} has no title`);
      if (!guide.summary?.trim()) errors.push(`${at} has no summary`);
      // Answer first: the opening paragraph answers the title before any section.
      if (guide.content[0]?.type !== "p") errors.push(`${at} must open with a paragraph, not "${guide.content[0]?.type}"`);
      if (!guide.content.some((b) => b.type === "h2")) errors.push(`${at} has no h2 section`);
      guide.content.forEach((block, i) => {
        if (!GUIDE_BLOCK_TYPES.has(block.type)) errors.push(`${at} block ${i} has unknown type "${block.type}"`);
      });
      for (const related of guide.related) {
        if (related === guide.slug || !slugs.includes(related)) errors.push(`${at} has a bad related link "${related}"`);
      }
    }
  }
  fail("Guide validation failed", errors);
}

validateLocales();
validateGuides();

/** Every page of one locale, with its final title and description. */
function localeRoutes(locale) {
  const { ui, guides } = locale;
  return [
    { path: "", title: ui.hero.meta_title, description: ui.hero.meta_description },
    ...STATIC_ROUTES.map(({ path, meta }) => {
      const [title, description] = meta(ui);
      return { path, title, description };
    }),
    ...guides.map((guide) => ({
      path: `guides/${guide.slug}`,
      title: `${guide.title} — ${SITE_NAME}`,
      description: guide.summary,
      jsonLd: breadcrumbList([
        { name: SITE_NAME, url: routeUrl(locale, "") },
        { name: ui.guides.title, url: routeUrl(locale, "guides") },
        { name: guide.title, url: routeUrl(locale, `guides/${guide.slug}`) },
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
// mainland wording in the Sotto overrides of scripts/gen-zh-hans.mjs.
// Every description is hand-written, so one over the limit is a copy error to
// fix at the source, not a string to cut here.
function validatePageMeta() {
  const errors = [];
  for (const page of pages) {
    const length = [...page.description].length;
    if (length > DESCRIPTION_MAX) {
      errors.push(`${page.url} description is ${length} characters; the limit is ${DESCRIPTION_MAX}: "${page.description}"`);
    }
  }
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

validatePageMeta();

// Routes are derived from the data, but sitemap.xml is hand-maintained —
// without this check a new guide (or locale) ships live pages that are never
// submitted for indexing, and nothing fails.
function validateSitemap() {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const listed = new Set(
    [...sitemap.matchAll(/<loc>\s*(https:\/\/alu-studio\.com\/sotto\/[^<\s]*)\s*<\/loc>/g)].map((m) => m[1]),
  );
  const expected = new Set(pages.map((p) => p.url));
  fail("Sitemap validation failed", [
    ...[...expected].filter((u) => !listed.has(u)).map((u) => `sitemap.xml is missing ${u}`),
    ...[...listed].filter((u) => !expected.has(u)).map((u) => `sitemap.xml lists ${u} with no page`),
  ]);
}

validateSitemap();

// Read once: dist/index.html is both the template and the en root's output.
const template = readFileSync(src, "utf8");

for (const { path, title, description, jsonLd, locale, url } of pages) {
  const versions = [
    ...LOCALES.map((l) => ({ hreflang: l.code, href: routeUrl(l, path) })),
    { hreflang: "x-default", href: routeUrl(DEFAULT_LOCALE, path) },
  ];
  let html = setSelfCanonical(template, url);
  html = setHtmlLang(html, locale.code, locale.dir ?? "ltr");
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
