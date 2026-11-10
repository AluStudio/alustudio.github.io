/**
 * Copies what the home page's scenes draw from the Babbby app repo into
 * src/data/scenes/strings.<code>.json, one pack per language of
 * l10n/languages.json, so every scene shows the app's own wording (AGENTS.md:
 * scene strings come verbatim from the product repo):
 *
 * - `strings`: the Localizable.strings entries listed in keys.js;
 * - `activities`: names of the built-in activities keys.js names, from
 *   ActivityData;
 * - `materials`: the material chip names, from the material consolidation;
 * - `calendar`: narrow weekday names and the week range the Today scene
 *   shows (CLDR via Intl, as the app's DateFormatter writes them), so render
 *   never reads a clock or a locale.
 *
 * A local authoring step, like `npm run l10n -- babbby sync`: CI never reads
 * the app repo and builds from the committed packs. Re-run it after the app
 * changes a listed string or activity, or ships a language.
 *
 *   node babbby/scripts/sync-scene-strings.mjs [--app <path to the babbby-ios repo>]
 */

import process from "node:process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";
import { parseStrings } from "../../scripts/l10n.mjs";
import {
  AGE_RANGES,
  LIBRARY_CELLS,
  MATERIAL_CHIPS,
  MATERIAL_STEPS,
  SCENE_STRING_KEYS,
  TODAY_ACTIVITIES,
  activityKey,
  placeholders,
} from "../src/data/scenes/keys.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appFlag = process.argv.indexOf("--app");
const appRepo = appFlag > 0 ? process.argv[appFlag + 1] : join(homedir(), "Developer", "alustudio", "babbby-ios");
const resourcesDir = join(appRepo, "babbby", "Babbby", "Resources");
const dataDir = join(resourcesDir, "ActivityData");
const outDir = join(__dirname, "..", "src", "data", "scenes");
const { languages } = JSON.parse(readFileSync(join(__dirname, "..", "l10n", "languages.json"), "utf8"));

// The week the Today scene shows: Sunday 1 to Saturday 7 November, today
// being the Saturday. A fixed week, so every build draws the same frame.
const WEEK = Array.from({ length: 7 }, (_, i) => new Date(Date.UTC(2026, 10, 1 + i, 12)));

if (!existsSync(dataDir)) {
  console.error(`No app resources at ${resourcesDir}; pass --app <path to the babbby-ios repo>.`);
  process.exit(1);
}

const readJson = (file) => JSON.parse(readFileSync(join(dataDir, file), "utf8"));
const errors = [];

// Structure (materials) lives only in the zh-Hant files, as the app's own
// consolidation names; every language's file has the same entries in the
// same order.
const structure = Object.fromEntries(AGE_RANGES.map((age) => [age, readJson(`zh-Hant-age-${age}.json`).activities]));
const materialIdByName = new Map(
  Object.entries(readJson("zh-Hant-material-consolidation.json").categories).map(([id, { name }]) => [name, id]),
);

function materialsOf({ age, category, index }) {
  const field = structure[age]?.[category]?.[index]?.materials;
  if (field === undefined) return null;
  if (field === "無") return [];
  return field.split("、").map((name) => materialIdByName.get(name) ?? `?${name}`);
}

for (const [i, step] of MATERIAL_STEPS.entries()) {
  for (const ref of step.results) {
    const needs = materialsOf(ref);
    if (!needs) errors.push(`material step ${i}: no activity ${activityKey(ref)}`);
    else if (!needs.some((id) => step.selected.includes(id))) {
      errors.push(`material step ${i}: ${activityKey(ref)} needs ${needs.join(", ") || "nothing"}, none of ${step.selected.join(", ")}`);
    }
  }
}

const sceneActivities = [
  ...TODAY_ACTIVITIES,
  ...Object.values(LIBRARY_CELLS).flat(),
  ...MATERIAL_STEPS.flatMap((step) => step.results),
];

const packs = new Map();
for (const { code } of languages) {
  const stringsFile = join(resourcesDir, `${code}.lproj`, "Localizable.strings");
  if (!existsSync(stringsFile)) {
    errors.push(`${code}: the app has no ${code}.lproj/Localizable.strings`);
    continue;
  }
  const entries = parseStrings(readFileSync(stringsFile, "utf8"));
  const strings = {};
  for (const key of SCENE_STRING_KEYS) {
    const value = entries.get(key)?.value;
    if (!value?.trim()) errors.push(`${code}: the app has no "${key}"`);
    else strings[key] = value;
  }

  const files = Object.fromEntries(AGE_RANGES.map((age) => [age, readJson(`${code}-age-${age}.json`).activities]));
  const activities = {};
  for (const ref of sceneActivities) {
    const entry = files[ref.age]?.[ref.category]?.[ref.index];
    if (!entry?.name?.trim()) {
      errors.push(`${code}: the app has no activity ${activityKey(ref)}`);
      continue;
    }
    activities[activityKey(ref)] = entry.name;
  }

  const catalog = readJson(`${code}-material-consolidation.json`).categories;
  const materials = {};
  for (const id of MATERIAL_CHIPS) {
    const name = catalog[id]?.name;
    if (!name?.trim()) errors.push(`${code}: the app has no material ${id}`);
    else materials[id] = name;
  }

  const calendar = {
    weekdays: WEEK.map((day) => new Intl.DateTimeFormat(code, { weekday: "narrow", timeZone: "UTC" }).format(day)),
    week: new Intl.DateTimeFormat(code, { month: "short", day: "numeric", timeZone: "UTC" }).formatRange(WEEK[0], WEEK[6]),
  };

  packs.set(code, { strings, activities, materials, calendar });
}

const en = packs.get("en")?.strings ?? {};
for (const [code, { strings }] of packs) {
  for (const [key, value] of Object.entries(strings)) {
    if (placeholders(value).join() !== placeholders(en[key] ?? "").join()) {
      errors.push(`${code}: "${key}" has placeholders ${placeholders(value)} but en has ${placeholders(en[key])}`);
    }
  }
}

if (errors.length) {
  console.error(`Scene strings not written:\n  ${errors.join("\n  ")}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
for (const [code, pack] of packs) {
  writeFileSync(join(outDir, `strings.${code}.json`), `${JSON.stringify(pack, null, 2)}\n`);
}
console.log(`Wrote ${packs.size} scene string packs to ${outDir}`);
