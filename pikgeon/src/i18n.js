import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translation.json";
import zh from "./locales/zh/translation.json";
import ja from "./locales/ja/translation.json";
import ko from "./locales/ko/translation.json";
import de from "./locales/de/translation.json";
import es from "./locales/es/translation.json";
import pt from "./locales/pt/translation.json";
import it from "./locales/it/translation.json";
import fr from "./locales/fr/translation.json";
import ar from "./locales/ar/translation.json";
import ms from "./locales/ms/translation.json";
import nl from "./locales/nl/translation.json";
import th from "./locales/th/translation.json";
import tl from "./locales/tl/translation.json";
import sv from "./locales/sv/translation.json";
import fi from "./locales/fi/translation.json";

export const supportedLanguages = [
  { code: "zh", label: "繁體中文" },
  { code: "en", label: "English" },
  { code: "ja", label: "日本語" },
  { code: "ko", label: "한국어" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "pt", label: "Português" },
  { code: "it", label: "Italiano" },
  { code: "fr", label: "Français" },
  { code: "ar", label: "العربية" },
  { code: "ms", label: "Bahasa Melayu" },
  { code: "nl", label: "Nederlands" },
  { code: "th", label: "ไทย" },
  { code: "tl", label: "Filipino" },
  { code: "sv", label: "Svenska" },
  { code: "fi", label: "Suomi" },
];

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
  de: { translation: de },
  es: { translation: es },
  pt: { translation: pt },
  it: { translation: it },
  fr: { translation: fr },
  ar: { translation: ar },
  ms: { translation: ms },
  nl: { translation: nl },
  th: { translation: th },
  tl: { translation: tl },
  sv: { translation: sv },
  fi: { translation: fi },
};

i18n
  .use(LanguageDetector) // 自動偵測瀏覽器語系
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh",  // 找不到時退回語言
    supportedLngs: supportedLanguages.map((l) => l.code),
    load: "languageOnly", // en-US → en, zh-TW → zh
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"]  // 把使用者選擇的語言記在 localStorage
    }
  });

// Keep <html lang> honest. index.html ships a static lang attribute, so without
// this the served page can claim one language while rendering another — which
// misleads screen readers and search engines, and makes the prerender build's
// language check meaningless.
function syncDocumentLang(lng) {
  const resolved = lng || i18n.resolvedLanguage || i18n.language;
  if (resolved) {
    document.documentElement.lang = resolved;
  }
}

i18n.on("languageChanged", syncDocumentLang);
syncDocumentLang(i18n.resolvedLanguage || i18n.language);

export default i18n;
