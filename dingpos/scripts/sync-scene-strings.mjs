/**
 * Copies the app strings the home page's scenes draw from the DingPOS app repo
 * into src/data/scenes/strings.<code>.json, one pack per language of
 * l10n/languages.json, so every scene label is the app's own wording
 * (AGENTS.md: scene strings come verbatim from the product repo).
 *
 * A local authoring step, like `npm run l10n -- sync`: CI never reads the app
 * repo and builds from the committed packs. Re-run it after the app changes a
 * listed string or ships a language.
 *
 *   node dingpos/scripts/sync-scene-strings.mjs [--app <path to DingPOS repo>]
 */

import process from "node:process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";
import { SCENE_COUNTRIES, SCENE_STRING_KEYS, placeholders } from "../src/data/scenes/keys.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appFlag = process.argv.indexOf("--app");
const appRepo =
  appFlag > 0 ? process.argv[appFlag + 1] : join(homedir(), "Developer", "alustudio", "DingPOS");
const stringsDir = join(appRepo, "DesignSystem", "Sources", "Resources", "Strings");
const outDir = join(__dirname, "..", "src", "data", "scenes");
const { languages } = JSON.parse(readFileSync(join(__dirname, "..", "l10n", "languages.json"), "utf8"));

const ESCAPES = { n: "\n", t: "\t", '"': '"', "\\": "\\" };

/** Parses the `"key" = "value";` lines of an Apple .strings file. */
function parseStrings(source) {
  const entries = new Map();
  const line = /^"((?:[^"\\]|\\.)*)"\s*=\s*"((?:[^"\\]|\\.)*)";/gm;
  for (const [, key, value] of source.matchAll(line)) {
    entries.set(key, value.replace(/\\(.)/g, (_, c) => ESCAPES[c] ?? c));
  }
  return entries;
}

if (!existsSync(stringsDir)) {
  console.error(`No app strings at ${stringsDir}; pass --app <path to the DingPOS repo>.`);
  process.exit(1);
}

const errors = [];
const packs = new Map();
for (const { code } of languages) {
  const file = join(stringsDir, `${code}.lproj`, "Localizable.strings");
  if (!existsSync(file)) {
    errors.push(`${code}: the app has no ${code}.lproj`);
    continue;
  }
  const entries = parseStrings(readFileSync(file, "utf8"));
  const strings = {};
  for (const key of SCENE_STRING_KEYS) {
    if (!entries.get(key)?.trim()) errors.push(`${code}: the app has no "${key}"`);
    else strings[key] = entries.get(key);
  }
  const names = new Intl.DisplayNames([code], { type: "region" });
  const countries = Object.fromEntries(SCENE_COUNTRIES.map(({ code: region }) => [region, names.of(region)]));
  packs.set(code, { strings, countries });
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
