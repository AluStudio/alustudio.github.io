// Inline links in guide text — [label](/route/) to a page of the same
// language, or [label](https://…). Shared by GuideBlocks (rendering),
// getGuidesLinkingTo (support → guide backlinks) and copy-spa-pages.js
// (link validation), so all three read the same links.
export const INLINE_LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g;

/** Every text of a block that may carry inline links. */
export const blockTexts = (block) => [
  ...(block.text ? [block.text] : []),
  ...(block.items ?? []),
  ...(block.rows ?? []).flat(),
];

/** Whether `guide`'s text links to the router-relative `route` ("/support/payment-fees/"). */
export const guideLinksTo = (guide, route) =>
  guide.content
    .flatMap(blockTexts)
    .some((text) => [...text.matchAll(INLINE_LINK)].some(([, , href]) => href === route));
