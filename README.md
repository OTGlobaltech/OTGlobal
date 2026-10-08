# OT Global – Next.js 16 Website

A professional, production-ready Next.js 16 website for **OT Global Group** — a supply-chain services company specialising in Virtual-Assistant-based operational support for retail and e-commerce brands.

> **Live site**: Deployed on Vercel  
> **Admin panel**: `/admin` (Firebase Auth protected)

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 18 (JSX) |
| Styling | Tailwind CSS 3 |
| Animations | Framer Motion |
| UI Primitives | Radix UI (shadcn-style components) |
| Icons | Lucide React |
| Database / CMS | Firebase Firestore |
| Auth | Firebase Authentication (Email/Password) |
| Email | Nodemailer (Gmail SMTP) |
| Deployment | Vercel |

---

## 📁 Project Structure

```
otglobal/
├── app/                              # Next.js App Router (routes)
│   ├── layout.jsx                    # Root layout (Header + Footer)
│   ├── page.jsx                      # Home page
│   ├── globals.css                   # Global styles & Tailwind
│   ├── about/page.jsx                # About page
│   ├── services/page.jsx             # Services page
│   ├── plans/page.jsx                # Pricing plans page
│   ├── news/page.jsx                 # News page
│   ├── careers/page.jsx              # Careers page
│   ├── faqs/page.jsx                 # FAQs page
│   ├── contact/page.jsx              # Contact page
│   ├── privacy/page.jsx              # Privacy policy page
│   ├── solutions/                    # Individual solution pages
│   │   ├── order-management/
│   │   ├── distribution-fulfillment/
│   │   ├── transportation/
│   │   └── customs-brokerage-global-trade/
│   ├── admin/                        # 🔒 Admin panel (protected)
│   │   ├── layout.jsx                # Auth guard layout
│   │   ├── page.jsx                  # Admin dashboard (tabbed UI)
│   │   └── login/page.jsx            # Admin login page
│   └── api/                          # API routes
│       ├── contact/route.js          # Contact form handler
│       └── book-meeting/route.js     # Book meeting handler
│
├── components/
│   ├── layout/                       # Layout components
│   │   ├── Header.jsx                # Navigation header
│   │   └── Footer.jsx                # Site footer
│   │
│   ├── pages/                        # Page-level components
│   │   ├── HomePage.jsx              # Home page content
│   │   ├── AboutPage.jsx             # About page (dynamic team)
│   │   ├── ServicesPage.jsx          # Services page
│   │   ├── PlansPage.jsx             # Pricing plans (dynamic)
│   │   ├── NewsPage.jsx              # News articles (dynamic)
│   │   ├── CareerPage.jsx            # Careers / Jobs (dynamic)
│   │   ├── FAQsPage.jsx              # FAQs (dynamic)
│   │   ├── ContactPage.jsx           # Contact form
│   │   └── PrivacyPage.jsx           # Privacy policy
│   │
│   ├── admin/                        # Admin panel modules
│   │   ├── CrudTable.jsx             # Reusable CRUD table component
│   │   ├── AdminNews.jsx             # Manage news articles
│   │   ├── AdminCareers.jsx          # Manage job positions
│   │   ├── AdminReviews.jsx          # Manage client reviews
│   │   ├── AdminFAQs.jsx             # Manage FAQs
│   │   ├── AdminPricing.jsx          # Manage pricing plans
│   │   └── AdminTeam.jsx             # Manage team members
│   │
│   ├── ui/                           # Reusable UI components (shadcn-style)
│   │   ├── accordion.jsx
│   │   ├── button.jsx
│   │   ├── card.jsx
│   │   ├── carousel.jsx
│   │   ├── dialog.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── tabs.jsx
│   │   └── textarea.jsx
│   │
│   ├── forms/                        # Form components
│   │   └── BookMeetingForm.jsx
│   │
│   └── common/                       # Shared utilities
│       └── ImageWithFallback.jsx     # Image with error fallback
│
├── lib/                              # Shared libraries
│   ├── firebase.js                   # Firebase app initialisation
│   ├── firestoreService.js           # Generic Firestore CRUD service
│   └── utils.js                      # Utility helpers (cn)
│
├── public/                           # Static assets (images, logo, etc.)
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── postcss.config.js                 # PostCSS configuration
├── jsconfig.json                     # Path aliases (@/)
├── .env.example                      # Environment variable template
├── .env.local                        # Environment variables (git-ignored)
└── package.json                      # Dependencies & scripts
```

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 18 (tested with v22)
- **npm** ≥ 9
- A **Firebase** project with Firestore & Authentication enabled

### 1. Clone & Install

```bash
git clone <REPO_URL>
cd otglobal
npm install
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in:

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (used for SEO meta) |
| `GMAIL_USER` | Gmail address for sending contact emails |
| `GMAIL_APP_PASSWORD` | Gmail App Password ([create one here](https://myaccount.google.com/apppasswords)) |
| `EMAIL_TO` | Recipient email for contact form submissions |
| `NEXT_PUBLIC_FIREBASE_*` | Firebase project config values (see below) |

### 3. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a project (or use an existing one)
3. **Enable Authentication** → Sign-in method → Email/Password
4. **Create an admin user** in Authentication → Users → Add User
5. **Enable Firestore Database** → Create database → Start in production mode
6. Copy your web app config from Project Settings → General → Your Apps → Web
7. Paste the values into `.env.local`

**Firestore Security Rules** (recommended):

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Public can READ all collections
    match /{collection}/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 5. Build for Production

```bash
npm run build
npm start
```

---

## 🔒 Admin Panel

The admin panel is accessible at `/admin` and is protected by Firebase Authentication.

### How to Access

1. Navigate to `/admin/login`
2. Sign in with the admin email/password you created in Firebase Console
3. You'll be redirected to the dashboard

### What You Can Manage

| Section | Firestore Collection | Description |
|---------|---------------------|-------------|
| **News** | `news` | News articles (title, excerpt, image, category, date) |
| **Careers** | `careers` | Job openings (title, location, type, department, description) |
| **Reviews** | `reviews` | Client testimonials (name, company, rating, content) |
| **FAQs** | `faqs` | Frequently asked questions (question, answer, category) |
| **Pricing** | `pricing` | Pricing plans (planName, label, features, isPopular) |
| **Team** | `team` | Team members (name, role, image, order) |

### How Dynamic Data Works

Each public-facing page follows this pattern:

1. **Fallback data** is hardcoded as the initial state (so the page never appears broken)
2. On mount, a `useEffect` calls `firestoreService.getAll('collection')` to fetch live data
3. If Firestore returns data → it replaces the fallback
4. If Firestore fails → the fallback remains visible (the error is logged silently)
5. A loading spinner shows while fetching

This means:
- ✅ The site **always works**, even if Firebase is down
- ✅ Changes from the admin panel reflect **immediately** on reload
- ✅ No build/deploy needed to update content

---

## 📐 Architecture Decisions

### Hybrid Static + Dynamic

- **Static content** (hero sections, page layouts, services descriptions) is hardcoded in JSX for fast rendering and SEO
- **Dynamic content** (news, careers, FAQs, pricing, team, reviews) is fetched from Firestore at runtime with fallback data

### Component Patterns

- **Page components** (`components/pages/`) contain all the logic and UI for a page
- **Route files** (`app/*/page.jsx`) are thin wrappers that import and render page components
- **Admin modules** (`components/admin/`) use a shared `CrudTable` component for consistent CRUD operations
- **UI components** (`components/ui/`) follow shadcn/ui patterns built on Radix UI primitives

### Firestore Service (`lib/firestoreService.js`)

A generic CRUD layer that works with any Firestore collection:

```javascript
firestoreService.getAll('news')          // Read all docs
firestoreService.getById('news', id)     // Read single doc
firestoreService.add('news', data)       // Create
firestoreService.update('news', id, data) // Update
firestoreService.delete('news', id)      // Delete
```

All writes automatically add `createdAt` and `updatedAt` timestamps.

---

## 🎨 Customisation

### Brand Colors

Edit `tailwind.config.js`:

| Token | Value | Usage |
|-------|-------|-------|
| Primary Teal | `#00A896` | Buttons, links, accents |
| Dark Teal | `#008c7a` | Hover states |
| Text | `#030213` | Body text |

### Fonts

Configured in `app/layout.jsx` — currently uses **Inter** from Google Fonts.

### Adding a New Admin Section

1. Create `components/admin/AdminXyz.jsx` (use `AdminFAQs.jsx` as a template)
2. Define fields and import `CrudTable`
3. Add the tab to `app/admin/page.jsx` → `menuItems` array and `TabsContent`

### Adding a New Public Page

1. Create `components/pages/XyzPage.jsx`
2. Create `app/xyz/page.jsx` that imports and renders it
3. Add the route to navigation in `components/layout/Header.jsx`

---

## 🚢 Deployment (Vercel)

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for the full guide.

**Quick steps:**

1. Push to GitHub
2. Import in [vercel.com](https://vercel.com)
3. Add **all** environment variables from `.env.example` in Vercel Settings → Environment Variables
4. Deploy

> ⚠️ **Important**: You must add all `NEXT_PUBLIC_FIREBASE_*` and `GMAIL_*` variables in Vercel for the admin panel and contact forms to work in production.

---

## 📦 Key Dependencies

| Package | Purpose |
|---------|---------|
| `next` ^16 | Framework |
| `react` ^18 | UI library |
| `tailwindcss` ^3 | Styling |
| `framer-motion` ^11 | Animations |
| `firebase` ^11 | Firestore + Auth |
| `lucide-react` | Icons |
| `@radix-ui/react-*` | Accessible UI primitives |
| `nodemailer` | Email sending |

---

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (Turbopack) |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## 📄 License

Private — OT Global Group

## 🤝 Support

For issues or questions, contact the development team.
