#!/usr/bin/env node
/**
 * Generate DingPOS's zh-Hans website copy from its zh-Hant source.
 *
 * zh-Hans is derived, never hand-edited, so it cannot drift from zh-Hant or
 * fall behind it. Every string value of the zh-Hant UI strings and FAQ pack
 * runs through, in order:
 *
 *   1. opencc-js `twp → cn` — Traditional (Taiwan, phrase level) → Simplified.
 *   2. APP_GLOSSARY — the DingPOS app's own zh-Hans glossary, mirrored verbatim
 *      so the website names every screen and feature the way the app does.
 *   3. SITE_GLOSSARY — website-only fixes, for prose the app's short UI
 *      strings never contain.
 *   4. 「」『』 → “” ‘’, the mainland quotation marks.
 *   5. Row/column swap for ROW_COLUMN_ENTRIES — Taiwan reads 列 as row, the
 *      mainland reads 行 as row and 列 as column.
 *
 * OVERRIDES replace a whole value for one entry and pin the zh-Hant source
 * they were written against, so a changed source cannot keep a stale override.
 *
 * Gates (nothing is written when one fails): a UI value keeps its `{{…}}`
 * placeholders; an FAQ value that changed must sit in a TEXT_FIELDS field, so
 * slugs, links, asset paths and `since` pass through untouched.
 *
 * Usage:
 *   npm run zh-hans [-- --base <ref>]   write zh-Hans + the review packet
 *   node scripts/gen-zh-hans.mjs --check  exit 1 when a zh-Hans file is stale
 *
 * Procedure for changing copy: docs/specs/seo-aeo.md §多語系 URL.
 */

import process from "node:process";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as OpenCC from "opencc-js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const PATHS = {
  uiEn: "dingpos/src/locales/en/translation.json",
  uiHant: "dingpos/src/locales/zh-Hant/translation.json",
  uiHans: "dingpos/src/locales/zh-Hans/translation.json",
  faqEn: "dingpos/src/data/faq/articles.en.js",
  faqHant: "dingpos/src/data/faq/articles.zh-Hant.js",
  faqHans: "dingpos/src/data/faq/articles.zh-Hans.js",
};

const DEFAULT_PACKET = ".logs/zh-hans-review.json";

const GENERATED_NOTE =
  "Generated from zh-Hant by scripts/gen-zh-hans.mjs. Do not edit: change the zh-Hant source or the script, then run `npm run zh-hans`.";

// Mirrored verbatim from the DingPOS app repo, `scripts/gen-zh-hans.py`
// GLOSSARY — change both together, and never edit an entry here alone: a
// website-only fix goes in SITE_GLOSSARY or OVERRIDES. Applied in order; a
// longer phrase comes before any shorter phrase it contains.
export const APP_GLOSSARY = [
  // OpenCC mistranslations
  ["高端", "高级"],
  ["激活", "启用"],
  ["禁用", "停用"],
  ["脱机", "离线"],
  ["发布一", "释放一"],
  ["购对象数", "购买件数"],
  ["存盘", "保存"],
  ["链接", "关联"],
  ["运行备份", "执行备份"],
  ["异动审核", "异动核查"],
  ["异动", "变动"],
  ["iCloud 云碟", "iCloud 云盘"],
  ["还原购买", "恢复购买"],
  ["币别", "币种"],
  // Taiwan usage OpenCC keeps
  ["帐", "账"],
  ["点数", "积分"],
  ["%d 点", "%d 积分"],
  ["%@ 点", "%@ 积分"],
  ["%2$d 点", "%2$d 积分"],
  ["%1$@ 点", "%1$@ 积分"],
  ["折抵", "抵扣"],
  ["红利抵扣", "积分抵扣"],
  ["红利积分", "积分"],
  ["核准", "审批"],
  ["品项", "商品"],
  ["预设", "默认"],
  ["透过", "通过"],
  ["回报", "反馈"],
  ["轻点", "点击"],
  ["点按", "点击"],
  ["唯读", "只读"],
  ["无法复原", "无法撤销"],
  ["复原", "恢复"],
  ["重设", "重置"],
  ["纪录", "记录"],
  ["清单", "列表"],
  ["拖曳", "拖动"],
  ["行动支付", "移动支付"],
  ["动作", "操作"],
  ["范本", "模板"],
  ["相片", "照片"],
  ["CSV 档", "CSV 文件"],
  ["Excel 档", "Excel 文件"],
  ["选档", "选择文件"],
  ["汇不进去", "导入不了"],
  ["试算表", "电子表格"],
];

// Website-only replacements, applied after APP_GLOSSARY.
export const SITE_GLOSSARY = [];

// Entry ids (or id prefixes ending in ":") whose 列 means a grid row.
export const ROW_COLUMN_ENTRIES = ["faq:import-csv:"];

// Entry id → [zh-Hant source the override was written for, zh-Hans value].
export const OVERRIDES = {
  // Page titles with no character that converts would duplicate the zh-Hant
  // page's title. "套用" stays: the app's zh-Hans button says 套用.
  "faq:apply-discounts:question": ["如何套用折扣？", "怎么套用折扣？"],
  "faq:plans-compare:question": ["Lite、Standard、Pro 方案差在哪？", "Lite、Standard、Pro 方案有什么区别？"],
};

const QUOTES = [
  ["「", "“"],
  ["」", "”"],
  ["『", "‘"],
  ["』", "’"],
];

// FAQ fields that hold display text; any other field must convert to itself.
export const TEXT_FIELDS = new Set(["label", "question", "keywords", "text", "items", "alt", "caption"]);

const PLACEHOLDER = /\{\{\s*[^}]+?\s*\}\}/g;

const toSimplified = OpenCC.Converter({ from: "twp", to: "cn" });

const swapRowColumn = (text) => text.replaceAll("列", "\0").replaceAll("栏", "列").replaceAll("\0", "行");

const matchesEntry = (id, pattern) => (pattern.endsWith(":") ? id.startsWith(pattern) : id === pattern);

/** zh-Hant → zh-Hans for one entry, without the override and gate layers. */
export function convertText(text, id = "", rowColumnEntries = ROW_COLUMN_ENTRIES) {
  let out = toSimplified(text);
  for (const [from, to] of APP_GLOSSARY) out = out.replaceAll(from, to);
  for (const [from, to] of SITE_GLOSSARY) out = out.replaceAll(from, to);
  for (const [from, to] of QUOTES) out = out.replaceAll(from, to);
  if (rowColumnEntries.some((pattern) => matchesEntry(id, pattern))) out = swapRowColumn(out);
  return out;
}

/** Map every string in `value`, passing its key path. Structure is preserved. */
function mapStrings(value, path, fn) {
  if (typeof value === "string") return fn(value, path);
  if (Array.isArray(value)) return value.map((item, i) => mapStrings(item, [...path, i], fn));
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, [...path, k], fn)]));
  }
  return value;
}

const fieldOf = (path) => [...path].reverse().find((segment) => typeof segment === "string");

const uiId = (path) => `ui:${path.join(".")}`;

/** `faq:<slug>:<path>` for article strings, `faq:category:<key>:<field>` for categories. */
function faqId(pack, path) {
  const [list, index, ...rest] = path;
  if (list === "articles") return `faq:${pack.articles[index].slug}:${rest.join(".")}`;
  return `faq:category:${pack.categories[index].key}:${rest.join(".")}`;
}

const placeholders = (text) => (text.match(PLACEHOLDER) ?? []).sort().join(" ");

/**
 * Convert both zh-Hant sources. Returns the converted data plus every gate
 * violation; callers write nothing when `errors` is non-empty.
 */
export function convertSources(
  { ui, faq },
  { overrides = OVERRIDES, rowColumnEntries = ROW_COLUMN_ENTRIES } = {},
) {
  const errors = [];
  const seen = new Set();

  const convert = (text, id) => {
    seen.add(id);
    if (Object.hasOwn(overrides, id)) {
      const [source, value] = overrides[id];
      if (source !== text) errors.push(`${id}: OVERRIDES was written for "${source}", but zh-Hant is now "${text}"`);
      return value;
    }
    return convertText(text, id, rowColumnEntries);
  };

  const uiOut = mapStrings(ui, [], (text, path) => {
    const id = uiId(path);
    const out = convert(text, id);
    if (placeholders(out) !== placeholders(text)) {
      errors.push(`${id}: placeholders changed from [${placeholders(text)}] to [${placeholders(out)}]`);
    }
    return out;
  });

  const faqData = { categories: faq.categories, articles: faq.articles };
  const faqOut = mapStrings(faqData, [], (text, path) => {
    const id = faqId(faqData, path);
    const out = convert(text, id);
    if (out !== text && !TEXT_FIELDS.has(fieldOf(path))) {
      errors.push(`${id}: field "${fieldOf(path)}" is not a text field, but conversion changed "${text}" to "${out}"`);
    }
    return out;
  });

  for (const id of Object.keys(overrides)) {
    if (!seen.has(id)) errors.push(`OVERRIDES names "${id}", which no zh-Hant entry has`);
  }
  for (const pattern of rowColumnEntries) {
    if (![...seen].some((id) => matchesEntry(id, pattern))) {
      errors.push(`ROW_COLUMN_ENTRIES names "${pattern}", which no zh-Hant entry matches`);
    }
  }

  return { ui: uiOut, faq: faqOut, errors };
}

const readJson = (path) => JSON.parse(readFileSync(join(ROOT, path), "utf8"));

async function importModule(path) {
  return import(pathToFileURL(join(ROOT, path)).href);
}

/** File contents for both zh-Hans outputs, keyed by repo-relative path. */
export function renderOutputs({ ui, faq }) {
  const uiText = `${JSON.stringify({ "//": GENERATED_NOTE, ...ui }, null, 2)}\n`;
  const faqText = [
    `// ${GENERATED_NOTE}`,
    "",
    `export const categories = ${JSON.stringify(faq.categories, null, 2)};`,
    "",
    `export const articles = ${JSON.stringify(faq.articles, null, 2)};`,
    "",
  ].join("\n");
  return { [PATHS.uiHans]: uiText, [PATHS.faqHans]: faqText };
}

/** Generate from the working tree; exits on a gate failure. */
export async function generate() {
  const converted = convertSources({ ui: readJson(PATHS.uiHant), faq: await importModule(PATHS.faqHant) });
  if (converted.errors.length) {
    console.error("zh-Hans generation failed, nothing written:");
    for (const e of converted.errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  return renderOutputs(converted);
}

/** Repo-relative paths whose committed content differs from a fresh generation. */
export async function checkStale() {
  const outputs = await generate();
  return Object.entries(outputs)
    .filter(([path, text]) => !existsSync(join(ROOT, path)) || readFileSync(join(ROOT, path), "utf8") !== text)
    .map(([path]) => path);
}

// ── Review packet ────────────────────────────────────────────

function gitShow(ref, path) {
  try {
    return execFileSync("git", ["show", `${ref}:${path}`], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] });
  } catch {
    return null;
  }
}

/** All six sources at a git ref (missing files → null). */
async function sourcesAt(ref) {
  const dir = mkdtempSync(join(tmpdir(), "zh-hans-"));
  const load = async (path) => {
    const text = gitShow(ref, path);
    if (text === null) return null;
    if (path.endsWith(".json")) return JSON.parse(text);
    const file = join(dir, `${path.replaceAll("/", "_")}.mjs`);
    writeFileSync(file, text);
    return import(pathToFileURL(file).href);
  };
  return Object.fromEntries(await Promise.all(Object.entries(PATHS).map(async ([k, p]) => [k, await load(p)])));
}

async function sourcesNow() {
  const load = (path) => (path.endsWith(".json") ? readJson(path) : importModule(path));
  return Object.fromEntries(await Promise.all(Object.entries(PATHS).map(async ([k, p]) => [k, await load(p)])));
}

function leaves(object, path = [], out = new Map()) {
  for (const [key, value] of Object.entries(object ?? {})) {
    if (key === "//") continue;
    if (value && typeof value === "object") leaves(value, [...path, key], out);
    else out.set(uiId([...path, key]), value);
  }
  return out;
}

/** Review units: one per UI key, one per FAQ article, one per FAQ category. */
export function reviewEntries(sources) {
  const entries = new Map();
  const ui = ["uiEn", "uiHant", "uiHans"].map((k) => leaves(sources[k]));
  for (const id of ui[1].keys()) entries.set(id, { en: ui[0].get(id), zh_hant: ui[1].get(id), zh_hans: ui[2].get(id) });

  const faq = ["faqEn", "faqHant", "faqHans"].map((k) => sources[k]);
  const by = (pack, list, key) => new Map((pack?.[list] ?? []).map((item) => [item[key], item]));
  for (const [list, key, prefix] of [
    ["articles", "slug", "faq:"],
    ["categories", "key", "faq:category:"],
  ]) {
    const maps = faq.map((pack) => by(pack, list, key));
    for (const id of maps[1].keys()) {
      entries.set(`${prefix}${id}`, { en: maps[0].get(id), zh_hant: maps[1].get(id), zh_hans: maps[2].get(id) });
    }
  }
  return entries;
}

export function diffEntries(now, then) {
  const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  return [...now]
    .filter(([id, values]) => !same(values, then.get(id)))
    .map(([id, values]) => ({ id, ...values, before: then.has(id) ? then.get(id) : null }));
}

async function writePacket(out, base) {
  const rows = diffEntries(reviewEntries(await sourcesNow()), reviewEntries(await sourcesAt(base)));
  mkdirSync(dirname(join(ROOT, out)), { recursive: true });
  writeFileSync(join(ROOT, out), `${JSON.stringify({ base, count: rows.length, entries: rows }, null, 2)}\n`);
  console.log(`${rows.length} entr${rows.length === 1 ? "y" : "ies"} changed since ${base} → ${out}`);
  console.log(
    rows.length
      ? "next: review them with the zh-hans-reviewer agent (docs/specs/seo-aeo.md §多語系 URL)"
      : "nothing to review",
  );
}

// ── CLI ──────────────────────────────────────────────────────

function argValue(args, name, fallback) {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args[i + 1];
}

async function main(args) {
  if (args.includes("--check")) {
    const stale = await checkStale();
    if (stale.length) {
      console.error("zh-Hans is stale — run `npm run zh-hans`:");
      for (const path of stale) console.error(`  ${path}`);
      process.exit(1);
    }
    console.log("zh-Hans is current");
    return;
  }
  for (const [path, text] of Object.entries(await generate())) {
    mkdirSync(dirname(join(ROOT, path)), { recursive: true });
    writeFileSync(join(ROOT, path), text);
    console.log(`wrote ${relative(ROOT, join(ROOT, path))}`);
  }
  await writePacket(argValue(args, "--packet", DEFAULT_PACKET), argValue(args, "--base", "origin/main"));
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main(process.argv.slice(2));
}
