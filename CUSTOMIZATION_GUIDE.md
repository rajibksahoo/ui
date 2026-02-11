# Portfolio Customization Guide

This guide will walk you through customizing your portfolio to showcase your work.

## 1. Personal Information

### File: `src/data/content.ts`

Update the `personalInfo` object at the top:

```typescript
export const personalInfo = {
  name: 'Your Name',                               // Your full name
  title: 'Senior Backend Engineer',                // Your title/role
  subtitle: 'Java, Spring Boot, ...',              // Tech focus
  tagline: 'I build scalable...',                  // One-line value prop
  email: 'your.email@example.com',                 // Contact email
  github: 'https://github.com/yourusername',      // GitHub profile
  linkedin: 'https://linkedin.com/in/yourname',   // LinkedIn profile
  resume: '/resume.pdf',                           // Resume path
  location: 'Remote',                              // Your location
};
```

## 2. Adding Your Projects

Projects showcase your engineering expertise. Add each project to the `projects` array:

```typescript
{
  id: 'unique-project-id',                        // Unique identifier
  name: 'Project Name',                           // Display name
  shortDescription: 'One-line summary',           // Shown in card
  longDescription: 'Full description',            // For modal
  problemStatement: 'What was the challenge?',    // The problem
  solution: 'How did you solve it?',              // Your approach
  keyDecisions: [                                 // Architectural decisions
    'Decision 1',
    'Decision 2 with reasoning',
  ],
  tradeoffs: [                                    // Trade-offs made
    'Performance vs Consistency',
    'Complexity vs Scalability',
  ],
  whatNext: 'Improvements for next phase',        // Future improvements
  techStack: [                                    // Technologies used
    'Java', 'Spring Boot', 'Kafka', 'AWS',
  ],
  tags: [                                         // Project categories
    'Microservices', 'High Throughput',
  ],
  metrics: {                                      // Impact metrics
    throughput: '1.2M requests/sec',
    latency: 'p99: 5ms',
    users: '500K+ daily',
    uptime: '99.99%',
  },
  links: {                                        // Project links
    github: 'https://github.com/...',
    article: 'https://medium.com/...',
    video: 'https://youtu.be/...',
    demo: 'https://...',
  },
  featured: true,                                 // Show in featured section
}
```

### Tips for Project Descriptions

**DO:**
- Focus on backend/architecture decisions
- Include specific metrics (throughput, latency, users)
- Explain trade-offs and constraints
- Show business impact
- Be honest about limitations

**DON'T:**
- Use generic descriptions ("added X feature")
- Avoid buzzwords ("passionate", "solutions")
- Don't overstate contributions
- Skip the "why" behind decisions

## 3. Adding Articles

Add to the `articles` array:

```typescript
{
  id: 'unique-article-id',
  title: 'Article Title',
  description: 'What this article covers',
  platform: 'medium',                    // medium, dev.to, personal, hashnode
  url: 'https://medium.com/...',
  readingTime: 15,                       // Estimated reading time in minutes
  date: '2024-01-15',                    // Publication date
  tags: ['Tag1', 'Tag2'],
  featured: true,                        // Show in featured section
}
```

## 4. Adding Videos

Add to the `videos` array:

```typescript
{
  id: 'unique-video-id',
  title: 'Video Title',
  description: 'What the video covers',
  youtubeId: 'dQw4w9WgXcQ',             // YouTube video ID from URL
  duration: '45:30',                     // Video duration
  category: 'system-design',             // system-design, code-walkthrough, performance, fundamentals
  date: '2024-01-20',                    // Upload date
  tags: ['Tag1', 'Tag2'],
}
```

## 5. Experience

Add your roles to the `experience` array:

```typescript
{
  id: 'unique-id',
  company: 'Company Name',
  role: 'Senior Backend Engineer',
  startDate: 'Jan 2022',
  endDate: 'Dec 2023',                  // Omit for current role
  current: true,                         // Is this your current role?
  description: 'High-level role description',
  achievements: [                        // Key achievements
    'Improved X by Y%',
    'Led migration of Z',
    'Built and shipped A',
  ],
  technologies: [                        // Tech used in role
    'Java', 'Kubernetes', 'PostgreSQL',
  ],
}
```

## 6. Skills

Add to the `skills` array:

```typescript
{
  name: 'Java',                          // Skill name
  category: 'language',                  // See categories below
  level: 'core',                         // core, strong, familiar
}
```

### Skill Categories
- `language` - Programming languages (Java, Go, Python)
- `framework` - Frameworks (Spring Boot, Express)
- `database` - Databases (PostgreSQL, MongoDB)
- `messaging` - Messaging & APIs (Kafka, GraphQL)
- `cloud` - Cloud providers (AWS, GCP)
- `devops` - DevOps tools (Kubernetes, Docker)
- `tool` - Tools (Git, Jira)

### Skill Levels
- `core` - Expert, use daily (appears first)
- `strong` - Proficient, production-ready
- `familiar` - Solid knowledge, growing

## 7. Colors & Design

### File: `tailwind.config.ts`

Customize colors:

```typescript
theme: {
  extend: {
    colors: {
      primary: 'your-color',
      secondary: 'your-color',
    },
  },
}
```

### File: `src/app/globals.css`

Add custom styles here.

## 8. Environment Variables

### File: `.env.local`

Create from `.env.local.example`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourportfolio.com
```

## 9. Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

### Other Options
- Netlify
- AWS Amplify
- Custom VPS (use `npm run build && npm start`)

## 10. SEO & Performance

### Check Performance
```bash
npm run build
npm start
# Check Lighthouse in Chrome DevTools
```

### SEO
Update metadata in `src/lib/metadata.ts`:

```typescript
export const siteMetadata = {
  title: 'Your Name - Senior Backend Engineer',
  description: 'Portfolio showcasing...',
  keywords: ['Java', 'System Design', ...],
  author: 'Your Name',
  url: 'https://yourportfolio.com',
};
```

## Checklist Before Launch

- [ ] Updated all personal information
- [ ] Added your projects with metrics
- [ ] Added articles/videos links
- [ ] Updated experience
- [ ] Added skills
- [ ] Customized colors (optional)
- [ ] Fixed any broken links
- [ ] Tested on mobile
- [ ] Ran Lighthouse check
- [ ] Deployed to production
- [ ] Set up custom domain (optional)
- [ ] Added Google Analytics (optional)

## Best Practices

### Projects
- Show 2-5 featured projects
- Include real metrics
- Explain architecture decisions
- Be specific about your contribution
- Link to code/article/video when possible

### Writing
- Keep descriptions concise
- Use metrics to justify impact
- Mention scale and constraints
- Show trade-off thinking
- Avoid humble-bragging

### Maintenance
- Update monthly with new projects
- Keep articles fresh
- Archive outdated content
- Monitor broken links
- Check Core Web Vitals

## Common Issues

**Projects not showing?**
- Check that `featured: true` or ensure they're in the projects array
- Verify the ID is unique

**Links not working?**
- Use absolute URLs (https://...)
- Check for typos
- Test in browser

**Colors look off?**
- Clear cache and rebuild: `rm -rf .next && npm run build`
- Check browser DevTools for conflicting CSS

**Performance issues?**
- Run `npm run build`
- Check Lighthouse: Chrome DevTools > Lighthouse
- Optimize images
- Remove unused dependencies

## Support

For detailed guides, see:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

Ready to customize? Start with `src/data/content.ts`!
