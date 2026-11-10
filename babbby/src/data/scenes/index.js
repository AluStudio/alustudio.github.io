// What the home page's scenes draw from the app, one pack per language,
// synced by scripts/sync-scene-strings.mjs. Only the page's own language is
// loaded (see main.jsx).
import { activityKey } from "./keys";

const packs = import.meta.glob("./strings.*.json", { import: "default" });

let pack = { strings: {}, activities: {}, materials: {}, calendar: { weekdays: [], week: "" } };

/** Load the scene pack of `code`; resolves before the app renders. */
export async function loadSceneStrings(code) {
  pack = await packs[`./strings.${code}.json`]();
}

/** The app string `key`, as the app's Localizable.strings writes it. */
export function sceneString(key) {
  return pack.strings[key] ?? key;
}

/** A built-in activity's name, as the app's library lists it. */
export function sceneActivity(ref) {
  return pack.activities[activityKey(ref)] ?? activityKey(ref);
}

/** A material's name, as the app's material filter shows it. */
export function sceneMaterial(id) {
  return pack.materials[id] ?? id;
}

/** Narrow weekday names and the week range of the Today scene. */
export function sceneCalendar() {
  return pack.calendar;
}
