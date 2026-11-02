// App strings for the home page's scenes, one pack per language, synced from
// the app by scripts/sync-scene-strings.mjs. Only the page's own language is
// loaded (see main.jsx).
const packs = import.meta.glob("./strings.*.json", { import: "default" });

let pack = { strings: {}, prompts: {} };

/** Load the scene strings of `code`; resolves before the app renders. */
export async function loadSceneStrings(code) {
  pack = await packs[`./strings.${code}.json`]();
}

/** The app string `key`, as the app's Localizable.strings writes it. */
export function sceneString(key) {
  return pack.strings[key] ?? key;
}

/** The app's conversation prompt `id`, in the page language. */
export function scenePrompt(id) {
  return pack.prompts[id] ?? id;
}
