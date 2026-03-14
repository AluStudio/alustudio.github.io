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
              <h1>{t("privacy_policy.title")}</h1>
              <p className="legal-effective">
                {t("privacy_policy.effective_date")}
              </p>
            </header>

            {/* Introduction */}
            <section className="legal-section">
              <p>{t("privacy_policy.intro")}</p>
            </section>

            {/* Information Collection */}
            <section className="legal-section">
              <h2>{t("privacy_policy.info_collection.title")}</h2>
              <p>{t("privacy_policy.info_collection.desc")}</p>
              <ul>
                {t("privacy_policy.info_collection.items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
              <p>{t("privacy_policy.info_collection.no_ads")}</p>
            </section>

            {/* Local Data Storage */}
            <section className="legal-section">
              <h2>{t("privacy_policy.local_storage.title")}</h2>
              <p>{t("privacy_policy.local_storage.desc")}</p>
            </section>

            {/* In-App Purchases */}
            <section className="legal-section">
              <h2>{t("privacy_policy.iap.title")}</h2>
              <p>{t("privacy_policy.iap.desc")}</p>
            </section>

            {/* Activity Disclaimer */}
            <section className="legal-section">
              <h2>{t("privacy_policy.activity_disclaimer.title")}</h2>
              <p>{t("privacy_policy.activity_disclaimer.desc")}</p>
            </section>

            {/* Third-Party Services */}
            <section className="legal-section">
              <h2>{t("privacy_policy.third_party.title")}</h2>
              <p>{t("privacy_policy.third_party.desc")}</p>
              <ul>
                {t("privacy_policy.third_party.services", { returnObjects: true }).map(
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

            {/* Data Retention */}
            <section className="legal-section">
              <h2>{t("privacy_policy.data_retention.title")}</h2>
              <p>{t("privacy_policy.data_retention.desc")}</p>
            </section>

            {/* Children's Privacy */}
            <section className="legal-section">
              <h2>{t("privacy_policy.children.title")}</h2>
              <p>{t("privacy_policy.children.desc")}</p>
            </section>

            {/* Your Rights and Choices */}
            <section className="legal-section" id="your-rights">
              <h2>{t("privacy_policy.rights.title")}</h2>
              <p>{t("privacy_policy.rights.desc")}</p>

              <h3>{t("privacy_policy.rights.gdpr_title")}</h3>
              <ul>
                {t("privacy_policy.rights.gdpr_items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>

              <h3>{t("privacy_policy.rights.ccpa_title")}</h3>
              <p>{t("privacy_policy.rights.ccpa_desc")}</p>

              <h3>{t("privacy_policy.rights.opt_out_title")}</h3>
              <ul>
                {t("privacy_policy.rights.opt_out_items", { returnObjects: true }).map(
                  (item, i) => (
                    <li key={i}>{item}</li>
                  )
                )}
              </ul>
            </section>

            {/* Security */}
            <section className="legal-section">
              <h2>{t("privacy_policy.security.title")}</h2>
              <p>{t("privacy_policy.security.desc")}</p>
            </section>

            {/* Changes */}
            <section className="legal-section">
              <h2>{t("privacy_policy.changes.title")}</h2>
              <p>{t("privacy_policy.changes.desc")}</p>
            </section>

            {/* Contact */}
            <section className="legal-section">
              <h2>{t("privacy_policy.contact.title")}</h2>
              <p>
                {t("privacy_policy.contact.desc")}{" "}
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
