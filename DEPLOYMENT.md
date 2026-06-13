# Deployment Guide

This guide covers deploying the portfolio to production environments.

## Vercel (Recommended)

Vercel is the official platform for Next.js and provides the best integration.

### Step 1: Prepare Your Code
```bash
# Ensure all code is committed
git add .
git commit -m "Ready for deployment"
git push
```

### Step 2: Create Vercel Account
- Go to [vercel.com](https://vercel.com)
- Sign up with your GitHub account
- Authorize Vercel

### Step 3: Import Project
1. Click "Add New..." → "Project"
2. Select your GitHub repository
3. Click "Import"

### Step 4: Configure Environment Variables
1. Go to project settings
2. Navigate to "Environment Variables"
3. Add all variables from `.env.example`:

```
DATABASE_URL=your_postgresql_url
NEXTAUTH_URL=your_production_url
NEXTAUTH_SECRET=generate_secure_secret
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
SENDER_EMAIL=noreply@yourdomain.com
```

### Step 5: Deploy
- Click "Deploy"
- Wait for build to complete
- Your portfolio is now live!

## Database Setup

### Using Neon (PostgreSQL)
1. Sign up at [neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Set as `DATABASE_URL` in Vercel

### Using Railway
1. Sign up at [railway.app](https://railway.app)
2. Create PostgreSQL database
3. Copy connection URL
4. Set as `DATABASE_URL` in Vercel

## Custom Domain

1. In Vercel project settings
2. Go to "Domains"
3. Click "Add Domain"
4. Follow DNS configuration instructions
5. Wait for DNS propagation (24-48 hours)

## SSL Certificate

Vercel automatically provides SSL certificates for all domains.

## Environment Variables for Production

### NEXTAUTH_SECRET
Generate a secure secret:
```bash
openssl rand -base64 32
```

### SMTP Configuration
For Gmail:
1. Enable 2FA
2. Generate App Password
3. Use the password, not your Gmail password

## Monitoring & Analytics

### Vercel Analytics
- Automatic performance monitoring
- Real-time deployment logs
- Error tracking

### Database Monitoring
- Use your provider's dashboard
- Monitor query performance
- Set up alerts for failures

## Security Checklist

- [ ] All sensitive data in environment variables
- [ ] Database backups enabled
- [ ] SSL certificate active
- [ ] Rate limiting configured
- [ ] CORS properly configured
- [ ] API endpoints authenticated
- [ ] Form validation implemented

## Troubleshooting

### Build Failures
1. Check build logs in Vercel
2. Verify environment variables
3. Ensure database is accessible

### Database Connection Issues
1. Verify DATABASE_URL format
2. Check database is running
3. Ensure IP whitelist allows Vercel

### Email Not Sending
1. Verify SMTP credentials
2. Check email configuration
3. Review Nodemailer logs

## Performance Optimization

1. Enable caching headers
2. Compress images
3. Minify CSS/JS
4. Use CDN for static assets
5. Implement database indexing

## Backup & Recovery

1. Regular database backups
2. Export important data
3. Version control for code
4. Document configurations

---

For more help, visit [Vercel Docs](https://vercel.com/docs)
