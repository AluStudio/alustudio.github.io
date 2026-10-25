// Renders a guide's content blocks (schema in src/data/guides/guides.zh-Hant.js).
import TransitionLink from "./TransitionLink";

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Text with [label](/route/) and [label](https://…) links; the build checks every target. */
function InlineText({ text }) {
  const parts = [];
  let last = 0;
  for (const match of text.matchAll(LINK)) {
    const [whole, label, href] = match;
    if (match.index > last) parts.push(text.slice(last, match.index));
    parts.push(
      href.startsWith("/") ? (
        <TransitionLink key={match.index} to={href}>
          {label}
        </TransitionLink>
      ) : (
        <a key={match.index} href={href} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      ),
    );
    last = match.index + whole.length;
  }
  if (last < text.length) parts.push(text.slice(last));
  return parts;
}

function GuideBlocks({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return (
          <p key={i}>
            <InlineText text={block.text} />
          </p>
        );
      case "h2":
        return <h2 key={i}>{block.text}</h2>;
      case "list":
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>
                <InlineText text={item} />
              </li>
            ))}
          </ul>
        );
      case "steps":
        return (
          <ol key={i} className="guide-steps">
            {block.items.map((item, j) => (
              <li key={j}>
                <InlineText text={item} />
              </li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="guide-note">
            <i className="bi bi-info-circle-fill" aria-hidden="true"></i>
            <p>
              <InlineText text={block.text} />
            </p>
          </div>
        );
      case "table":
        return (
          <div key={i} className="guide-table-wrap">
            <table className="guide-table">
              {block.caption && <caption>{block.caption}</caption>}
              <thead>
                <tr>
                  {block.head.map((cell, j) => (
                    <th key={j} scope="col">
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) =>
                      k === 0 ? (
                        <th key={k} scope="row">
                          <InlineText text={cell} />
                        </th>
                      ) : (
                        <td key={k}>
                          <InlineText text={cell} />
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        throw new Error(`Unknown guide block type "${block.type}"`);
    }
  });
}

export default GuideBlocks;
