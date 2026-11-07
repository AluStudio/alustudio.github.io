import { useTranslation } from "react-i18next";
import "./app-store-badge.scss";

const APP_STORE_URL = "https://apps.apple.com/app/babbby-daily-baby-activities/id6760455078";

/** The localized "Download on the App Store" button. */
function AppStoreBadge() {
  const { t } = useTranslation();
  return (
    <a href={APP_STORE_URL} className="appstore-badge" target="_blank" rel="noopener noreferrer">
      <i className="bi bi-apple"></i>
      <div className="badge-text">
        <small>{t("landing.appstore_sub")}</small>
        <strong>{t("landing.appstore_main")}</strong>
      </div>
    </a>
  );
}

export default AppStoreBadge;
