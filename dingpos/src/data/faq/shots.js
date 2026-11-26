// FAQ screenshots: real captures of the app in each site language, made by
// scripts/capture-faq-shots.sh and scripts/build-faq-shots.sh into
// public/faq/<code>/<name>.webp, plus <name>-1080w.webp for phones when the
// full file is wider. A shot frames the same region in every language, but a
// longer language wraps its text and the crop grows with it, so sizes are per
// language (shot-sizes.js, written by build-faq-shots.sh). copy-spa-pages.js
// fails the build when a shipped language lacks a file or a file is not its
// recorded size.
import FAQ_SHOT_SIZES from "./shot-sizes.js";

export const FAQ_PHONE_SHOT_WIDTH = 1080;

/** [width, height] of a shot's full file in one language, or undefined when it has none. */
export const faqShotSize = (code, name) => FAQ_SHOT_SIZES[code]?.[name];

/** Public path of a FAQ shot, relative to the app base ("faq/ja/tax-report.webp"). */
export const faqShotPath = (code, name, phone = false) =>
  `faq/${code}/${name}${phone ? `-${FAQ_PHONE_SHOT_WIDTH}w` : ""}.webp`;

/** Whether a shot ships a phone file: only when the full file is wider than it. */
export const hasPhoneShot = (code, name) => faqShotSize(code, name)?.[0] > FAQ_PHONE_SHOT_WIDTH;
