# OT Global - Next.js 16 Website

A professional, scalable Next.js 16 application for OT Global - Your Gateway to China Manufacturing Excellence.

## 🚀 Features

- **Next.js 16** with App Router
- **React 18** with JSX (no TypeScript)
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Radix UI** components
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Metadata and Open Graph tags
- **Performance Optimized** - Image optimization, code splitting
- **Production Ready** - Ready for Vercel deployment

## 📁 Project Structure

```
otglobal/
├── app/                    # Next.js App Router
│   ├── layout.jsx          # Root layout with Header/Footer
│   ├── page.jsx            # Home page
│   ├── services/           # Services page
│   ├── plans/              # Plans page
│   ├── news/               # News page
│   ├── faqs/               # FAQs page
│   ├── contact/            # Contact page
│   ├── privacy/            # Privacy page
│   └── globals.css         # Global styles
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   ├── pages/              # Page components
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── ...
│   ├── ui/                 # UI components (shadcn/ui style)
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── dialog.jsx
│   │   └── ...
│   └── common/             # Common components
│       └── ImageWithFallback.jsx
├── lib/
│   └── utils.js           # Utility functions
├── public/                 # Static assets
│   └── logo.png           # Logo image
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies
```

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Logo

Place your logo image in the `public/` folder as `logo.png`. The Header and Footer components will automatically use it.

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
```

### 5. Start Production Server

```bash
npm start
```

## 🚢 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Option 2: Deploy via GitHub

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect Next.js and deploy

### Option 3: Connect Custom Domain

1. In Vercel dashboard, go to your project
2. Navigate to Settings > Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## 📝 Environment Variables

Create a `.env.local` file for environment variables (if needed):

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize colors:
- Primary Teal: `#00A896`
- Darker Teal: `#008c7a`
- Primary Text: `#030213`

### Fonts

Fonts are configured in `app/layout.jsx`. Currently using Inter from Google Fonts.

## 📦 Key Dependencies

- **next**: ^16.0.0 - Next.js framework
- **react**: ^18.3.1 - React library
- **tailwindcss**: ^3.4.17 - CSS framework
- **framer-motion**: ^11.11.17 - Animation library
- **lucide-react**: ^0.487.0 - Icon library
- **@radix-ui/react-*** - UI component primitives

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📄 License

Private - OT Global

## 🤝 Support

For issues or questions, please contact the development team.
