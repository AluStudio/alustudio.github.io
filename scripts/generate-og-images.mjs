/**
 * Generate each app's 1200x630 og:image from its own icon and brand palette.
 *
 * Run manually, not in CI: the output PNGs are committed as static assets. Social
 * previews change about as often as an app's branding does, so committing them
 * keeps the deploy pipeline free of an image toolchain and keeps the result
 * reviewable in a diff.
 *
 * Rendering goes through Puppeteer, which the repo already depends on for
 * prerendering — no extra image library, and full CSS control over the layout.
 *
 * Usage: node scripts/generate-og-images.mjs [--app <name>]
 * Output: <app>/public/og-image.png
 */

import { readFile, writeFile } from "node:fs/promises";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..");

const WIDTH = 1200;
const HEIGHT = 630;

/**
 * Per-app art direction. Colours and fonts mirror what each app actually ships
 * (see each app's index.html and scss variables), so a shared social-card layout
 * still reads as that app rather than as a generic studio template.
 */
const CARDS = {
  home: {
    icon: "home/public/apple-touch-icon.png",
    iconSize: 180,
    name: "Alu Studio",
    tagline: "Small, focused iOS &amp; Android apps for everyday life",
    accent: "#e8a44a",
    ink: "#2b2b33",
    surface: "#fdfaf4",
    fontCss: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700&display=swap",
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
  },
  pikgeon: {
    icon: "pikgeon/public/LOGO.PNG",
    iconSize: 240,
    name: "Pikgeon",
    tagline: "Postcard tracking with on-device OCR",
    accent: "#8ac44c",
    ink: "#26301c",
    surface: "#fbfdf7",
    fontCss: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap",
    fontFamily: "'Noto Sans TC', system-ui, sans-serif",
  },
  babbby: {
    icon: "babbby/public/app-icon.png",
    iconSize: 240,
    name: "Babbby",
    tagline: "0–6 歲寶貝的每日活動靈感",
    accent: "#FF6B4A",
    ink: "#32211c",
    surface: "#fff9f6",
    fontCss: "https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@500;700&display=swap",
    fontFamily: "'Noto Sans TC', system-ui, sans-serif",
  },
  sotto: {
    icon: "sotto/public/app-icon.png",
    iconSize: 240,
    name: "Sotto",
    tagline: "Remember the details about people you love",
    accent: "#b09a6a",
    ink: "#2c2c2c",
    surface: "#f8f5ef",
    fontCss:
      "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&family=Noto+Sans+TC:wght@400&display=swap",
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    nameSize: 92,
  },
  dingpos: {
    // The shipped logo is a wordmark, so it carries the product name itself and
    // the card omits the separate heading.
    icon: "dingpos/public/logo.png",
    iconWidth: 470,
    showName: false,
    name: "DingPOS",
    tagline: "Offline-first point of sale for iPad",
    accent: "#4f6d8e",
    ink: "#242a33",
    surface: "#f8f9fc",
    fontCss: "https://fonts.googleapis.com/css2?family=Manrope:wght@500;700&display=swap",
    fontFamily: "'Manrope', system-ui, sans-serif",
  },
};

async function dataUri(relPath) {
  const buffer = await readFile(join(repoRoot, relPath));
  const ext = extname(relPath).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  return `data:${mime};base64,${buffer.toString("base64")}`;
}

function template(card, iconUri) {
  const iconStyle = card.iconWidth
    ? `width:${card.iconWidth}px;height:auto;border-radius:0;box-shadow:none`
    : `width:${card.iconSize}px;height:${card.iconSize}px;border-radius:22%;` +
      `box-shadow:0 24px 60px -16px ${card.accent}66, 0 4px 14px rgba(0,0,0,.08)`;

  return `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="${card.fontCss}" />
    <style>
      *{ margin:0; padding:0; box-sizing:border-box; }
      body {
        width:${WIDTH}px; height:${HEIGHT}px; overflow:hidden;
        font-family:${card.fontFamily};
        color:${card.ink};
        background:
          radial-gradient(900px 520px at 88% -12%, ${card.accent}2e, transparent 70%),
          radial-gradient(700px 460px at 4% 108%, ${card.accent}1c, transparent 72%),
          ${card.surface};
        display:flex; align-items:center; gap:72px;
        padding:0 96px;
        position:relative;
      }
      /* Accent edge keeps the family look consistent across the five cards. */
      body::before {
        content:""; position:absolute; left:0; top:0; bottom:0; width:14px;
        background:linear-gradient(180deg, ${card.accent}, ${card.accent}55);
      }
      .text { display:flex; flex-direction:column; gap:22px; max-width:700px; }
      h1 {
        font-size:${card.nameSize ?? 78}px; font-weight:700;
        letter-spacing:-.02em; line-height:1.04;
      }
      p { font-size:37px; font-weight:500; line-height:1.34; opacity:.74; }
      .studio {
        position:absolute; left:110px; bottom:52px;
        font-size:19px; font-weight:700; letter-spacing:.22em; text-transform:uppercase;
        color:${card.accent};
      }
      img { display:block; flex-shrink:0; }
    </style>
  </head>
  <body>
    <img src="${iconUri}" style="${iconStyle}" alt="" />
    <div class="text">
      ${card.showName === false ? "" : `<h1>${card.name}</h1>`}
      <p>${card.tagline}</p>
    </div>
    ${card.name === "Alu Studio" ? "" : '<div class="studio">Alu Studio</div>'}
  </body>
</html>`;
}

async function main() {
  const only = process.argv.includes("--app")
    ? process.argv[process.argv.indexOf("--app") + 1]
    : null;
  const entries = Object.entries(CARDS).filter(([name]) => !only || name === only);
  if (entries.length === 0) {
    console.error(`unknown app "${only}"`);
    process.exit(1);
  }

  const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
  try {
    for (const [appName, card] of entries) {
      const page = await browser.newPage();
      await page.setViewport({ width: WIDTH, height: HEIGHT, deviceScaleFactor: 1 });
      await page.setContent(template(card, await dataUri(card.icon)), {
        waitUntil: "networkidle0",
      });
      // Without this the screenshot can land before the webfont swaps in.
      await page.evaluate(() => document.fonts.ready);

      const out = join(repoRoot, appName, "public", "og-image.png");
      await writeFile(out, await page.screenshot({ type: "png" }));
      console.log(`  ${appName}/public/og-image.png (${WIDTH}x${HEIGHT})`);
      await page.close();
    }
  } finally {
    await browser.close();
  }
  console.log("\nog:images generated. Review them before committing.");
}

await main();
