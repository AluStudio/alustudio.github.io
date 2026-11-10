import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { getGuides } from "../data/guides";

/**
 * Every guide as a card whose whole surface is the link. `headingLevel` keeps
 * the outline right where the list sits under a section heading (home) or
 * the page's h1 (the guides index).
 */
function GuideList({ headingLevel = "h2" }) {
  const Heading = headingLevel;
  return (
    <ul className="guide-list">
      {getGuides().map((guide) => (
        <li key={guide.slug} className="guide-card reveal-card">
          <Heading className="guide-card__title">
            <Link to={`/guides/${guide.slug}/`}>{guide.title}</Link>
          </Heading>
          <p className="guide-card__summary">{guide.summary}</p>
          <ArrowRight size={20} weight="bold" className="guide-card__arrow" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default GuideList;
