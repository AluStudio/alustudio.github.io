/**
 * Copies the app strings the home page's scenes draw from the Sotto app repo
 * (its Localizable.strings and ConversationPrompts.json) into
 * src/data/scenes/strings.<code>.json, one pack per language of
 * l10n/languages.json, so every scene label is the app's own wording
 * (AGENTS.md: scene strings come verbatim from the product repo). zh-Hans is
 * the app's own zh-Hans, never generated.
 *
 * A local authoring step, like `npm run l10n -- sync`: CI never reads the app
 * repo and builds from the committed packs. Re-run it after the app changes a
 * listed string or ships a language.
 *
 *   node sotto/scripts/sync-scene-strings.mjs [--app <path to the sotto repo>]
 */

import process from "node:process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { homedir } from "node:os";
import { fileURLToPath } from "node:url";
import { parseStrings } from "../../scripts/l10n.mjs";
import { SCENE_PROMPT_IDS, SCENE_STRING_KEYS, placeholders } from "../src/data/scenes/keys.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const appFlag = process.argv.indexOf("--app");
const appRepo = appFlag > 0 ? process.argv[appFlag + 1] : join(homedir(), "Developer", "alustudio", "sotto");
const resourcesDir = join(appRepo, "sotto-ios", "Targets", "Sotto", "Resources");
const outDir = join(__dirname, "..", "src", "data", "scenes");
const { languages } = JSON.parse(readFileSync(join(__dirname, "..", "l10n", "languages.json"), "utf8"));

if (!existsSync(resourcesDir)) {
  console.error(`No app resources at ${resourcesDir}; pass --app <path to the sotto repo>.`);
  process.exit(1);
}

const errors = [];
const packs = new Map();
for (const { code } of languages) {
  const stringsFile = join(resourcesDir, `${code}.lproj`, "Localizable.strings");
  const promptsFile = join(resourcesDir, `${code}.lproj`, "ConversationPrompts.json");
  if (!existsSync(stringsFile) || !existsSync(promptsFile)) {
    errors.push(`${code}: the app has no ${code}.lproj with Localizable.strings and ConversationPrompts.json`);
    continue;
  }
  const entries = parseStrings(readFileSync(stringsFile, "utf8"));
  const strings = {};
  for (const key of SCENE_STRING_KEYS) {
    const value = entries.get(key)?.value;
    if (!value?.trim()) errors.push(`${code}: the app has no "${key}"`);
    else strings[key] = value;
  }
  const catalog = new Map(JSON.parse(readFileSync(promptsFile, "utf8")).prompts.map(({ id, text }) => [id, text]));
  const prompts = {};
  for (const id of SCENE_PROMPT_IDS) {
    const text = catalog.get(id);
    if (!text?.trim()) errors.push(`${code}: the app has no prompt "${id}"`);
    else prompts[id] = text;
  }
  packs.set(code, { strings, prompts });
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
