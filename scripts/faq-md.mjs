// Turns a DingPOS FAQ draft written in Markdown (faq-writer output, after
// guide-cleaner) into a FAQ pack entry, so the reviewed text reaches the pack
// without being retyped. Contract and format: .pi/faq/dingpos.md.
//
//   node scripts/faq-md.mjs <draft.md> <pack.js> [--dry-run]
//
// A slug already in the pack is replaced in place, keeping its category and
// `since` (a draft that disagrees is refused: both are facts, not wording).
// A new slug is inserted after the last article of its category.
//
// Draft format — frontmatter, then one block per blank-line-separated chunk:
//   ---
//   slug: <kebab-case>
//   category: <category key>
//   question: <question>
//   keywords: <term>, <term>
//   since: <version>               (optional)
//   related: <slug>, <slug>        (optional)
//   ---
//   plain line        → { type: "p" }      ## heading → { type: "h2" }
//   > line            → { type: "note" }   - item     → { type: "list" }
//   1. item           → { type: "steps" }
//   ![alt](shot:<name>)  or  ![alt](shot:<name> "caption")  → { type: "shot" }
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { isDeepStrictEqual } from "node:util";
import { assertPlainText, frontmatterValue, parseBlock, splitDraft } from "./guide-md.mjs";

const FRONTMATTER_KEYS = new Set(["slug", "category", "question", "keywords", "since", "related"]);
const SHOT_LINE = /^!\[([^\]]+)\]\(shot:([a-z0-9]+(?:-[a-z0-9]+)*)(?: "([^"]+)")?\)$/;
const list = (raw) => (raw ? raw.split(",").map((item) => item.trim()).filter(Boolean) : []);

function parseFrontmatter(lines, startLine) {
  const meta = {};
  lines.forEach((line, i) => {
    const at = `line ${startLine + i}`;
    const match = line.match(/^([a-z]+):\s*(.*)$/);
    if (!match) throw new Error(`${at}: expected "key: value" in frontmatter`);
    const [, key, raw] = match;
    if (!FRONTMATTER_KEYS.has(key)) throw new Error(`${at}: unknown frontmatter key "${key}"`);
    meta[key] = frontmatterValue(raw.trim(), at);
  });
  for (const key of ["slug", "category", "question", "keywords"]) {
    if (!meta[key]) throw new Error(`frontmatter: missing ${key}`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(meta.slug)) throw new Error(`frontmatter: slug "${meta.slug}" is not kebab case`);
  if (meta.since !== undefined && !/^\d+\.\d+(\.\d+)?$/.test(meta.since)) {
    throw new Error(`frontmatter: since "${meta.since}" is not a marketing version`);
  }
  return meta;
}

function parseChunk(chunk) {
  const at = `line ${chunk.start}`;
  const shot = chunk.lines.length === 1 && chunk.lines[0].match(SHOT_LINE);
  if (shot) {
    const [, alt, name, caption] = shot;
    return caption ? { type: "shot", name, alt: alt.trim(), caption: caption.trim() } : { type: "shot", name, alt: alt.trim() };
  }
  assertPlainText(chunk);
  return parseBlock(chunk.lines, at);
}

/** The FAQ article a draft describes, keys in pack order. */
export function parseFaqMarkdown(source) {
  const { meta: metaLines, metaStart, chunks } = splitDraft(source);
  const meta = parseFrontmatter(metaLines, metaStart);
  const content = chunks.map(parseChunk);
  if (content[0].type !== "p") throw new Error(`the answer must open with a paragraph, not "${content[0].type}"`);
  return {
    slug: meta.slug,
    category: meta.category,
    ...(meta.since !== undefined && { since: meta.since }),
    question: meta.question,
    keywords: list(meta.keywords),
    content,
    related: list(meta.related),
  };
}

const str = (text) => JSON.stringify(text);

function formatBlock(block) {
  if (block.items) {
    const items = block.items.map((item) => `          ${str(item)},`).join("\n");
    return `      {\n        type: ${str(block.type)},\n        items: [\n${items}\n        ],\n      },`;
  }
  if (block.type === "shot") {
    const caption = block.caption === undefined ? "" : `, caption: ${str(block.caption)}`;
    return `      { type: "shot", name: ${str(block.name)}, alt: ${str(block.alt)}${caption} },`;
  }
  return `      { type: ${str(block.type)}, text: ${str(block.text)} },`;
}

export function formatArticle(article) {
  return [
    "  {",
    `    slug: ${str(article.slug)},`,
    `    category: ${str(article.category)},`,
    ...(article.since !== undefined ? [`    since: ${str(article.since)},`] : []),
    `    question: ${str(article.question)},`,
    `    keywords: [${article.keywords.map(str).join(", ")}],`,
    "    content: [",
    ...article.content.map(formatBlock),
    "    ],",
    `    related: [${article.related.map(str).join(", ")}],`,
    "  },",
  ].join("\n");
}

// Two imports within one millisecond would share a Date.now() query and hit the module cache.
let importCount = 0;
const importFresh = (file) => import(`${pathToFileURL(file).href}?v=${++importCount}`);

/** [start, end) of an article's `  {` … `  },` text in a pack formatted like formatArticle. */
function articleSpan(source, slug, packFile) {
  const at = source.indexOf(`\n    slug: ${str(slug)},\n`);
  if (at < 0) throw new Error(`${packFile}: cannot find the text of article "${slug}"`);
  const start = source.lastIndexOf("\n  {\n", at);
  const close = source.indexOf("\n  },", at);
  if (start < 0 || close < 0) throw new Error(`${packFile}: article "${slug}" is not formatted as "  {" … "  },"`);
  return [start + 1, close + "\n  },".length];
}

/** Replaces the article with the draft's slug, or inserts it after its category's last article. */
export async function writeToPack(article, packFile, { dryRun = false } = {}) {
  const file = resolve(packFile);
  const { articles, categories } = await importFresh(file);
  if (!Array.isArray(articles)) throw new Error(`${packFile}: no exported articles array`);
  if (!categories.some((c) => c.key === article.category)) {
    throw new Error(`${packFile}: unknown category "${article.category}"`);
  }

  const source = readFileSync(file, "utf8");
  const existing = articles.find((entry) => entry.slug === article.slug);
  let next;
  if (existing) {
    if (existing.category !== article.category) {
      throw new Error(`${packFile}: "${article.slug}" is in category "${existing.category}", the draft says "${article.category}"`);
    }
    if (existing.since !== article.since) {
      throw new Error(`${packFile}: "${article.slug}" has since ${existing.since}, the draft says ${article.since}; since never changes`);
    }
    const [start, end] = articleSpan(source, article.slug, packFile);
    next = `${source.slice(0, start)}${formatArticle(article)}${source.slice(end)}`;
  } else {
    const last = articles.findLast((entry) => entry.category === article.category);
    if (!last) throw new Error(`${packFile}: category "${article.category}" has no article to insert after`);
    const [, end] = articleSpan(source, last.slug, packFile);
    next = `${source.slice(0, end)}\n${formatArticle(article)}${source.slice(end)}`;
  }
  if (dryRun) return existing ? "replace" : "insert";

  writeFileSync(file, next);
  const written = (await importFresh(file)).articles.find((entry) => entry.slug === article.slug);
  if (!isDeepStrictEqual(written, article)) throw new Error(`${packFile}: the written entry does not read back as the draft`);
  return existing ? "replace" : "insert";
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const args = process.argv.slice(2);
  const dryRun = args.includes("--dry-run");
  const [draft, pack] = args.filter((arg) => arg !== "--dry-run");
  if (!draft || !pack) {
    console.error("usage: node scripts/faq-md.mjs <draft.md> <pack.js> [--dry-run]");
    process.exit(2);
  }
  try {
    const article = parseFaqMarkdown(readFileSync(draft, "utf8"));
    const action = await writeToPack(article, pack, { dryRun });
    console.log(`${dryRun ? "would " : ""}${action} "${article.slug}" (${article.content.length} blocks) in ${pack}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
