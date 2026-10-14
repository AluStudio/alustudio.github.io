import * as zhHant from "./articles.zh-Hant.js";
import * as zhHans from "./articles.zh-Hans.js";
import * as en from "./articles.en.js";

const packs = {
  "zh-Hant": zhHant,
  "zh-Hans": zhHans,
  en,
};

/** Resolve the FAQ content pack for the current i18n language. */
export function getFaq(lang) {
  return packs[lang] || packs.en;
}
