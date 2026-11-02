// The app strings the home page's scenes draw, by their key in the app's
// Localizable.strings. scripts/sync-scene-strings.mjs copies exactly these
// into strings.<code>.json, and the build rejects a pack that lacks one or
// whose placeholders differ from en's.
export const SCENE_STRING_KEYS = [
  // Person page
  "personDetail.editButton",
  "field.giftIdeas",
  "field.favoriteDrink",
  "field.allergy",
  "field.birthday",
  "field.leftRing",
  // Question picker
  "promptCatalog.title",
];

// The question cards, by their id in the app's ConversationPrompts.json, in
// the order the scene stacks them.
export const SCENE_PROMPT_IDS = ["c1-q02", "c1-q07", "c1-q01"];

/** Every printf placeholder in `value`, sorted, e.g. ["%1$d", "%2$d"]. */
export function placeholders(value) {
  return (value.match(/%(\d+\$)?[@d]/g) ?? []).sort();
}
