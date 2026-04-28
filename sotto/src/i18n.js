import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import zh from "./locales/zh/translation.json";

export const supportedLanguages = [
  { code: "zh", label: "繁體中文" },
  { code: "en", label: "English" },
];

const resources = {
  en: { translation: en },
  zh: { translation: zh },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh",
    supportedLngs: supportedLanguages.map((l) => l.code),
    load: "languageOnly",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"]
    }
  });

export default i18n;
