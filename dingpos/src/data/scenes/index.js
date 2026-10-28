// App strings for the home page's scenes, one pack per language, synced from
// the app by scripts/sync-scene-strings.mjs. Only the page's own language is
// loaded (see main.jsx).
const packs = import.meta.glob("./strings.*.json", { import: "default" });

let pack = { strings: {}, countries: {} };

/** Load the scene strings of `code`; resolves before the app renders. */
export async function loadSceneStrings(code) {
  pack = await packs[`./strings.${code}.json`]();
}

/** The app string `key` as written, placeholders included. */
export function sceneTemplate(key) {
  return pack.strings[key] ?? key;
}

/**
 * The app string `key`, with printf placeholders filled from `args` in order
 * (`%d`) or by position (`%2$d`), as the app's String(format:) does.
 */
export function sceneString(key, ...args) {
  let next = 0;
  return sceneTemplate(key).replace(/%(?:(\d+)\$)?[@d]/g, (_, position) =>
    String(args[position ? Number(position) - 1 : next++]),
  );
}

/** A country's name in the page language, as the app's onboarding shows it. */
export function sceneCountry(code) {
  return pack.countries[code] ?? code;
}
