import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./legal.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

function TermsPage() {
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
              <h1>{t("terms.title")}</h1>
              <p className="legal-effective">{t("terms.effective_date")}</p>
            </header>

            <section className="legal-section">
              <p>{t("terms.intro")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.license.title")}</h2>
              <p>{t("terms.license.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.subscription.title")}</h2>
              <p>{t("terms.subscription.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.restrictions.title")}</h2>
              <p>{t("terms.restrictions.desc")}</p>
              <ul>
                <li>{t("terms.restrictions.items.0")}</li>
                <li>{t("terms.restrictions.items.1")}</li>
                <li>{t("terms.restrictions.items.2")}</li>
                <li>{t("terms.restrictions.items.3")}</li>
              </ul>
            </section>

            <section className="legal-section">
              <h2>{t("terms.user_data.title")}</h2>
              <p>{t("terms.user_data.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.updates.title")}</h2>
              <p>{t("terms.updates.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.disclaimer.title")}</h2>
              <p>{t("terms.disclaimer.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.liability.title")}</h2>
              <p>{t("terms.liability.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.changes.title")}</h2>
              <p>{t("terms.changes.desc")}</p>
            </section>

            <section className="legal-section">
              <h2>{t("terms.contact.title")}</h2>
              <p>
                {t("terms.contact.desc")}{" "}
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

export default TermsPage;
