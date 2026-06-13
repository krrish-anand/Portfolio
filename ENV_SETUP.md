# Environment Variables Guide

This file documents all environment variables used in the portfolio.

## Required Variables

### Database
```
DATABASE_URL=postgresql://username:password@localhost:5432/portfolio_db
```
Connection string for PostgreSQL database. Format:
```
postgresql://[user[:password]@][netloc][:port][/dbname][?param1=value1&...]
```

### NextAuth
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here-change-in-production
```

- `NEXTAUTH_URL`: Your application URL (http://localhost:3000 for dev, https://yourdomain.com for production)
- `NEXTAUTH_SECRET`: Secret key for encrypting tokens. Generate with:
  ```bash
  openssl rand -base64 32
  ```

### Email (SMTP)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SENDER_EMAIL=noreply@yourdomain.com
```

For Gmail:
1. Enable 2-Factor Authentication
2. Generate [App Password](https://myaccount.google.com/apppasswords)
3. Use the 16-character password

For other providers, adjust SMTP_HOST and SMTP_PORT accordingly.

## Optional Variables

### Admin Credentials (First Setup Only)
```
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=change-this-password
```

## Development (.env.local)

Create a `.env.local` file for development:

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio_db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-secret-key-change-in-production"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
SENDER_EMAIL="noreply@yourdomain.com"
```

## Production (Vercel)

Set these in Vercel project settings → Environment Variables:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Environment Variables
4. Add each variable with appropriate values
5. Redeploy for changes to take effect

## Testing Variables

For local testing without email:
```
SMTP_HOST="localhost"
SMTP_PORT="1025"
```

Use a local SMTP server like [MailHog](https://github.com/mailhog/MailHog)

## Database Connection Examples

### Local PostgreSQL
```
DATABASE_URL="postgresql://postgres:password@localhost:5432/portfolio_db"
```

### Neon (Serverless PostgreSQL)
```
DATABASE_URL="postgresql://user:password@ep-xyz.us-east-1.neon.tech/portfolio_db?sslmode=require"
```

### Railway
```
DATABASE_URL="postgresql://postgres:password@railway.internal:5432/portfolio"
```

### Render
```
DATABASE_URL="postgresql://user:password@dpg-xyz.render.internal/portfolio_db"
```

## Verifying Environment Variables

Check if variables are loaded correctly:
```bash
# List all env vars
printenv | grep -E 'DATABASE_URL|NEXTAUTH'

# In Node.js REPL
console.log(process.env.DATABASE_URL)
```

## Security Best Practices

1. ✅ Never commit `.env.local` to git
2. ✅ Use `.gitignore` to exclude env files
3. ✅ Rotate NEXTAUTH_SECRET periodically
4. ✅ Use different secrets for dev and production
5. ✅ Store passwords in password manager
6. ✅ Enable IP whitelisting on database
7. ✅ Use read-only credentials where possible
8. ✅ Audit access logs regularly

## Troubleshooting

### Database Connection Failed
- Verify DATABASE_URL format
- Check PostgreSQL is running
- Ensure credentials are correct
- Test connection with `psql` command

### NextAuth Issues
- Ensure NEXTAUTH_URL matches deployed URL
- Regenerate NEXTAUTH_SECRET if corrupted
- Clear cookies and try again

### Email Not Working
- Verify SMTP credentials
- Check SMTP_HOST and SMTP_PORT
- Enable "Less secure apps" if using Gmail
- Test with telnet: `telnet smtp.gmail.com 587`

### Variables Not Loading
- Restart development server after changes
- Clear `.next` build directory
- Check syntax in env file
- Ensure no quotes around values unless needed

---

For more help, see [Next.js Environment Variables Docs](https://nextjs.org/docs/basic-features/environment-variables)
