# Portfolio

A professional, developer-centric portfolio website showcasing backend engineering expertise, system design thinking, and technical leadership.

## 🎯 Features

### Core Sections
- **Hero**: Immediate credibility with tech stack badges and CTAs
- **About**: Career summary, expertise areas, and work philosophy
- **Projects**: Featured projects with detailed architecture decisions, trade-offs, and impact metrics
- **Articles**: Technical writing across multiple platforms
- **Videos**: YouTube technical content organized by category
- **Experience**: Timeline of professional roles with key achievements
- **Skills**: Tech stack organized by category and proficiency level
- **Contact**: Multiple ways to get in touch

### UX/Design
- ✅ Minimalistic, content-first design
- ✅ Dark mode (with light mode support)
- ✅ Responsive mobile-first approach
- ✅ Smooth animations and transitions
- ✅ High contrast for accessibility
- ✅ Fast load times with lazy loading
- ✅ SEO optimized

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000 in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Top navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section with accordion
│   ├── Projects.tsx        # Projects grid
│   ├── ProjectCard.tsx     # Individual project card
│   ├── ProjectModal.tsx    # Detailed project view
│   ├── Articles.tsx        # Articles section
│   ├── Videos.tsx          # Videos section
│   ├── Experience.tsx      # Experience timeline
│   ├── Skills.tsx          # Skills grid
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   ├── Badge.tsx           # Reusable badge component
│   ├── Button.tsx          # Reusable button component
│   ├── Accordion.tsx       # Reusable accordion component
│   ├── ThemeToggle.tsx     # Dark/light mode toggle
│   └── ...
├── data/
│   └── content.ts          # All portfolio content (projects, articles, etc.)
├── types/
│   └── index.ts            # TypeScript interfaces
└── lib/
    ├── utils.ts            # Utility functions
    └── metadata.ts         # SEO metadata utilities
```

## 📝 Customization

### Update Personal Information
Edit `src/data/content.ts`:

```typescript
export const personalInfo = {
  name: 'Your Name',
  title: 'Senior Backend Engineer',
  tagline: 'Your tagline here',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  // ...
};
```

### Add Projects
Add new project objects to the `projects` array in `src/data/content.ts`:

```typescript
{
  id: 'unique-id',
  name: 'Project Name',
  shortDescription: '...',
  longDescription: '...',
  problemStatement: '...',
  solution: '...',
  keyDecisions: [...],
  tradeoffs: [...],
  whatNext: '...',
  techStack: [...],
  tags: [...],
  metrics: { ... },
  links: { ... },
  featured: true,
}
```

### Add Articles
Add to the `articles` array with similar structure.

### Customize Colors
Modify `tailwind.config.ts` to adjust the color scheme:

```typescript
theme: {
  extend: {
    colors: {
      // Custom colors here
    },
  },
}
```

## 🎨 Design System

### Colors
- **Background**: `slate-950` (very dark blue-gray)
- **Primary**: `blue-500` (accent color)
- **Success**: `emerald-500` (achievements, positive)
- **Muted**: `slate-400-700` (secondary content)

### Typography
- **Font**: Inter (system default fallback)
- **Mono**: JetBrains Mono / Fira Code
- **Scale**: Responsive, from mobile to desktop

### Components
- **Badge**: For tech stacks, tags, and status
- **Button**: Multiple variants (primary, secondary, ghost)
- **Accordion**: For expandable sections
- **Cards**: For projects, articles, experience

## 📊 Performance

Target metrics:
- **Lighthouse Score**: > 90 (performance, accessibility, best practices, SEO)
- **First Contentful Paint (FCP)**: < 1s
- **Largest Contentful Paint (LCP)**: < 2.5s
- **Cumulative Layout Shift (CLS)**: < 0.1

Optimizations:
- ✅ Server-side rendering with Next.js
- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for videos and images
- ✅ Static generation where possible
- ✅ CSS minification
- ✅ Code splitting

## ♿ Accessibility

- ✅ Keyboard navigation throughout
- ✅ ARIA labels and roles
- ✅ Semantic HTML
- ✅ Color contrast > 4.5:1 for normal text
- ✅ Focus indicators
- ✅ Alt text for images

## 🔍 SEO

- ✅ Meta tags and Open Graph tags
- ✅ Structured data (JSON-LD)
- ✅ Sitemap generation
- ✅ Mobile-friendly responsive design
- ✅ Fast page load times
- ✅ Semantic HTML

## 🚀 Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git push origin main

# Connect to Vercel via CLI or dashboard
vercel
```

### Other Platforms
Works with any platform that supports Next.js (Netlify, AWS Amplify, etc.)

### Custom VPS
```bash
npm run build
npm start
```

## 📱 Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Run ESLint
```

## 📚 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion (optional)
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📦 Dependencies

- `next`: 14.1.3
- `react`: 18.3.1
- `typescript`: 5.3.3
- `tailwindcss`: 3.4.1
- `lucide-react`: 0.344.0
- `framer-motion`: 10.16.17

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize!

## 📄 License

This portfolio template is open source and available under the MIT License.

## 💡 Tips

1. **Keep content fresh**: Update projects and articles regularly
2. **Showcase real work**: Use actual metrics and real projects
3. **Tell stories**: Explain the "why" behind decisions
4. **Use visuals**: Add architecture diagrams if available
5. **Mobile first**: Always test on mobile devices
6. **Performance**: Monitor Core Web Vitals
7. **Analytics**: Track which projects get the most attention

## 📞 Support

For issues or questions about the portfolio setup, please refer to the project structure guide above or customize as needed for your use case.

---

Built with ❤️ for Senior Backend Engineers showcasing their expertise.
