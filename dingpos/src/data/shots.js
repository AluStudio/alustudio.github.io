// The home page's product screenshots, captured per language from the app by
// scripts/build-screenshots.sh into public/shots/<code>/<name>.webp, each with a
// <name>-1080w.webp for phones. Values are the full-size files' pixel sizes;
// copy-spa-pages.js fails the build when a shipped language lacks a file.
export const SHOT_SIZES = {
  cashier: [2240, 1451],
  promotions: [1720, 1114],
  dashboard: [1720, 1114],
  orders: [1720, 1114],
};

export const PHONE_SHOT_WIDTH = 1080;

/** Public path of a screenshot, relative to the app base ("shots/ja/cashier.webp"). */
export const shotPath = (code, name, phone = false) =>
  `shots/${code}/${name}${phone ? `-${PHONE_SHOT_WIDTH}w` : ""}.webp`;
