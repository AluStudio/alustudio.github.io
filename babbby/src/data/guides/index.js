// Guide packs, one module per language. Only the page's own language is
// loaded (see main.jsx); the build script reads every pack directly.
const packs = import.meta.glob("./guides.*.js");

let articles = [];

/** Load the guides of `code`; resolves before the app renders. */
export async function loadGuides(code) {
  ({ articles } = await packs[`./guides.${code}.js`]());
}

/** Guides of the current page's language, in display order. */
export function getGuides() {
  return articles;
}
