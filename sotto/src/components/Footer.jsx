import "../assets/scss/footer.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  // The build year, not the visitor's clock: the prerendered footer and the
  // hydrating client must render the same text (see vite.config.js).
  const thisYear = import.meta.env.BUILD_YEAR;
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
          <div>
            <h2>Sotto</h2>
            <p className="footer-desc">{t("footer.tagline")}</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:alustudio14@gmail.com?subject=[Sotto] Support">
              {t("footer.contact")}
            </a>
          </div>
        </div>

        <div className="footer-links mb-3">
          <Link to="/guides">{t("nav.guides")}</Link>
          <span className="separator">·</span>
          <Link to="/faq">{t("nav.faq")}</Link>
          <span className="separator">·</span>
          <Link to="/privacy">{t("footer.privacy_policy")}</Link>
          <span className="separator">·</span>
          <Link to="/terms">{t("footer.terms_of_use")}</Link>
        </div>

        <p className="footer-copyright">
          &copy; {thisYear} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
