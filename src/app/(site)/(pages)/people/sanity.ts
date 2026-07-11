import type { PortableTextBlock, SanityImage } from "@/content/types"
import { openPositions, people, peoplePageData, values } from "@/content/data/site-content"

interface SocialNetwork {
  platform: string
  url: string
}

export interface PersonItem {
  title: string
  department: { title: string } | null
  role: string | null
  image: SanityImage | null
  socialNetworks: SocialNetwork[]
}

export interface PersonDisplay {
  title: string
  department: string | null
  role: string | null
  image: {
    url: string
    width: number
    height: number
    alt: string | null
    blurDataURL: string | null
  } | null
  socialNetworks: SocialNetwork[]
}

export interface ValueItem {
  _key: string
  title: string
  description: PortableTextBlock[] | null
  image: SanityImage | null
}

export interface OpenPositionItem {
  title: string
  slug: string
  type: string | null
  location: string | null
  isOpen: boolean
}

export interface PeoplePageData {
  title: string | null
  subheading1: PortableTextBlock[] | null
  subheading2: PortableTextBlock[] | null
  preOpenPositionsSideImages: SanityImage[] | null
  preOpenPositionsText: PortableTextBlock[] | null
}

export async function fetchPeoplePage(): Promise<PeoplePageData | null> {
  return peoplePageData
}

export async function fetchPeople(): Promise<PersonItem[]> {
  return people
}

export async function fetchValues(): Promise<ValueItem[]> {
  return values
}

export async function fetchOpenPositions(): Promise<OpenPositionItem[]> {
  return openPositions
}
