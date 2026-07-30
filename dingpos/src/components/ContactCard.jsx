import { useTranslation } from "react-i18next";

const CONTACT_MAILTO = "mailto:alustudio14@gmail.com?subject=[DingPOS] Support";

/** Shared by the support index and every article page. */
function ContactCard() {
  const { t } = useTranslation();
  return (
    <div className="support-contact">
      <div className="support-contact-icon">
        <i className="bi bi-envelope-paper" aria-hidden="true"></i>
      </div>
      <h2>{t("support.contact_title")}</h2>
      <p>{t("support.contact_desc")}</p>
      <a className="support-contact-cta" href={CONTACT_MAILTO}>
        <i className="bi bi-send" aria-hidden="true"></i>
        {t("support.contact_cta")}
      </a>
      <p className="support-contact-mail">alustudio14@gmail.com</p>
    </div>
  );
}

export default ContactCard;
