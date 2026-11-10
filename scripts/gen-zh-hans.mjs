#!/usr/bin/env node
/**
 * Generate each app's zh-Hans website copy from its zh-Hant source.
 *
 * zh-Hans is derived, never hand-edited, so it cannot drift from zh-Hant or
 * fall behind it. Every app in APPS has a UI strings file and at most one
 * content pack (DingPOS: FAQ articles; Sotto and Babbby: guides). Every
 * string value of both runs through, in order:
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
import { PACK_TEXT_FIELDS, fieldOf, mapStrings, packData, packId, placeholders, uiId, uiLeaves } from "./pack-fields.mjs";

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
  ["金流商", "支付服务商"],
  // 列 as a row or bar: the mainland reads 列 as a column
  ["购物车列", "购物车栏"],
  ["期间列", "期间栏"],
  ["这一列", "这一行"], // a cart line
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
  ["遗失", "丢失"],
  ["贩售", "出售"],
  ["中继数据", "元数据"], // metadata
  ["语系", "语言"], // mainland 语系 is a language family
  ["广告群组", "广告组"], // Apple Ads zh-CN term
  ["顾客」列", "顾客」行"], // the checkout Customer row; corner brackets become quotes after this table
  ["每列有", "每行有"],
  ["一颗按钮", "一个按钮"],
  ["卷动", "滚动"],
  ["营业利益", "营业利润"],
  ["登录成本", "录入成本"], // mainland 登录 is logging in
  ["摊提", "摊销"],
  ["扣抵", "抵扣"],
  ["提领", "提取"],
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
  ["顾摊", "看摊"],
  ["⋯⋯", "……"],
];

// Entry ids (or id prefixes ending in ":") whose 列 means a grid row.
const DINGPOS_ROW_COLUMN_ENTRIES = ["faq:open-price-products:content.1.items.1"];

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
  "faq:payment-fees:keywords.6": ["金流", "支付服务商"],
  // 列 is a list row here, but 排列 in the same paragraph rules out the row/column swap.
  "faq:profit-not-tracked:content.1.text": [
    "點卡片或「查看商品」，會打開「缺成本的商品」清單，依未計入利潤的金額由高到低排列。點一列直接打開該商品，從「編輯」補上成本，回到清單那一列會標示「已補成本」。有規格的商品，要每個缺成本賣出的規格都有成本（自己的，或可以跟隨的商品成本）才算已補。",
    "点卡片或“查看商品”，会打开“缺成本的商品”列表，依未计入利润的金额由高到低排列。点一行直接打开该商品，从“编辑”补上成本，回到列表那一行会标示“已补成本”。有规格的商品，要每个缺成本卖出的规格都有成本（自己的，或可以跟随的商品成本）才算已补。",
  ],
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
  ["底片", "胶片"], // film photography; 底片 reads as a negative
  ["则评分", "个评分"], // App Store counts ratings with 个
  ["回馈", "反馈"], // user feedback
  ["史丹佛", "斯坦福"],
  ["推估", "预测"],
  ["转传", "转发"],
  ["一支短片", "一段短视频"], // a social-media clip; 短片 reads as a short film
  ["管道", "渠道"], // a channel to meet people, not a pipe
  ["完整数据", "完整资料"], // 完整資料 is a full profile, not raw data; the app keeps 数据 for stored data
  ["隐密", "隐蔽"],
  ["活围戒", "活口戒"], // an open, adjustable ring as mainland jewelers name it
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

// ── Babbby ───────────────────────────────────────────────────

// The Babbby app's zh-Hans does not exist yet; mirror the GLOSSARY of its
// `scripts/gen-zh-hans.py` here once the app repo has one.
const BABBBY_APP_GLOSSARY = [];

// Website-only replacements for Babbby, applied after BABBBY_APP_GLOSSARY.
const BABBBY_SITE_GLOSSARY = [
  // Taiwan wording opencc leaves (mainland form; reviewed 2026-11 by zh-hans-reviewer)
  ["透过", "通过"],
  ["隐私权", "隐私"], // 隐私政策, and iOS's 隐私与安全性
  ["本地端", "本地"],
  ["当机", "崩溃"],
  ["互联网协定", "互联网协议"],
  ["识别码", "标识符"], // Apple's 设备标识符 / 广告标识符
  ["刊登", "发布"],
  ["以「现状」", "按「原样」"], // the legal "AS IS"; quotes become “” after this step
  ["的应用程序内购买", "的 App 内购买"], // before the bare rule, so a Chinese character keeps its space before App
  ["如应用程序内购买", "如 App 内购买"],
  ["应用程序内购买", "App 内购买"], // Apple's mainland term
  ["钥匙圈", "钥匙串"], // iOS Keychain, as mainland iOS names it
  ["拷贝", "复制"],
  ["小儿科医师", "儿科医生"], // before 医师
  ["医师", "医生"],
  ["帐号", "账号"],
  ["配对", "匹配"], // matching activities to an age, not pairing
  ["大肢体运动", "大运动"], // the full category names first, or 运动 / 操作 is left doubled
  ["小肌肉操作", "精细动作"],
  ["大肢体", "大运动"], // early-education names of the gross and fine motor categories
  ["小肌肉", "精细动作"],
  ["创建日常", "养成日常习惯"], // "build routines"; 创建 reads as creating a thing
  ["⋯⋯", "……"],
  // Guides (reviewed 2026-11 by zh-hans-reviewer)
  ["配戴", "佩戴"],
  ["字汇", "词汇"],
  ["3C", "电子产品"], // Taiwan shorthand for screens and gadgets
  ["码表", "秒表"],
  ["家事", "家务"], // 家事 reads as family or legal matters
  ["美劳", "手工"],
  ["发展面向", "发展领域"],
  ["创建最早", "建立最早"],
  ["导览路径", "面包屑导航"], // the breadcrumb's aria-label
  ["禁用后的权限变化", "停用后的权限变化"],
  ["基本数据", "基本资料"],
  ["查数据", "查资料"],
  ["保母", "保姆"],
  ["推播", "推送"],
  ["寄信", "发邮件"],
  // Converter mistranslations
  ["内核", "核心"], // 核心 → kernel
  ["文件", "档案"], // a child's profile (檔案), not a document
  ["纪录", "记录"], // 纪录 is a record-breaking best
  ["交互", "互动"], // 互動 with a child, not software interaction
  ["脱机", "离线"], // 離線 use, not the hardware term
];

const BABBBY_OVERRIDES = {
  // 執行 an activity is a child doing it; the converter's 运行 is a program running.
  "ui:terms.activity_disclaimer.items.4": [
    "服務提供者不對執行建議活動所導致的任何傷害、損害或後果承擔責任",
    "服务提供者不对因进行建议活动所导致的任何伤害、损害或后果承担责任",
  ],
  "ui:privacy_policy.info_collection.items.2": ["使用數據，例如功能互動、使用時長及瀏覽畫面", "使用数据，例如功能交互、使用时长及访问页面"],
  "ui:privacy_policy.rights.gdpr_items.4": ["資料可攜性的權利", "数据可携带权"],
};

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
    textFields: PACK_TEXT_FIELDS.dingpos,
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
    textFields: PACK_TEXT_FIELDS.sotto,
  },
  babbby: {
    paths: {
      uiEn: "babbby/src/locales/en/translation.json",
      uiHant: "babbby/src/locales/zh-Hant/translation.json",
      uiHans: "babbby/src/locales/zh-Hans/translation.json",
      packEn: "babbby/src/data/guides/guides.en.js",
      packHant: "babbby/src/data/guides/guides.zh-Hant.js",
      packHans: "babbby/src/data/guides/guides.zh-Hans.js",
    },
    packPrefix: "guide",
    appGlossary: BABBBY_APP_GLOSSARY,
    siteGlossary: BABBBY_SITE_GLOSSARY,
    rowColumnEntries: [],
    overrides: BABBBY_OVERRIDES,
    textFields: PACK_TEXT_FIELDS.babbby,
  },
};

// ── Conversion ───────────────────────────────────────────────

const QUOTES = [
  ["「", "“"],
  ["」", "”"],
  ["『", "‘"],
  ["』", "’"],
];

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

  const data = pack ? packData(pack) : null;
  const packOut = data && mapStrings(data, [], (text, path) => {
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

/** File contents for the zh-Hans outputs of `app` (UI, and the pack when it has one), keyed by repo-relative path. */
export function renderOutputs({ ui, pack }, app) {
  const uiText = `${JSON.stringify({ "//": GENERATED_NOTE, ...ui }, null, 2)}\n`;
  if (!app.paths.packHans) return { [app.paths.uiHans]: uiText };
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
    const pack = app.paths.packHant ? await importModule(app.paths.packHant) : null;
    const converted = convertSources({ ui: readJson(uiHant), pack }, app);
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

/** Every source of `app` (three, or six with a pack) at a git ref (missing files → null). */
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

/** Review units: one per UI key, one per pack article, one per pack category. */
export function reviewEntries(sources, packPrefix) {
  const entries = new Map();
  const ui = ["uiEn", "uiHant", "uiHans"].map((k) => uiLeaves(sources[k]));
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
