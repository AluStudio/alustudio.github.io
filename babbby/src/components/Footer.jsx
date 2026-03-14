import "../assets/scss/footer.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Footer() {
  const thisYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 style={{ fontWeight: 800 }}>Babbby</h1>
          <a
            className="mailto fs-5"
            href="mailto:alustudio14@gmail.com?subject=[Babbby] Support"
          >
            {t("footer.contact")}
          </a>
        </div>
        <p>{t("footer.tagline")}</p>
        <div className="footer-legal-links mb-2">
          <Link to="/privacy">{t("footer.privacy_policy")}</Link>
          <span className="mx-2">•</span>
          <Link to="/terms">{t("footer.terms_of_use")}</Link>
        </div>
        <p>
          &copy; {thisYear} {t("footer.copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
