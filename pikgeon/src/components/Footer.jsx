import "../assets/scss/footer.scss";
import { useTranslation } from "react-i18next";

function Footer() {
  const thisYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <>
      <footer className="p-3">
        <div className="container">
          <div className="d-flex justify-content-between">
            <h1>Pikgeon</h1>
            <a className="mailto fs-5" href="mailto:alustudio14@gmail.com?subject=[Pikgeon] Support">
              {t("footer.contact")}
            </a>
          </div>
          <p>{t("footer.goal")}</p>
          <span>
            &copy; {thisYear} {t("footer.copyright")}
          </span>
          <br />
          <span className="text-muted">{t("footer.unofficialNotice")}</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
