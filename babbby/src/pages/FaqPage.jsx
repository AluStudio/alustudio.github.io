import "../assets/scss/all.scss";
import "../assets/scss/footer.scss";
import "./faq.scss";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const ITEM_IDS = [
  "ages",
  "privacy",
  "price",
  "activity_count",
  "materials",
  "professional",
  "android",
];

function FaqItem({ id, isOpen, onToggle, t }) {
  return (
    <div className={`faq-card ${isOpen ? "faq-card--open" : ""}`}>
      <button
        id={`faq-header-${id}`}
        className="faq-card__header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-body-${id}`}
      >
        <h2 className="faq-card__title">{t(`faq.items.${id}.q`)}</h2>
        <i className="bi bi-chevron-down faq-card__chevron"></i>
      </button>

      {/* Body stays in the DOM at all times and collapses via CSS: AI crawlers
          do not execute JS, and prerendered HTML must carry every answer. */}
      <div
        id={`faq-body-${id}`}
        className="faq-card__body"
        role="region"
        aria-labelledby={`faq-header-${id}`}
      >
        <p className="faq-card__answer">{t(`faq.items.${id}.a`)}</p>
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
              {ITEM_IDS.map((id) => (
                <FaqItem
                  key={id}
                  id={id}
                  isOpen={openId === id}
                  onToggle={() => setOpenId((prev) => (prev === id ? null : id))}
                  t={t}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default FaqPage;
