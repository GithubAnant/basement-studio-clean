import { labProjects } from "@/content/data/site-content"
import type { SanityImage } from "@/content/types"

export interface LabProject {
  title: string
  url: string
  description: string | null
  cover: SanityImage | null
}

export async function fetchLabProjects(): Promise<LabProject[]> {
  return labProjects
}
