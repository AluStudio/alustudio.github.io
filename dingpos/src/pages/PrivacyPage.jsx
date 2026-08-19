import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./legal.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function PrivacyPage() {
  const { t } = useTranslation();

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
                <li>{t("privacy.local_storage.items.4")}</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.cloud_backup.title")}</h2>
              <p>{t("privacy.cloud_backup.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.no_collection.title")}</h2>
              <p>{t("privacy.no_collection.desc")}</p>
              <ul>
                <li>{t("privacy.no_collection.items.0")}</li>
                <li>{t("privacy.no_collection.items.1")}</li>
                <li>{t("privacy.no_collection.items.2")}</li>
                <li>{t("privacy.no_collection.items.3")}</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.camera.title")}</h2>
              <p>{t("privacy.camera.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.subscription.title")}</h2>
              <p>{t("privacy.subscription.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("privacy.analytics.title")}</h2>
              <p>{t("privacy.analytics.desc")}</p>
              <ul>
                <li>{t("privacy.analytics.items.0")}</li>
                <li>{t("privacy.analytics.items.1")}</li>
                <li>{t("privacy.analytics.items.2")}</li>
                <li>{t("privacy.analytics.items.3")}</li>
              </ul>
              <p>{t("privacy.analytics.note")}</p>
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
