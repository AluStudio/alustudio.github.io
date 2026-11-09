// Turns a guide draft written in Markdown (guide-writer output, after
// guide-cleaner) into a guide pack entry, so the reviewed text reaches the pack
// without being retyped. Procedure: docs/specs/seo-aeo.md §獲客文章.
//
//   node scripts/guide-md.mjs <draft.md> <pack.js>
//
// Appends the article to the pack's `articles` array; a slug already in the
// pack is refused (edit an existing guide in the pack itself).
//
// Draft format — frontmatter, then one block per blank-line-separated chunk:
//   ---
//   slug: <kebab-case>
//   title: <title>
//   summary: <summary>
//   related: <slug>, <slug>        (optional)
//   ---
//   plain line        → { type: "p" }      ## heading → { type: "h2" }
//   > line            → { type: "note" }   - item     → { type: "list" }
//   1. item           → { type: "steps" }

import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { isDeepStrictEqual } from "node:util";

const FRONTMATTER_KEYS = new Set(["slug", "title", "summary", "related"]);
const INLINE_MARKUP = /\*\*|__|`|\]\(|<\/?[a-z]/i;
const LIST_ITEM = /^- /;
const STEP_ITEM = /^\d+\. /;

function frontmatterValue(raw, at) {
  if (!raw.startsWith('"')) return raw;
  try {
    return JSON.parse(raw);
  } catch {
    throw new Error(`${at}: unparsable quoted value`);
  }
}

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
  for (const key of ["slug", "title", "summary"]) {
    if (!meta[key]) throw new Error(`frontmatter: missing ${key}`);
  }
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(meta.slug)) throw new Error(`frontmatter: slug "${meta.slug}" is not kebab case`);
  const related = meta.related ? meta.related.split(",").map((slug) => slug.trim()).filter(Boolean) : [];
  return { slug: meta.slug, title: meta.title, summary: meta.summary, related };
}

function itemsOf(lines, pattern, kind, at) {
  return lines.map((line, i) => {
    if (!pattern.test(line)) throw new Error(`${at}: line ${i + 1} of a ${kind} block is not a ${kind} item`);
    return line.replace(pattern, "").trim();
  });
}

function parseBlock(lines, at) {
  const [first] = lines;
  if (LIST_ITEM.test(first)) return { type: "list", items: itemsOf(lines, LIST_ITEM, "list", at) };
  if (STEP_ITEM.test(first)) return { type: "steps", items: itemsOf(lines, STEP_ITEM, "steps", at) };
  if (lines.length > 1) throw new Error(`${at}: a paragraph, heading or note must be one line`);
  if (first.startsWith("## ")) return { type: "h2", text: first.slice(3).trim() };
  if (first.startsWith("#")) throw new Error(`${at}: only ## headings are allowed`);
  if (first.startsWith("> ")) return { type: "note", text: first.slice(2).trim() };
  return { type: "p", text: first.trim() };
}

export function parseGuideMarkdown(source) {
  const lines = source.replace(/\r\n/g, "\n").split("\n");
  if (lines[0] !== "---") throw new Error("line 1: the draft must start with --- frontmatter");
  const end = lines.indexOf("---", 1);
  if (end < 0) throw new Error("frontmatter: no closing ---");
  const meta = parseFrontmatter(lines.slice(1, end), 2);

  const content = [];
  let chunk = [];
  let chunkStart = 0;
  const flush = () => {
    if (chunk.length) content.push(parseBlock(chunk, `line ${chunkStart}`));
    chunk = [];
  };
  lines.slice(end + 1).forEach((line, i) => {
    const lineNo = end + 2 + i;
    if (!line.trim()) return flush();
    if (INLINE_MARKUP.test(line)) throw new Error(`line ${lineNo}: inline Markdown or HTML is not supported in guides`);
    if (!chunk.length) chunkStart = lineNo;
    chunk.push(line.trim());
  });
  flush();
  if (!content.length) throw new Error("the draft has no body");

  return { slug: meta.slug, title: meta.title, summary: meta.summary, content, related: meta.related };
}

const str = (text) => JSON.stringify(text);

function formatBlock(block) {
  if (block.items) {
    const items = block.items.map((item) => `          ${str(item)},`).join("\n");
    return `      {\n        type: ${str(block.type)},\n        items: [\n${items}\n        ],\n      },`;
  }
  return `      { type: ${str(block.type)}, text: ${str(block.text)} },`;
}

export function formatArticle(article) {
  return [
    "  {",
    `    slug: ${str(article.slug)},`,
    `    title: ${str(article.title)},`,
    `    summary: ${str(article.summary)},`,
    "    content: [",
    ...article.content.map(formatBlock),
    "    ],",
    `    related: [${article.related.map(str).join(", ")}],`,
    "  },",
  ].join("\n");
}

const importFresh = (file) => import(`${pathToFileURL(file).href}?t=${Date.now()}`);

export async function appendToPack(article, packFile) {
  const file = resolve(packFile);
  const { articles } = await importFresh(file);
  if (!Array.isArray(articles)) throw new Error(`${packFile}: no exported articles array`);
  if (articles.some((entry) => entry.slug === article.slug)) {
    throw new Error(`${packFile}: slug "${article.slug}" already exists; edit that guide in the pack itself`);
  }

  const source = readFileSync(file, "utf8");
  const close = source.lastIndexOf("\n];");
  if (close < 0) throw new Error(`${packFile}: cannot find the closing ]; of articles`);
  writeFileSync(file, `${source.slice(0, close)}\n${formatArticle(article)}${source.slice(close)}`);

  const written = (await importFresh(file)).articles.at(-1);
  if (!isDeepStrictEqual(written, article)) throw new Error(`${packFile}: the appended entry does not read back as the draft`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const [draft, pack] = process.argv.slice(2);
  if (!draft || !pack) {
    console.error("usage: node scripts/guide-md.mjs <draft.md> <pack.js>");
    process.exit(2);
  }
  try {
    const article = parseGuideMarkdown(readFileSync(draft, "utf8"));
    await appendToPack(article, pack);
    console.log(`appended "${article.slug}" (${article.content.length} blocks) to ${pack}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}
