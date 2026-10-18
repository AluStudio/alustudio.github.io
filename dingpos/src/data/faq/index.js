// FAQ packs, one module per language. Only the page's own language is
// loaded (see main.jsx); the build script reads every pack directly.
const packs = import.meta.glob("./articles.*.js");

let faq = { categories: [], articles: [] };

/** Load the FAQ pack of `code`; resolves before the app renders. */
export async function loadFaq(code) {
  const { categories, articles } = await packs[`./articles.${code}.js`]();
  faq = { categories, articles };
}

/** FAQ categories and articles of the current page's language. */
export function getFaq() {
  return faq;
}
