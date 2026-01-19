# Data Scientist Portfolio (React + Vite + Tailwind)

Single-page portfolio inspired by modern data science sites, with a particle-style hero, animated section reveals, and a dark indigo theme.

## Getting started

```bash
npm install
npm run dev
```

## Editing content

All text, links, and project data are centralized in `src/config/siteConfig.ts`.

- Update your name, hero copy, and resume link in `siteConfig.hero`.
- Replace the profile image URL and about text in `siteConfig.about`.
- Edit `siteConfig.projects.items` to add or remove projects.
- Contact links and labels live in `siteConfig.contact` and `siteConfig.socials`.

## Adding or editing projects

Each project object needs:

- `id`, `title`, `description`
- `tags: string[]`
- `githubUrl`, `liveUrl`
- Optional `status`

To feature a project, set `featuredProjectId` to the `id` of the item.

## Updating colors and theme

Tailwind theme tokens are defined in `tailwind.config.js` under `extend.colors`.
Global styling and design token notes live at the top of `src/index.css`.

## Structure

- `src/components/Layout` contains `Header` and `Footer`.
- `src/components/sections` contains `Hero`, `About`, `Projects`, `Contact`.
- `src/components/common/Section.tsx` provides consistent spacing and animation.
