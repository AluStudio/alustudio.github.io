import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const APP_BASE = "/sotto";

// Each language has its own URL so search engines can index it; the URL is
// the only language signal (no navigator / storage detection) — see
// docs/specs/seo-aeo.md §多語系 URL. `pathPrefix` mirrors copy-spa-pages.js.
export const supportedLanguages = [
  { code: "zh-Hant", label: "繁體中文", pathPrefix: "/zh-hant" },
  { code: "zh-Hans", label: "简体中文", pathPrefix: "/zh-hans" },
  { code: "en",      label: "English", pathPrefix: "" },
  { code: "ja",      label: "日本語", pathPrefix: "/ja" },
  { code: "ko",      label: "한국어", pathPrefix: "/ko" },
  { code: "de",      label: "Deutsch", pathPrefix: "/de" },
  { code: "es",      label: "Español", pathPrefix: "/es" },
  { code: "fr",      label: "Français", pathPrefix: "/fr" },
  { code: "it",      label: "Italiano", pathPrefix: "/it" },
  { code: "pt-BR",   label: "Português (BR)", pathPrefix: "/pt-br" },
  { code: "ru",      label: "Русский", pathPrefix: "/ru" },
  { code: "ar",      label: "العربية", pathPrefix: "/ar", dir: "rtl" },
];

// One language per page load (the URL decides it), so only that language's
// strings are fetched instead of bundling all twelve into every page.
const uiModules = import.meta.glob("./locales/*/translation.json", { import: "default" });

function languageFromPath(pathname) {
  const match = supportedLanguages.find(
    ({ pathPrefix }) =>
      pathPrefix &&
      (pathname === `${APP_BASE}${pathPrefix}` || pathname.startsWith(`${APP_BASE}${pathPrefix}/`)),
  );
  return match ?? supportedLanguages.find(({ pathPrefix }) => pathPrefix === "");
}

const current = languageFromPath(window.location.pathname);

/** Router basename for the language in the URL, e.g. "/sotto/ja". */
export const routerBasename = `${APP_BASE}${current.pathPrefix}`;

/**
 * Same page in another language. `routePath` is the router-relative path
 * ("/faq"); the result keeps the trailing slash every route is served at,
 * so switching never costs a redirect hop.
 */
export function localizedUrl(code, routePath, search = "", hash = "") {
  const { pathPrefix } = supportedLanguages.find((l) => l.code === code);
  const path = routePath.endsWith("/") ? routePath : `${routePath}/`;
  return `${APP_BASE}${pathPrefix}${path}${search}${hash}`;
}

/** Language code of this page, e.g. "ja". */
export const currentLanguage = current.code;

/**
 * Resolves once this page's strings are loaded. Every locale ships the full
 * en key set (checked by copy-spa-pages.js), so there is no fallback language.
 */
export const i18nReady = uiModules[`./locales/${current.code}/translation.json`]().then((translation) =>
  i18n.use(initReactI18next).init({
    resources: { [current.code]: { translation } },
    lng: current.code,
    fallbackLng: false,
    interpolation: {
      escapeValue: false
    },
  }),
);

document.documentElement.lang = current.code;
document.documentElement.dir = current.dir ?? "ltr";

export default i18n;
