import "./article.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

function TermsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <div className="shell shell--narrow">
          <article className="article legal">
            <header className="legal__head">
              <h1>{t("terms.title")}</h1>
              <p className="legal__date">{t("terms.effective_date")}</p>
            </header>

            <section className="prose legal__section">
              <p>{t("terms.intro")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.license.title")}</h2>
              <p>{t("terms.license.desc")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.subscription.title")}</h2>
              <p>{t("terms.subscription.desc")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.restrictions.title")}</h2>
              <p>{t("terms.restrictions.desc")}</p>
              <ul>
                <li>{t("terms.restrictions.items.0")}</li>
                <li>{t("terms.restrictions.items.1")}</li>
                <li>{t("terms.restrictions.items.2")}</li>
                <li>{t("terms.restrictions.items.3")}</li>
              </ul>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.user_data.title")}</h2>
              <p>{t("terms.user_data.desc")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.updates.title")}</h2>
              <p>{t("terms.updates.desc")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.disclaimer.title")}</h2>
              <p>{t("terms.disclaimer.desc")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.liability.title")}</h2>
              <p>{t("terms.liability.desc")}</p>
            </section>

            <section className="prose legal__section">
              <h2>{t("terms.changes.title")}</h2>
              <p>{t("terms.changes.desc")}</p>
            </section>

            <section className="prose legal__section">
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
