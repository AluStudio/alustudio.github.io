// Renders a guide's content blocks (schema in src/data/guides/guides.en.js).

function GuideBlocks({ blocks }) {
  return blocks.map((block, i) => {
    switch (block.type) {
      case "p":
        return <p key={i}>{block.text}</p>;
      case "h2":
        return <h2 key={i}>{block.text}</h2>;
      case "list":
        return (
          <ul key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ul>
        );
      case "steps":
        return (
          <ol key={i} className="guide-steps">
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="guide-note">
            <i className="bi bi-lightbulb" aria-hidden="true"></i>
            <p>{block.text}</p>
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
                    <th key={j} scope="col">{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, j) => (
                  <tr key={j}>
                    {row.map((cell, k) => (
                      <td key={k}>{cell}</td>
                    ))}
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
