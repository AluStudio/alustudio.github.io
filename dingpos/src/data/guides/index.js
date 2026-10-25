// Guide packs, one module per language that has guides (schema in
// guides.zh-Hant.js). Only the page's own language is loaded (see main.jsx);
// the build script reads every pack directly.
const packs = import.meta.glob("./guides.*.js");

/** Codes of the languages with a guides section; known without loading any pack. */
export const guideLanguages = new Set(
  Object.keys(packs).map((path) => path.match(/^\.\/guides\.(.+)\.js$/)[1]),
);

let guides = { ui: null, articles: [] };

/** Load the guides of `code`, if it has any; resolves before the app renders. */
export async function loadGuides(code) {
  if (!guideLanguages.has(code)) return;
  const { ui, articles } = await packs[`./guides.${code}.js`]();
  guides = { ui, articles };
}

/** Section strings and guides of the current page's language; `ui` is null when it has none. */
export function getGuides() {
  return guides;
}
