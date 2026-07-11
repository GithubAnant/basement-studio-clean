import type { MetadataRoute } from "next"

import { sitemapDynamicEntries } from "@/content/data/site-content"

const SITE_URL = "https://basement.studio"

interface SitemapEntry {
  href: string
  _updatedAt: string
}

const staticRoutes: Array<{ href: string; priority: number }> = [
  { href: "/", priority: 1 },
  { href: "/showcase", priority: 0.9 },
  { href: "/services", priority: 0.9 },
  { href: "/blog", priority: 0.8 },
  { href: "/people", priority: 0.7 },
  { href: "/contact", priority: 0.7 },
  { href: "/lab", priority: 0.5 },
  { href: "/basketball", priority: 0.3 },
  { href: "/doom", priority: 0.3 }
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = sitemapDynamicEntries
  const now = new Date()

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: new URL(r.href, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: "weekly",
    priority: r.priority
  }))

  const buildEntries = (
    entries: SitemapEntry[],
    priority: number
  ): MetadataRoute.Sitemap =>
    entries.map((e) => ({
      url: new URL(e.href, SITE_URL).toString(),
      lastModified: new Date(e._updatedAt),
      changeFrequency: "weekly",
      priority
    }))

  return [
    ...staticEntries,
    ...buildEntries(data.projects, 0.8),
    ...buildEntries(data.posts, 0.7),
    ...buildEntries(data.positions, 0.6),
    ...buildEntries(data.blogCategories, 0.6)
  ]
}
