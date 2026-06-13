# SETUP_GUIDE.md

# Portfolio Website - Complete Setup Guide

This guide walks you through setting up your portfolio website from scratch.

## Prerequisites

Before you begin, ensure you have:

- **Node.js** 18.0 or higher ([Download](https://nodejs.org/))
- **npm** (comes with Node.js) or **yarn**
- **Git** for version control
- **PostgreSQL** for the database
- A **GitHub** account for version control

## Step 1: Initial Setup

### 1.1 Clone or Download the Project

```bash
# If you have Git
git clone <repository-url>
cd Portfolio

# Or download the ZIP file and extract it
cd Portfolio
```

### 1.2 Install Dependencies

```bash
npm install
# or
yarn install
```

This may take 2-3 minutes as it downloads all packages.

## Step 2: Database Setup

### 2.1 Create PostgreSQL Database

**On Windows (Command Prompt):**
```bash
# Start PostgreSQL
# Usually runs as a service automatically

# Create database
psql -U postgres
CREATE DATABASE portfolio_db;
\q
```

**On macOS:**
```bash
# Install PostgreSQL if you haven't
brew install postgresql

# Start PostgreSQL
brew services start postgresql

# Create database
createdb portfolio_db
```

**On Linux:**
```bash
sudo apt-get install postgresql postgresql-contrib
sudo -u postgres createdb portfolio_db
```

### 2.2 Get Your Database URL

```
postgresql://postgres:password@localhost:5432/portfolio_db
```

Replace:
- `postgres` with your PostgreSQL username
- `password` with your password
- `portfolio_db` with your database name

## Step 3: Environment Configuration

### 3.1 Create .env.local File

In the project root, create a `.env.local` file:

```bash
cp .env.example .env.local
```

### 3.2 Fill in Environment Variables

Edit `.env.local` with your values:

```env
# Database
DATABASE_URL="postgresql://postgres:your_password@localhost:5432/portfolio_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-random-secret-key-here"

# Email (SMTP)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SENDER_EMAIL="noreply@yourdomain.com"
```

### 3.3 Generate NEXTAUTH_SECRET

```bash
# Open Node.js
node

# Generate secret
require('crypto').randomBytes(32).toString('hex')

# Copy the output and paste in .env.local
# Exit Node with Ctrl+C
```

### 3.4 Setup Gmail for Emails

To send emails through Gmail:

1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Generate an **App Password**:
   - Go to [App Passwords](https://myaccount.google.com/apppasswords)
   - Select "Mail" and "Windows Computer" (or your device)
   - Google generates a 16-character password
   - Use this in `SMTP_PASSWORD` (without spaces)

## Step 4: Initialize Database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push
```

This creates all the database tables. If you see any errors:
- Check your DATABASE_URL is correct
- Ensure PostgreSQL is running
- Try `npm run db:generate` again

## Step 5: Start Development Server

```bash
npm run dev
```

You should see:
```
> ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the portfolio homepage!

## Step 6: Customize Your Portfolio

### 6.1 Update Personal Information

Edit `src/components/sections/home/hero.tsx`:
- Update name, title, introduction
- Change social media links in `src/config/site.ts`

### 6.2 Update Projects

Edit `src/components/sections/projects/projects-grid.tsx`:
- Add your project information
- Update technologies used
- Add GitHub and live demo links

### 6.3 Update Education & Experience

Edit timeline components:
- `src/components/sections/experience/experience-timeline.tsx`
- `src/components/sections/education/education-timeline.tsx`

### 6.4 Update Skills

Edit `src/components/sections/skills/skills-display.tsx`:
- Add your technical skills
- Adjust proficiency levels (0-100)
- Organize by categories

## Step 7: Add Your Resume

1. Place your resume PDF in `public/resume.pdf`
2. Update download link in components if needed

## Step 8: Testing

### Test the Contact Form

1. Fill out the contact form at `/contact`
2. Submit the form
3. Check console for message (email won't send without email setup)

### Test Dark Mode

Click the theme toggle in the navbar - should switch between light and dark modes.

### Check Responsiveness

- Open Developer Tools (F12)
- Click device toolbar
- Test on different screen sizes

## Step 9: Deploy to Production

### Option 1: Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Sign up with GitHub
4. Import your repository
5. Add environment variables
6. Click Deploy
7. Your portfolio is live!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

### Option 2: Deploy to Other Platforms

- **Netlify**: [netlify.com](https://netlify.com)
- **Railway**: [railway.app](https://railway.app)
- **Render**: [render.com](https://render.com)
- **Self-hosted**: Set up a VPS with Docker

## Troubleshooting

### Development Server Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run dev
```

### Database Connection Failed

```bash
# Check PostgreSQL is running
# Windows: Check Services
# macOS: brew services list
# Linux: sudo systemctl status postgresql

# Test connection
psql -U postgres -d portfolio_db
```

### Emails Not Sending

1. Check SMTP credentials in `.env.local`
2. Verify Gmail App Password (not your Gmail password)
3. Ensure "Less secure apps" is enabled if using Gmail
4. Check spam folder for test emails

### Port 3000 Already in Use

```bash
# Kill process using port 3000
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :3000
kill -9 <PID>
```

## Useful Commands

```bash
npm run dev              # Start development server
npm run build           # Build for production
npm run start           # Start production server
npm run lint            # Check code quality
npm run format          # Format code with Prettier
npm run type-check      # Check TypeScript errors
npm run db:generate     # Generate Prisma client
npm run db:push         # Sync schema with database
npm run db:studio       # Open Prisma Studio (database UI)
```

## Next Steps

1. **Add content**: Update all sections with your information
2. **Add projects**: Upload project details and screenshots
3. **Add blog posts**: Start writing technical articles
4. **Setup domain**: Configure custom domain
5. **Monitor analytics**: Set up tracking and monitoring
6. **Backup data**: Set up regular database backups

## Security Checklist

- [ ] Change `NEXTAUTH_SECRET` to a unique value
- [ ] Use strong PostgreSQL password
- [ ] Don't commit `.env.local` to Git
- [ ] Enable HTTPS in production
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Review security headers

## Getting Help

- **Docs**: Check README.md and component comments
- **Issues**: Check GitHub Issues
- **Community**: Next.js Discord, Prisma Community
- **Contact**: krrishanand3832@gmail.com

---

You're all set! 🚀 Start customizing your portfolio and good luck with your applications!
