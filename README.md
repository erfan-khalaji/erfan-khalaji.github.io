# erfan-khalaji.github.io

Personal portfolio for Erfan Khalaji — AI Scientist. Deployed at
[erfan-khalaji.github.io](https://erfan-khalaji.github.io).

## Stack

- **Next.js 14** (App Router, static export)
- **TypeScript** (strict)
- **Tailwind CSS** + custom design tokens
- **Framer Motion** for scroll/enter animations
- **Lucide** icons
- Inter / Space Grotesk / JetBrains Mono via `next/font`
- Hand-rolled `<canvas>` neural-network background with live signal propagation

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export to ./out
```

## Editing content

Everything visible on the site lives in [src/lib/data.ts](src/lib/data.ts):

- `profile` — name, title, location, links, summary, tagline
- `heroStats` — hero stat cards
- `focusAreas` — chips under the hero
- `experiences` — work timeline
- `projects` — notable projects
- `publications` — peer-reviewed work
- `skillGroups` — categorized tech stack
- `education`
- `navLinks`

## Deployment

GitHub Pages via `.github/workflows/deploy.yml`. Push to `main` and the workflow
builds `out/` and publishes it.

## Project structure

```
public/
  images/hero-photo.jpg
src/
  app/                  layout, page, globals
  components/           Hero, About, Experience, Projects, Publications,
                        Skills, Education, Contact, Footer, Navbar,
                        Section, NeuralBackground
  lib/data.ts           all displayed content
```
