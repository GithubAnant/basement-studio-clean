import { blogCategories, blogPosts } from "@/content/data/site-content"
import type { PortableTextBlock, SanityImage } from "@/content/types"

export interface BlogPost {
  _id: string
  title: string
  slug: string
  categories: Array<{ title: string; slug: string }> | null
  date: string | null
  intro: PortableTextBlock[] | null
  heroImage: SanityImage | null
  heroVideo: string | null
}

export interface BlogCategory {
  title: string
  slug: string
}

export async function fetchPosts(
  category?: string
): Promise<{ posts: BlogPost[]; total: number }> {
  const filtered = category
    ? blogPosts.filter((p) => p.categories?.some((c) => c.slug === category))
    : blogPosts.slice(1)

  return {
    posts: filtered,
    total: category ? filtered.length : blogPosts.length
  }
}

export async function fetchFeaturedPost(): Promise<BlogPost | null> {
  return blogPosts[0] ?? null
}

export async function fetchCategories(): Promise<BlogCategory[]> {
  return blogCategories
}

export async function fetchCategoriesNonEmpty(_options?: {
  forStaticParams?: boolean
}): Promise<BlogCategory[]> {
  return blogCategories
}

export async function fetchPostCount(): Promise<number> {
  return blogPosts.length
}

export async function fetchPostListForSchema(): Promise<
  Array<{ title: string; slug: string }>
> {
  return blogPosts.map((p) => ({ title: p.title, slug: p.slug }))
}
