/**
 * Fill in `<lastmod>` for every sitemap route by comparing what this build
 * produced against what is currently live.
 *
 * Google and Bing both act on lastmod, and both discount it when it is wrong, so
 * the value has to track real content changes. Deriving it from git dates needs a
 * per-route dependency graph (a page is its own component plus shared components
 * plus translations plus head tags) and still only approximates the answer. This
 * step skips the proxy entirely and compares the actual prerendered HTML with the
 * live HTML:
 *
 *   differs        -> lastmod = today
 *   identical      -> carry forward the live sitemap's existing lastmod
 *   nothing to compare against -> omit lastmod (no signal beats a wrong signal)
 *
 * State lives on the live site, not in the repo, so the step is stateless and
 * needs no committed bookkeeping. The repo's own sitemap.xml stays the
 * human-maintained list of which routes exist; only lastmod is generated.
 *
 * Runs after prerender (it needs the final HTML) and before verify-seo.
 * Network failures never fail the build — an unreachable origin just means
 * "nothing to compare against".
 *
 * Usage: node scripts/update-sitemap-lastmod.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { SITE_ORIGIN } from "./site-config.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(repoRoot, "_site");
const sitemapFile = join(siteDir, "sitemap.xml");

const FETCH_TIMEOUT_MS = 15_000;
const today = new Date().toISOString().slice(0, 10);

/**
 * Reduce HTML to what a reader would notice changing.
 *
 * Vite fingerprints every asset, so a pure refactor with no visible change still
 * rewrites each bundle filename. Comparing raw HTML would call that a content
 * change and bump lastmod on every route for every build.
 */
export function normalize(html) {
  return (
    html
      .replace(/\/assets\/([^"'\s]+?)-[A-Za-z0-9_-]{6,}(\.[a-z0-9]+)/g, "/assets/$1$2")
      .replace(/<!--[\s\S]*?-->/g, "")
      .replace(/\s+/g, " ")
      // Formatting between tags is not content. Without this, a change in how the
      // renderer indents its output would read as every route changing at once.
      .replace(/>\s+</g, "><")
      .trim()
  );
}

/**
 * Decide one route's lastmod. Pure, so the rules are unit-testable without a
 * network or a built site.
 *
 * @param {object} input
 * @param {string} input.local - freshly prerendered HTML
 * @param {string|null} input.live - HTML currently served, or null if unavailable
 * @param {string|undefined} input.previous - lastmod from the live sitemap
 * @param {boolean} input.reachable - whether the live sitemap could be read
 * @param {string} input.today - YYYY-MM-DD
 * @returns {{lastmod: string|undefined, reason: string}}
 */
export function decideLastmod({ local, live, previous, reachable, today }) {
  if (live === null || live === undefined) {
    // Either the origin is unreachable or this route is not deployed yet. A
    // brand-new route is genuinely new, so today is correct; for an unreachable
    // origin we fall back to whatever the live sitemap said.
    if (previous) return { lastmod: previous, reason: reachable ? "new route" : "origin unreachable" };
    return {
      lastmod: reachable ? today : undefined,
      reason: reachable ? "new route" : "origin unreachable",
    };
  }
  if (normalize(local) === normalize(live)) {
    return {
      lastmod: previous,
      reason: previous ? "unchanged" : "unchanged, no previous date",
    };
  }
  return { lastmod: today, reason: "content changed" };
}

async function fetchText(url) {
  try {
    const response = await fetch(url, {
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: { "user-agent": "alu-studio-build/1.0 (sitemap lastmod check)" },
    });
    if (!response.ok) return null;
    return await response.text();
  } catch {
    return null;
  }
}

/** Existing lastmod values from the live sitemap, so unchanged routes keep their date. */
async function liveLastmods() {
  const xml = await fetchText(`${SITE_ORIGIN}/sitemap.xml`);
  const map = new Map();
  if (!xml) return { map, reachable: false };

  for (const block of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = /<loc>\s*([^<\s]+)\s*<\/loc>/.exec(block[1])?.[1];
    const lastmod = /<lastmod>\s*([^<\s]+)\s*<\/lastmod>/.exec(block[1])?.[1];
    if (loc && lastmod) map.set(loc, lastmod);
  }
  return { map, reachable: true };
}

function buildSitemap(entries) {
  const body = entries
    .map(({ loc, lastmod }) => {
      const lastmodTag = lastmod ? `<lastmod>${lastmod}</lastmod>` : "";
      return `  <url><loc>${loc}</loc>${lastmodTag}</url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

async function main() {
  const xml = await readFile(sitemapFile, "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);
  if (locs.length === 0) throw new Error("no <loc> entries in _site/sitemap.xml");

  const { map: previous, reachable } = await liveLastmods();
  if (!reachable) {
    console.log(`  live sitemap unreachable — every route will keep/omit its date`);
  }

  const entries = [];
  for (const loc of locs) {
    const pathname = new URL(loc).pathname;
    const local = await readFile(join(siteDir, pathname, "index.html"), "utf8");
    const live = await fetchText(loc);

    const { lastmod, reason } = decideLastmod({
      local,
      live,
      previous: previous.get(loc),
      reachable,
      today,
    });

    entries.push({ loc, lastmod });
    console.log(`  ${pathname} -> ${lastmod ?? "(omitted)"}  [${reason}]`);
  }

  await writeFile(sitemapFile, buildSitemap(entries), "utf8");
  console.log(`\nsitemap.xml written with ${entries.filter((e) => e.lastmod).length}/${entries.length} lastmod values.`);
}

// Importable for tests without running the build step.
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  await main();
}
