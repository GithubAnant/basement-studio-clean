import type { PortableTextBlock, SanityImage, SanitySlug } from "./types"

const PLACEHOLDER_LQIP =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

let blockKey = 0

function nextKey(prefix: string) {
  blockKey += 1
  return `${prefix}-${blockKey}`
}

/** Build a minimal portable-text paragraph from plain text. */
export function pt(text: string, style: "normal" | "h1" | "h2" | "h3" = "normal"): PortableTextBlock[] {
  return [
    {
      _type: "block",
      _key: nextKey("block"),
      style,
      markDefs: [],
      children: [
        {
          _type: "span",
          _key: nextKey("span"),
          text,
          marks: []
        }
      ]
    }
  ]
}

/** Build a local image reference from a public path. */
export function img(
  url: string,
  options?: { alt?: string; width?: number; height?: number }
): SanityImage {
  return {
    alt: options?.alt ?? null,
    asset: {
      url,
      metadata: {
        dimensions: {
          width: options?.width ?? 1200,
          height: options?.height ?? 800
        },
        lqip: PLACEHOLDER_LQIP
      }
    }
  }
}

export function slug(current: string): SanitySlug {
  return { current }
}
