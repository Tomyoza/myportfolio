# Tomoki Yoza — Portfolio

My personal developer portfolio, built with Next.js and Tailwind CSS to showcase my projects and skills.

Live projects and skills are data-driven — see [`Data/projects.json`](Data/projects.json) and [`Data/skills.json`](Data/skills.json).

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, Turbopack)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- TypeScript

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
app/
  components/   # Navbar, Sections, Contact, ThemeToggle
  page.tsx      # Home page
  layout.tsx    # Root layout and metadata
Data/
  projects.json # Project cards shown on the site
  skills.json   # Skills list shown on the site
public/         # Images and icons
```

## Editing Content

- To add or update a project, edit [`Data/projects.json`](Data/projects.json).
- To add or update a skill, edit [`Data/skills.json`](Data/skills.json).
- Referenced images/icons go in [`public/`](public).

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — build for production
- `npm run start` — run the production build
- `npm run lint` — run ESLint

## Deployment

Deployed on [Vercel](https://vercel.com).
