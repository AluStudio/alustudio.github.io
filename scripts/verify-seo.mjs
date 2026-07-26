/**
 * Cross-route SEO gate for the assembled + prerendered _site/.
 *
 * scripts/prerender.mjs gates each route in isolation (does it render, is the
 * language right, are FAQ answers present). Some invariants are only checkable
 * across routes — "is every title unique", "did this route just inherit the app
 * homepage's description" — so they live here and run after prerender.
 *
 * Usage: node scripts/verify-seo.mjs
 * Exits non-zero on any violation.
 */

import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { APPS, SITE_ORIGIN } from "./site-config.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(repoRoot, "_site");

function extract(html, re) {
  const match = re.exec(html);
  return match ? match[1].trim() : null;
}

async function readRoutes() {
  const xml = await readFile(join(siteDir, "sitemap.xml"), "utf8");
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1]);

  const routes = [];
  for (const loc of locs) {
    const pathname = new URL(loc).pathname;
    const appName = pathname.split("/").filter(Boolean)[0];
    const file = join(siteDir, pathname, "index.html");
    const html = await readFile(file, "utf8");
    routes.push({
      loc,
      pathname,
      appName,
      isAppRoot: pathname === `/${appName}/`,
      title: extract(html, /<title>([\s\S]*?)<\/title>/),
      description: extract(html, /<meta name="description" content="([^"]*)"/),
      ogTitle: extract(html, /<meta property="og:title" content="([^"]*)"/),
      ogDescription: extract(html, /<meta property="og:description" content="([^"]*)"/),
      canonical: extract(html, /<link rel="canonical" href="([^"]*)"/),
    });
  }
  return routes;
}

function checkRoutes(routes) {
  const problems = [];

  // Every route must carry the basic set.
  for (const route of routes) {
    for (const field of ["title", "description", "ogTitle", "ogDescription", "canonical"]) {
      if (!route[field]) problems.push(`${route.pathname}: missing ${field}`);
    }
    if (route.canonical && route.canonical !== `${SITE_ORIGIN}${route.pathname}`) {
      problems.push(
        `${route.pathname}: canonical is "${route.canonical}", expected "${SITE_ORIGIN}${route.pathname}"`
      );
    }
  }

  // Titles must be unique site-wide, otherwise routes compete with each other.
  const byTitle = new Map();
  for (const route of routes) {
    if (!route.title) continue;
    if (!byTitle.has(route.title)) byTitle.set(route.title, []);
    byTitle.get(route.title).push(route.pathname);
  }
  for (const [title, paths] of byTitle) {
    if (paths.length > 1) problems.push(`duplicate <title> "${title}" on: ${paths.join(", ")}`);
  }

  // A sub-route must not inherit its app homepage's description or title.
  for (const app of APPS) {
    const root = routes.find((r) => r.appName === app.name && r.isAppRoot);
    if (!root) continue;
    for (const route of routes.filter((r) => r.appName === app.name && !r.isAppRoot)) {
      if (route.description && route.description === root.description) {
        problems.push(`${route.pathname}: description is a copy of ${root.pathname}`);
      }
      if (route.ogDescription && route.ogDescription === root.ogDescription) {
        problems.push(`${route.pathname}: og:description is a copy of ${root.pathname}`);
      }
    }
  }

  return problems;
}

async function main() {
  const routes = await readRoutes();
  if (routes.length === 0) {
    console.error("no routes found in _site/sitemap.xml");
    process.exit(1);
  }

  const problems = checkRoutes(routes);

  for (const route of routes) {
    console.log(`  ${route.pathname}\n      title: ${route.title}`);
  }

  if (problems.length > 0) {
    console.error(`\n${problems.length} SEO problem(s):`);
    for (const problem of problems) console.error(`  - ${problem}`);
    process.exit(1);
  }
  console.log(`\nverify-seo: ${routes.length} routes OK`);
}

await main();
