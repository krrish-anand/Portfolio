# Project File Structure Overview

This document provides a detailed overview of the project's file structure.

## Root Level Files

- `package.json` - Project dependencies and scripts
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.js` - ESLint configuration
- `.prettierrc.json` - Prettier configuration
- `.env.example` - Environment variables template
- `.gitignore` - Git ignore rules
- `README.md` - Project documentation
- `SETUP_GUIDE.md` - Setup instructions
- `DEPLOYMENT.md` - Deployment guide
- `ENV_SETUP.md` - Environment variables guide
- `CONTRIBUTING.md` - Contribution guidelines
- `LICENSE` - MIT License

## Source Directory (`src/`)

### App Directory (`src/app/`)
- `layout.tsx` - Root layout
- `page.tsx` - Home page
- `robots.ts` - SEO robots.txt
- `sitemap.ts` - SEO sitemap
- `middleware.ts` - Middleware for rate limiting

#### API Routes (`src/app/api/`)
- `contact/route.ts` - Contact form endpoint
- `resume/route.ts` - Resume download endpoint

#### Page Routes
- `about/page.tsx` - About page
- `projects/page.tsx` - Projects showcase
- `blog/page.tsx` - Blog listing
- `experience/page.tsx` - Experience timeline
- `education/page.tsx` - Education information
- `skills/page.tsx` - Skills display
- `certifications/page.tsx` - Certifications
- `contact/page.tsx` - Contact page

### Components (`src/components/`)

#### Navigation
- `navigation/navbar.tsx` - Top navigation bar
- `navigation/footer.tsx` - Footer component

#### Providers
- `providers/theme-provider.tsx` - Theme context provider

#### UI Components
- `ui/theme-toggle.tsx` - Dark/Light mode toggle button

#### Sections - Home Page
- `sections/home/hero.tsx` - Hero section
- `sections/home/stats-section.tsx` - Statistics
- `sections/home/featured-projects.tsx` - Featured projects
- `sections/home/skills-snapshot.tsx` - Skills preview
- `sections/home/recent-blog.tsx` - Recent blog posts
- `sections/home/cta.tsx` - Call-to-action

#### Sections - Other Pages
- `sections/projects/projects-grid.tsx` - Projects grid
- `sections/blog/blog-grid.tsx` - Blog posts grid
- `sections/experience/experience-timeline.tsx` - Experience timeline
- `sections/education/education-timeline.tsx` - Education timeline
- `sections/skills/skills-display.tsx` - Skills display
- `sections/certifications/certifications-grid.tsx` - Certifications grid
- `sections/contact/contact-form.tsx` - Contact form
- `sections/contact/contact-info.tsx` - Contact information

### Configuration (`src/config/`)
- `site.ts` - Site-wide configuration

### Libraries (`src/lib/`)
- `utils.ts` - Utility functions (cn, etc.)
- `metadata.ts` - SEO metadata utilities
- `helpers.ts` - Helper functions
- `prisma.ts` - Prisma client singleton

### Styles (`src/styles/`)
- `globals.css` - Global styles and CSS variables

### Types (`src/types/`)
- `index.ts` - TypeScript type definitions

## Prisma Directory (`prisma/`)
- `schema.prisma` - Database schema definition

## GitHub Directory (`.github/`)
- `workflows/ci.yml` - GitHub Actions CI/CD pipeline
- `copilot-instructions.md` - Copilot guidance

## Public Directory (`public/`)
- `resume.pdf` - Your resume (add this)
- `og-image.jpg` - Open Graph image (add this)

## Database Models

The Prisma schema includes:

1. **User** - Admin users
2. **Account** - OAuth account information
3. **Session** - NextAuth sessions
4. **VerificationToken** - Email verification tokens
5. **BlogPost** - Blog articles
6. **Project** - Portfolio projects
7. **Skill** - Technical skills
8. **Certification** - Professional certifications
9. **Experience** - Work experience
10. **Education** - Educational background
11. **Achievement** - Awards and recognitions
12. **Testimonial** - Recommendations
13. **ContactMessage** - Contact form submissions

## Key Features by File

| Feature | File |
|---------|------|
| Light/Dark Mode | `src/components/ui/theme-toggle.tsx` |
| Navigation | `src/components/navigation/navbar.tsx` |
| Contact Form | `src/components/sections/contact/contact-form.tsx` |
| Projects Showcase | `src/components/sections/projects/projects-grid.tsx` |
| Skills Display | `src/components/sections/skills/skills-display.tsx` |
| SEO Metadata | `src/app/layout.tsx`, `src/lib/metadata.ts` |
| Rate Limiting | `src/middleware.ts` |
| Database | `prisma/schema.prisma` |

## Development Workflow

1. Edit components in `src/components/`
2. Create new pages in `src/app/`
3. Add API routes in `src/app/api/`
4. Update database schema in `prisma/schema.prisma`
5. Run migrations with `npm run db:push`

## Customization Points

- **Colors**: Edit CSS variables in `src/styles/globals.css`
- **Fonts**: Modify in `src/app/layout.tsx`
- **Content**: Update component data directly
- **Database**: Modify `prisma/schema.prisma` and migrate
- **SEO**: Update metadata in page files

## Building for Production

```bash
npm run build    # Build the project
npm run start    # Start production server
```

The build process:
1. Compiles TypeScript
2. Optimizes images
3. Bundles CSS and JavaScript
4. Creates static pages where possible
5. Outputs to `.next/` directory

---

For more information, see the main [README.md](./README.md)
