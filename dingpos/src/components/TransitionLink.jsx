import { flushSync } from "react-dom";
import { Link, useNavigate } from "react-router-dom";

/**
 * A `<Link>` that crossfades the page via the View Transitions API.
 *
 * Why this exists instead of react-router's own `viewTransition` prop: that
 * prop is a data-router feature. This app mounts `<BrowserRouter>` (as the
 * other four sub-apps do), where the prop is accepted and silently ignored —
 * verified by hooking `document.startViewTransition` and counting zero calls.
 * Migrating the entry point to `createBrowserRouter` is a much larger change
 * than a crossfade justifies.
 *
 * `flushSync` is required: `startViewTransition` snapshots the DOM when its
 * callback returns, and React would otherwise batch the navigation into a
 * later render, so the "new" snapshot would still be the old page.
 */
function TransitionLink({ to, children, onClick, ...rest }) {
  const navigate = useNavigate();

  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented) return;

    // Leave open-in-new-tab, middle-click and download modifiers to the browser.
    if (
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    event.preventDefault();

    if (!document.startViewTransition) {
      navigate(to);
      return;
    }

    document.startViewTransition(() => {
      flushSync(() => navigate(to));
    });
  };

  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}

export default TransitionLink;
