import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { EnvelopeSimple } from "@phosphor-icons/react";
import { getGuides } from "../data/guides";
import Brand from "./Brand";
import "../assets/scss/footer.scss";

const CONTACT_EMAIL = "alustudio14@gmail.com";

function Footer() {
  // The build year, not the visitor's clock: the prerendered footer and the
  // hydrating client must render the same text (see vite.config.js).
  const thisYear = import.meta.env.BUILD_YEAR;
  const { t } = useTranslation();
  const guidesUi = getGuides().ui;

  return (
    <footer className="footer">
      <div className="shell footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__home">
            <Brand />
          </Link>
          <p className="footer__tagline">{t("footer.tagline")}</p>
          <a className="footer__mail" href={`mailto:${CONTACT_EMAIL}?subject=[DingPOS] Support`}>
            <EnvelopeSimple size={16} weight="bold" aria-hidden="true" />
            {t("footer.contact")}
          </a>
        </div>

        <nav className="footer__cols" aria-label="DingPOS">
          <ul>
            <li>
              <Link to="/pricing/">{t("nav.pricing")}</Link>
            </li>
            <li>
              <Link to="/support/">{t("footer.support")}</Link>
            </li>
            {guidesUi && (
              <li>
                <Link to="/guides/">{guidesUi.nav}</Link>
              </li>
            )}
          </ul>
          <ul>
            <li>
              <Link to="/privacy/">{t("footer.privacy_policy")}</Link>
            </li>
            <li>
              <Link to="/terms/">{t("footer.terms_of_use")}</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="shell">
        <p className="footer__copy">
          &copy; {thisYear} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
