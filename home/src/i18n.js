import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zhHant from "./locales/zh-Hant/translation.json";
import zhHans from "./locales/zh-Hans/translation.json";
import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";
import ko from "./locales/ko/translation.json";
import es from "./locales/es/translation.json";
import pt from "./locales/pt/translation.json";
import fr from "./locales/fr/translation.json";
import de from "./locales/de/translation.json";
import it from "./locales/it/translation.json";

export const supportedLanguages = [
  { code: "zh-Hant", label: "繁體中文" },
  { code: "zh-Hans", label: "简体中文" },
  { code: "en",      label: "English" },
  { code: "ja",      label: "日本語" },
  { code: "ko",      label: "한국어" },
  { code: "es",      label: "Español" },
  { code: "pt",      label: "Português" },
  { code: "fr",      label: "Français" },
  { code: "de",      label: "Deutsch" },
  { code: "it",      label: "Italiano" },
];

const resources = {
  "zh-Hant": { translation: zhHant },
  "zh-Hans": { translation: zhHans },
  en:        { translation: en },
  ja:        { translation: ja },
  ko:        { translation: ko },
  es:        { translation: es },
  pt:        { translation: pt },
  fr:        { translation: fr },
  de:        { translation: de },
  it:        { translation: it },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    supportedLngs: supportedLanguages.map((l) => l.code),
    load: "currentOnly",
    interpolation: { escapeValue: false },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
      convertDetectedLanguage: (lng) => {
        if (/^zh-(TW|HK|MO|Hant)/i.test(lng)) return "zh-Hant";
        if (/^zh/i.test(lng)) return "zh-Hans";
        return lng.split("-")[0];
      },
    },
  });

function syncDocumentLang(lng) {
  const resolved = lng || i18n.resolvedLanguage || i18n.language;
  if (resolved) {
    document.documentElement.lang = resolved;
  }
}

i18n.on("languageChanged", syncDocumentLang);
syncDocumentLang(i18n.resolvedLanguage || i18n.language);

export default i18n;
