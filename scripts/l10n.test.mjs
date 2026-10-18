import { test } from "node:test";
import assert from "node:assert/strict";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, writeFileSync, utimesSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { apply, enHash, enUnits, newLanguage, progress, readManifest, readRegistry, sitePaths, sync, textOf } from "./l10n.mjs";

const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");

const EN_UI = {
  nav: { home: "Home", privacy: "Privacy Policy" },
  pricing: { doc_title: "Pricing", trial: "{{days}}-day free trial", or_annual_before: "or ", or_annual_after: "/yr billed annually" },
  terms: { title: "Terms of Use" },
};

const EN_PACK = `export const categories = [
  { key: "getting-started", icon: "bi-rocket", label: "Getting Started", group: "faq" },
  { key: "backup", icon: "bi-cloud", label: "Backup", group: "faq" },
];

export const articles = [
  {
    slug: "how-to-set-up",
    category: "getting-started",
    question: "How do I set up my store?",
    keywords: ["setup", "start"],
    content: [
      { type: "p", text: "Open Settings and follow the wizard." },
      { type: "steps", items: ["Pick a country.", "Enter a name."] },
    ],
    related: ["backup-data"],
  },
  {
    slug: "backup-data",
    category: "backup",
    question: "How do I back up?",
    keywords: ["backup"],
    since: "2.0",
    content: [{ type: "p", text: "Tap Back Up Now." }],
    related: [],
  },
];
`;

const APP_EN = `/* Settings */
/* @title — Settings screen title */
"settings.title" = "Settings";
/* @button — Start a backup */
"backup.now" = "Back Up Now";
"settings.about.privacy" = "Privacy Policy";
"paywall.trial" = "%d-day free trial";
`;

const APP_JA = `"settings.title" = "設定";
"backup.now" = "今すぐバックアップ";
"settings.about.privacy" = "プライバシーポリシー";
"paywall.trial" = "%d日間無料";
`;

function write(file, text) {
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, text);
}

/** A throwaway site + app repo with ja (and es-419, whose prefix is "es") as translated languages. */
function fixture() {
  const root = mkdtempSync(join(tmpdir(), "l10n-site-"));
  const appRepo = mkdtempSync(join(tmpdir(), "l10n-app-"));
  const languages = [
    { code: "en", kind: "source", label: "English", hreflang: "en", pathPrefix: "", ogLocale: "en_US", shipped: true },
    { code: "zh-Hant", kind: "owner", label: "繁體中文", hreflang: "zh-Hant", pathPrefix: "zh-hant", ogLocale: "zh_TW", shipped: true },
    { code: "ja", kind: "translated", label: "日本語", hreflang: "ja", pathPrefix: "ja", ogLocale: "ja_JP", shipped: false },
    { code: "es-419", kind: "translated", label: "Español (Latinoamérica)", hreflang: "es", pathPrefix: "es", ogLocale: "es_LA", shipped: true },
  ];
  write(join(root, "dingpos/l10n/languages.json"), JSON.stringify({ languages }));
  write(join(root, "dingpos/src/locales/en/translation.json"), JSON.stringify(EN_UI));
  write(join(root, "dingpos/src/data/faq/articles.en.js"), EN_PACK);
  cpSync(join(REPO, "dingpos/l10n/glossary/_template.md"), join(root, "dingpos/l10n/glossary/_template.md"));
  write(join(appRepo, "l10n/glossary/ja.md"), "# Glossary — Japanese (ja)\n");
  write(join(appRepo, "DesignSystem/Sources/Resources/Strings/en.lproj/Localizable.strings"), APP_EN);
  write(join(appRepo, "DesignSystem/Sources/Resources/Strings/ja.lproj/Localizable.strings"), APP_JA);
  return { paths: sitePaths(root), appRepo };
}

const readPacket = (paths, segment) => JSON.parse(readFileSync(paths.logs("ja", "packets", `${segment}.json`), "utf8"));

/** A translator output for `segment` that translates every packet unit with `translate(unit)`. */
function writeOut(paths, segment, translate, name = segment) {
  const packet = readPacket(paths, segment);
  const file = paths.logs("ja", "out", `${name}.json`);
  write(file, JSON.stringify({ lang: "ja", segment, units: packet.units.map((u) => ({ id: u.id, enHash: u.enHash, value: translate(u) })) }));
  return file;
}

const JA = {
  "ui:nav.home": "ホーム",
  "ui:nav.privacy": "プライバシーポリシー",
  "ui:pricing.doc_title": "料金",
  "ui:pricing.trial": "{{days}}日間の無料体験",
  "ui:pricing.or_annual_before": "または年額",
  "ui:pricing.or_annual_after": "",
  "ui:terms.title": "利用規約",
  "cat:getting-started": { label: "はじめに" },
  "cat:backup": { label: "バックアップ" },
  "faq:how-to-set-up": {
    question: "ストアの設定方法は？",
    keywords: ["設定", "はじめ方", "初期設定"],
    content: [{ text: "設定を開いてウィザードに従います。" }, { items: ["国を選びます。", "名前を入力します。"] }],
  },
  "faq:backup-data": { question: "バックアップするには？", keywords: ["バックアップ"], content: [{ text: "今すぐバックアップをタップします。" }] },
};

async function translateAll(paths, appRepo) {
  newLanguage(paths, "ja");
  const { segments } = await sync(paths, "ja", { appRepo });
  for (const { segment } of segments) writeOut(paths, segment, (u) => JA[u.id]);
  return apply(paths, "ja");
}

test("registry: every prefix is its hreflang in lowercase, and es-419 is served as es", () => {
  const languages = readRegistry(sitePaths(REPO));
  assert.equal(languages.length, 32);
  assert.equal(new Set(languages.map((l) => l.pathPrefix)).size, languages.length);
  for (const l of languages) assert.equal(l.pathPrefix, l.code === "en" ? "" : l.hreflang.toLowerCase(), l.code);
  const es = languages.find((l) => l.code === "es-419");
  assert.deepEqual([es.hreflang, es.pathPrefix], ["es", "es"]);
  assert.equal(languages[0].code, "en");
});

test("enUnits: one unit per UI string, category and article, segmented by top-level key and category", async () => {
  const { paths } = fixture();
  const pack = await import(pathToFileURL(paths.pack("en")).href);
  const units = enUnits({ ui: EN_UI, pack });
  assert.deepEqual(
    units.map((u) => [u.id, u.segment]),
    [
      ["ui:nav.home", "ui-site"],
      ["ui:nav.privacy", "ui-site"],
      ["ui:pricing.doc_title", "ui-pricing"],
      ["ui:pricing.trial", "ui-pricing"],
      ["ui:pricing.or_annual_before", "ui-pricing"],
      ["ui:pricing.or_annual_after", "ui-pricing"],
      ["ui:terms.title", "ui-terms"],
      ["cat:getting-started", "faq-getting-started"],
      ["cat:backup", "faq-backup"],
      ["faq:how-to-set-up", "faq-getting-started"],
      ["faq:backup-data", "faq-backup"],
    ],
  );
  assert.deepEqual(units.find((u) => u.id === "faq:backup-data").en, { question: "How do I back up?", keywords: ["backup"], content: [{ text: "Tap Back Up Now." }] });
});

test("enHash: only text fields count — related, since and icon changes keep the hash", async () => {
  const { paths } = fixture();
  const { articles } = await import(pathToFileURL(paths.pack("en")).href);
  const article = articles[0];
  const hash = enHash(textOf(article));
  assert.equal(enHash(textOf({ ...article, related: [], since: "3.0" })), hash);
  assert.notEqual(enHash(textOf({ ...article, question: "How do I open my store?" })), hash);
  assert.notEqual(enHash(textOf({ ...article, content: [...article.content, { type: "note", text: "New." }] })), hash);
});

test("new: an empty manifest and the site glossary from the template; non-translated languages are refused", () => {
  const { paths } = fixture();
  newLanguage(paths, "ja");
  assert.deepEqual(readManifest(paths, "ja"), {});
  const glossary = readFileSync(paths.siteGlossary("ja"), "utf8");
  assert.match(glossary, /^# Site glossary — 日本語 \(ja\)/);
  assert.match(glossary, /\| Free trial \|/);
  assert.throws(() => newLanguage(paths, "zh-Hant"), /kind "owner"/);
  assert.throws(() => newLanguage(paths, "xx"), /not in/);
});

test("sync: packets carry the app's translation of identical en strings and the app terms an article names", async () => {
  const { paths, appRepo } = fixture();
  newLanguage(paths, "ja");
  const { total, segments } = await sync(paths, "ja", { appRepo });
  assert.equal(total, 11);
  assert.deepEqual(segments.map((s) => s.segment).sort(), ["faq-backup", "faq-getting-started", "ui-pricing", "ui-site", "ui-terms"]);

  const site = readPacket(paths, "ui-site");
  assert.equal(site.output, ".logs/l10n/ja/out/ui-site.json");
  assert.equal(site.glossary.app, join(appRepo, "l10n/glossary/ja.md"));
  assert.equal(site.glossary.site, "dingpos/l10n/glossary/ja.md");
  const privacy = site.units.find((u) => u.id === "ui:nav.privacy");
  assert.deepEqual(privacy.appMatch, { key: "settings.about.privacy", value: "プライバシーポリシー", note: null });
  assert.equal(site.units.find((u) => u.id === "ui:nav.home").appMatch, undefined);
  // "{{days}}-day free trial" is not the app's "%d-day free trial": only identical en matches.
  assert.equal(readPacket(paths, "ui-pricing").units.find((u) => u.id === "ui:pricing.trial").appMatch, undefined);

  const setUp = readPacket(paths, "faq-getting-started");
  assert.deepEqual(setUp.appTerms, [{ en: "Settings", value: "設定", role: "title", key: "settings.title" }]);
  assert.deepEqual(readPacket(paths, "faq-backup").appTerms.map((t) => t.value), ["今すぐバックアップ"]);
  assert.equal(site.appTerms, undefined);
});

test("apply: writes the strings, the pack with every structure field from en, and the manifest", async () => {
  const { paths, appRepo } = fixture();
  const result = await translateAll(paths, appRepo);
  assert.deepEqual(result.rejected, []);
  assert.equal(result.written, 11);

  const ui = JSON.parse(readFileSync(paths.ui("ja"), "utf8"));
  assert.match(ui["//"], /Do not edit/);
  assert.equal(ui.pricing.trial, "{{days}}日間の無料体験");
  assert.equal(ui.pricing.or_annual_after, "");

  const packText = readFileSync(paths.pack("ja"), "utf8");
  assert.match(packText, /^\/\/ Generated from en and the ja translations by scripts\/l10n\.mjs\. Do not edit/);
  const pack = await import(`${pathToFileURL(paths.pack("ja")).href}?t=1`);
  assert.deepEqual(pack.categories[0], { key: "getting-started", icon: "bi-rocket", label: "はじめに", group: "faq" });
  const [setUp, backup] = pack.articles;
  assert.deepEqual([setUp.slug, setUp.category, setUp.related], ["how-to-set-up", "getting-started", ["backup-data"]]);
  assert.deepEqual(setUp.content[1], { type: "steps", items: ["国を選びます。", "名前を入力します。"] });
  assert.equal(backup.since, "2.0");
  assert.deepEqual(setUp.keywords, ["設定", "はじめ方", "初期設定"], "keywords may differ in count from en");

  const manifest = readManifest(paths, "ja");
  assert.equal(Object.keys(manifest).length, 11);
  assert.equal(manifest["faq:backup-data"], enHash(textOf((await import(pathToFileURL(paths.pack("en")).href)).articles[1])));

  const again = await sync(paths, "ja", { appRepo });
  assert.equal(again.total, 0, "nothing is left to translate");
});

test("apply: rejects placeholder changes, empty values, misshapen articles and unknown units", async () => {
  const { paths, appRepo } = fixture();
  newLanguage(paths, "ja");
  await sync(paths, "ja", { appRepo });
  const bad = {
    ...JA,
    "ui:pricing.trial": "無料体験",
    "ui:pricing.doc_title": " ",
    "faq:how-to-set-up": { ...JA["faq:how-to-set-up"], content: [{ text: "設定を開きます。" }, { items: ["国を選びます。"] }] },
    "faq:backup-data": { ...JA["faq:backup-data"], related: ["x"] },
  };
  writeOut(paths, "ui-pricing", (u) => bad[u.id]);
  const faq = writeOut(paths, "faq-getting-started", (u) => bad[u.id]);
  writeOut(paths, "faq-backup", (u) => bad[u.id]);
  const extra = JSON.parse(readFileSync(faq, "utf8"));
  extra.units.push({ id: "faq:gone", enHash: "000000000000", value: {} });
  writeFileSync(faq, JSON.stringify(extra));

  const result = await apply(paths, "ja", { dryRun: true });
  const text = result.rejected.join("\n");
  assert.match(text, /ui:pricing\.trial: placeholders \[\] differ from en \[\{\{days\}\}\]/);
  assert.match(text, /ui:pricing\.doc_title: empty value/);
  assert.match(text, /faq:how-to-set-up: content\.1\.items: has 1 entries, en has 2/);
  assert.match(text, /faq:backup-data: "related" is not a text field/);
  assert.match(text, /faq:gone: not a unit of the en sources/);
  assert.doesNotMatch(text, /or_annual/, "a _before/_after fragment may be empty");
  assert.throws(() => readFileSync(paths.pack("ja")), /ENOENT/, "a dry run writes nothing");
});

test("an en text change makes the unit stale: sync packs it with the old translation, an old output is refused", async () => {
  const { paths, appRepo } = fixture();
  await translateAll(paths, appRepo);
  const oldOut = paths.logs("ja", "out", "faq-backup.json");
  write(paths.pack("en"), EN_PACK.replace("Tap Back Up Now.", "Tap Back Up Now in Settings."));

  const { total, segments } = await sync(paths, "ja", { appRepo });
  assert.equal(total, 1);
  const [unit] = readPacket(paths, segments[0].segment).units;
  assert.equal(unit.id, "faq:backup-data");
  assert.equal(unit.stale, true);
  assert.deepEqual(unit.current.content, [{ text: "今すぐバックアップをタップします。" }]);

  const result = await apply(paths, "ja", { files: [oldOut], dryRun: true });
  assert.deepEqual(result.rejected, ["faq:backup-data: translated from an older en text — sync and translate it again"]);

  // A newer output for the same unit supersedes the old one.
  const fresh = writeOut(paths, "faq-backup", () => ({ ...JA["faq:backup-data"], content: [{ text: "設定で今すぐバックアップをタップします。" }] }), "faq-backup.fix");
  utimesSync(fresh, new Date(), new Date(Date.now() + 1000));
  assert.deepEqual((await apply(paths, "ja")).rejected, []);
  assert.equal((await sync(paths, "ja", { appRepo })).total, 0);
});

test("apply: a structure-only en change (related, since) reaches the pack without re-translation", async () => {
  const { paths, appRepo } = fixture();
  await translateAll(paths, appRepo);
  write(paths.pack("en"), EN_PACK.replace('since: "2.0"', 'since: "2.1"').replace('related: ["backup-data"]', "related: []"));
  const result = await apply(paths, "ja", { files: [] });
  assert.deepEqual(result.rejected, []);
  const pack = await import(`${pathToFileURL(paths.pack("ja")).href}?t=2`);
  assert.equal(pack.articles[1].since, "2.1");
  assert.deepEqual(pack.articles[0].related, []);
  assert.equal(pack.articles[0].question, "ストアの設定方法は？");
  assert.equal((await sync(paths, "ja", { appRepo })).total, 0);
});

test("progress: starts from the registry's translated languages, shipped ones done; set nests dotted keys", () => {
  const { paths } = fixture();
  process.env.ALUSTUDIO_SITE_L10N_STATE = mkdtempSync(join(tmpdir(), "l10n-state-"));
  try {
    const initial = JSON.parse(progress(paths, ["show"]));
    assert.deepEqual(initial.order, ["ja", "es-419"]);
    assert.deepEqual(initial.languages["es-419"], { status: "done" });
    assert.equal(progress(paths, ["next"]), "ja");
    progress(paths, ["set", "ja", "status=running", "reviewRounds=1", "gate.test=pass"]);
    const ja = JSON.parse(progress(paths, ["get", "ja"]));
    assert.deepEqual([ja.status, ja.reviewRounds, ja.gate], ["running", 1, { test: "pass" }]);
    assert.match(progress(paths, ["report", "ja"]), /reports\/ja\.md$/);
    assert.throws(() => progress(paths, ["set", "zh-Hant", "status=done"]), /kind "owner"/);
    assert.throws(() => progress(paths, ["set", "ja", "oops"]), /key=value/);
  } finally {
    delete process.env.ALUSTUDIO_SITE_L10N_STATE;
  }
});
