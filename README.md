# Krrish Anand - Portfolio Website

A production-ready, premium portfolio website for a Data Scientist and Machine Learning Engineer, built with modern web technologies and industry best practices.

## 🎯 Features

### Design & UX
- 🎨 **Apple-inspired minimalist design** with clean typography and excellent spacing
- 🌓 **Dark/Light mode** toggle with system preference detection
- 📱 **Fully responsive** - Works perfectly on mobile, tablet, and desktop
- ✨ **Smooth animations** using Framer Motion
- ⚡ **Fast loading** - Optimized for performance (Lighthouse 95+)
- ♿ **Accessible** - WCAG compliant with semantic HTML

### Pages & Sections
- **Home** - Hero section, featured projects, stats, skills snapshot, blog preview, CTA
- **About** - Personal story, career goals, research interests, technical philosophy
- **Projects** - Detailed project showcase with technologies, achievements, and metrics
- **Blog** - MDX-powered technical blog with categories, tags, and search
- **Experience** - Timeline of internships, research, and freelance work
- **Education** - Academic background with coursework and achievements
- **Skills** - Organized by category with proficiency indicators
- **Certifications** - Professional certifications with verification links
- **Contact** - Contact form with email validation and success messages

### Technical Stack
- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI, Lucide Icons
- **Animations**: Framer Motion
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **Blog**: MDX with next-mdx-remote
- **Styling**: Tailwind CSS with custom theme
- **Email**: Nodemailer for contact form
- **Deployment**: Vercel-ready

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- PostgreSQL database
- Git

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SENDER_EMAIL="noreply@yourdomain.com"
```

4. **Set up the database**
```bash
npm run db:generate
npm run db:push
```

5. **Run development server**
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your portfolio!

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── app/                      # Next.js app directory
│   │   ├── api/                  # API routes
│   │   ├── layout.tsx            # Root layout
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # About page
│   │   ├── projects/             # Projects page
│   │   ├── blog/                 # Blog pages
│   │   ├── experience/           # Experience page
│   │   ├── education/            # Education page
│   │   ├── skills/               # Skills page
│   │   ├── certifications/       # Certifications page
│   │   └── contact/              # Contact page
│   ├── components/               # React components
│   │   ├── navigation/           # Navbar, Footer
│   │   ├── sections/             # Page sections
│   │   ├── ui/                   # UI components
│   │   └── providers/            # Context providers
│   ├── config/                   # Configuration files
│   ├── lib/                      # Utility functions
│   ├── styles/                   # Global styles
│   ├── types/                    # TypeScript types
│   └── utils/                    # Helper functions
├── prisma/
│   └── schema.prisma             # Database schema
├── public/                       # Static assets
├── .env.example                  # Environment variables template
├── next.config.ts               # Next.js configuration
├── tailwind.config.js           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## 🗄️ Database Schema

The portfolio uses PostgreSQL with Prisma ORM. Key models include:

- **User** - Admin users for content management
- **BlogPost** - Blog articles with MDX content
- **Project** - Portfolio projects
- **Skill** - Technical skills organized by category
- **Certification** - Professional certifications
- **Experience** - Work experience entries
- **Education** - Educational background
- **Achievement** - Awards and recognitions
- **Testimonial** - Recommendations
- **ContactMessage** - Contact form submissions

## 🎨 Customization

### Styling
- Colors and theme variables are in `src/styles/globals.css`
- Tailwind configuration in `tailwind.config.js`
- Modify `--primary`, `--accent` colors for branding

### Content
- Update personal information in components
- Modify project data in `src/components/sections/projects/projects-grid.tsx`
- Add blog posts in the `blog/` directory
- Update social links in `src/config/site.ts`

### Portfolio Data
- Projects, skills, and education data are hardcoded in components
- For production, migrate to database via Prisma models

## 🔐 Security

- Input validation on all forms
- CSRF protection with NextAuth
- Rate limiting for API endpoints (recommended)
- Environment variables for sensitive data
- Secure password hashing (bcrypt)

## 📊 Performance

Target metrics:
- Lighthouse Score: 95+
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s
- Cumulative Layout Shift: <0.1

Optimizations:
- Image optimization with Next.js Image
- Code splitting with dynamic imports
- Server-side rendering for SEO
- CSS-in-JS tree-shaking
- Minification and compression

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

```bash
npm run build
npm run start
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 SEO & Meta Tags

- ✅ Dynamic metadata generation
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Structured data (Schema.org)
- ✅ Sitemap generation
- ✅ Robots.txt
- ✅ Canonical URLs

## 🔧 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run type-check   # Check TypeScript types
npm run db:push      # Sync Prisma schema with database
npm run db:generate  # Generate Prisma client
npm run db:studio    # Open Prisma Studio
```

## 📧 Contact Form Setup

The contact form uses email delivery. To enable:

1. **Gmail Setup** (Recommended):
   - Enable 2FA on your Google account
   - Generate an [App Password](https://myaccount.google.com/apppasswords)
   - Use the app password in `.env.local`

2. **Other SMTP Providers**:
   - Update SMTP configuration in `.env.local`
   - Test with Nodemailer

## 🤝 Contributing

Feel free to fork this repository and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues, questions, or suggestions, please open a GitHub issue or contact me at krrishanand3832@gmail.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
