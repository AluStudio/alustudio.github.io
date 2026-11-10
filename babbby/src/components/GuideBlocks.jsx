import { Lightbulb } from "@phosphor-icons/react";

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
          <ol key={i}>
            {block.items.map((item, j) => (
              <li key={j}>{item}</li>
            ))}
          </ol>
        );
      case "note":
        return (
          <div key={i} className="note">
            <Lightbulb size={20} weight="duotone" aria-hidden="true" />
            <p>{block.text}</p>
          </div>
        );
      default:
        throw new Error(`Unknown guide block type "${block.type}"`);
    }
  });
}

export default GuideBlocks;
