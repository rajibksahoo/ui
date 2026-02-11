# Senior Backend Developer Portfolio - Workspace Instructions

This is a professional portfolio website designed specifically for Senior Backend Engineers.

## Project Overview

A modern, minimalistic, developer-centric portfolio built with Next.js, TypeScript, and Tailwind CSS. The site showcases:
- Featured projects with architecture decisions
- Technical articles and videos
- Experience timeline
- Comprehensive skill matrix
- Contact information

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation & Setup

```bash
# Install dependencies
npm install

# Create environment file
cp .env.local.example .env.local

# Start development server
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Structure

- `src/app/` - Next.js app directory with layout and pages
- `src/components/` - React components (Hero, Projects, Articles, etc.)
- `src/data/content.ts` - All portfolio content (projects, articles, experience)
- `src/types/` - TypeScript interfaces
- `src/lib/` - Utility functions and helpers
- `public/` - Static assets

## Key Customization Points

1. **Content**: Edit `src/data/content.ts` to update:
   - Personal info (name, email, social links)
   - Featured projects
   - Articles and videos
   - Experience timeline
   - Skills and tech stack

2. **Colors**: Modify `tailwind.config.ts` for custom color scheme

3. **Components**: All reusable components in `src/components/`

## Build & Deploy

```bash
# Production build
npm run build

# Start production server
npm start

# Deploy to Vercel (recommended)
vercel
```

## Available Scripts

- `npm run dev` - Start dev server (hot reload)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Design Principles

- **Minimalistic**: Clean design with clear hierarchy
- **Content-first**: Showcase your work and expertise
- **Developer-friendly**: Fast, no fluff, scannable
- **Responsive**: Mobile-friendly with desktop-first approach
- **Accessible**: WCAG 2.1 AA compliant
- **SEO optimized**: All metadata and structured data included

## Performance Targets

- Lighthouse Score: > 90
- First Contentful Paint: < 1s
- Largest Contentful Paint: < 2.5s
- Core Web Vitals passing

## Sections

1. **Hero** - Name, tagline, tech stack badges, CTAs
2. **About** - Expandable sections with career summary and expertise
3. **Projects** - Featured with detailed modals showing architecture decisions
4. **Articles** - Technical writing on Medium, Dev.to, etc.
5. **Videos** - YouTube content organized by category
6. **Experience** - Timeline of roles with achievements
7. **Skills** - Tech stack organized by category and level
8. **Contact** - Multiple contact methods with availability status

## Tips for Success

- Keep projects focused on backend/architecture work
- Emphasize system design and scalability
- Show real metrics (throughput, latency, user count)
- Write detailed problem statements and solutions
- Include trade-off analysis
- Target words: Senior, reliable, systems-level, architecture
- Avoid: generic descriptions, buzzwords, "passionate about coding"

## Next Steps

1. Update personal information in `.env.local.example`
2. Replace placeholder projects with your actual work
3. Add your articles and videos
4. Update experience and skills
5. Configure deployment (Vercel recommended)
6. Monitor Core Web Vitals

## Support & Resources

- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- TypeScript: https://www.typescriptlang.org/docs

---

Built with Next.js 14, TypeScript, and Tailwind CSS.
