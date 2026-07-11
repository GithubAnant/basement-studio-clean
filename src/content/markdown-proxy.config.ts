export interface MarkdownRoute {
  mdRegex: RegExp
  htmlRegex: RegExp
  apiPath: string
  publicMdPath: string
}

export const markdownRoutes: MarkdownRoute[] = [
  {
    mdRegex: /^\/post\/([^/]+)\.md$/,
    htmlRegex: /^\/post\/([^/.]+)$/,
    apiPath: "/api/post/[slug].md",
    publicMdPath: "/post/[slug].md"
  },
  {
    mdRegex: /^\/showcase\/([^/]+)\.md$/,
    htmlRegex: /^\/showcase\/([^/.]+)$/,
    apiPath: "/api/showcase/[slug].md",
    publicMdPath: "/showcase/[slug].md"
  },
  {
    mdRegex: /^\/careers\/([^/]+)\.md$/,
    htmlRegex: /^\/careers\/([^/.]+)$/,
    apiPath: "/api/careers/[slug].md",
    publicMdPath: "/careers/[slug].md"
  },
  {
    mdRegex: /^\/index\.md$/,
    htmlRegex: /^\/$/,
    apiPath: "/api/index.md",
    publicMdPath: "/index.md"
  },
  {
    mdRegex: /^\/services\.md$/,
    htmlRegex: /^\/services$/,
    apiPath: "/api/services.md",
    publicMdPath: "/services.md"
  },
  {
    mdRegex: /^\/people\.md$/,
    htmlRegex: /^\/people$/,
    apiPath: "/api/people.md",
    publicMdPath: "/people.md"
  },
  {
    mdRegex: /^\/showcase\.md$/,
    htmlRegex: /^\/showcase$/,
    apiPath: "/api/showcase.md",
    publicMdPath: "/showcase.md"
  }
]
