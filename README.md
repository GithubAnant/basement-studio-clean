# Basement Studio (Clean)

![Basement Studio Website 2025](./public/readme/hero.gif)

A simplified, clone-friendly version of the [Basement Studio 2025 website](https://basement.studio). This repo keeps the interactive concept and front-end experience while removing the operational complexity of the original production stack.

## What changed

- **Removed** Sanity CMS, GitHub CMS wiring, Notion/Supabase integrations, and related draft/studio routes
- **Removed** large sets of environment variables and service tokens
- **Replaced** CMS-driven content with hardcoded data under `src/content/`
- **Minimal** configuration via `.env.example` (optional `NEXT_PUBLIC_SITE_URL` for local dev)

The result is a project you can clone, install, and run without standing up external services.

## Credits

Built on top of the original [basementstudio/website-2k25](https://github.com/basementstudio/website-2k25) repository. Thanks to Basement Studio for the design, engineering, and open-source foundation.

## Getting started

**Requirements:** Node.js (see `.nvmrc` if present), [pnpm](https://pnpm.io/)

```bash
git clone https://github.com/GithubAnant/basement-studio-clean.git
cd basement-studio-clean
pnpm install
cp .env.example .env.local   # optional
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts: `pnpm build`, `pnpm start`, `pnpm lint`.
