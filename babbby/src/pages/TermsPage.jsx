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

            {/* Introduction */}
            <section className="legal-section">
              <p>{t("terms.intro")}</p>
            </section>

            {/* Use License */}
            <section className="legal-section">
              <h2>{t("terms.license.title")}</h2>
              <p>{t("terms.license.desc")}</p>
            </section>

            {/* Restrictions */}
            <section className="legal-section">
              <h2>{t("terms.restrictions.title")}</h2>
              <p>{t("terms.restrictions.desc")}</p>
              <ul>
                {t("terms.restrictions.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* Activity Disclaimer */}
            <section className="legal-section">
              <h2>{t("terms.activity_disclaimer.title")}</h2>
              <p>{t("terms.activity_disclaimer.desc")}</p>
              <ul>
                {t("terms.activity_disclaimer.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* Third-Party Services */}
            <section className="legal-section">
              <h2>{t("terms.third_party.title")}</h2>
              <p>{t("terms.third_party.desc")}</p>
              <ul>
                {t("terms.third_party.services", { returnObjects: true }).map(
                  (svc, i) => (
                    <li key={i}>
                      <a
                        href={svc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {svc.name}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </section>

            {/* Device Security */}
            <section className="legal-section">
              <h2>{t("terms.device_security.title")}</h2>
              <p>{t("terms.device_security.desc")}</p>
            </section>

            {/* Internet Connection */}
            <section className="legal-section">
              <h2>{t("terms.connectivity.title")}</h2>
              <p>{t("terms.connectivity.desc")}</p>
            </section>

            {/* Updates */}
            <section className="legal-section">
              <h2>{t("terms.updates.title")}</h2>
              <p>{t("terms.updates.desc")}</p>
            </section>

            {/* Disclaimer */}
            <section className="legal-section">
              <h2>{t("terms.disclaimer.title")}</h2>
              <p>{t("terms.disclaimer.desc")}</p>
            </section>

            {/* Limitation of Liability */}
            <section className="legal-section">
              <h2>{t("terms.liability.title")}</h2>
              <p>{t("terms.liability.desc")}</p>
            </section>

            {/* Changes */}
            <section className="legal-section">
              <h2>{t("terms.changes.title")}</h2>
              <p>{t("terms.changes.desc")}</p>
            </section>

            {/* Contact */}
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
