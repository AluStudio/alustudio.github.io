/**
 * Post-build: write a real, self-canonical index.html for every Sotto page in
 * every language, so each route serves HTTP 200 with its own canonical,
 * og:url, title and description. Bots (Google Play, App Store review, AI
 * crawlers) do not execute JavaScript, so a client-side redirect trick would
 * not work for them.
 *
 * Every page exists once per shipped language of l10n/languages.json —
 * English unprefixed, every other language under /sotto/<pathPrefix>/ — with its own <html lang> (and dir="rtl" for
 * Arabic), og:locale and the full hreflang set, so each language is separately
 * indexable (docs/specs/seo-aeo.md §多語系 URL). Guide pages also get a
 * BreadcrumbList (Sotto → Guides → guide) in the static head.
 *
 * Validated here so drift fails the build instead of shipping English
 * fallbacks, 404s or unindexed pages: every locale has exactly en's UI keys;
 * every language has a scene string pack with every listed app string and
 * prompt, placeholders matching en's;
 * every guide pack has en's slugs, an answer-first opening, resolvable related
 * links and a snippet-sized summary; no two pages share a title or a
 * description; sitemap.xml lists exactly the pages built here.
 *
 * `--write-sitemap` rewrites the Sotto block of sitemap.xml from the page
 * list instead of checking it, then exits without writing pages.
 */

import process from "node:process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
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
import { imageBlockErrors } from "../../scripts/guide-images.mjs";
import { SCENE_PROMPT_IDS, SCENE_STRING_KEYS, placeholders } from "../src/data/scenes/keys.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");
const sitemapPath = join(__dirname, "..", "..", "sitemap.xml");
const registryPath = join(__dirname, "..", "l10n", "languages.json");
const writeSitemap = process.argv.includes("--write-sitemap");

const BASE_URL = "https://alu-studio.com/sotto";
const SITE_NAME = "Sotto";

const readLocale = (code) =>
  JSON.parse(readFileSync(join(__dirname, "..", "src", "locales", code, "translation.json"), "utf8"));

const scenesPath = (code) => join(__dirname, "..", "src", "data", "scenes", `strings.${code}.json`);
const readScenes = (code) => (existsSync(scenesPath(code)) ? JSON.parse(readFileSync(scenesPath(code), "utf8")) : null);

const readGuides = async (code) =>
  (await import(pathToFileURL(join(__dirname, "..", "src", "data", "guides", `guides.${code}.js`)).href)).articles;

// Every shipped language gets its own URL tree; the registry's one unprefixed
// language (en) is the x-default. src/i18n.js reads the same registry.
const registry = JSON.parse(readFileSync(registryPath, "utf8")).languages;

// A registry that disagrees with itself ships pages whose canonical, hreflang
// and router basename point at each other's URLs.
function validateRegistry() {
  const errors = [];
  const seen = { code: new Set(), pathPrefix: new Set() };
  for (const { code, hreflang, pathPrefix } of registry) {
    if (pathPrefix !== "" && pathPrefix !== hreflang.toLowerCase()) {
      errors.push(`${code} has pathPrefix "${pathPrefix}", not its hreflang "${hreflang}" in lowercase`);
    }
    for (const [field, value] of [["code", code], ["pathPrefix", pathPrefix]]) {
      if (seen[field].has(value)) errors.push(`languages.json has two entries with ${field} "${value}"`);
      seen[field].add(value);
    }
  }
  const unprefixed = registry.filter((l) => l.pathPrefix === "").length;
  if (unprefixed !== 1) errors.push(`languages.json must have exactly one unprefixed language (the x-default), found ${unprefixed}`);
  fail("Language registry validation failed", errors);
}

validateRegistry();

const LOCALES = await Promise.all(
  registry
    .filter((l) => l.shipped)
    .map(async ({ code, hreflang, pathPrefix, ogLocale, dir }) => ({
      code,
      hreflang,
      pathPrefix: pathPrefix ? `${pathPrefix}/` : "",
      ogLocale,
      dir,
      ui: readLocale(code),
      scenes: readScenes(code),
      guides: await readGuides(code),
    })),
);
const DEFAULT_LOCALE = LOCALES.find((l) => l.pathPrefix === "");

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
const GUIDE_BLOCK_TYPES = new Set(["p", "h2", "note", "list", "steps", "table", "image"]);
const publicDir = join(__dirname, "..", "public");

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
        if (block.type === "image") errors.push(...imageBlockErrors(block, `${at} image block ${i}`, publicDir));
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

// ── Scene strings ───────────────────────────────────────────
// The home page's scenes draw app strings synced by
// scripts/sync-scene-strings.mjs; a missing one renders its raw key.
function validateSceneStrings() {
  const errors = [];
  const enStrings = DEFAULT_LOCALE.scenes?.strings ?? {};
  for (const { code, scenes } of LOCALES) {
    if (!scenes) {
      errors.push(`${code} has no src/data/scenes/strings.${code}.json (run scripts/sync-scene-strings.mjs)`);
      continue;
    }
    for (const key of SCENE_STRING_KEYS) {
      const value = scenes.strings?.[key];
      if (!value?.trim()) errors.push(`${code} scene strings lack "${key}"`);
      else if (placeholders(value).join() !== placeholders(enStrings[key] ?? "").join()) {
        errors.push(`${code} scene string "${key}" has other placeholders than en's`);
      }
    }
    for (const id of SCENE_PROMPT_IDS) {
      if (!scenes.prompts?.[id]?.trim()) errors.push(`${code} scene strings lack the prompt "${id}"`);
    }
  }
  fail("Scene string validation failed", errors);
}

validateSceneStrings();

/** Every page of one locale, with its final title and description. */
function localeRoutes(locale) {
  const { ui, guides } = locale;
  const staticRoute = ({ path, meta }) => {
    const [title, description] = meta(ui);
    return { path, title, description };
  };
  const guidePages = guides.map((guide) => ({
    path: `guides/${guide.slug}`,
    title: `${guide.title} — ${SITE_NAME}`,
    description: guide.summary,
    jsonLd: breadcrumbList([
      { name: SITE_NAME, url: routeUrl(locale, "") },
      { name: ui.guides.title, url: routeUrl(locale, "guides") },
      { name: guide.title, url: routeUrl(locale, `guides/${guide.slug}`) },
    ]),
  }));
  // The order sitemap.xml lists them in: each guide follows the guides index.
  const [beforeGuides, afterGuides] = [
    STATIC_ROUTES.filter((r) => ["faq", "guides"].includes(r.path)),
    STATIC_ROUTES.filter((r) => !["faq", "guides"].includes(r.path)),
  ].map((routes) => routes.map(staticRoute));
  return [
    { path: "", title: ui.hero.meta_title, description: ui.hero.meta_description },
    ...beforeGuides,
    ...guidePages,
    ...afterGuides,
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

// Routes are derived from the data, but sitemap.xml is the URL membership
// list for prerender and lastmod — without this check a new guide (or locale)
// ships live pages that are never submitted for indexing, and nothing fails.
// `--write-sitemap` regenerates the Sotto block from `pages` instead.
const SOTTO_LOC = /<loc>\s*(https:\/\/alu-studio\.com\/sotto\/[^<\s]*)\s*<\/loc>/;

function validateSitemap() {
  const sitemap = readFileSync(sitemapPath, "utf8");
  const listed = new Set([...sitemap.matchAll(new RegExp(SOTTO_LOC, "g"))].map((m) => m[1]));
  const expected = new Set(pages.map((p) => p.url));
  fail("Sitemap validation failed", [
    ...[...expected].filter((u) => !listed.has(u)).map((u) => `sitemap.xml is missing ${u}`),
    ...[...listed].filter((u) => !expected.has(u)).map((u) => `sitemap.xml lists ${u} with no page (run with --write-sitemap)`),
  ]);
}

/** Replace the contiguous Sotto <url> lines of sitemap.xml with one line per page. */
function rewriteSitemap() {
  const lines = readFileSync(sitemapPath, "utf8").split("\n");
  const at = lines.flatMap((line, i) => (SOTTO_LOC.test(line) ? [i] : []));
  if (at.length && at[at.length - 1] - at[0] + 1 !== at.length) {
    fail("Sitemap rewrite failed", ["the Sotto <url> lines of sitemap.xml are not contiguous"]);
  }
  const start = at.length ? at[0] : lines.findIndex((line) => line.trim() === "</urlset>");
  const block = pages.map((p) => `  <url><loc>${p.url}</loc></url>`);
  lines.splice(start, at.length, ...block);
  writeFileSync(sitemapPath, lines.join("\n"));
  console.log(`  ✓ sitemap.xml: ${block.length} Sotto URLs in ${LOCALES.length} languages`);
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
  html = setHtmlLang(html, locale.hreflang, locale.dir ?? "ltr");
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
