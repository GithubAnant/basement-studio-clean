import type { SanityImage, SanityMuxVideo, SanityVideo } from "@/content/types"
import {
  showcaseCategories,
  showcaseProjects,
  showcaseProjectDetails
} from "@/content/data/site-content"

export interface ShowcaseProject {
  _id: string
  title: string
  slug: string
  client: { _id: string; title: string } | null
  year: number | null
  categories: Array<{ _id: string; title: string }> | null
  cover: SanityImage | null
  coverVideo: SanityVideo | null
  muxCoverVideo: SanityMuxVideo | null
  icon: SanityImage | null
  showcase: Array<{
    _key: string
    image: SanityImage | null
    video: SanityVideo | null
    muxVideo: SanityMuxVideo | null
  }> | null
}

export interface ShowcaseCategory {
  _id: string
  title: string
  slug: string
}

export interface ShowcaseListEntry {
  title: string
  slug: string
  client: string | null
  year: number | null
}

export async function fetchProjects(): Promise<ShowcaseProject[]> {
  return showcaseProjects
}

export async function fetchProjectsCount(): Promise<number> {
  return showcaseProjects.length
}

export async function fetchProjectListForSchema(): Promise<
  Array<{ title: string; slug: string }>
> {
  return showcaseProjects.map((p) => ({ title: p.title, slug: p.slug }))
}

export async function fetchCategories(): Promise<ShowcaseCategory[]> {
  return showcaseCategories
}

export async function fetchShowcaseListForMarkdown(): Promise<
  ShowcaseListEntry[]
> {
  return showcaseProjects.map((p) => ({
    title: p.title,
    slug: p.slug,
    client: p.client?.title ?? null,
    year: p.year
  }))
}
