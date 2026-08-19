import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Put a new route at the top of the page, before it is painted.
 *
 * Three details this exists to get right, all of them visible when moving
 * between the tall support index and a short article:
 *
 * - `useLayoutEffect`, not `useEffect`. An effect runs after paint, so the
 *   reader sees one frame of the new page at the previous offset. Because a
 *   short page cannot hold a tall page's offset, the browser clamps it to the
 *   bottom — clicking a question showed the footer of its answer first.
 * - `behavior: "instant"`, which overrides `html { scroll-behavior: smooth }`.
 *   That rule is there for the homepage's anchor links; applied to a route
 *   change it turns the correction above into a ~250ms slide up the page.
 * - POP is left alone. Back/forward gets the browser's own scroll restoration,
 *   so returning from an article lands where the reader left the list instead
 *   of at the top of it.
 */
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const navigationType = useNavigationType();

  useLayoutEffect(() => {
    if (navigationType === "POP") return;
    // An anchor target owns the scroll position; see HomePage.
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash, navigationType]);

  return null;
}

export default ScrollToTop;
