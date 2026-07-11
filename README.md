# basement-studio-clean

**Basement Studio's 2025 concept site — stripped down so you can actually clone it.**

![Basement Studio Website 2025](./public/readme/hero.gif)

## About Me

Hey — I'm **Anant Singhal** ([@GithubAnant](https://github.com/GithubAnant)). I build things. Based in New Delhi, currently at **Trout 🐟**.

I forked and cleaned up [basementstudio/website-2k25](https://github.com/basementstudio/website-2k25) because the original is incredible — the 3D scenes, the motion, the whole vibe — but running it locally meant standing up Sanity, wiring env vars, and babysitting a bunch of external services. I wanted a version I could clone, poke at, and learn from without that overhead.

If you want to see what else I'm up to:

- Portfolio → [anants.studio](https://anants.studio)
- GitHub → [github.com/GithubAnant](https://github.com/GithubAnant)
- X → [@anant_hq](https://x.com/anant_hq)
- LinkedIn → [linkedin.com/in/anantsinghal1](https://www.linkedin.com/in/anantsinghal1/)

## About This Project

This is a **clone-friendly fork** of Basement Studio's 2025 website — a concept agency site built with Next.js, React Three Fiber, custom GLSL shaders, and a lot of motion design.

What I kept: the interactive front-end experience — 3D inspectables, physics toys, page transitions, the whole craft-heavy UI.

What I stripped: the production CMS stack and backend integrations that made the original hard to run as a side project. Content now lives as hardcoded TypeScript under `src/content/` instead of Sanity.

> **Demo:** No public deploy yet — run it locally (see Quick Start below).

## Credits

This project wouldn't exist without the original work from [Basement Studio](https://basement.studio). Design, engineering, and the open-source foundation all come from them.

Original repo: [github.com/basementstudio/website-2k25](https://github.com/basementstudio/website-2k25)

If you ship something cool with this fork, credit them — they did the hard part.

## Quick Start

**Requirements:** Node.js 20+, [pnpm](https://pnpm.io/)

```bash
git clone https://github.com/GithubAnant/basement-studio-clean.git
cd basement-studio-clean
pnpm install
cp .env.example .env.local   # optional — only NEXT_PUBLIC_SITE_URL
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

| Command | What it does |
|---|---|
| `pnpm dev` | Start dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |

## What's Different

Compared to the upstream [basementstudio/website-2k25](https://github.com/basementstudio/website-2k25):

- **No Sanity CMS** — content is hardcoded in `src/content/data/`
- **No PostHog** — analytics stubbed to no-ops
- **No Notion / Supabase / GitHub CMS** — no external content pipelines
- **No draft/studio routes** — Sanity Studio and preview wiring removed
- **Minimal env setup** — optional `NEXT_PUBLIC_SITE_URL` in `.env.example`; no API tokens or service accounts
- **Same front-end magic** — React Three Fiber, Rapier physics, GLSL shaders, Motion animations, and the concept-site UX are still here

---

Built by [Anant Singhal](https://github.com/GithubAnant) · Forked from [Basement Studio](https://github.com/basementstudio/website-2k25)
