import "../assets/scss/footer.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const thisYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-3 mb-3">
          <div>
            <h2>DingPOS</h2>
            <p className="footer-desc">{t("footer.tagline")}</p>
          </div>
          <div className="footer-contact">
            <a href="mailto:alustudio14@gmail.com?subject=[DingPOS] Support">
              {t("footer.contact")}
            </a>
          </div>
        </div>

        <div className="footer-links mb-3">
          <Link to="/support">{t("footer.support")}</Link>
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
