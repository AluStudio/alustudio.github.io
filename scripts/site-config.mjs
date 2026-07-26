/**
 * Shared build-time configuration for the whole site.
 *
 * Consumed by scripts/assemble-site.mjs and scripts/prerender.mjs (and, later,
 * the route-metadata and sitemap-lastmod steps). Keep this the single source of
 * truth for "which apps exist" and "what language each app is indexed in".
 */

export const SITE_ORIGIN = "https://alu-studio.com";

/**
 * Canonical index language per app (docs/drafts/seo-aeo-optimization.md §5).
 *
 * Prerender pins the browser to this locale so the snapshot is deterministic
 * instead of inheriting whatever locale the CI runner happens to have. `locale`
 * must be a language tag the app's i18n actually resolves to, and must match
 * the `<html lang>` the app ends up with — prerender asserts this.
 */
export const APPS = [
  { name: "home", locale: "en" },
  { name: "pikgeon", locale: "en" },
  { name: "babbby", locale: "zh-Hant" },
  { name: "sotto", locale: "en" },
  { name: "dingpos", locale: "en" },
];

/** Root-level static files copied verbatim into _site/. */
export const ROOT_STATIC_FILES = [
  "app-ads.txt",
  "google9c954b37d1869b6e.html",
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  // Canonical-only fallback. The Worker issues the real "/" -> "/home/"
  // redirect before this body is reached; this only serves the literal
  // /index.html path. See src/worker.js.
  "index.html",
  // Served with a real 404 status by the Worker for unmatched paths.
  "404.html",
];

/** Locale -> app names, for grouping prerender work by browser locale. */
export function appsByLocale() {
  const grouped = new Map();
  for (const app of APPS) {
    if (!grouped.has(app.locale)) grouped.set(app.locale, []);
    grouped.get(app.locale).push(app.name);
  }
  return grouped;
}
