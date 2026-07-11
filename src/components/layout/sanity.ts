import type { PortableTextBlock } from "@/content/types"
import { companyInfo, postsCount, projectsCount } from "@/content/data/site-content"

export interface CompanyInfo {
  github: string | null
  instagram: string | null
  twitter: string | null
  linkedIn: string | null
  newsletter: PortableTextBlock[] | null
}

export async function fetchProjectsCount(): Promise<number> {
  return projectsCount
}

export async function fetchPostsCount(): Promise<number> {
  return postsCount
}

export async function fetchCompanyInfo(): Promise<CompanyInfo> {
  return companyInfo
}
