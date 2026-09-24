import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import zhHant from "./locales/zh-Hant/translation.json";

export const supportedLanguages = [
  { code: "zh-Hant", label: "繁體中文" },
  { code: "en", label: "English" },
];

const resources = {
  en: { translation: en },
  "zh-Hant": { translation: zhHant },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh-Hant",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
      convertDetectedLanguage: (lng) => {
        // Map zh variants to zh-Hant
        if (lng.startsWith("zh")) return "zh-Hant";
        if (lng.startsWith("en")) return "en";
        return "zh-Hant"; // fallback
      },
    },
  });

// Sync <html lang> so the prerendered page declares the language it renders.
function syncDocumentLang(lng) {
  const resolved = lng || i18n.resolvedLanguage || i18n.language;
  if (resolved) document.documentElement.lang = resolved;
}

i18n.on("languageChanged", syncDocumentLang);
syncDocumentLang(i18n.resolvedLanguage || i18n.language);

export default i18n;
