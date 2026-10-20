import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import registry from "../l10n/languages.json";

const APP_BASE = "/dingpos";

// Each language has its own URL so search engines can index it; the URL is
// the only language signal (no navigator / storage detection) — see
// docs/specs/seo-aeo.md §多語系 URL. Only shipped languages get URLs.
export const supportedLanguages = registry.languages
  .filter((l) => l.shipped)
  .map(({ code, label, hreflang, pathPrefix }) => ({
    code,
    label,
    hreflang,
    pathPrefix: pathPrefix ? `/${pathPrefix}` : "",
  }));

// One language per page load (the URL decides it), so only that language's
// strings are fetched instead of bundling every language into every page.
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

/**
 * Router basename for the language in the URL, e.g. "/dingpos/zh-hant/". The
 * trailing slash makes `<Link to="/">` render the root's served URL; without it
 * the link points at "/dingpos/zh-hant", which the edge answers with a 307.
 */
export const routerBasename = `${APP_BASE}${current.pathPrefix}/`;

/**
 * Same page in another language. `routePath` is the router-relative path
 * ("/pricing/"); the result keeps the trailing slash every route is served at,
 * so switching never costs a redirect hop.
 */
export function localizedUrl(code, routePath, search = "", hash = "") {
  const { pathPrefix } = supportedLanguages.find((l) => l.code === code);
  const path = routePath.endsWith("/") ? routePath : `${routePath}/`;
  return `${APP_BASE}${pathPrefix}${path}${search}${hash}`;
}

/** Language code of this page, e.g. "zh-Hant" — the locale folder and FAQ pack name. */
export const currentLanguage = current.code;

/**
 * Resolves once this page's strings are loaded. Every shipped language has
 * the full en key set (checked by copy-spa-pages.js), so there is no fallback
 * language.
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

// hreflang, not the code: es-419's pages are <html lang="es">.
document.documentElement.lang = current.hreflang;
document.documentElement.dir = "ltr";

export default i18n;
