import type { SanityImage } from "./types"

const MAX_SOURCE_DIMENSION = 2400

const PLACEHOLDER_LQIP =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"

/**
 * Converts a content image into the flat shape expected by Next.js `<Image>`.
 */
export function getImageUrl(image: SanityImage | null | undefined): {
  src: string
  width: number
  height: number
  blurDataURL: string
  alt: string
} | null {
  if (!image?.asset) return null

  const { asset, alt } = image
  const { width, height } = asset.metadata.dimensions

  const longestSide = Math.max(width, height)
  const scale =
    longestSide > MAX_SOURCE_DIMENSION ? MAX_SOURCE_DIMENSION / longestSide : 1

  return {
    src: asset.url,
    width: Math.round(width * scale),
    height: Math.round(height * scale),
    blurDataURL: asset.metadata.lqip || PLACEHOLDER_LQIP,
    alt: alt ?? ""
  }
}
