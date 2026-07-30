import * as zhHant from "./articles.zh-Hant.js";
import * as en from "./articles.en.js";

const packs = {
  "zh-Hant": zhHant,
  en,
};

/** Resolve the FAQ content pack for the current i18n language. */
export function getFaq(lang) {
  return packs[lang] || packs.en;
}
