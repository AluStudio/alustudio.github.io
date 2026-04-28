import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import zhHant from "./locales/zh-Hant/translation.json";
import zhHans from "./locales/zh-Hans/translation.json";
import en from "./locales/en/translation.json";
import ja from "./locales/ja/translation.json";
import ko from "./locales/ko/translation.json";
import de from "./locales/de/translation.json";
import es from "./locales/es/translation.json";
import fr from "./locales/fr/translation.json";
import it from "./locales/it/translation.json";
import pt from "./locales/pt-BR/translation.json";
import ru from "./locales/ru/translation.json";
import ar from "./locales/ar/translation.json";

export const supportedLanguages = [
  { code: "zh-Hant", label: "繁體中文" },
  { code: "zh-Hans", label: "简体中文" },
  { code: "en",      label: "English" },
  { code: "ja",      label: "日本語" },
  { code: "ko",      label: "한국어" },
  { code: "de",      label: "Deutsch" },
  { code: "es",      label: "Español" },
  { code: "fr",      label: "Français" },
  { code: "it",      label: "Italiano" },
  { code: "pt-BR",   label: "Português (BR)" },
  { code: "ru",      label: "Русский" },
  { code: "ar",      label: "العربية" },
];

const resources = {
  "zh-Hant": { translation: zhHant },
  "zh-Hans": { translation: zhHans },
  en:        { translation: en },
  ja:        { translation: ja },
  ko:        { translation: ko },
  de:        { translation: de },
  es:        { translation: es },
  fr:        { translation: fr },
  it:        { translation: it },
  "pt-BR":   { translation: pt },
  ru:        { translation: ru },
  ar:        { translation: ar },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "zh-Hant",
    supportedLngs: supportedLanguages.map((l) => l.code),
    load: "currentOnly",
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ["localStorage", "cookie", "navigator", "htmlTag", "path", "subdomain"],
      caches: ["localStorage"],
      convertDetectedLanguage: (lng) => {
        // zh-TW / zh-HK → zh-Hant; zh-CN / zh-SG → zh-Hans; pt-BR stays
        if (/^zh-(TW|HK|MO|Hant)/i.test(lng)) return "zh-Hant";
        if (/^zh/i.test(lng)) return "zh-Hans";
        if (/^pt-BR/i.test(lng)) return "pt-BR";
        return lng.split("-")[0];
      },
    }
  });

export default i18n;
