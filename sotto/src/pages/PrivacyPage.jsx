import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./legal.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function PrivacyPage() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <article className="legal-page">
            <header className="legal-header">
              <h1>{t("privacy.title")}</h1>
              <p className="legal-effective">{t("privacy.effective_date")}</p>
            </header>

            <section className="legal-section">
              <p>{t("privacy.intro")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.local_storage.title")}</h2>
              <p>{t("privacy.local_storage.desc")}</p>
              <ul>
                <li>{t("privacy.local_storage.items.0")}</li>
                <li>{t("privacy.local_storage.items.1")}</li>
                <li>{t("privacy.local_storage.items.2")}</li>
                <li>{t("privacy.local_storage.items.3")}</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.no_collection.title")}</h2>
              <p>{t("privacy.no_collection.desc")}</p>
              <ul>
                <li>{t("privacy.no_collection.items.0")}</li>
                <li>{t("privacy.no_collection.items.1")}</li>
                <li>{t("privacy.no_collection.items.2")}</li>
                <li>{t("privacy.no_collection.items.3")}</li>
                <li>{t("privacy.no_collection.items.4")}</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.biometric.title")}</h2>
              <p>{t("privacy.biometric.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.icloud.title")}</h2>
              <p>{t("privacy.icloud.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.third_party.title")}</h2>
              <p>{t("privacy.third_party.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.children.title")}</h2>
              <p>{t("privacy.children.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.changes.title")}</h2>
              <p>{t("privacy.changes.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.contact.title")}</h2>
              <p>
                {t("privacy.contact.desc")}{" "}
                <a href="mailto:alustudio14@gmail.com">alustudio14@gmail.com</a>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PrivacyPage;
