// Build-time checks for a guide `image` block, shared by every app whose
// GuideBlocks.jsx renders one (DingPOS, Babbby). Rules: docs/specs/seo-aeo.md
// §獲客文章 and docs/specs/performance.md §圖片.
//
// Block: { type: "image", src, phone?, width, height, alt, caption? }
//   src / phone — .webp paths relative to the app's public/
//   phone       — the same picture at PHONE_IMAGE_WIDTH, required when src is wider

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

// GuideBlocks.jsx declares an image's `phone` file at this width in its srcset.
export const PHONE_IMAGE_WIDTH = 1080;

/** [width, height] of a WebP file from its VP8 / VP8L / VP8X header, or null. */
export function webpSize(path) {
  const b = readFileSync(path);
  if (b.length < 30 || b.toString("ascii", 0, 4) !== "RIFF" || b.toString("ascii", 8, 12) !== "WEBP") return null;
  switch (b.toString("ascii", 12, 16)) {
    case "VP8 ":
      return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    case "VP8L": {
      const bits = b.readUInt32LE(21);
      return [(bits & 0x3fff) + 1, ((bits >>> 14) & 0x3fff) + 1];
    }
    case "VP8X":
      return [b.readUIntLE(24, 3) + 1, b.readUIntLE(27, 3) + 1];
    default:
      return null;
  }
}

/** Errors of an image block: real WebP files under `publicDir`, sized as declared. */
export function imageBlockErrors(block, at, publicDir) {
  const errors = [];
  const isPositiveInt = (n) => Number.isInteger(n) && n > 0;
  if (!block.alt?.trim()) errors.push(`${at} has no alt`);
  if (block.caption !== undefined && (typeof block.caption !== "string" || !block.caption.trim() || /[[\]]/.test(block.caption))) {
    errors.push(`${at} caption is empty or carries link markup`);
  }
  if (!isPositiveInt(block.width) || !isPositiveInt(block.height)) {
    errors.push(`${at} width/height ${block.width}x${block.height} are not positive integers`);
  }
  if (block.width > PHONE_IMAGE_WIDTH && !block.phone) {
    errors.push(`${at} is ${block.width}px wide and has no ${PHONE_IMAGE_WIDTH}w phone file`);
  }
  if (block.phone && !(block.width > PHONE_IMAGE_WIDTH)) {
    errors.push(`${at} has a phone file but is not wider than ${PHONE_IMAGE_WIDTH}px`);
  }
  const file = (field) => {
    const rel = block[field];
    if (typeof rel !== "string" || !/\.webp$/.test(rel) || rel.startsWith("/") || rel.split("/").includes("..")) {
      errors.push(`${at} ${field} "${rel}" is not a .webp path relative to public/`);
      return null;
    }
    const path = join(publicDir, rel);
    if (!existsSync(path)) {
      errors.push(`${at} ${field} public/${rel} does not exist`);
      return null;
    }
    const size = webpSize(path);
    if (!size) errors.push(`${at} ${field} public/${rel} is not a WebP file`);
    return size;
  };
  const size = file("src");
  if (size && (size[0] !== block.width || size[1] !== block.height)) {
    errors.push(`${at} declares ${block.width}x${block.height}, but public/${block.src} is ${size[0]}x${size[1]}`);
  }
  if (block.phone) {
    const phone = file("phone");
    // The same picture at PHONE_IMAGE_WIDTH: height within a pixel of scale rounding.
    const expectedHeight = (block.height * PHONE_IMAGE_WIDTH) / block.width;
    if (phone && (phone[0] !== PHONE_IMAGE_WIDTH || Math.abs(phone[1] - expectedHeight) > 1)) {
      errors.push(
        `${at} phone public/${block.phone} is ${phone[0]}x${phone[1]}, not ${PHONE_IMAGE_WIDTH}x${Math.round(expectedHeight)}`,
      );
    }
  }
  return errors;
}
