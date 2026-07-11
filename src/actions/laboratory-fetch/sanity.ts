import { labProjects } from "@/content/data/site-content"

export interface LabProject {
  title: string
  url: string
  description: string | null
  cover: {
    asset: {
      url: string
      metadata: {
        dimensions: { width: number; height: number }
        lqip: string
      }
    }
  } | null
}

export async function fetchLabProjects(): Promise<LabProject[]> {
  return labProjects
}
