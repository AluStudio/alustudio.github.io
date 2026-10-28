import { useTranslation } from "react-i18next";
import { EnvelopeSimple, PaperPlaneTilt } from "@phosphor-icons/react";

const CONTACT_EMAIL = "alustudio14@gmail.com";
const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=[DingPOS] Support`;

/** Shared by the support index and every article page. */
function ContactCard() {
  const { t } = useTranslation();
  return (
    <aside className="contact-card">
      <span className="contact-card__icon" aria-hidden="true">
        <EnvelopeSimple size={24} weight="duotone" />
      </span>
      <h2>{t("support.contact_title")}</h2>
      <p className="contact-card__desc">{t("support.contact_desc")}</p>
      <a className="button button--primary" href={CONTACT_MAILTO}>
        <PaperPlaneTilt size={18} weight="bold" aria-hidden="true" />
        {t("support.contact_cta")}
      </a>
      <p className="contact-card__mail">{CONTACT_EMAIL}</p>
    </aside>
  );
}

export default ContactCard;
