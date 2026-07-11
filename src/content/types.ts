import type { PortableTextBlock as PTBlock } from "@portabletext/types"

/** Image shape used across hardcoded content. */
export interface SanityImage {
  alt?: string | null
  asset: {
    url: string
    metadata: {
      dimensions: { width: number; height: number }
      lqip: string
    }
  } | null
}

/** Video file reference. */
export interface SanityVideo {
  url: string | null
  mimeType: string | null
}

/** Mux video reference. */
export interface SanityMuxVideo {
  playbackId: string | null
  assetId: string | null
  aspectRatio: string | null
  duration: number | null
}

/** Slug object. */
export interface SanitySlug {
  current: string
}

export type PortableTextBlock = PTBlock
