import { useTranslation } from "react-i18next";
import { AppleLogo } from "@phosphor-icons/react";

export const APP_STORE_URL = "https://apps.apple.com/app/babbby-daily-baby-activities/id6760455078";

/** The localized "Download on the App Store" button, in the store's two lines. */
function AppStoreButton({ className = "" }) {
  const { t } = useTranslation();
  return (
    <a
      href={APP_STORE_URL}
      className={`button button--store ${className}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AppleLogo size={28} weight="fill" aria-hidden="true" />
      <span>
        <small>{t("landing.appstore_sub")}</small>
        <strong>{t("landing.appstore_main")}</strong>
      </span>
    </a>
  );
}

export default AppStoreButton;
