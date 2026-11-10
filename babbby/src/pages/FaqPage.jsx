import { useTranslation } from "react-i18next";
import { EnvelopeSimple, Plus } from "@phosphor-icons/react";
import "../assets/scss/pages.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CONTACT_EMAIL = "alustudio14@gmail.com";

function FaqPage() {
  const { t } = useTranslation();

  // Content is fully locale-driven: every entry under faq.items renders.
  const items = t("faq.items", { returnObjects: true });

  return (
    <>
      <Navbar />
      <main id="main" className="page">
        <div className="shell shell--narrow">
          <header className="page-head page-head--center">
            <h1>{t("faq.title")}</h1>
            <p>{t("faq.subtitle")}</p>
          </header>

          {/* <details> keeps every answer in the DOM while collapsed, so the
              prerendered HTML carries them for crawlers. */}
          <div className="faq">
            {Object.entries(items).map(([id, item]) => (
              <details key={id} id={id} className="faq__item">
                <summary>
                  <h2>{item.title}</h2>
                  <Plus size={20} weight="bold" aria-hidden="true" />
                </summary>
                <div className="faq__answer prose">
                  <p>{item.answer}</p>
                  {Array.isArray(item.bullets) && (
                    <ul>
                      {item.bullets.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>

          <div className="contact-card">
            <span className="contact-card__icon">
              <EnvelopeSimple size={24} weight="duotone" aria-hidden="true" />
            </span>
            <p className="contact-card__desc">{t("faq.contact_prompt")}</p>
            <a className="button button--primary" href={`mailto:${CONTACT_EMAIL}?subject=[Babbby] Support`}>
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FaqPage;
