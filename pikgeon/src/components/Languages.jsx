import { useTranslation } from "react-i18next";
import "../assets/scss/languages.scss";
function Languages() {
  const { t } = useTranslation();
  const languages = [
    { name: "繁體中文", flag: "🇹🇼", code: "zh-Hant" },
    { name: "English", flag: "🇺🇸", code: "en" },
    { name: "日本語", flag: "🇯🇵", code: "ja" },
    { name: "한국어", flag: "🇰🇷", code: "ko" },
    { name: "Deutsch", flag: "🇩🇪", code: "de" },
    { name: "Español", flag: "🇪🇸", code: "es" },
    { name: "Português", flag: "🇵🇹", code: "pt" },
    { name: "Italiano", flag: "🇮🇹", code: "it" },
    { name: "Français", flag: "🇫🇷", code: "fr" },
    { name: "العربية", flag: "🇸🇦", code: "ar" },
    { name: "Bahasa Melayu", flag: "🇲🇾", code: "ms" },
    { name: "Nederlands", flag: "🇳🇱", code: "nl" },
    { name: "ไทย", flag: "🇹🇭", code: "th" },
    { name: "Filipino", flag: "🇵🇭", code: "tl" },
    { name: "Svenska", flag: "🇸🇪", code: "sv" },
    { name: "Suomi", flag: "🇫🇮", code: "fi" },
  ];
  return (
    <>
      <section id="languages">
        <div className="container py-5">
          <h3 className="text-primary text-center fw-bold mb-3">{t("nav.languages")}</h3>
          <div className="container-fluid py-5 bg-transparent">
            <div className="lang-grid">
              {languages.map((lang, index) => (
                <div
                  key={index}
                  className="lang-item"
                  style={{
                    "--rand-rotate": `${((index % 3) - 1) * 4}deg`,
                    "--rand-y": `${index % 2 === 0 ? 8 : -8}px`,
                  }}
                >
                  <div className="lang-content">
                    <span className="fs-3 d-block mb-1">{lang.flag}</span>
                    <span className="lang-text">{lang.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Languages;
