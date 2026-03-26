# Goran Hodzic Art

A minimal Next.js website for showcasing art works and exhibitions by Goran Hodzic.

## Features

- Public portfolio at goranhodzic.com
- Admin panel for managing works and content
- Newsletter functionality for art updates (optional - requires AWS SES)
- Payment support via Stripe for art sales
- Tiptap rich text editor for content
- Clean, gallery-focused design

## Tech Stack

- **Next.js** (App Router)
- **PostgreSQL** (Railway)
- **Stripe** for payment processing
- **AWS SES** (optional) for newsletter functionality
- **Tiptap** for rich text editing

## Setup

### Database

The site uses PostgreSQL. Migrations run automatically on deployment.

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Database (Required)
DATABASE_URL=postgresql://user:password@host:port/database

# Admin Authentication (Required)
ADMIN_PASSWORD=your-secure-admin-password
ADMIN_SECRET=random-32-character-secret
ADMIN_USERNAME=admin

# Stripe Payment (Optional)
STRIPE_SECRET_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=

# AWS SES (Optional - for email functionality)
# Leave blank if you don't need email
SES_SMTP_HOST=
SES_SMTP_PORT=
SES_SMTP_USER=
SES_SMTP_PASS=
SES_FROM_EMAIL=

# Application
NEXT_PUBLIC_SITE_URL=https://goranhodzic.com
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server (runs migrations automatically)
npm run start
```

## Deployment on Railway

1. Connect your GitHub repository
2. Set environment variables in Railway
3. Deploy - migrations run automatically

The site will work without AWS SES configuration - email features will be disabled but the site will function normally.

## Admin Access

Access the admin panel at `/admin` with your configured username and password.