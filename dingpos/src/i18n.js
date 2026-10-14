import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import zhHant from "./locales/zh-Hant/translation.json";
import en from "./locales/en/translation.json";

const APP_BASE = "/dingpos";

// Each language has its own URL so search engines can index it; the URL is
// the only language signal (no navigator / storage detection) — see
// docs/specs/seo-aeo.md §多語系 URL. `pathPrefix` mirrors copy-spa-pages.js.
export const supportedLanguages = [
  { code: "zh-Hant", label: "繁體中文", pathPrefix: "/zh-hant" },
  { code: "en",      label: "English",  pathPrefix: "" },
];

const resources = {
  "zh-Hant": { translation: zhHant },
  en:        { translation: en },
};

function languageFromPath(pathname) {
  const match = supportedLanguages.find(
    ({ pathPrefix }) =>
      pathPrefix &&
      (pathname === `${APP_BASE}${pathPrefix}` || pathname.startsWith(`${APP_BASE}${pathPrefix}/`)),
  );
  return match ?? supportedLanguages.find(({ pathPrefix }) => pathPrefix === "");
}

const current = languageFromPath(window.location.pathname);

/** Router basename for the language in the URL, e.g. "/dingpos/zh-hant". */
export const routerBasename = `${APP_BASE}${current.pathPrefix}`;

/**
 * Same page in another language. `routePath` is the router-relative path
 * ("/pricing"); the result keeps the trailing slash every route is served at,
 * so switching never costs a redirect hop.
 */
export function localizedUrl(code, routePath, search = "", hash = "") {
  const { pathPrefix } = supportedLanguages.find((l) => l.code === code);
  const path = routePath.endsWith("/") ? routePath : `${routePath}/`;
  return `${APP_BASE}${pathPrefix}${path}${search}${hash}`;
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: current.code,
    fallbackLng: "en",
    supportedLngs: supportedLanguages.map((l) => l.code),
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
  });

function syncDocumentLang(lng) {
  const resolved = lng || i18n.resolvedLanguage || i18n.language;
  if (resolved) {
    document.documentElement.lang = resolved;
    document.documentElement.dir = "ltr";
  }
}

i18n.on("languageChanged", syncDocumentLang);
syncDocumentLang(i18n.resolvedLanguage || i18n.language);

export default i18n;
