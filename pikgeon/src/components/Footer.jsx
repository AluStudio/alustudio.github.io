import "../assets/scss/footer.scss";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

function Footer() {
  const thisYear = new Date().getFullYear();
  const { t } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <>
      <footer className="p-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1>Pikgeon</h1>
            <a className={`mailto fs-5 ${isRtl ? 'rtl-text' : ''}`} href="mailto:alustudio14@gmail.com?subject=[Pikgeon] Support">
              {t("footer.contact")}
            </a>
          </div>
          <p className={`rtl-right-only ${isRtl ? 'rtl-text' : ''}`}>{t("footer.goal")}</p>
          <p className={`${isRtl ? 'rtl-text' : ''}`}>
            &copy; {thisYear} {t("footer.copyright")}
          </p>
          <br />
          <p className={`text-muted ${isRtl ? 'rtl-text' : ''}`}>{t("footer.unofficialNotice")}</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
