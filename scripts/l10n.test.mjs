import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync, utimesSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { APPS, apply, changedSince, check, enHash, enUnits, newLanguage, progress, readEn, readManifest, readRegistry, sitePaths, sync, textOf } from "./l10n.mjs";

const DINGPOS = APPS.dingpos;

const REPO = join(dirname(fileURLToPath(import.meta.url)), "..");

const EN_UI = {
  nav: { home: "Home", privacy: "Privacy Policy" },
  pricing: { doc_title: "Pricing", trial: "{{days}}-day free trial", or_annual_before: "or ", or_annual_after: "/yr billed annually" },
  terms: { title: "Terms of Use", items: ["No resale.", "No reverse engineering."] },
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
  return { paths: sitePaths("dingpos", root), appRepo };
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
  "ui:terms.items.0": "再販売の禁止。",
  "ui:terms.items.1": "リバースエンジニアリングの禁止。",
  "cat:getting-started": { label: "はじめに" },
  "cat:backup": { label: "バックアップ" },
  "faq:how-to-set-up": {
    question: "ストアの設定方法は？",
    keywords: ["設定", "はじめ方", "初期設定"],
    content: [{ text: "設定を開いてウィザードに従います。" }, { items: ["国を選びます。", "名前を入力します。"] }],
  },
  "faq:backup-data": { question: "バックアップするには？", keywords: ["バックアップ"], content: [{ text: "今すぐバックアップをタップします。" }] },
};

async function translateAll(paths, appRepo, values = JA) {
  newLanguage(paths, "ja");
  const { segments } = await sync(paths, "ja", { appRepo });
  for (const { segment } of segments) writeOut(paths, segment, (u) => values[u.id]);
  return apply(paths, "ja");
}

test("registry: every prefix is its hreflang in lowercase, and es-419 is served as es", () => {
  const languages = readRegistry(sitePaths("dingpos", REPO));
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
  const units = enUnits(DINGPOS, { ui: EN_UI, pack });
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
      ["ui:terms.items.0", "ui-terms"],
      ["ui:terms.items.1", "ui-terms"],
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
  const hash = enHash(textOf(DINGPOS, article));
  assert.equal(enHash(textOf(DINGPOS, { ...article, related: [], since: "3.0" })), hash);
  assert.notEqual(enHash(textOf(DINGPOS, { ...article, question: "How do I open my store?" })), hash);
  assert.notEqual(enHash(textOf(DINGPOS, { ...article, content: [...article.content, { type: "note", text: "New." }] })), hash);
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
  assert.equal(total, 13);
  assert.deepEqual(segments.map((s) => s.segment).sort(), ["faq-backup", "faq-getting-started", "ui-pricing", "ui-site", "ui-terms"]);

  const site = readPacket(paths, "ui-site");
  assert.equal(site.output, ".logs/l10n/dingpos/ja/out/ui-site.json");
  assert.deepEqual([site.app, site.contract], ["dingpos", ".pi/l10n/dingpos.md"]);
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
  assert.equal(result.written, 13);

  const ui = JSON.parse(readFileSync(paths.ui("ja"), "utf8"));
  assert.match(ui["//"], /Do not edit/);
  assert.equal(ui.pricing.trial, "{{days}}日間の無料体験");
  assert.equal(ui.pricing.or_annual_after, "");
  assert.deepEqual(ui.terms.items, ["再販売の禁止。", "リバースエンジニアリングの禁止。"], "en arrays stay arrays (pages map over them)");

  const packText = readFileSync(paths.pack("ja"), "utf8");
  assert.match(packText, /^\/\/ Generated from en and the ja translations by scripts\/l10n\.mjs\. Do not edit: translate through `npm run l10n -- dingpos sync ja`/);
  const pack = await import(`${pathToFileURL(paths.pack("ja")).href}?t=1`);
  assert.deepEqual(pack.categories[0], { key: "getting-started", icon: "bi-rocket", label: "はじめに", group: "faq" });
  const [setUp, backup] = pack.articles;
  assert.deepEqual([setUp.slug, setUp.category, setUp.related], ["how-to-set-up", "getting-started", ["backup-data"]]);
  assert.deepEqual(setUp.content[1], { type: "steps", items: ["国を選びます。", "名前を入力します。"] });
  assert.equal(backup.since, "2.0");
  assert.deepEqual(setUp.keywords, ["設定", "はじめ方", "初期設定"], "keywords may differ in count from en");

  const manifest = readManifest(paths, "ja");
  assert.equal(Object.keys(manifest).length, 13);
  assert.equal(manifest["faq:backup-data"], enHash(textOf(DINGPOS, (await import(pathToFileURL(paths.pack("en")).href)).articles[1])));

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

test("apply: a list entry may not add a placeholder en does not have", async () => {
  const { paths, appRepo } = fixture();
  newLanguage(paths, "ja");
  await sync(paths, "ja", { appRepo });
  const withPlaceholder = (u) =>
    u.id === "faq:how-to-set-up"
      ? { ...JA[u.id], keywords: ["設定", "{{country}}"], content: [JA[u.id].content[0], { items: ["{{country}}を選びます。", "名前を入力します。"] }] }
      : JA[u.id];
  writeOut(paths, "faq-getting-started", withPlaceholder);
  const text = (await apply(paths, "ja", { dryRun: true })).rejected.join("\n");
  assert.match(text, /faq:how-to-set-up: (content\.1\.items\.0|keywords\.1): placeholders \[\{\{country\}\}\] differ/);
});

test("sync --mode review --since: only units whose translation changed since the ref, plus --ids", async () => {
  const { paths, appRepo } = fixture();
  await translateAll(paths, appRepo);
  const git = (...args) => execFileSync("git", args, { cwd: paths.root, encoding: "utf8" }).trim();
  git("init", "-q");
  git("add", "-A");
  git("-c", "user.name=t", "-c", "user.email=t@t", "commit", "-qm", "ja");
  const base = git("rev-parse", "HEAD");

  await sync(paths, "ja", { appRepo, mode: "review" });
  const fix = writeOut(paths, "ui-site", (u) => (u.id === "ui:nav.home" ? "トップ" : JA[u.id]), "ui-site.fix");
  utimesSync(fix, new Date(), new Date(Date.now() + 1000));
  assert.deepEqual((await apply(paths, "ja")).rejected, []);

  const changed = await sync(paths, "ja", { appRepo, mode: "review", since: base });
  assert.deepEqual(changed.segments.map((s) => [s.segment, s.count]), [["ui-site", 1]]);
  const [unit] = readPacket(paths, "ui-site").units;
  assert.deepEqual([unit.id, unit.current], ["ui:nav.home", "トップ"]);

  const withKept = await sync(paths, "ja", { appRepo, mode: "review", since: base, ids: ["faq:backup-data"] });
  assert.deepEqual(withKept.segments.map((s) => [s.segment, s.count]), [["ui-site", 1], ["faq-backup", 1]]);
});

test("sync: fails fast without the app's strings or glossary, and on a --since ref that is not a commit", async () => {
  const { paths, appRepo } = fixture();
  newLanguage(paths, "ja");
  await assert.rejects(sync(paths, "ja", { appRepo: join(appRepo, "missing") }), /app repo lacks .*en\.lproj/);
  execFileSync("git", ["init", "-q"], { cwd: paths.root });
  await assert.rejects(sync(paths, "ja", { appRepo, mode: "review", since: "no-such-ref" }), /--since no-such-ref is not a commit/);
});

test("--since: a pack loads at the ref with the sibling modules it imports; one that does not load fails with its path and ref", async () => {
  const { paths } = fixture();
  const git = (...args) => execFileSync("git", args, { cwd: paths.root, encoding: "utf8" }).trim();
  const commit = (message) => {
    git("add", "-A");
    git("-c", "user.name=t", "-c", "user.email=t@t", "commit", "-qm", message);
    return git("rev-parse", "HEAD");
  };
  git("init", "-q");
  const sibling = join(dirname(paths.pack("ja")), "labels.ja.js");
  write(sibling, 'export const LABEL = "バックアップ";\n');
  write(paths.pack("ja"), 'import { LABEL } from "./labels.ja.js";\nexport const categories = [{ key: "backup", label: LABEL }];\nexport const articles = [];\n');
  const withSibling = commit("ja pack importing a sibling");
  write(paths.pack("ja"), "export const articles = [;\n");
  const broken = commit("broken ja pack");
  rmSync(sibling);
  write(paths.pack("ja"), 'export const categories = [{ key: "backup", label: "バックアップ" }];\nexport const articles = [];\n');

  assert.deepEqual([...(await changedSince(paths, "ja", withSibling))], [], "the pack at the ref reads as the same category, not as missing");
  await assert.rejects(changedSince(paths, "ja", broken), new RegExp(`dingpos/src/data/faq/articles\\.ja\\.js at ${broken} does not load`));
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

/** Ship exactly `codes` among the fixture's translated languages, as a worker does once a language passes review. */
function shipTranslated(paths, codes) {
  const registry = JSON.parse(readFileSync(paths.registry, "utf8"));
  for (const l of registry.languages) if (l.kind === "translated") l.shipped = codes.includes(l.code);
  writeFileSync(paths.registry, JSON.stringify(registry));
}

test("every shipped translated language in this repo is current with en (run `npm run l10n -- <app> sync <code>`)", async () => {
  const problems = [];
  for (const app of Object.keys(APPS)) problems.push(...(await check(sitePaths(app, REPO))));
  assert.deepEqual(problems, []);
});

test("check: an en article change fails the shipped language, naming the article", async () => {
  const { paths, appRepo } = fixture();
  await translateAll(paths, appRepo);
  shipTranslated(paths, ["ja"]);
  assert.deepEqual(await check(paths), []);
  write(paths.pack("en"), EN_PACK.replace("Tap Back Up Now.", "Tap Back Up Now in Settings."));
  assert.deepEqual(await check(paths), ["dingpos ja: 1 stale unit(s) — faq:backup-data — en changed since translation; npm run l10n -- dingpos sync ja"]);
});

test("check: a new en article or UI key is missing; an unshipped language is not checked", async () => {
  const { paths, appRepo } = fixture();
  await translateAll(paths, appRepo);
  write(paths.ui("en"), JSON.stringify({ ...EN_UI, nav: { ...EN_UI.nav, support: "Support" } }));
  shipTranslated(paths, []);
  assert.deepEqual(await check(paths), [], "ja is not shipped yet");
  shipTranslated(paths, ["ja"]);
  assert.deepEqual(await check(paths), ["dingpos ja: 1 missing unit(s) — ui:nav.support — npm run l10n -- dingpos sync ja"]);
});

test("check: a hand edit or an unapplied en structure change fails until apply regenerates the pack", async () => {
  const { paths, appRepo } = fixture();
  await translateAll(paths, appRepo);
  shipTranslated(paths, ["ja"]);
  write(paths.pack("ja"), readFileSync(paths.pack("ja"), "utf8").replace('"since": "2.0"', '"since": "2.1"'));
  assert.match((await check(paths)).join("\n"), /articles\.ja\.js is not what apply generates/);
  write(paths.pack("en"), EN_PACK.replace('related: ["backup-data"]', "related: []"));
  await apply(paths, "ja", { files: [] });
  assert.deepEqual(await check(paths), []);
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

test("CLI: every command names its app; only check may omit it, and an unknown app is a usage error", () => {
  const run = (...args) => {
    try {
      execFileSync(process.execPath, [join(REPO, "scripts/l10n.mjs"), ...args], { encoding: "utf8", stdio: "pipe" });
      return { status: 0 };
    } catch (error) {
      return { status: error.status, stderr: error.stderr };
    }
  };
  const unknown = run("pikgeon", "sync", "ja");
  assert.equal(unknown.status, 2);
  assert.match(unknown.stderr, /unknown app "pikgeon"/);
  assert.match(unknown.stderr, /npm run l10n -- <app> sync <code>/);
  assert.equal(run("sync", "ja").status, 2, "the old form without an app is gone");
  assert.equal(run().status, 2);
});

// ── Sotto ────────────────────────────────────────────────────

const SOTTO_EN_UI = {
  nav: { faq: "FAQ" },
  hero: { proof: "Rated {{average}} on the App Store · {{n}} ratings", download: "Download on the App Store" },
  scene: { field_values: ["Film camera", "Peanuts"] },
  privacy: { title: "Privacy Policy", items: ["No tracking.", "No ads."] },
  terms: { title: "Terms of Use" },
};

const SOTTO_RINGS = `export const RING_SIZE_ROWS = [["4", "46.8"], ["5", "49.3"]];\n`;

const SOTTO_EN_GUIDES = `import { RING_SIZE_ROWS } from "./ring-sizes.js";

export const articles = [
  {
    slug: "find-ring-size",
    title: "How to Find a Ring Size",
    summary: "Measure a ring they already wear.",
    content: [
      { type: "p", text: "Measure a ring they already wear." },
      { type: "h2", text: "Ring size chart" },
      { type: "table", caption: "Circumference is the reference.", head: ["US", "Circumference (mm)"], rows: RING_SIZE_ROWS },
    ],
    related: ["people-you-meet"],
  },
  {
    slug: "people-you-meet",
    title: "How Many People Do You Meet?",
    summary: "About 611 by name.",
    content: [
      { type: "p", text: "You know about 611 people by name." },
      { type: "table", head: ["Number", "Source"], rows: [["611 people", "McCormick, 2010"], ["About 150", "Dunbar, 1992"]] },
      { type: "list", items: ["Neighbors.", "Coworkers."] },
    ],
    related: [],
  },
];
`;

const SOTTO_APP_EN = `// MARK: - Common
"common.faq" = "FAQ";
"field.leftRing" = "Left Ring";
`;

const SOTTO_APP_JA = `"common.faq" = "よくある質問";
"field.leftRing" = "左手の指輪";
`;

/** A throwaway Sotto site + app repo with ja as its translated language. */
function sottoFixture() {
  const root = mkdtempSync(join(tmpdir(), "l10n-sotto-"));
  const appRepo = mkdtempSync(join(tmpdir(), "l10n-sotto-app-"));
  const languages = [
    { code: "en", kind: "source", label: "English", hreflang: "en", pathPrefix: "", ogLocale: "en_US", shipped: true },
    { code: "zh-Hant", kind: "owner", label: "繁體中文", hreflang: "zh-Hant", pathPrefix: "zh-hant", ogLocale: "zh_TW", shipped: true },
    { code: "ja", kind: "translated", label: "日本語", hreflang: "ja", pathPrefix: "ja", ogLocale: "ja_JP", shipped: false },
  ];
  write(join(root, "sotto/l10n/languages.json"), JSON.stringify({ languages }));
  write(join(root, "sotto/src/locales/en/translation.json"), JSON.stringify(SOTTO_EN_UI));
  write(join(root, "sotto/src/data/guides/guides.en.js"), SOTTO_EN_GUIDES);
  write(join(root, "sotto/src/data/guides/ring-sizes.js"), SOTTO_RINGS);
  cpSync(join(REPO, "sotto/l10n/glossary/_template.md"), join(root, "sotto/l10n/glossary/_template.md"));
  write(join(appRepo, "sotto-ios/Targets/Sotto/Resources/en.lproj/Localizable.strings"), SOTTO_APP_EN);
  write(join(appRepo, "sotto-ios/Targets/Sotto/Resources/ja.lproj/Localizable.strings"), SOTTO_APP_JA);
  return { paths: sitePaths("sotto", root), appRepo };
}

const SOTTO_JA = {
  "ui:nav.faq": "よくある質問",
  "ui:hero.proof": "App Store で {{average}} の評価 · {{n}} 件",
  "ui:hero.download": "App Store でダウンロード",
  "ui:scene.field_values.0": "フィルムカメラ",
  "ui:scene.field_values.1": "ピーナッツ",
  "ui:privacy.title": "プライバシーポリシー",
  "ui:privacy.items.0": "トラッキングはしません。",
  "ui:privacy.items.1": "広告はありません。",
  "ui:terms.title": "利用規約",
  "guide:find-ring-size": {
    title: "指輪のサイズを調べる方法",
    summary: "普段つけている指輪を測ります。",
    content: [{ text: "普段つけている指輪を測ります。" }, { text: "指輪のサイズ表" }, { caption: "基準は円周です。", head: ["US", "円周 (mm)"] }],
  },
  "guide:people-you-meet": {
    title: "一生で何人に出会う？",
    summary: "名前を知っているのは約 611 人。",
    content: [
      { text: "名前を知っている人は約 611 人です。" },
      { head: ["人数", "出典"], rows: [["611 人", "McCormick, 2010"], ["約 150 人", "Dunbar, 1992"]] },
      { items: ["近所の人。", "同僚。"] },
    ],
  },
};

test("registry (Sotto): the sotto-ios languages, prefixes are hreflang in lowercase, only ar is right-to-left", () => {
  const languages = readRegistry(sitePaths("sotto", REPO));
  assert.deepEqual(languages.map((l) => l.code), ["en", "zh-Hant", "zh-Hans", "ja", "ko", "de", "es", "fr", "it", "pt-BR", "ru", "ar"]);
  assert.equal(new Set(languages.map((l) => l.pathPrefix)).size, languages.length);
  for (const l of languages) assert.equal(l.pathPrefix, l.code === "en" ? "" : l.hreflang.toLowerCase(), l.code);
  assert.deepEqual(languages.filter((l) => l.dir).map((l) => [l.code, l.dir]), [["ar", "rtl"]]);
  assert.deepEqual(
    languages.filter((l) => l.kind !== "translated").map((l) => [l.code, l.kind]),
    [["en", "source"], ["zh-Hant", "owner"], ["zh-Hans", "generated"]],
  );
});

test("sotto units: one per UI string and per guide; the ring-size rows are structure, other table rows are copy", async () => {
  const { paths } = sottoFixture();
  const units = enUnits(paths.app, await readEn(paths));
  assert.deepEqual(
    units.map((u) => [u.id, u.segment]),
    [
      ["ui:nav.faq", "ui-site"],
      ["ui:hero.proof", "ui-site"],
      ["ui:hero.download", "ui-site"],
      ["ui:scene.field_values.0", "ui-site"],
      ["ui:scene.field_values.1", "ui-site"],
      ["ui:privacy.title", "ui-privacy"],
      ["ui:privacy.items.0", "ui-privacy"],
      ["ui:privacy.items.1", "ui-privacy"],
      ["ui:terms.title", "ui-terms"],
      ["guide:find-ring-size", "guide-find-ring-size"],
      ["guide:people-you-meet", "guide-people-you-meet"],
    ],
  );
  const [ring, people] = units.slice(-2);
  assert.deepEqual(ring.en.content[2], { caption: "Circumference is the reference.", head: ["US", "Circumference (mm)"] });
  assert.deepEqual(people.en.content[1].rows, [["611 people", "McCormick, 2010"], ["About 150", "Dunbar, 1992"]]);
});

test("sotto sync: packets name the app and its contract, carry no app glossary, and leave the ring rows out", async () => {
  const { paths, appRepo } = sottoFixture();
  newLanguage(paths, "ja");
  assert.match(readFileSync(paths.siteGlossary("ja"), "utf8"), /^# Site glossary — 日本語 \(ja\)\n\nCopied from `_template\.md`/);
  const { total, segments } = await sync(paths, "ja", { appRepo });
  assert.equal(total, 11);
  assert.deepEqual(segments.map((s) => s.segment).sort(), ["guide-find-ring-size", "guide-people-you-meet", "ui-privacy", "ui-site", "ui-terms"]);

  const site = readPacket(paths, "ui-site");
  assert.deepEqual([site.app, site.contract, site.output], ["sotto", ".pi/l10n/sotto.md", ".logs/l10n/sotto/ja/out/ui-site.json"]);
  assert.deepEqual(site.glossary, { app: null, site: "sotto/l10n/glossary/ja.md" });
  assert.deepEqual(site.units.find((u) => u.id === "ui:nav.faq").appMatch, { key: "common.faq", value: "よくある質問", note: null });
  assert.equal(site.appTerms, undefined);

  const ring = readPacket(paths, "guide-find-ring-size");
  assert.deepEqual(ring.appTerms, [], "the Sotto app's strings carry no @role notes");
  assert.doesNotMatch(JSON.stringify(ring), /46\.8/);
  await assert.rejects(sync(paths, "ja", { appRepo: join(appRepo, "missing") }), /Sotto app repo lacks .*en\.lproj/);
});

test("sotto apply: the strings, a guides pack of articles only with structure and ring rows from en, and the manifest", async () => {
  const { paths, appRepo } = sottoFixture();
  const result = await translateAll(paths, appRepo, SOTTO_JA);
  assert.deepEqual(result.rejected, []);
  assert.equal(result.written, 11);

  const ui = JSON.parse(readFileSync(paths.ui("ja"), "utf8"));
  assert.match(ui["//"], /npm run l10n -- sotto apply ja/);
  assert.deepEqual(ui.scene.field_values, ["フィルムカメラ", "ピーナッツ"], "en arrays stay arrays");

  const packText = readFileSync(paths.pack("ja"), "utf8");
  assert.match(packText, /^\/\/ Generated from en and the ja translations by scripts\/l10n\.mjs\. Do not edit: translate through `npm run l10n -- sotto sync ja`/);
  assert.doesNotMatch(packText, /import|categories/, "rows are inlined, like the generated zh-Hans pack");
  const pack = await import(`${pathToFileURL(paths.pack("ja")).href}?t=sotto`);
  assert.deepEqual(Object.keys(pack), ["articles"]);
  const [ring, people] = pack.articles;
  assert.deepEqual([ring.slug, ring.related, ring.title], ["find-ring-size", ["people-you-meet"], "指輪のサイズを調べる方法"]);
  assert.deepEqual(ring.content[2], { type: "table", caption: "基準は円周です。", head: ["US", "円周 (mm)"], rows: [["4", "46.8"], ["5", "49.3"]] });
  assert.deepEqual(people.content[1].rows, [["611 人", "McCormick, 2010"], ["約 150 人", "Dunbar, 1992"]]);

  assert.equal(Object.keys(readManifest(paths, "ja")).length, 11);
  assert.equal((await sync(paths, "ja", { appRepo })).total, 0);
});

test("sotto apply: rejects placeholder changes, any empty string, misshapen guides and ring rows in an output", async () => {
  const { paths, appRepo } = sottoFixture();
  newLanguage(paths, "ja");
  await sync(paths, "ja", { appRepo });
  const people = SOTTO_JA["guide:people-you-meet"];
  const bad = {
    ...SOTTO_JA,
    "ui:hero.proof": "App Store で {{average}} の評価",
    "ui:nav.faq": "",
    "guide:find-ring-size": {
      ...SOTTO_JA["guide:find-ring-size"],
      content: [...SOTTO_JA["guide:find-ring-size"].content.slice(0, 2), { caption: "基準は円周です。", head: ["US", "円周 (mm)"], rows: [["4", "46.8"]] }],
    },
    "guide:people-you-meet": { ...people, content: [people.content[0], { ...people.content[1], rows: [people.content[1].rows[0], ["約 150 人"]] }, people.content[2]] },
  };
  for (const segment of ["ui-site", "guide-find-ring-size", "guide-people-you-meet"]) writeOut(paths, segment, (u) => bad[u.id]);
  const text = (await apply(paths, "ja", { dryRun: true })).rejected.join("\n");
  assert.match(text, /ui:hero\.proof: placeholders \[\{\{average\}\}\] differ from en \[\{\{average\}\} \{\{n\}\}\]/);
  assert.match(text, /ui:nav\.faq: empty value/);
  assert.match(text, /guide:find-ring-size: content\.2: "rows" is not a text field of the en entry/);
  assert.match(text, /guide:people-you-meet: content\.1\.rows\.1: has 1 entries, en has 2/);
});

test("sotto apply: rejects a guide summary longer than a meta description, counted in characters", async () => {
  const { paths, appRepo } = sottoFixture();
  newLanguage(paths, "ja");
  await sync(paths, "ja", { appRepo });
  const ring = SOTTO_JA["guide:find-ring-size"];
  const people = SOTTO_JA["guide:people-you-meet"];
  const long = {
    "guide:find-ring-size": { ...ring, summary: "指".repeat(161) },
    "guide:people-you-meet": { ...people, summary: "人".repeat(160) },
  };
  for (const segment of ["guide-find-ring-size", "guide-people-you-meet"]) writeOut(paths, segment, (u) => long[u.id]);
  const { rejected } = await apply(paths, "ja", { dryRun: true });
  assert.deepEqual(rejected, ["guide:find-ring-size: summary is 161 characters; the limit is 160"]);
});

test("sotto: an en guide change makes it stale; a ring-size change reaches the language through apply, without re-translation", async () => {
  let { paths, appRepo } = sottoFixture();
  await translateAll(paths, appRepo, SOTTO_JA);
  shipTranslated(paths, ["ja"]);
  assert.deepEqual(await check(paths), []);

  // A copy of the site, so the changed ring-size module is not one this process has already imported.
  const moved = sitePaths("sotto", mkdtempSync(join(tmpdir(), "l10n-sotto-rings-")));
  cpSync(paths.root, moved.root, { recursive: true });
  paths = moved;
  write(paths.shared, `export const RING_SIZE_ROWS = [["4", "46.8"], ["5", "49.3"], ["6", "51.9"]];\n`);
  assert.deepEqual(await check(paths), ["sotto ja: sotto/src/data/guides/guides.ja.js is not what apply generates (edited by hand, or en structure changed) — npm run l10n -- sotto apply ja"]);
  assert.equal((await sync(paths, "ja", { appRepo })).total, 0, "nothing to re-translate");
  assert.deepEqual((await apply(paths, "ja", { files: [] })).rejected, []);
  const pack = await import(`${pathToFileURL(paths.pack("ja")).href}?t=rings`);
  assert.deepEqual(pack.articles[0].content[2].rows.at(-1), ["6", "51.9"]);
  assert.deepEqual(await check(paths), []);

  write(paths.pack("en"), SOTTO_EN_GUIDES.replace("Neighbors.", "Neighbors and classmates."));
  assert.deepEqual(await check(paths), ["sotto ja: 1 stale unit(s) — guide:people-you-meet — en changed since translation; npm run l10n -- sotto sync ja"]);
  const { total, segments } = await sync(paths, "ja", { appRepo });
  assert.deepEqual([total, segments[0].segment], [1, "guide-people-you-meet"]);
  const [unit] = readPacket(paths, "guide-people-you-meet").units;
  assert.equal(unit.stale, true);
  assert.deepEqual(unit.current.content[2], { items: ["近所の人。", "同僚。"] });
});

test("sotto check: an unshipped language is not checked; a shipped one without a manifest lists only its missing units", async () => {
  const { paths } = sottoFixture();
  write(paths.ui("ja"), JSON.stringify({ nav: { faq: "よくある質問" } }));
  write(paths.pack("ja"), SOTTO_EN_GUIDES);
  assert.deepEqual(await check(paths), [], "ja is not shipped");
  shipTranslated(paths, ["ja"]);
  const problems = await check(paths);
  assert.equal(problems.length, 1, problems.join("\n"));
  assert.match(problems[0], /^sotto ja: 11 missing unit\(s\) — ui:nav\.faq, .* — npm run l10n -- sotto sync ja$/);
});

// ── Babbby ───────────────────────────────────────────────────

const BABBBY_EN_UI = {
  nav: { faq: "FAQ", language: "Language" },
  landing: { appstore_main: "App Store" },
  privacy_policy: { title: "Privacy Policy", items: ["No ads.", "No tracking."] },
  faq: { items: { is_free: { title: "Is Babbby free?", answer: "Yes." } } },
};

const BABBBY_APP_EN = `/* @title — Settings row that opens the language picker */
"settings.language" = "Language";
`;

const BABBBY_APP_JA = `"settings.language" = "言語";
`;

const BABBBY_JA = {
  "ui:nav.faq": "よくある質問",
  "ui:nav.language": "言語",
  "ui:landing.appstore_main": "App Store",
  "ui:privacy_policy.title": "プライバシーポリシー",
  "ui:privacy_policy.items.0": "広告はありません。",
  "ui:privacy_policy.items.1": "トラッキングはしません。",
  "ui:faq.items.is_free.title": "Babbby は無料ですか？",
  "ui:faq.items.is_free.answer": "はい。",
};

/** A throwaway Babbby site (UI strings only, no pack) + app repo with ja as its translated language. */
function babbbyFixture() {
  const root = mkdtempSync(join(tmpdir(), "l10n-babbby-"));
  const appRepo = mkdtempSync(join(tmpdir(), "l10n-babbby-app-"));
  const languages = [
    { code: "en", kind: "source", label: "English", hreflang: "en", pathPrefix: "", ogLocale: "en_US", shipped: true },
    { code: "ja", kind: "translated", label: "日本語", hreflang: "ja", pathPrefix: "ja", ogLocale: "ja_JP", shipped: false },
  ];
  write(join(root, "babbby/l10n/languages.json"), JSON.stringify({ languages }));
  write(join(root, "babbby/src/locales/en/translation.json"), JSON.stringify(BABBBY_EN_UI));
  cpSync(join(REPO, "babbby/l10n/glossary/_template.md"), join(root, "babbby/l10n/glossary/_template.md"));
  write(join(appRepo, "babbby/Babbby/Resources/en.lproj/Localizable.strings"), BABBBY_APP_EN);
  write(join(appRepo, "babbby/Babbby/Resources/ja.lproj/Localizable.strings"), BABBBY_APP_JA);
  write(join(appRepo, "l10n/glossary/ja.md"), "# Glossary — Japanese (ja)\n");
  return { paths: sitePaths("babbby", root), appRepo };
}

test("babbby sync: UI-only packets per top-level segment, with the app's glossary and its translation of identical strings", async () => {
  const { paths, appRepo } = babbbyFixture();
  assert.equal(paths.pack, null);
  newLanguage(paths, "ja");
  const { segments } = await sync(paths, "ja", { appRepo });
  assert.deepEqual(segments.map((s) => s.segment), ["ui-site", "ui-privacy_policy", "ui-faq"]);
  const site = JSON.parse(readFileSync(paths.logs("ja", "packets", "ui-site.json"), "utf8"));
  assert.deepEqual([site.app, site.contract], ["babbby", ".pi/l10n/babbby.md"]);
  assert.equal(site.glossary.app, join(appRepo, "l10n/glossary/ja.md"));
  const language = site.units.find((u) => u.id === "ui:nav.language");
  assert.equal(language.appMatch.value, "言語");
});

test("babbby apply and check: only the strings and the manifest are written; an en change makes the unit stale", async () => {
  const { paths, appRepo } = babbbyFixture();
  const result = await translateAll(paths, appRepo, BABBBY_JA);
  assert.deepEqual(result.rejected, []);
  assert.equal(result.written, 8);
  const ui = JSON.parse(readFileSync(paths.ui("ja"), "utf8"));
  assert.match(ui["//"], /npm run l10n -- babbby apply ja/);
  assert.deepEqual(ui.privacy_policy.items, ["広告はありません。", "トラッキングはしません。"]);
  assert.equal((await sync(paths, "ja", { appRepo })).total, 0);

  shipTranslated(paths, ["ja"]);
  assert.deepEqual(await check(paths), []);
  write(paths.ui("en"), JSON.stringify({ ...BABBBY_EN_UI, nav: { ...BABBBY_EN_UI.nav, faq: "Questions" } }));
  assert.deepEqual(await check(paths), ["babbby ja: 1 stale unit(s) — ui:nav.faq — en changed since translation; npm run l10n -- babbby sync ja"]);
});
