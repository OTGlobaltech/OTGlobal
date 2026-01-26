# Vercel Deployment Guide

## Quick Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Next.js 16 OT Global website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Your site will be live in ~2 minutes!**

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **For production deployment**
   ```bash
   vercel --prod
   ```

## Connect Custom Domain

1. **In Vercel Dashboard:**
   - Go to your project
   - Navigate to **Settings** > **Domains**
   - Click **Add Domain**
   - Enter your domain name

2. **Configure DNS:**
   - Vercel will provide DNS records
   - Add them to your domain registrar:
     - **A Record**: Point to Vercel IP
     - **CNAME Record**: Point to Vercel hostname
   - Wait for DNS propagation (5-60 minutes)

3. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - HTTPS will be enabled automatically

## Environment Variables

If you need environment variables:

1. **In Vercel Dashboard:**
   - Go to **Settings** > **Environment Variables**
   - Add your variables
   - Select environments (Production, Preview, Development)

2. **Redeploy** after adding variables

## Build Settings

Vercel automatically detects:
- **Framework Preset**: Next.js
- **Build Command**: `next build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

No configuration needed!

## Performance Optimizations

Vercel automatically provides:
- ✅ Edge Network (CDN)
- ✅ Automatic HTTPS
- ✅ Image Optimization
- ✅ Serverless Functions
- ✅ Automatic Scaling

## Monitoring

- **Analytics**: Enable in Vercel Dashboard
- **Logs**: View in Vercel Dashboard > Deployments
- **Speed Insights**: Enable in project settings

## Troubleshooting

### Build Fails
- Check build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version (Vercel uses 18.x by default)

### Images Not Loading
- Ensure images are in `public/` folder
- Check image URLs are correct
- Verify Next.js Image component usage

### Environment Variables Not Working
- Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side
- Redeploy after adding variables

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
