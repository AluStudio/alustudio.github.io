#!/usr/bin/env node
/**
 * Generate each app's zh-Hans website copy from its zh-Hant source.
 *
 * zh-Hans is derived, never hand-edited, so it cannot drift from zh-Hant or
 * fall behind it. Every app in APPS has a UI strings file and one content pack
 * (DingPOS: FAQ articles; Sotto: guides). Every string value of both runs
 * through, in order:
 *
 *   1. opencc-js `twp → cn` — Traditional (Taiwan, phrase level) → Simplified.
 *   2. appGlossary — the app's own zh-Hans wording, so the website names every
 *      screen and feature the way the app does.
 *   3. siteGlossary — website-only fixes, for prose the app's short UI strings
 *      never contain.
 *   4. 「」『』 → “” ‘’, the mainland quotation marks.
 *   5. Row/column swap for rowColumnEntries — Taiwan reads 列 as row, the
 *      mainland reads 行 as row and 列 as column.
 *
 * overrides replace a whole value for one entry and pin the zh-Hant source
 * they were written against, so a changed source cannot keep a stale override.
 *
 * Gates (nothing is written when one fails): a UI value keeps its `{{…}}`
 * placeholders; a pack value that changed must sit in one of the app's
 * textFields, so slugs, links, asset paths and `since` pass through untouched.
 *
 * Usage:
 *   npm run zh-hans [-- --base <ref>]   write zh-Hans + one review packet per app
 *   node scripts/gen-zh-hans.mjs --check  exit 1 when a zh-Hans file is stale
 *
 * Procedure for changing copy: docs/specs/seo-aeo.md §簡中由繁中產生.
 */

import process from "node:process";
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import * as OpenCC from "opencc-js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const packetPath = (app) => `.logs/zh-hans-review-${app}.json`;

const GENERATED_NOTE =
  "Generated from zh-Hant by scripts/gen-zh-hans.mjs. Do not edit: change the zh-Hant source or the script, then run `npm run zh-hans`.";

// ── DingPOS ──────────────────────────────────────────────────

// Mirrored verbatim from the DingPOS app repo, `scripts/gen-zh-hans.py`
// GLOSSARY — change both together, and never edit an entry here alone: a
// website-only fix goes in DINGPOS_SITE_GLOSSARY or DINGPOS_OVERRIDES. Applied in order; a
// longer phrase comes before any shorter phrase it contains.
const DINGPOS_APP_GLOSSARY = [
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

// Website-only replacements, applied after the app glossary. A term the app's own
// zh-Hans UI uses (仪表板, 回购率, 自订, 月缴, 集点, 画面…) stays as the app
// says it, so the FAQ names screens the way shop owners see them; fix those in
// the app first. Same ordering rule as APP_GLOSSARY.
const DINGPOS_SITE_GLOSSARY = [
  // Converter mistranslations
  ["结列表张", "结清单张"], // APP_GLOSSARY 清单→列表 also hits 結清單張 (settle one bill)
  ["数据报括", "数据包括"], // OpenCC splits 資料包括 as 資料包 + 括
  ["小数字数", "小数位数"],
  ["内核", "核心"], // 核心 is not an OS kernel
  ["开店精灵", "开店向导"], // mainland 精灵 is a sprite
  ["该车位", "该购物车"], // mainland 车位 is a parking space
  ["订单时序列表", "按时间排序的订单列表"],
  ["数量会回复", "数量会恢复"], // 回復 = restore; mainland 回复 = reply
  ["不经手实际金流", "不经手实际收付款"],
  ["不经手金流", "不经手收付款"],
  ["付款金流", "支付环节"],
  ["串接金流", "对接支付"],
  // 列 as a row or bar: the mainland reads 列 as a column
  ["购物车列", "购物车栏"],
  ["期间列", "期间栏"],
  // Points: 点数→积分 in APP_GLOSSARY misses the bare unit
  ["另外发点", "另外发积分"],
  ["（赚点）", "（赚积分）"],
  ["（用点，", "（用积分，"],
  ["Y 点", "Y 积分"],
  ["N 点", "N 积分"],
  ["累点", "累积积分"],
  // Taiwan usage the converter keeps
  ["叫出", "调出"],
  ["跳出", "弹出"],
  ["略过", "跳过"],
  ["落差", "差异"],
  ["预带", "预填"],
  ["备份档", "备份文件"],
  ["单档", "单个文件"],
  ["系统需求", "系统要求"],
  ["使用情境", "使用场景"],
  ["编号分页", "编号标签"],
  ["对不到", "匹配不到"],
  ["对到", "匹配到"],
  ["当机反馈", "崩溃报告"],
  ["当机", "崩溃"],
  ["icloud 云碟", "icloud 云盘"], // APP_GLOSSARY's iCloud 云碟 is case-sensitive
  ["运行一次备份", "执行一次备份"],
  ["触觉回馈", "触觉反馈"],
  ["震动回馈", "震动反馈"],
  ["选用", "可选"],
  ["本地端", "本地"],
  ["辨识", "识别"],
  ["连动", "联动"],
  ["认列", "确认"],
  ["成长率", "增长率"],
  ["Apple 账号", "Apple 账户"], // the name mainland iOS Settings shows
  ["订阅项目", "订阅"],
  ["行销", "营销"],
  ["串接", "对接"],
];

// Entry ids (or id prefixes ending in ":") whose 列 means a grid row.
const DINGPOS_ROW_COLUMN_ENTRIES = ["faq:import-csv:"];

// Entry id → [zh-Hant source the override was written for, zh-Hans value].
const DINGPOS_OVERRIDES = {
  // Page titles with no character that converts would duplicate the zh-Hant
  // page's title. "套用" stays: the app's zh-Hans button says 套用.
  "faq:apply-discounts:question": ["如何套用折扣？", "怎么套用折扣？"],
  "faq:plans-compare:question": ["Lite、Standard、Pro 方案差在哪？", "Lite、Standard、Pro 方案有什么区别？"],
  "ui:stories.reports.shot_alt": [
    "儀表板顯示今日營收、總折扣、利潤與平均客單，下方是付款方式圓餅圖與熱銷商品排行",
    "仪表板显示今日营收、总折扣、利润与平均客单价，下方是付款方式饼图与热销商品排行",
  ],
  "faq:supported-devices:content.0.text": [
    "DingPOS 目前支援 iPadOS 17 以上的 iPad，以橫向畫面為主要設計。",
    "DingPOS 目前支持 iPadOS 17 以上的 iPad，以横屏使用为主要设计。",
  ],
  // 資料 here is a staff member's profile page, not their data.
  "faq:activity-log:content.1.items.3": [
    "訂單明細、商品詳情與員工資料也各有入口，只列跟它有關的紀錄。",
    "订单明细、商品详情与员工资料也各有入口，只列跟它有关的记录。",
  ],
  "faq:activity-log:keywords.1": ["稽核", "审计"], // the search term for audit, not 审核 (review)
  "faq:guide-composite:content.4.items.2": [
    "每件成員商品底下會寫出它分到的折扣，商品列的金額是扣完優惠後的金額。",
    "每件成员商品底下会写出它分到的折扣，商品行的金额是扣完优惠后的金额。",
  ],
  "faq:roadmap-payment-integration:keywords.0": ["金流", "支付接口"],
};

// ── Sotto ────────────────────────────────────────────────────

// The Sotto app has no zh-Hans generator to mirror; these are the terms its
// hand-written zh-Hans UI (sotto-ios zh-Hans.lproj) uses where the converter
// says something else. Change them together with the app's wording.
const SOTTO_APP_GLOSSARY = [
  ["自订", "自定义"],
  ["相片", "照片"],
  ["预设", "默认"],
  ["重设", "重置"],
  ["拖曳", "拖动"],
  ["帐号", "账号"],
  ["拷贝", "复制"],
  ["略过", "跳过"],
  ["纪录", "记录"],
  ["回复购买", "恢复购买"],
  ["隐私权政策", "隐私政策"],
  ["全域", "全局"],
  ["钉选", "置顶"],
  ["内衣尺寸", "内衣尺码"],
  ["帽子尺寸", "帽子尺码"],
];

// Website-only replacements for Sotto, applied after SOTTO_APP_GLOSSARY.
const SOTTO_SITE_GLOSSARY = [
  // Taiwan wording opencc leaves (mainland form; reviewed 2026-10 by zh-hans-reviewer)
  ["当机回报", "崩溃报告"], // before 当机
  ["当机", "崩溃"],
  ["透过", "通过"],
  ["量测", "测量"],
  ["辨识", "识别"],
  ["本地端", "本地"],
  ["身分", "身份"],
  ["权杖", "令牌"],
  ["纸本", "纸质"],
  ["现况", "现状"],
  ["选配", "可选"],
  ["选择性的", "可选的"],
  ["遗失", "丢失"],
  ["复原", "恢复"],
  ["备份档", "备份文件"],
  ["反向工程", "逆向工程"],
  ["公分", "厘米"],
  ["公厘", "毫米"],
  ["试算表", "电子表格"],
  ["送礼记录画面", "送礼记录界面"],
  ["导览", "导航"],
  ["PIN、图形", "PIN、图案"], // Android pattern lock
  ["主动运行", "主动执行"],
  ["⋯⋯", "……"],
  // Converter mistranslations
  ["激活", "启用"], // 啟用
  ["内核", "核心"], // 核心 → kernel
  ["链接", "关联"], // 連結 an account, not a hyperlink
  ["脱机", "离线"], // 離線
  ["通信录", "通讯录"], // 通訊錄
  // Measure word for notes: the app says 条笔记; a bare 则→条 would hit 规则 / 否则
  ["则笔记", "条笔记"],
  ["则新笔记", "条新笔记"],
  ["则预填", "条预填"],
];

const SOTTO_OVERRIDES = {};

export const APPS = {
  dingpos: {
    paths: {
      uiEn: "dingpos/src/locales/en/translation.json",
      uiHant: "dingpos/src/locales/zh-Hant/translation.json",
      uiHans: "dingpos/src/locales/zh-Hans/translation.json",
      packEn: "dingpos/src/data/faq/articles.en.js",
      packHant: "dingpos/src/data/faq/articles.zh-Hant.js",
      packHans: "dingpos/src/data/faq/articles.zh-Hans.js",
    },
    packPrefix: "faq",
    appGlossary: DINGPOS_APP_GLOSSARY,
    siteGlossary: DINGPOS_SITE_GLOSSARY,
    rowColumnEntries: DINGPOS_ROW_COLUMN_ENTRIES,
    overrides: DINGPOS_OVERRIDES,
    textFields: new Set(["label", "question", "keywords", "text", "items", "alt", "caption"]),
  },
  sotto: {
    paths: {
      uiEn: "sotto/src/locales/en/translation.json",
      uiHant: "sotto/src/locales/zh-Hant/translation.json",
      uiHans: "sotto/src/locales/zh-Hans/translation.json",
      packEn: "sotto/src/data/guides/guides.en.js",
      packHant: "sotto/src/data/guides/guides.zh-Hant.js",
      packHans: "sotto/src/data/guides/guides.zh-Hans.js",
    },
    packPrefix: "guide",
    appGlossary: SOTTO_APP_GLOSSARY,
    siteGlossary: SOTTO_SITE_GLOSSARY,
    rowColumnEntries: [],
    overrides: SOTTO_OVERRIDES,
    textFields: new Set(["title", "summary", "text", "items", "head", "rows", "caption"]),
  },
};

// ── Conversion ───────────────────────────────────────────────

const QUOTES = [
  ["「", "“"],
  ["」", "”"],
  ["『", "‘"],
  ["』", "’"],
];

const PLACEHOLDER = /\{\{\s*[^}]+?\s*\}\}/g;

const toSimplified = OpenCC.Converter({ from: "twp", to: "cn" });

const swapRowColumn = (text) => text.replaceAll("列", "\0").replaceAll("栏", "列").replaceAll("\0", "行");

const matchesEntry = (id, pattern) => (pattern.endsWith(":") ? id.startsWith(pattern) : id === pattern);

/** zh-Hant → zh-Hans for one entry of `app`, without the override and gate layers. */
export function convertText(text, app, id = "") {
  let out = toSimplified(text);
  for (const [from, to] of app.appGlossary) out = out.replaceAll(from, to);
  for (const [from, to] of app.siteGlossary) out = out.replaceAll(from, to);
  for (const [from, to] of QUOTES) out = out.replaceAll(from, to);
  if (app.rowColumnEntries.some((pattern) => matchesEntry(id, pattern))) out = swapRowColumn(out);
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

/** `<prefix>:<slug>:<path>` for article strings, `<prefix>:category:<key>:<field>` for categories. */
function packId(prefix, pack, path) {
  const [list, index, ...rest] = path;
  if (list === "articles") return `${prefix}:${pack.articles[index].slug}:${rest.join(".")}`;
  return `${prefix}:category:${pack.categories[index].key}:${rest.join(".")}`;
}

/** The lists a pack module exports; categories are optional (Sotto's guides have none). */
const packData = (pack) => ({
  ...(pack.categories ? { categories: pack.categories } : {}),
  articles: pack.articles,
});

const placeholders = (text) => (text.match(PLACEHOLDER) ?? []).sort().join(" ");

/**
 * Convert one app's zh-Hant sources. Returns the converted data plus every
 * gate violation; callers write nothing when `errors` is non-empty.
 */
export function convertSources({ ui, pack }, app) {
  const errors = [];
  const seen = new Set();

  const convert = (text, id) => {
    seen.add(id);
    if (Object.hasOwn(app.overrides, id)) {
      const [source, value] = app.overrides[id];
      if (source !== text) errors.push(`${id}: OVERRIDES was written for "${source}", but zh-Hant is now "${text}"`);
      return value;
    }
    return convertText(text, app, id);
  };

  const uiOut = mapStrings(ui, [], (text, path) => {
    const id = uiId(path);
    const out = convert(text, id);
    if (placeholders(out) !== placeholders(text)) {
      errors.push(`${id}: placeholders changed from [${placeholders(text)}] to [${placeholders(out)}]`);
    }
    return out;
  });

  const data = packData(pack);
  const packOut = mapStrings(data, [], (text, path) => {
    const id = packId(app.packPrefix, data, path);
    const out = convert(text, id);
    if (out !== text && !app.textFields.has(fieldOf(path))) {
      errors.push(`${id}: field "${fieldOf(path)}" is not a text field, but conversion changed "${text}" to "${out}"`);
    }
    return out;
  });

  for (const id of Object.keys(app.overrides)) {
    if (!seen.has(id)) errors.push(`OVERRIDES names "${id}", which no zh-Hant entry has`);
  }
  for (const pattern of app.rowColumnEntries) {
    if (![...seen].some((id) => matchesEntry(id, pattern))) {
      errors.push(`rowColumnEntries names "${pattern}", which no zh-Hant entry matches`);
    }
  }

  return { ui: uiOut, pack: packOut, errors };
}

const readJson = (path) => JSON.parse(readFileSync(join(ROOT, path), "utf8"));

async function importModule(path) {
  return import(pathToFileURL(join(ROOT, path)).href);
}

/** File contents for both zh-Hans outputs of `app`, keyed by repo-relative path. */
export function renderOutputs({ ui, pack }, app) {
  const uiText = `${JSON.stringify({ "//": GENERATED_NOTE, ...ui }, null, 2)}\n`;
  const packText = [
    `// ${GENERATED_NOTE}`,
    "",
    ...(pack.categories ? [`export const categories = ${JSON.stringify(pack.categories, null, 2)};`, ""] : []),
    `export const articles = ${JSON.stringify(pack.articles, null, 2)};`,
    "",
  ].join("\n");
  return { [app.paths.uiHans]: uiText, [app.paths.packHans]: packText };
}

/** Generate every app from the working tree; exits on a gate failure. */
export async function generate() {
  const outputs = {};
  const errors = [];
  for (const [name, app] of Object.entries(APPS)) {
    const { uiHant } = app.paths;
    const converted = convertSources({ ui: readJson(uiHant), pack: await importModule(app.paths.packHant) }, app);
    errors.push(...converted.errors.map((e) => `[${name}] ${e}`));
    Object.assign(outputs, renderOutputs(converted, app));
  }
  if (errors.length) {
    console.error("zh-Hans generation failed, nothing written:");
    for (const e of errors) console.error(`  ✗ ${e}`);
    process.exit(1);
  }
  return outputs;
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

function gitLsFiles(ref, folder) {
  try {
    return execFileSync("git", ["ls-tree", "--name-only", ref, `${folder}/`], { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] })
      .split("\n")
      .filter((file) => file.endsWith(".js"));
  } catch {
    return [];
  }
}

/** All six sources of `app` at a git ref (missing files → null). */
export async function sourcesAt(app, ref) {
  const dir = mkdtempSync(join(tmpdir(), "zh-hans-"));
  writeFileSync(join(dir, "package.json"), '{ "type": "module" }\n');
  // A pack may import a sibling module (Sotto's ring-sizes.js), so each pack's
  // whole directory is written out at the same ref, at its repo-relative path.
  const staged = new Set();
  const stage = (folder) => {
    if (staged.has(folder)) return;
    staged.add(folder);
    for (const file of gitLsFiles(ref, folder)) {
      const text = gitShow(ref, file);
      if (text === null) continue;
      mkdirSync(dirname(join(dir, file)), { recursive: true });
      writeFileSync(join(dir, file), text);
    }
  };
  const load = async (path) => {
    const text = gitShow(ref, path);
    if (text === null) return null;
    if (path.endsWith(".json")) return JSON.parse(text);
    stage(dirname(path));
    return import(pathToFileURL(join(dir, path)).href);
  };
  return Object.fromEntries(await Promise.all(Object.entries(app.paths).map(async ([k, p]) => [k, await load(p)])));
}

async function sourcesNow(app) {
  const load = (path) => (path.endsWith(".json") ? readJson(path) : importModule(path));
  return Object.fromEntries(await Promise.all(Object.entries(app.paths).map(async ([k, p]) => [k, await load(p)])));
}

function leaves(object, path = [], out = new Map()) {
  for (const [key, value] of Object.entries(object ?? {})) {
    if (key === "//") continue;
    if (value && typeof value === "object") leaves(value, [...path, key], out);
    else out.set(uiId([...path, key]), value);
  }
  return out;
}

/** Review units: one per UI key, one per pack article, one per pack category. */
export function reviewEntries(sources, packPrefix) {
  const entries = new Map();
  const ui = ["uiEn", "uiHant", "uiHans"].map((k) => leaves(sources[k]));
  for (const id of ui[1].keys()) entries.set(id, { en: ui[0].get(id), zh_hant: ui[1].get(id), zh_hans: ui[2].get(id) });

  const packs = ["packEn", "packHant", "packHans"].map((k) => sources[k]);
  const by = (pack, list, key) => new Map((pack?.[list] ?? []).map((item) => [item[key], item]));
  for (const [list, key, prefix] of [
    ["articles", "slug", `${packPrefix}:`],
    ["categories", "key", `${packPrefix}:category:`],
  ]) {
    const maps = packs.map((pack) => by(pack, list, key));
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

async function writePacket(name, app, base) {
  const out = packetPath(name);
  const rows = diffEntries(
    reviewEntries(await sourcesNow(app), app.packPrefix),
    reviewEntries(await sourcesAt(app, base), app.packPrefix),
  );
  mkdirSync(dirname(join(ROOT, out)), { recursive: true });
  writeFileSync(join(ROOT, out), `${JSON.stringify({ app: name, base, count: rows.length, entries: rows }, null, 2)}\n`);
  console.log(`${name}: ${rows.length} entr${rows.length === 1 ? "y" : "ies"} changed since ${base} → ${out}`);
  return rows.length;
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
  const base = argValue(args, "--base", "origin/main");
  let total = 0;
  for (const [name, app] of Object.entries(APPS)) total += await writePacket(name, app, base);
  console.log(
    total
      ? "next: review each non-empty packet with the zh-hans-reviewer agent (docs/specs/seo-aeo.md §簡中由繁中產生)"
      : "nothing to review",
  );
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  await main(process.argv.slice(2));
}
