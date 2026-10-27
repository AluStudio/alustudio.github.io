import { useTranslation } from "react-i18next";
import "../assets/scss/store-buttons.scss";

export const APP_STORE_URL = "https://apps.apple.com/app/sotto-for-the-people-you-love/id6763928854";
export const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.alustudio.sotto";

function StoreButtons({ className = "" }) {
  const { t } = useTranslation();
  return (
    <div className={`hero-actions ${className}`.trim()}>
      <a href={APP_STORE_URL} className="hero-cta" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-apple" aria-hidden="true"></i>
        {t("hero.download")}
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        className="hero-cta hero-cta--android"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-google-play" aria-hidden="true"></i>
        {t("hero.downloadAndroid")}
      </a>
    </div>
  );
}

export default StoreButtons;
