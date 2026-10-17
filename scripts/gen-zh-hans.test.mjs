import { test } from "node:test";
import assert from "node:assert/strict";
import { APPS, convertText, convertSources, checkStale, diffEntries } from "./gen-zh-hans.mjs";

const dingpos = (config = {}) => ({ ...APPS.dingpos, ...config });

const faqPack = (articles, categories = [{ key: "start", icon: "bi-rocket", label: "快速上手", group: "faq" }]) => ({
  categories,
  articles,
});

const article = (fields) => ({ slug: "demo", category: "start", question: "問題？", keywords: [], content: [], related: [], ...fields });

test("convertText: Taiwan phrasing becomes mainland phrasing", () => {
  assert.equal(convertText("設定 → 本機偏好設定", APPS.dingpos), "设置 → 本机偏好设置");
  assert.equal(convertText("常見問題", APPS.dingpos), "常见问题");
});

test("convertText: the app glossary runs after OpenCC", () => {
  assert.equal(convertText("點數", APPS.dingpos), "积分");
  assert.equal(convertText("核准", APPS.dingpos), "审批");
  assert.equal(convertText("進階報表", APPS.dingpos), "高级报表");
  assert.equal(convertText("透過預設", APPS.dingpos), "通过默认");
});

test("convertText: corner brackets become mainland quotation marks", () => {
  assert.equal(convertText("按「確認」或『取消』", APPS.dingpos), "按“确认”或‘取消’");
});

test("convertText: rows and columns swap only inside the listed entries", () => {
  assert.equal(convertText("有問題的列", APPS.dingpos, "faq:import-csv:content.1.items.2"), "有问题的行");
  assert.equal(convertText("有問題的列", APPS.dingpos, "faq:refund:content.0.text"), "有问题的列");
});

test("convertSources: an override replaces the value written for its source", () => {
  const { ui, errors } = convertSources(
    { ui: { nav: { privacy: "隱私權政策" } }, pack: faqPack([]) },
    dingpos({ overrides: { "ui:nav.privacy": ["隱私權政策", "隐私政策"] }, rowColumnEntries: [] }),
  );
  assert.deepEqual(errors, []);
  assert.equal(ui.nav.privacy, "隐私政策");
});

test("convertSources: an override fails once its zh-Hant source changes", () => {
  const { errors } = convertSources(
    { ui: { nav: { privacy: "隱私政策" } }, pack: faqPack([]) },
    dingpos({ overrides: { "ui:nav.privacy": ["隱私權政策", "隐私政策"] }, rowColumnEntries: [] }),
  );
  assert.match(errors.join("\n"), /ui:nav\.privacy: OVERRIDES was written for "隱私權政策"/);
});

test("convertSources: an override for a missing entry fails", () => {
  const { errors } = convertSources({ ui: {}, pack: faqPack([]) }, dingpos({ overrides: { "ui:gone": ["舊", "旧"] }, rowColumnEntries: [] }));
  assert.match(errors.join("\n"), /OVERRIDES names "ui:gone"/);
});

test("convertSources: a UI value that loses a placeholder fails", () => {
  const { errors } = convertSources(
    { ui: { trial: "{{num}} 點" }, pack: faqPack([]) },
    dingpos({ overrides: { "ui:trial": ["{{num}} 點", "积分"] }, rowColumnEntries: [] }),
  );
  assert.match(errors.join("\n"), /ui:trial: placeholders changed/);
});

test("convertSources: FAQ structure fields pass through unchanged", () => {
  const source = faqPack([
    article({ slug: "free-trial", related: ["import-csv"], since: "2.0", content: [{ type: "image", src: "/shot.webp", alt: "畫面" }] }),
  ]);
  const { pack: faq, errors } = convertSources({ ui: {}, pack: source }, dingpos({ overrides: {}, rowColumnEntries: [] }));
  assert.deepEqual(errors, []);
  const [out] = faq.articles;
  assert.equal(out.slug, "free-trial");
  assert.deepEqual(out.related, ["import-csv"]);
  assert.equal(out.since, "2.0");
  assert.equal(out.content[0].src, "/shot.webp");
  assert.equal(out.content[0].alt, "画面");
});

test("convertSources: a changed value in a non-text FAQ field fails", () => {
  const { errors } = convertSources({ ui: {}, pack: faqPack([article({ content: [{ type: "video", src: "/影片.mp4" }] })]) }, dingpos({ overrides: {}, rowColumnEntries: [] }));
  assert.match(errors.join("\n"), /faq:demo:content\.0\.src: field "src" is not a text field/);
});

test("convertSources: each app applies its own glossary and text fields", () => {
  const source = { articles: [{ slug: "gift-log", title: "自訂欄位", content: [{ type: "table", head: ["尺寸"], rows: [["相片"]] }], related: [] }] };
  const { pack, errors } = convertSources({ ui: { a: "預設" }, pack: source }, APPS.sotto);
  assert.deepEqual(errors, []);
  assert.equal(pack.articles[0].title, "自定义字段");
  assert.deepEqual(pack.articles[0].content[0].rows, [["照片"]]);
  assert.equal(pack.categories, undefined);
  assert.equal(convertText("預設", APPS.dingpos), "默认");
});

test("diffEntries: only new or changed entries reach the review packet", () => {
  const then = new Map([
    ["ui:a", { en: "A", zh_hant: "甲", zh_hans: "甲" }],
    ["ui:b", { en: "B", zh_hant: "乙", zh_hans: "乙" }],
  ]);
  const now = new Map([
    ["ui:a", { en: "A", zh_hant: "甲", zh_hans: "甲" }],
    ["ui:b", { en: "B2", zh_hant: "乙二", zh_hans: "乙二" }],
    ["ui:c", { en: "C", zh_hant: "丙", zh_hans: "丙" }],
  ]);
  assert.deepEqual(
    diffEntries(now, then).map((row) => [row.id, row.before?.en ?? null]),
    [
      ["ui:b", "B"],
      ["ui:c", null],
    ],
  );
});

test("committed zh-Hans files match a fresh generation (run `npm run zh-hans`)", async () => {
  assert.deepEqual(await checkStale(), []);
});
