const base = import.meta.env.BASE_URL;

export const apps = [
  {
    id: "dingpos",
    name: "DingPOS",
    icon: `${base}dingpos-icon.webp`,
    website: "/dingpos/",
    privacy: "/dingpos/privacy/",
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
    website: "/sotto/",
    privacy: "/sotto/privacy/",
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
    website: "/pikgeon/",
    privacy: "/pikgeon/privacy/",
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
    website: "/babbby/",
    privacy: "/babbby/privacy/",
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

export const CONTACT_EMAIL = "alustudio14@gmail.com";
