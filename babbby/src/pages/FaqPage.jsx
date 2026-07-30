import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./faq.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function FaqItem({ id, item, isOpen, onToggle }) {
  return (
    <div className={`faq-card ${isOpen ? "faq-card--open" : ""}`}>
      <button
        className="faq-card__header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${id}`}
      >
        <h2 className="faq-card__title">{item.title}</h2>
        <i className="bi bi-chevron-down faq-card__chevron"></i>
      </button>

      {/* Body stays in the DOM when collapsed — AI crawlers and search
          engines only see the initial HTML, so unmounting would hide the
          answers from them (same lesson as pikgeon's FAQ). */}
      <div id={`faq-body-${id}`} className="faq-card__body" hidden={!isOpen}>
        <p className="faq-card__answer">{item.answer}</p>
        {Array.isArray(item.bullets) && (
          <ul className="faq-card__bullets">
            {item.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function FaqPage() {
  const { t } = useTranslation();
  const [openId, setOpenId] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Content is fully locale-driven: every entry under faq.items renders.
  const items = t("faq.items", { returnObjects: true });

  return (
    <>
      <Navbar />
      <main className="main-content">
        <div className="container">
          <div className="faq-page">
            <header className="faq-header">
              <h1>{t("faq.title")}</h1>
              <p className="faq-subtitle">{t("faq.subtitle")}</p>
            </header>

            <div className="faq-list">
              {Object.entries(items).map(([id, item]) => (
                <FaqItem
                  key={id}
                  id={id}
                  item={item}
                  isOpen={openId === id}
                  onToggle={() => setOpenId((prev) => (prev === id ? null : id))}
                />
              ))}
            </div>

            <div className="faq-contact">
              <p>{t("faq.contact_prompt")}</p>
              <a href="mailto:alustudio14@gmail.com" className="faq-contact__link">
                <i className="bi bi-envelope"></i>
                alustudio14@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FaqPage;
