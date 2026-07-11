import type { PortableTextBlock, SanityImage } from "@/content/types"
import { awards, servicesPageData, testimonial } from "@/content/data/site-content"

export interface ServiceCategory {
  _key: string
  title: string
  description: PortableTextBlock[] | null
}

export interface Venture {
  _key: string
  title: string
  content: PortableTextBlock[] | null
  image: SanityImage | null
}

export interface ServiceAward {
  _id: string
  title: string
  date: string
  awardUrl: string | null
  projectName: string | null
  certificate: SanityImage | null
}

export interface ServiceTestimonial {
  _id: string
  name: string
  handle: string | null
  content: string | null
  avatar: SanityImage | null
  date: string
  role: PortableTextBlock[] | string | null
}

export interface ServicesPageData {
  intro: PortableTextBlock[] | null
  heroImage: SanityImage | null
  ventures: Venture[]
  serviceCategories: ServiceCategory[]
}

export async function fetchServicesPage(): Promise<ServicesPageData | null> {
  return servicesPageData
}

export async function fetchAwards(): Promise<ServiceAward[]> {
  return awards
}

export async function fetchTestimonial(): Promise<ServiceTestimonial | null> {
  return testimonial
}
