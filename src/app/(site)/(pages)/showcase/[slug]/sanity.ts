import type { PortableTextBlock, SanityImage, SanityMuxVideo, SanityVideo } from "@/content/types"
import { showcaseProjectDetails, showcaseProjects } from "@/content/data/site-content"

import { selectRelatedProjects } from "./related-projects.logic"

export interface ShowcaseProjectDetail {
  _id: string
  title: string
  slug: string
  client: { title: string; website: string | null } | null
  year: number | null
  categories: Array<{ title: string }> | null
  projectWebsite: string | null
  content: PortableTextBlock[] | null
  caseStudy: string | null
  people: Array<{
    _id: string
    title: string
    department: { title: string } | null
  }> | null
  cover: SanityImage | null
  icon: SanityImage | null
  showcase: Array<{
    _key: string
    image: SanityImage | null
    video: SanityVideo | null
    muxVideo: SanityMuxVideo | null
  }> | null
  awards: Array<{ title: string; date: string | null }> | null
}

export interface RelatedProject {
  _id: string
  title: string
  slug: string
  icon: SanityImage | null
}

export async function fetchProjectBySlug(
  slug: string
): Promise<ShowcaseProjectDetail | null> {
  return showcaseProjectDetails[slug] ?? null
}

export interface ProjectIndexEntry {
  title: string
  slug: string
  year: number | null
}

export async function fetchAllProjectsForIndex(): Promise<ProjectIndexEntry[]> {
  return showcaseProjects.map((p) => ({
    title: p.title,
    slug: p.slug,
    year: p.year
  }))
}

export async function fetchAllProjectSlugs(): Promise<Array<{ slug: string }> | null> {
  return showcaseProjects.map((p) => ({ slug: p.slug }))
}

export async function fetchProjectMeta(
  slug: string
): Promise<{ title: string; content: PortableTextBlock[] | null } | null> {
  const project = showcaseProjectDetails[slug]
  if (!project) return null
  return { title: project.title, content: project.content }
}

export async function fetchRelatedProjects(
  excludeSlug: string
): Promise<RelatedProject[]> {
  const all = showcaseProjects.map((p) => ({
    _id: p._id,
    title: p.title,
    slug: p.slug,
    icon: p.icon
  }))

  return selectRelatedProjects({ projects: all, excludeSlug })
}
