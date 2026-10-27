const base = import.meta.env.BASE_URL;

export const apps = [
  {
    id: "dingpos",
    name: "DingPOS",
    icon: `${base}dingpos-icon.webp`,
    languageInUrl: true,
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/id6788988943",
      },
    ],
  },
  {
    id: "sotto",
    name: "Sotto",
    icon: `${base}sotto-icon.webp`,
    languageInUrl: true,
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/sotto-for-the-people-you-love/id6763928854",
      },
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.alustudio.sotto",
      },
    ],
  },
  {
    id: "pikgeon",
    name: "Pikgeon",
    icon: `${base}pikgeon-icon.webp`,
    // The app ships these interface languages; its scene shows English elsewhere.
    languages: ["en", "zh-Hant", "ja", "ko", "es", "pt", "fr", "de", "it"],
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/pikgeon/id6759579587",
      },
      {
        platform: "android",
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.alu.pikgeon",
      },
    ],
  },
  {
    id: "babbby",
    name: "Babbby",
    icon: `${base}babbby-icon.webp`,
    languages: ["en", "zh-Hant"],
    stores: [
      {
        platform: "ios",
        label: "App Store",
        url: "https://apps.apple.com/app/babbby-daily-baby-activities/id6760455078",
      },
    ],
  },
];

// A scene draws the app's real interface, so it uses the page language only
// when the app itself ships in it. Apps without `languages` ship in all of them.
export function sceneLanguage(app, pageLanguage) {
  if (!app.languages || app.languages.includes(pageLanguage)) return pageLanguage;
  return "en";
}

// DingPOS and Sotto read their language from the URL only, so a link must carry
// it; both ship every home language. Pikgeon and Babbby read the language home
// already stored in localStorage (same origin, same i18next key).
const URL_LANGUAGE_PREFIX = {
  "zh-Hant": "zh-hant",
  "zh-Hans": "zh-hans",
  ja: "ja",
  ko: "ko",
  es: "es",
  pt: "pt-br",
  fr: "fr",
  de: "de",
  it: "it",
};

// `route` is relative to the app root: "" for its home page, "privacy/" for its policy.
export function appUrl(app, route, pageLanguage) {
  const prefix = app.languageInUrl && URL_LANGUAGE_PREFIX[pageLanguage];
  return `/${app.id}/${prefix ? `${prefix}/` : ""}${route}`;
}

export const CONTACT_EMAIL = "alustudio14@gmail.com";
