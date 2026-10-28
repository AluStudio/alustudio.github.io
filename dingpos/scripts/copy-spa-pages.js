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
 * Guides (/guides/ and /guides/<slug>/) are the exception to "every page in
 * every language": they are written per market, not translated, so only a
 * language with a guides pack gets them, and they carry no hreflang — no
 * other language has the same page (docs/specs/seo-aeo.md §獲客文章). Each
 * guide carries an Article next to its BreadcrumbList.
 *
 * `--write-sitemap` rewrites the DingPOS block of sitemap.xml from the page
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
import { contentUnits, fitDescription, DESCRIPTION_MAX } from "../../scripts/meta-description.mjs";
import { VERIFIED_APP_VERSION } from "../src/data/faq/version.js";
import { INLINE_LINK, blockTexts } from "../src/data/guides/links.js";
import { SCENE_COUNTRIES, SCENE_STRING_KEYS, SCENE_TIMES, placeholders } from "../src/data/scenes/keys.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, "..", "dist");
const src = join(dist, "index.html");
const sitemapPath = join(__dirname, "..", "..", "sitemap.xml");
const registryPath = join(__dirname, "..", "l10n", "languages.json");
const writeSitemap = process.argv.includes("--write-sitemap");

const BASE_URL = "https://alu-studio.com/dingpos";
const SITE_NAME = "DingPOS";

const readLocale = (code) =>
  JSON.parse(readFileSync(join(__dirname, "..", "src", "locales", code, "translation.json"), "utf8"));

const guidesPath = (code) => join(__dirname, "..", "src", "data", "guides", `guides.${code}.js`);

/** A language's guides pack ({ ui, articles }), or null when it has no guides. */
const readGuides = async (code) =>
  existsSync(guidesPath(code)) ? import(pathToFileURL(guidesPath(code)).href) : null;

const scenesPath = (code) => join(__dirname, "..", "src", "data", "scenes", `strings.${code}.json`);
const readScenes = (code) => (existsSync(scenesPath(code)) ? JSON.parse(readFileSync(scenesPath(code), "utf8")) : null);

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
      guides: await readGuides(code),
      ui: readLocale(code),
      scenes: readScenes(code),
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

// Pages render lists with t(key, { returnObjects: true }) and drop anything
// that is not an array, so an en list stored as an object would vanish silently.
function shapeErrors(en, value, code, path = []) {
  if (!en || typeof en !== "object") return [];
  if (Array.isArray(en) && !Array.isArray(value)) return [`${code} "${path.join(".")}" must be a list, like en`];
  return Object.entries(en).flatMap(([key, child]) => shapeErrors(child, value?.[key], code, [...path, key]));
}

function validateLocales() {
  const enKeys = leaves(DEFAULT_LOCALE.ui);
  const errors = [];
  for (const { code, ui } of LOCALES) {
    errors.push(...shapeErrors(DEFAULT_LOCALE.ui, ui, code));
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
    for (const { code: region } of SCENE_COUNTRIES) {
      if (!scenes.countries?.[region]?.trim()) errors.push(`${code} scene strings lack the country "${region}"`);
    }
    for (const time of SCENE_TIMES) {
      if (!scenes.times?.[time]?.trim()) errors.push(`${code} scene strings lack the time "${time}"`);
    }
  }
  fail("Scene string validation failed", errors);
}

validateSceneStrings();

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

// ── Guides ──────────────────────────────────────────────────
const GUIDE_UI_KEYS = [
  "nav", "title", "subtitle", "meta_description", "back", "related_title",
  "sources_title", "checked", "cta_title", "cta_text", "cta_button",
];
const GUIDE_BLOCK_TYPES = new Set(["p", "h2", "note", "list", "steps", "table", "image"]);
const publicDir = join(__dirname, "..", "public");
// GuideBlocks.jsx declares an image's `phone` file at this width in its srcset.
const PHONE_IMAGE_WIDTH = 1080;
const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/;

/** [width, height] of a WebP file from its VP8 / VP8L / VP8X header, or null. */
function webpSize(path) {
  const b = readFileSync(path);
  if (b.length < 30 || b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") return null;
  switch (b.toString("ascii", 12, 16)) {
    case "VP8 ":
      return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    case "VP8L": {
      const bits = b.readUInt32LE(21);
      return [(bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1];
    }
    case "VP8X":
      return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
    default:
      return null;
  }
}

/** Errors of an image block: real WebP files under public/, sized as declared. */
function imageBlockErrors(block, at) {
  const errors = [];
  const isPositiveInt = (n) => Number.isInteger(n) && n > 0;
  if (!block.alt?.trim()) errors.push(`${at} has no alt`);
  if (block.caption !== undefined && (typeof block.caption !== "string" || !block.caption.trim() || /[[\]]/.test(block.caption))) {
    errors.push(`${at} caption is empty or carries link markup`);
  }
  if (!isPositiveInt(block.width) || !isPositiveInt(block.height)) {
    errors.push(`${at} width/height ${block.width}x${block.height} are not positive integers`);
  }
  if (block.width > PHONE_IMAGE_WIDTH && !block.phone) {
    errors.push(`${at} is ${block.width}px wide and has no ${PHONE_IMAGE_WIDTH}w phone file`);
  }
  if (block.phone && !(block.width > PHONE_IMAGE_WIDTH)) {
    errors.push(`${at} has a phone file but is not wider than ${PHONE_IMAGE_WIDTH}px`);
  }
  const file = (field) => {
    const rel = block[field];
    if (typeof rel !== "string" || !/\.webp$/.test(rel) || rel.startsWith("/") || rel.split("/").includes("..")) {
      errors.push(`${at} ${field} "${rel}" is not a .webp path relative to public/`);
      return null;
    }
    const path = join(publicDir, rel);
    if (!existsSync(path)) {
      errors.push(`${at} ${field} public/${rel} does not exist`);
      return null;
    }
    const size = webpSize(path);
    if (!size) errors.push(`${at} ${field} public/${rel} is not a WebP file`);
    return size;
  };
  const size = file("src");
  if (size && (size[0] !== block.width || size[1] !== block.height)) {
    errors.push(`${at} declares ${block.width}x${block.height}, but public/${block.src} is ${size[0]}x${size[1]}`);
  }
  if (block.phone) {
    const phone = file("phone");
    // The same picture at PHONE_IMAGE_WIDTH: height within a pixel of scale rounding.
    const expectedHeight = (block.height * PHONE_IMAGE_WIDTH) / block.width;
    if (phone && (phone[0] !== PHONE_IMAGE_WIDTH || Math.abs(phone[1] - expectedHeight) > 1)) {
      errors.push(
        `${at} phone public/${block.phone} is ${phone[0]}x${phone[1]}, not ${PHONE_IMAGE_WIDTH}x${Math.round(expectedHeight)}`,
      );
    }
  }
  return errors;
}

function validateGuides() {
  const errors = [];
  for (const { code, guides } of LOCALES) {
    if (!guides) continue;
    const { ui, articles } = guides;
    for (const key of GUIDE_UI_KEYS) if (!ui?.[key]?.trim()) errors.push(`[${code}] guides ui has no "${key}"`);
    if (!ui?.checked?.includes("{{date}}")) errors.push(`[${code}] guides ui "checked" has no {{date}}`);
    if (!articles.length) errors.push(`[${code}] guides pack has no articles (delete the pack instead)`);
    const slugs = articles.map((a) => a.slug);
    if (new Set(slugs).size !== slugs.length) errors.push(`duplicate slugs in ${code} guides pack`);
    for (const guide of articles) {
      const at = `[${code}] guide "${guide.slug}"`;
      if (!ui?.markets?.[guide.market]) errors.push(`${at} has market "${guide.market}", which ui.markets does not name`);
      if (!DATE_PATTERN.test(guide.checked ?? "")) errors.push(`${at} has checked "${guide.checked}", not YYYY-MM-DD`);
      if (!guide.title?.trim()) errors.push(`${at} has no title`);
      if (!guide.summary?.trim()) errors.push(`${at} has no summary`);
      else if ([...guide.summary].length > DESCRIPTION_MAX) errors.push(`${at} summary is over ${DESCRIPTION_MAX} characters`);
      if (/[[\]]/.test(guide.summary ?? "")) errors.push(`${at} summary carries link markup; it is the meta description`);
      // Answer first: the opening paragraph answers the title before any section.
      if (guide.content[0]?.type !== "p") errors.push(`${at} must open with a paragraph, not "${guide.content[0]?.type}"`);
      if (!guide.content.some((b) => b.type === "h2")) errors.push(`${at} has no h2 section`);
      // The support article a guide links to lists the guide back; without a
      // link the guide gets no in-site link from any indexed article.
      const linksSupport = guide.content
        .flatMap(blockTexts)
        .some((text) => [...text.matchAll(INLINE_LINK)].some(([, , href]) => href.startsWith("/support/")));
      if (!linksSupport) errors.push(`${at} links to no support article (docs/specs/seo-aeo.md §獲客文章)`);
      guide.content.forEach((block, i) => {
        if (!GUIDE_BLOCK_TYPES.has(block.type)) errors.push(`${at} block ${i} has unknown type "${block.type}"`);
        if (block.type === "image") errors.push(...imageBlockErrors(block, `${at} image block ${i}`));
      });
      for (const { label, url } of guide.sources) {
        if (!label?.trim() || !url?.startsWith("https://")) errors.push(`${at} has a bad source ${JSON.stringify({ label, url })}`);
      }
      for (const related of guide.related) {
        if (related === guide.slug || !slugs.includes(related)) errors.push(`${at} has a bad related link "${related}"`);
      }
    }
  }
  fail("Guide validation failed", errors);
}

validateGuides();

/** Every page of one locale, with its final title and description. */
function localeRoutes(locale) {
  const { ui, faq, guides } = locale;
  return [
    { path: "", title: ui.hero.meta_title, description: fitDescription([ui.hero.meta_description]) },
    ...STATIC_ROUTES.map(({ path, meta }) => {
      const [title, description] = meta(ui);
      return { path, title: `${title} — ${SITE_NAME}`, description: fitDescription([description]) };
    }),
    ...faq.articles.map((article) => ({
      path: `support/${article.slug}`,
      title: `${article.question} — ${SITE_NAME}`,
      description: fitDescription(contentUnits(article.content)),
      jsonLd: breadcrumbList([
        { name: SITE_NAME, url: routeUrl(locale, "") },
        { name: ui.support.doc_title, url: routeUrl(locale, "support") },
        { name: article.question, url: routeUrl(locale, `support/${article.slug}`) },
      ]),
    })),
    ...(guides ? guideRoutes(locale) : []),
  ];
}

/** The guides index and articles of a language with a guides pack; no language versions. */
function guideRoutes(locale) {
  const { ui, articles } = locale.guides;
  return [
    { path: "guides", title: `${ui.title} — ${SITE_NAME}`, description: fitDescription([ui.meta_description]), standalone: true },
    ...articles.map((guide) => ({
      path: `guides/${guide.slug}`,
      title: `${guide.title} — ${SITE_NAME}`,
      description: guide.summary,
      standalone: true,
      jsonLd: [
        breadcrumbList([
          { name: SITE_NAME, url: routeUrl(locale, "") },
          { name: ui.title, url: routeUrl(locale, "guides") },
          { name: guide.title, url: routeUrl(locale, `guides/${guide.slug}`) },
        ]),
        guideArticle(locale, guide),
      ],
    })),
  ];
}

// home/index.html declares this Organization under the same @id.
const ALU_STUDIO = {
  "@type": "Organization",
  "@id": "https://alu-studio.com/#organization",
  name: "Alu Studio",
  url: "https://alu-studio.com/",
};

/**
 * schema.org Article for a guide. dateModified is `checked`, the date the page
 * shows as last checked: Google wants the marked-up date to match the visible
 * one. There is no datePublished, since no guide records one.
 */
function guideArticle(locale, guide) {
  const url = routeUrl(locale, `guides/${guide.slug}`);
  const images = guide.content.filter((b) => b.type === "image").map((b) => `${BASE_URL}/${b.src}`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.summary,
    inLanguage: locale.hreflang,
    url,
    mainEntityOfPage: url,
    dateModified: guide.checked,
    ...(images.length ? { image: images } : {}),
    author: ALU_STUDIO,
    publisher: ALU_STUDIO,
  };
}

const pages = LOCALES.flatMap((locale) =>
  localeRoutes(locale).map((route) => ({ ...route, locale, url: routeUrl(locale, route.path) })),
);

// A guide links within its own language only; a target outside the built
// pages would 404 (and fail the prerender's link audit much later).
function validateGuideLinks() {
  const errors = [];
  for (const locale of LOCALES.filter((l) => l.guides)) {
    const routes = new Set(pages.filter((p) => p.locale === locale).map((p) => (p.path ? `/${p.path}/` : "/")));
    for (const guide of locale.guides.articles) {
      for (const text of guide.content.flatMap(blockTexts)) {
        for (const [, , href] of text.matchAll(INLINE_LINK)) {
          if (href.startsWith("https://")) continue;
          if (!routes.has(href)) errors.push(`[${locale.code}] guide "${guide.slug}" links to ${href}, which is not a ${locale.code} page`);
        }
      }
    }
  }
  fail("Guide link validation failed", errors);
}

validateGuideLinks();

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

for (const { path, title, description, jsonLd, standalone, locale, url } of pages) {
  const versions = standalone
    ? []
    : [
        ...LOCALES.map((l) => ({ hreflang: l.hreflang, href: routeUrl(l, path) })),
        { hreflang: "x-default", href: routeUrl(DEFAULT_LOCALE, path) },
      ];
  let html = setSelfCanonical(template, url);
  html = setHtmlLang(html, locale.hreflang);
  html = setPageMeta(html, { title, description });
  html = setLanguageAlternates(html, {
    ogLocale: locale.ogLocale,
    ogLocaleAlternates: standalone ? [] : LOCALES.filter((l) => l !== locale).map((l) => l.ogLocale),
    versions,
  });
  for (const data of [jsonLd ?? []].flat()) html = addJsonLd(html, data);

  const dest = join(dist, locale.pathPrefix, path, "index.html");
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, html);
}
console.log(`  ✓ ${pages.length} pages in ${LOCALES.length} languages`);
