// FAQ screenshots: real captures of the app in each site language, made by
// scripts/capture-faq-shots.sh and scripts/build-faq-shots.sh into
// public/faq/<code>/<name>.webp, plus <name>-1080w.webp for phones when the
// full file is wider. A shot crops the same region in every language, so one
// size per name; copy-spa-pages.js fails the build when a shipped language
// lacks a file or a file is not this size.
export const FAQ_SHOT_SIZES = {};

export const FAQ_PHONE_SHOT_WIDTH = 1080;

/** Public path of a FAQ shot, relative to the app base ("faq/ja/tax-report.webp"). */
export const faqShotPath = (code, name, phone = false) =>
  `faq/${code}/${name}${phone ? `-${FAQ_PHONE_SHOT_WIDTH}w` : ""}.webp`;

/** Whether a shot ships a phone file: only when the full file is wider than it. */
export const hasPhoneShot = (name) => FAQ_SHOT_SIZES[name]?.[0] > FAQ_PHONE_SHOT_WIDTH;
