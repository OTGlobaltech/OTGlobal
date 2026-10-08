# Vercel Deployment Guide

## Prerequisites

- A GitHub account with the repo pushed
- A [Vercel](https://vercel.com) account (free tier works)
- Firebase project configured (see [README.md](./README.md#3-firebase-setup))

---

## Quick Deploy

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Import in Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Vercel auto-detects Next.js — no config changes needed

3. **Add Environment Variables** (critical step!)
   - Before deploying, go to **Settings → Environment Variables**
   - Add **all** of these:

   | Variable | Required | Purpose |
   |----------|----------|---------|
   | `NEXT_PUBLIC_SITE_URL` | Yes | Your production domain (for SEO meta) |
   | `GMAIL_USER` | Yes | Gmail for sending contact/meeting emails |
   | `GMAIL_APP_PASSWORD` | Yes | Gmail App Password (not your login password) |
   | `EMAIL_TO` | Yes | Where contact form submissions are sent |
   | `NEXT_PUBLIC_FIREBASE_API_KEY` | Yes | Firebase Web API Key |
   | `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Yes | Firebase Auth Domain |
   | `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Yes | Firebase Project ID |
   | `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Yes | Firebase Storage Bucket |
   | `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Yes | Firebase Messaging Sender ID |
   | `NEXT_PUBLIC_FIREBASE_APP_ID` | Yes | Firebase App ID |

   > ⚠️ Select **all environments** (Production, Preview, Development) for each variable.

4. **Click Deploy** — your site will be live in ~2 minutes!

### Method 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel                  # Preview deployment
vercel --prod           # Production deployment
```

---

## Connect Custom Domain

1. In Vercel Dashboard → your project → **Settings → Domains**
2. Click **Add Domain** and enter your domain
3. Configure DNS at your registrar:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`
4. Wait for DNS propagation (5–60 minutes)
5. SSL certificate is provisioned automatically

---

## Build Settings

Vercel auto-detects these (no changes needed):

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `next build` |
| Output Directory | `.next` |
| Install Command | `npm install` |
| Node.js Version | 18.x (default) or 20.x |

---

## Post-Deployment Checklist

- [ ] All environment variables are set in Vercel
- [ ] Admin login works at `yourdomain.com/admin/login`
- [ ] Contact form sends emails
- [ ] Dynamic pages (News, Careers, FAQs, Plans, Team) load data from Firestore
- [ ] Firestore security rules allow public reads
- [ ] Custom domain is connected and SSL is active

---

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard → Deployments
- Ensure all dependencies are listed in `package.json`
- Run `npm run build` locally to reproduce the error

### Firebase / Admin Panel Not Working
- Verify all `NEXT_PUBLIC_FIREBASE_*` env vars are set in Vercel
- Ensure Firestore security rules allow read access
- Check that an admin user exists in Firebase Auth

### Contact Form Not Sending Emails
- Verify `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `EMAIL_TO` are set
- Gmail App Passwords require 2-factor authentication to be enabled
- Check Vercel function logs for error details

### Images Not Loading
- Ensure image domains are listed in `next.config.js` → `images.remotePatterns`
- For local images, place them in the `public/` directory

---

## Useful Links

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Console](https://console.firebase.google.com)
