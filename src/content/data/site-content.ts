import { img, pt, slug } from "../utils"
import type { PortableTextBlock, SanityImage } from "../types"

const LOGO = img("/images/logobasement.png", {
  alt: "basement.studio",
  width: 512,
  height: 512
})

const COVER = img("/images/opengraph-image.gif", {
  alt: "Project cover",
  width: 1200,
  height: 642
})

// ---------------------------------------------------------------------------
// Site-wide
// ---------------------------------------------------------------------------

export const companyInfo = {
  github: "https://github.com/basementstudio",
  instagram: "https://instagram.com/basementstudio",
  twitter: "https://twitter.com/basementstudio",
  linkedIn: "https://linkedin.com/company/basementstudio",
  newsletter: pt(
    "Subscribe for occasional updates on projects, experiments, and studio life."
  ) as PortableTextBlock[]
}

export const projectsCount = 2
export const postsCount = 2

// ---------------------------------------------------------------------------
// Homepage
// ---------------------------------------------------------------------------

export const homepageData = {
  homepage: {
    introTitle: pt("We make cool shit that performs."),
    introSubtitle: pt(
      "A digital studio crafting brands, websites, 3D experiences, and products."
    ),
    capabilitiesIntro: pt(
      "From concept to launch — design, engineering, and everything in between."
    ),
    featuredProjects: [
      {
        _key: "featured-1",
        title: "Concept Launch",
        excerpt: "A flagship concept site built for speed and craft.",
        project: {
          _id: "project-1",
          title: "Concept Launch",
          slug: slug("concept-launch"),
          categories: [{ _id: "cat-1", title: "Web" }]
        },
        cover: COVER,
        coverVideo: null,
        muxCoverVideo: null
      }
    ],
    capabilities: [
      {
        _id: "cap-1",
        title: "Brand & Product",
        slug: slug("brand-product"),
        description: "Identity systems and product design.",
        subcategories: [{ _key: "sub-1", title: "Brand strategy" }]
      },
      {
        _id: "cap-2",
        title: "Web & 3D",
        slug: slug("web-3d"),
        description: "Interactive sites and real-time experiences.",
        subcategories: [{ _key: "sub-2", title: "Next.js" }]
      }
    ],
    clients: [
      {
        _id: "client-1",
        title: "Concept Client",
        logo: LOGO,
        website: "https://example.com"
      }
    ]
  }
}

export const organizationData = {
  description: "Digital studio crafting brands, websites, and 3D experiences.",
  foundingDate: "2018",
  email: "hello@basement.studio",
  contactPoints: [
    { email: "hello@basement.studio", contactType: "customer support" },
    { email: "sales@basement.studio", contactType: "sales" }
  ],
  addressCity: null,
  addressRegion: null,
  addressCountry: null,
  logoUrl: "/images/logobasement.png",
  founders: [] as Array<{
    name: string
    url: string | null
    jobTitle: string | null
  }>,
  awards: [] as Array<{
    title: string
    date: string | number | null
    projectName: string | null
  }>,
  social: {
    github: companyInfo.github,
    instagram: companyInfo.instagram,
    twitter: companyInfo.twitter,
    linkedIn: companyInfo.linkedIn
  }
}

// ---------------------------------------------------------------------------
// Showcase
// ---------------------------------------------------------------------------

export const showcaseProjects = [
  {
    _id: "project-1",
    title: "Concept Launch",
    slug: "concept-launch",
    client: { _id: "client-1", title: "Concept Client" },
    year: 2026,
    categories: [{ _id: "cat-1", title: "Web" }],
    cover: COVER,
    coverVideo: null,
    muxCoverVideo: null,
    icon: LOGO,
    showcase: [
      {
        _key: "show-1",
        image: COVER,
        video: null,
        muxVideo: null
      }
    ]
  },
  {
    _id: "project-2",
    title: "Studio Experiment",
    slug: "studio-experiment",
    client: { _id: "client-1", title: "Concept Client" },
    year: 2025,
    categories: [{ _id: "cat-2", title: "3D" }],
    cover: COVER,
    coverVideo: null,
    muxCoverVideo: null,
    icon: LOGO,
    showcase: [
      {
        _key: "show-2",
        image: COVER,
        video: null,
        muxVideo: null
      }
    ]
  }
]

export const showcaseCategories = [
  { _id: "cat-1", title: "Web", slug: "web" },
  { _id: "cat-2", title: "3D", slug: "3d" }
]

export const showcaseProjectDetails: Record<
  string,
  {
    _id: string
    title: string
    slug: string
    client: { title: string; website: string | null } | null
    year: number | null
    categories: Array<{ title: string }> | null
    projectWebsite: string | null
    content: PortableTextBlock[] | null
    caseStudy: string | null
    people: Array<{
      _id: string
      title: string
      department: { title: string } | null
    }> | null
    cover: SanityImage | null
    icon: SanityImage | null
    showcase: Array<{
      _key: string
      image: SanityImage | null
      video: null
      muxVideo: null
    }> | null
    awards: Array<{ title: string; date: string | null }> | null
  }
> = {
  "concept-launch": {
    _id: "project-1",
    title: "Concept Launch",
    slug: "concept-launch",
    client: { title: "Concept Client", website: "https://example.com" },
    year: 2026,
    categories: [{ title: "Web" }],
    projectWebsite: "https://example.com",
    content: pt(
      "A concept project showcasing brand, web, and interactive craft in one cohesive experience."
    ),
    caseStudy: null,
    people: null,
    cover: COVER,
    icon: LOGO,
    showcase: [
      { _key: "show-1", image: COVER, video: null, muxVideo: null }
    ],
    awards: null
  },
  "studio-experiment": {
    _id: "project-2",
    title: "Studio Experiment",
    slug: "studio-experiment",
    client: { title: "Concept Client", website: null },
    year: 2025,
    categories: [{ title: "3D" }],
    projectWebsite: null,
    content: pt("An internal R&D experiment exploring real-time 3D on the web."),
    caseStudy: null,
    people: null,
    cover: COVER,
    icon: LOGO,
    showcase: [
      { _key: "show-2", image: COVER, video: null, muxVideo: null }
    ],
    awards: null
  }
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export const blogCategories = [
  { title: "Engineering", slug: "engineering" },
  { title: "Design", slug: "design" }
]

export const blogPosts = [
  {
    _id: "post-1",
    title: "Building a concept website",
    slug: "building-a-concept-website",
    categories: [{ title: "Engineering", slug: "engineering" }],
    date: "2026-01-15",
    intro: pt("How we stripped CMS complexity and shipped a lean concept site."),
    heroImage: COVER,
    heroVideo: null,
    content: pt(
      "This is placeholder blog content. Replace it with your own story, process, and screenshots."
    ),
    authors: [{ title: "Studio Team" }],
    _createdAt: "2026-01-15T00:00:00Z",
    _updatedAt: "2026-01-15T00:00:00Z"
  },
  {
    _id: "post-2",
    title: "Designing for performance",
    slug: "designing-for-performance",
    categories: [{ title: "Design", slug: "design" }],
    date: "2025-11-01",
    intro: pt("Performance is a design constraint — not an afterthought."),
    heroImage: COVER,
    heroVideo: null,
    content: pt(
      "Placeholder post about balancing visual craft with fast load times and smooth interaction."
    ),
    authors: [{ title: "Studio Team" }],
    _createdAt: "2025-11-01T00:00:00Z",
    _updatedAt: "2025-11-01T00:00:00Z"
  }
]

// ---------------------------------------------------------------------------
// People
// ---------------------------------------------------------------------------

export const peoplePageData = {
  title: "People",
  subheading1: pt("A small team obsessed with craft, curiosity, and shipping."),
  subheading2: pt("We're always looking for talented people who care about the details."),
  preOpenPositionsSideImages: [COVER, COVER] as SanityImage[],
  preOpenPositionsText: pt(
    "Don't see your role? Reach out anyway — we're open to great people."
  )
}

export const people = [
  {
    title: "Alex Rivera",
    department: { title: "Design" },
    role: "Design Lead",
    image: COVER,
    socialNetworks: [{ platform: "twitter", url: "https://twitter.com" }]
  },
  {
    title: "Sam Chen",
    department: { title: "Engineering" },
    role: "Engineering Lead",
    image: COVER,
    socialNetworks: [{ platform: "github", url: "https://github.com" }]
  }
]

export const values = [
  {
    _key: "value-1",
    title: "Craft",
    description: pt("We sweat the details because details are the product."),
    image: COVER
  },
  {
    _key: "value-2",
    title: "Curiosity",
    description: pt("We experiment, learn in public, and push what's possible."),
    image: COVER
  }
]

export const openPositions = [
  {
    title: "Senior Frontend Engineer",
    slug: "senior-frontend-engineer",
    type: "Development",
    location: "Remote",
    isOpen: true
  }
]

export const careerPositions: Record<
  string,
  {
    _id: string
    _createdAt: string
    title: string
    slug: string
    type: string | null
    employmentType: string | null
    location: string | null
    isOpen: boolean
    applyUrl: string | null
    jobDescription: PortableTextBlock[] | null
    applyFormSetup: {
      formFields: string[]
      skills: Array<{ title: string; slug: string }>
    } | null
  }
> = {
  "senior-frontend-engineer": {
    _id: "position-1",
    _createdAt: "2026-01-01T00:00:00Z",
    title: "Senior Frontend Engineer",
    slug: "senior-frontend-engineer",
    type: "Development",
    employmentType: "Full-time",
    location: "Remote",
    isOpen: true,
    applyUrl: null,
    jobDescription: pt(
      "Help us build expressive, high-performance web experiences with React, Next.js, and WebGL."
    ),
    applyFormSetup: {
      formFields: ["email", "portfolio", "github", "linkedin"],
      skills: [
        { title: "React", slug: "react" },
        { title: "TypeScript", slug: "typescript" },
        { title: "WebGL", slug: "webgl" }
      ]
    }
  }
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export const servicesPageData = {
  intro: pt(
    "We partner with ambitious teams to design and build brands, products, and interactive experiences."
  ),
  heroImage: COVER,
  ventures: [
    {
      _key: "venture-1",
      title: "Venture Studio",
      content: pt("We incubate and ship internal products alongside client work."),
      image: COVER
    }
  ],
  serviceCategories: [
    {
      _key: "svc-1",
      title: "Brand & Identity",
      description: pt("Visual systems, positioning, and launch-ready brand kits.")
    },
    {
      _key: "svc-2",
      title: "Web & Product",
      description: pt("Sites, apps, and design systems built to scale.")
    }
  ]
}

export const awards: Array<{
  _id: string
  title: string
  date: string
  awardUrl: string | null
  projectName: string | null
  certificate: SanityImage | null
}> = []

export const testimonial = {
  _id: "testimonial-1",
  name: "Jordan Lee",
  handle: "@jordanlee",
  content: "They shipped something we didn't think was possible on the web.",
  avatar: COVER,
  date: "2025-12-01",
  role: "Product Lead"
}

// ---------------------------------------------------------------------------
// Lab
// ---------------------------------------------------------------------------

export const labProjects = [
  {
    title: "Shader Lab",
    url: "/lab",
    description: "Real-time shader experiments.",
    cover: COVER
  }
]

// ---------------------------------------------------------------------------
// Sitemap helpers
// ---------------------------------------------------------------------------

export const sitemapDynamicEntries = {
  posts: blogPosts.map((p) => ({
    href: `/post/${p.slug}`,
    _updatedAt: p._updatedAt
  })),
  projects: showcaseProjects.map((p) => ({
    href: `/showcase/${p.slug}`,
    _updatedAt: "2026-01-01T00:00:00Z"
  })),
  positions: openPositions
    .filter((p) => p.isOpen)
    .map((p) => ({
      href: `/careers/${p.slug}`,
      _updatedAt: "2026-01-01T00:00:00Z"
    })),
  blogCategories: blogCategories.map((c) => ({
    href: `/blog/${c.slug}`,
    _updatedAt: "2026-01-01T00:00:00Z"
  }))
}
