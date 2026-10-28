import { useTranslation } from "react-i18next";
import { RATING, REVIEWS } from "../data/reviews";

function Stars({ label }) {
  return (
    <span className="stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => (
        <i key={i} className="bi bi-star-fill" aria-hidden="true"></i>
      ))}
    </span>
  );
}

function Reviews() {
  const { t } = useTranslation();

  return (
    <section className="reviews" id="reviews" aria-labelledby="reviews-title">
      <div className="container reviews__inner">
        <header className="reviews__summary reveal">
          <p className="eyebrow">{t("reviews.eyebrow")}</p>
          <h2 className="section-title" id="reviews-title">
            {t("reviews.title")}
          </h2>
          <p className="section-subtitle">{t("reviews.subtitle")}</p>
          <div className="reviews__score">
            <span className="reviews__average">{RATING.average}</span>
            <span className="reviews__score-meta">
              <Stars label={t("reviews.stars")} />
              <span>{t("reviews.count", { n: RATING.count })}</span>
            </span>
          </div>
          <p className="reviews__source">{t("reviews.source")}</p>
        </header>

        <ul className="reviews__list">
          {REVIEWS.map(({ id, author, response }) => (
            <li key={id} className="review reveal-card">
              <h3 className="review__title">{t(`reviews.items.${id}.title`)}</h3>
              <p className="review__meta">
                <Stars label={t("reviews.stars")} />
                <span>
                  {t(`reviews.items.${id}.date`)} · <span className="review__author">{author}</span>
                </span>
              </p>
              <p className="review__body">{t(`reviews.items.${id}.body`)}</p>
              {response && (
                <div className="review__response">
                  <p className="review__response-label">
                    {t("reviews.developer")}
                    <span> · {t(`reviews.items.${id}.response_date`)}</span>
                  </p>
                  <p className="review__response-body">{t(`reviews.items.${id}.response`)}</p>
                  <p className="review__shipped">
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <span>
                      <strong>{t("reviews.shipped")}</strong> {t(`reviews.items.${id}.shipped`)}
                    </span>
                  </p>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Reviews;
