/**
 * Inject JSON-LD structured data into the assembled site.
 *
 * Runs after scripts/assemble-site.mjs and before scripts/prerender.mjs:
 *
 * - After assemble, because each app's sub-route copies (privacy/, terms/,
 *   faq/) were already created during that app's own build. Touching only
 *   `_site/<app>/index.html` therefore puts MobileApplication markup on the app
 *   landing route and nowhere else — a legal page is not the app, and claiming
 *   otherwise sends a wrong entity signal.
 * - Before prerender, because prerender snapshots the DOM and would otherwise
 *   discard anything added later.
 *
 * All values come from scripts/app-manifest.mjs, which only holds store-verified
 * facts. Nothing is generated from guesses.
 *
 * Usage: node scripts/inject-structured-data.mjs
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { APPS, SITE_ORIGIN } from "./site-config.mjs";
import { APP_MANIFEST, ORGANIZATION } from "./app-manifest.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const siteDir = join(repoRoot, "_site");

function scriptTag(data) {
  // JSON.stringify escapes nothing HTML-significant, so close off any "</script"
  // sequence that could appear inside a string value.
  const json = JSON.stringify(data, null, 2).replace(/<\//g, "<\\/");
  return `    <script type="application/ld+json">\n${json}\n    </script>`;
}

function mobileApplication(appName, app) {
  const landingUrl = `${SITE_ORIGIN}/${appName}/`;
  const data = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: app.name,
    url: landingUrl,
    applicationCategory: app.applicationCategory,
    operatingSystem: app.operatingSystem,
    publisher: { "@type": "Organization", name: ORGANIZATION.name, url: ORGANIZATION.url },
  };

  if (app.storeUrls.length > 0) {
    data.sameAs = app.storeUrls;
    data.installUrl = app.storeUrls;
  }
  // Only advertise a price for something you can actually install.
  if (app.storeUrls.length > 0 && app.price !== undefined) {
    data.offers = {
      "@type": "Offer",
      price: app.price,
      priceCurrency: app.priceCurrency,
      availability: "https://schema.org/InStock",
    };
  }
  return data;
}

function studioGraph() {
  const homeUrl = `${SITE_ORIGIN}/home/`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: ORGANIZATION.name,
      url: homeUrl,
      description: ORGANIZATION.description,
      // The apps are the studio's products; this is what ties the entities together.
      owns: Object.entries(APP_MANIFEST).map(([appName, app]) => ({
        "@type": "MobileApplication",
        name: app.name,
        url: `${SITE_ORIGIN}/${appName}/`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: ORGANIZATION.name,
      url: homeUrl,
      publisher: { "@type": "Organization", name: ORGANIZATION.name, url: homeUrl },
    },
  ];
}

async function injectInto(appName, blocks) {
  const file = join(siteDir, appName, "index.html");
  let html = await readFile(file, "utf8");

  if (html.includes("application/ld+json")) {
    throw new Error(`${appName}/index.html already contains JSON-LD — refusing to double-inject`);
  }

  const tags = blocks.map(scriptTag).join("\n");
  html = html.replace("</head>", `${tags}\n  </head>`);
  await writeFile(file, html, "utf8");
  const types = blocks.map((b) => b["@type"]).join(" + ");
  console.log(`  ${appName}/index.html <- ${types}`);
}

async function main() {
  for (const { name } of APPS) {
    if (name === "home") {
      await injectInto(name, studioGraph());
      continue;
    }
    const app = APP_MANIFEST[name];
    if (!app) throw new Error(`no manifest entry for app "${name}"`);
    await injectInto(name, [mobileApplication(name, app)]);
  }
  console.log("structured data injected.");
}

await main();
