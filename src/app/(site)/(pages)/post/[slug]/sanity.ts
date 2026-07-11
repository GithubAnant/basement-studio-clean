import type { PortableTextBlock, SanityImage } from "@/content/types"
import { blogPosts } from "@/content/data/site-content"

import { selectRelatedPosts } from "./related-posts.logic"

export interface PostDetail {
  _id: string
  _createdAt: string
  _updatedAt: string
  title: string
  slug: string
  date: string | null
  intro: PortableTextBlock[] | null
  content: PortableTextBlock[] | null
  categories: Array<{ title: string; slug: string }> | null
  authors: Array<{ title: string }> | null
  heroImage: SanityImage | null
  heroVideo: string | null
}

export interface RelatedPost {
  _id: string
  title: string
  slug: string
  date: string | null
  heroImage: SanityImage | null
  categories: Array<{ title: string; slug: string }> | null
}

export async function fetchPostBySlug(slug: string): Promise<PostDetail | null> {
  const post = blogPosts.find((p) => p.slug === slug)
  return post ?? null
}

export interface PostIndexEntry {
  title: string
  slug: string
  date: string | null
}

export async function fetchAllPostsForIndex(): Promise<PostIndexEntry[]> {
  return blogPosts.map((p) => ({
    title: p.title,
    slug: p.slug,
    date: p.date
  }))
}

export async function fetchRelatedPosts(
  currentSlug: string,
  currentCategoryTitles: string[]
): Promise<RelatedPost[]> {
  const posts = blogPosts.map((p) => ({
    _id: p._id,
    title: p.title,
    slug: p.slug,
    date: p.date,
    heroImage: p.heroImage,
    categories: p.categories
  }))

  return selectRelatedPosts({
    posts,
    currentSlug,
    currentCategoryTitles
  })
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  return blogPosts.map((p) => p.slug)
}

export async function fetchPostMeta(
  slug: string
): Promise<{ title: string; intro: PortableTextBlock[] | null } | null> {
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return null
  return { title: post.title, intro: post.intro }
}
