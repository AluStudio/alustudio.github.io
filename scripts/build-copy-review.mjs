import { readFileSync, writeFileSync } from "node:fs";
import { execSync } from "node:child_process";

const APPS = ["home", "pikgeon", "babbby", "sotto", "dingpos"];
const LOCALE = { home: "en", pikgeon: "en", babbby: "en", sotto: "en", dingpos: "en" };
const out = [];

out.push(`---
summary: Every draft string written during the SEO/AEO pass, collected for one review sitting
read_when:
  - Reviewing the aeo-seo branch before merge
  - Checking what copy an answer engine will quote
---

# SEO/AEO 文案審核

本檔由 \`scripts/build-copy-review.mjs\` 從各 app 的 locale 檔與 metadata 直接產生，不是手抄。
只列**英文**版本；其他語言由 l10n-translator 依此翻譯，語氣跟著英文走。

改哪裡：每段標了來源檔路徑。改完英文後其他語言需重新翻譯。

實作與決策脈絡見 [seo-aeo-optimization.md](./seo-aeo-optimization.md)。

`);

// Route metadata
out.push(`## 1. Route title / description\n`);
out.push(`搜尋結果與 AI 引用時最常出現的兩行字。\n`);
for (const app of APPS) {
  const html = readFileSync(`${app}/index.html`, "utf8");
  const title = /<title>([\s\S]*?)<\/title>/.exec(html)?.[1]?.trim();
  const desc = /<meta name="description" content="([^"]*)"/.exec(html)?.[1];
  out.push(`### /${app}/\n`);
  out.push(`- 來源：\`${app}/index.html\``);
  out.push(`- **title**: ${title}`);
  out.push(`- **description**: ${desc}\n`);

  try {
    const spa = readFileSync(`${app}/scripts/copy-spa-pages.js`, "utf8");
    const meta = [...spa.matchAll(/^\s{2}(\w+): \{\s*\n\s*title: "([^"]*)",\s*\n\s*description:\s*\n?\s*"([^"]*)"/gm)];
    if (meta.length) {
      out.push(`子路由（來源：\`${app}/scripts/copy-spa-pages.js\`）：\n`);
      for (const [, route, t, d] of meta) {
        out.push(`- **/${app}/${route}/** — ${t}`);
        out.push(`  - ${d}`);
      }
      out.push("");
    }
  } catch {}
}

// Studio positioning
const home = JSON.parse(readFileSync("home/src/locales/en/translation.json", "utf8"));
out.push(`## 2. 工作室定位（最高引用價值）\n`);
out.push(`回答引擎回答「Alu Studio 是什麼」時最可能引用這兩段。來源：\`home/src/locales/en/translation.json\`\n`);
out.push(`- **bio**: ${home.profile.bio}`);
out.push(`- **about**: ${home.profile.about}\n`);
out.push(`各 app 一句話介紹（同檔）：\n`);
for (const id of ["pikgeon", "babbby", "sotto", "dingpos"]) {
  out.push(`- **${home[id].tagline}** — ${home[id].desc}`);
}
out.push("");

// Landing hero copy
out.push(`## 3. Landing hero 文案\n`);
const heroes = {
  pikgeon: (j) => [j.banner.title, j.banner.subtitle],
  babbby: (j) => [j.landing.title, j.landing.subtitle],
  sotto: (j) => [j.hero.tagline, j.hero.description],
  dingpos: (j) => [j.hero.tagline, j.hero.description],
};
for (const [app, pick] of Object.entries(heroes)) {
  const j = JSON.parse(readFileSync(`${app}/src/locales/${LOCALE[app]}/translation.json`, "utf8"));
  const [a, b] = pick(j);
  out.push(`### ${app}\n`);
  out.push(`來源：\`${app}/src/locales/en/translation.json\`\n`);
  if (a) out.push(`- ${a}`);
  if (b) out.push(`- ${b}`);
  out.push("");
}

// FAQ
out.push(`## 4. FAQ\n`);
out.push(`全部由已上線功能、隱私政策與條款推導。你手上的真實使用者提問是 AEO 引用價值最高的來源 — 建議對照一輪。\n`);
let total = 0;
for (const app of ["pikgeon", "babbby", "sotto", "dingpos"]) {
  const j = JSON.parse(readFileSync(`${app}/src/locales/${LOCALE[app]}/translation.json`, "utf8"));
  const items = j.faq?.items ?? {};
  const ids = Object.keys(items);
  total += ids.length;
  out.push(`### ${app}（${ids.length} 題）\n`);
  out.push(`來源：\`${app}/src/locales/en/translation.json\` → \`faq.items\`\n`);
  for (const id of ids) {
    out.push(`**${items[id].q}**`);
    out.push(`> ${items[id].a}\n`);
  }
}
out.push(`共 ${total} 題。\n`);

out.push(`## 5. og:image x5\n`);
out.push(`1200x630，各 app 品牌色與字體。重新產生：\`npm run og-images\`（調整 \`scripts/generate-og-images.mjs\` 的 \`CARDS\`）。\n`);
for (const app of APPS) out.push(`- \`${app}/public/og-image.png\``);
out.push("");

const doc = out.join("\n");
writeFileSync("docs/drafts/seo-aeo-copy-review.md", doc);
console.log(`written: docs/drafts/seo-aeo-copy-review.md (${doc.length} chars, ${total} FAQ items)`);
