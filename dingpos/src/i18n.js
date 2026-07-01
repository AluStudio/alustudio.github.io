import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zhHant from "./locales/zh-Hant/translation.json";
import en from "./locales/en/translation.json";

export const supportedLanguages = [
  { code: "zh-Hant", label: "繁體中文" },
  { code: "en",      label: "English" },
];

const resources = {
  "zh-Hant": { translation: zhHant },
  en:        { translation: en },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages.map((l) => l.code),
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      convertDetectedLanguage: (lng) => {
        // zh-TW / zh-HK / zh-Hant → zh-Hant; everything else falls back to base tag
        if (/^zh-(TW|HK|MO|Hant)/i.test(lng)) return "zh-Hant";
        if (/^zh/i.test(lng)) return "zh-Hant";
        return lng.split("-")[0];
      },
    }
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
