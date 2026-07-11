import type { PortableTextBlock } from "@/content/types"
import { careerPositions, openPositions } from "@/content/data/site-content"

export interface CareerPosition {
  _id: string
  _createdAt: string
  title: string
  slug: string
  type: string | null
  employmentType: string | null
  location: string | null
  isOpen: boolean
  applyUrl: string | null
  jobDescription: PortableTextBlock[] | null
  applyFormSetup: {
    formFields: string[]
    skills: Array<{ title: string; slug: string }>
  } | null
}

export async function fetchCareerPosition(
  slug: string
): Promise<CareerPosition | null> {
  return careerPositions[slug] ?? null
}

export interface OpenPositionIndexEntry {
  title: string
  slug: string
}

export async function fetchAllOpenPositionsForIndex(): Promise<
  OpenPositionIndexEntry[]
> {
  return openPositions
    .filter((p) => p.isOpen)
    .map((p) => ({ title: p.title, slug: p.slug }))
}

export async function fetchAllOpenPositionSlugs(): Promise<string[]> {
  return openPositions.filter((p) => p.isOpen).map((p) => p.slug)
}

export async function fetchCareerPositionMeta(
  slug: string
): Promise<{ title: string } | null> {
  const position = careerPositions[slug]
  if (!position) return null
  return { title: position.title }
}
