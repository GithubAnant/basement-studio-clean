import { homepageData, organizationData } from "@/content/data/site-content"
import type {
  PortableTextBlock,
  SanityImage,
  SanityMuxVideo,
  SanitySlug,
  SanityVideo
} from "@/content/types"

export interface HomepageData {
  homepage: {
    introTitle: PortableTextBlock[] | null
    introSubtitle: PortableTextBlock[] | null
    capabilitiesIntro: PortableTextBlock[] | null
    featuredProjects: FeaturedProjectItem[] | null
    capabilities: SanityProjectCategory[] | null
    clients: SanityClient[] | null
  }
}

export interface FeaturedProjectItem {
  _key: string
  title: string | null
  excerpt: string | null
  project: {
    _id: string
    title: string
    slug: SanitySlug
    categories: Array<{ _id: string; title: string }> | null
  } | null
  cover: SanityImage | null
  coverVideo: SanityVideo | null
  muxCoverVideo: SanityMuxVideo | null
}

export interface SanityClient {
  _id: string
  title: string
  logo: SanityImage | null
  website: string | null
}

export interface SanityProjectCategory {
  _id: string
  title: string
  slug: SanitySlug
  description: string | null
  subcategories: Array<{ _key: string; title: string }> | null
}

export interface OrganizationStructuredData {
  description: string | null
  foundingDate: string | number | null
  email: string | null
  contactPoints: Array<{ email: string; contactType: string }>
  addressCity: string | null
  addressRegion: string | null
  addressCountry: string | null
  logoUrl: string | null
  founders: Array<{
    name: string
    url: string | null
    jobTitle: string | null
  }>
  awards: Array<{
    title: string
    date: string | number | null
    projectName: string | null
  }>
  social: {
    github: string | null
    instagram: string | null
    twitter: string | null
    linkedIn: string | null
  }
}

export async function fetchHomepage(_options?: {
  published?: boolean
}): Promise<HomepageData> {
  return homepageData
}

export async function fetchOrganizationData(): Promise<OrganizationStructuredData> {
  return organizationData
}
