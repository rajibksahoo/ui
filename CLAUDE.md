# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm start        # Start production server
npm run lint     # Run ESLint (next/core-web-vitals)
```

No test framework is configured.

## Architecture

This is a **single-page portfolio site** built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

**Single page, hash navigation**: All sections render in [page.tsx](src/app/page.tsx). Navigation uses hash anchors (#hero, #about, #projects, etc.), not file-based routing.

**Content is centralized in [src/data/content.ts](src/data/content.ts)**: All portfolio data (projects, articles, videos, experience, skills) lives here. Type definitions are in [src/types/index.ts](src/types/index.ts). To change what's displayed on the site, edit the data file — not the components.

**Component structure**: Each section has a corresponding component in `src/components/` (Hero, About, Projects, Articles, Videos, Experience, Skills, Contact). Components use `'use client'` for interactivity. Reusable UI primitives: Badge, Button, Accordion.

**Styling**: Tailwind CSS with `class`-based dark mode. Custom color scale under `dark` in [tailwind.config.ts](tailwind.config.ts). Animations via Framer Motion and custom Tailwind keyframes (fadeIn, slideIn).

**SEO metadata**: Defined server-side in [layout.tsx](src/app/layout.tsx) using config from [src/lib/metadata.ts](src/lib/metadata.ts).

## Code Style

- Prettier: single quotes, semicolons, trailing commas (es5), 100 char width, 2-space indent
- Path alias: `@/*` maps to `src/*`
- Functional components with TypeScript interfaces
