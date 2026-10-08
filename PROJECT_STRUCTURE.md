# Project Structure & Developer Guide

> This document explains how the codebase is organised and the patterns you should follow when adding or modifying features.

---

## 📁 Directory Map

```
otglobal/
│
├── app/                              # ── Next.js App Router (routes) ──
│   ├── layout.jsx                    #   Root layout (wraps Header + Footer)
│   ├── page.jsx                      #   Home page (/)
│   ├── globals.css                   #   Global styles & Tailwind directives
│   │
│   ├── about/page.jsx                #   /about
│   ├── services/page.jsx             #   /services
│   ├── plans/page.jsx                #   /plans
│   ├── news/page.jsx                 #   /news
│   ├── careers/page.jsx              #   /careers
│   ├── faqs/page.jsx                 #   /faqs
│   ├── contact/page.jsx              #   /contact
│   ├── privacy/page.jsx              #   /privacy
│   │
│   ├── solutions/                    #   /solutions/*
│   │   ├── order-management/
│   │   ├── distribution-fulfillment/
│   │   ├── transportation/
│   │   └── customs-brokerage-global-trade/
│   │
│   ├── admin/                        #   🔒 Admin panel (auth-protected)
│   │   ├── layout.jsx                #     Auth guard (redirects if not logged in)
│   │   ├── page.jsx                  #     Dashboard with tabbed CRUD UI
│   │   └── login/page.jsx            #     Login form
│   │
│   └── api/                          #   Server-side API routes
│       ├── contact/route.js          #     POST /api/contact
│       └── book-meeting/route.js     #     POST /api/book-meeting
│
├── components/
│   ├── layout/                       # ── Persistent layout components ──
│   │   ├── Header.jsx                #   Nav bar, mobile menu, "Book Meeting" dialog
│   │   └── Footer.jsx                #   Footer with links & social icons
│   │
│   ├── pages/                        # ── Page-level components ──
│   │   ├── HomePage.jsx              #   Hero, stats, services, reviews, CTA
│   │   ├── AboutPage.jsx             #   Mission, team (dynamic), clientele
│   │   ├── ServicesPage.jsx          #   Service categories & details
│   │   ├── PlansPage.jsx             #   Pricing cards (dynamic from Firestore)
│   │   ├── NewsPage.jsx              #   News grid (dynamic from Firestore)
│   │   ├── CareerPage.jsx            #   Benefits + open positions (dynamic)
│   │   ├── FAQsPage.jsx              #   Accordion FAQs (dynamic from Firestore)
│   │   ├── ContactPage.jsx           #   Contact form (sends email via API)
│   │   └── PrivacyPage.jsx           #   Static privacy policy
│   │
│   ├── admin/                        # ── Admin panel modules ──
│   │   ├── CrudTable.jsx             #   Generic CRUD table (add/edit/delete rows)
│   │   ├── AdminNews.jsx             #   News management
│   │   ├── AdminCareers.jsx          #   Career/job management
│   │   ├── AdminReviews.jsx          #   Review management
│   │   ├── AdminFAQs.jsx             #   FAQ management
│   │   ├── AdminPricing.jsx          #   Pricing plan management
│   │   └── AdminTeam.jsx             #   Team member management
│   │
│   ├── ui/                           # ── Reusable UI primitives (shadcn-style) ──
│   │   ├── accordion.jsx             #   Radix Accordion
│   │   ├── button.jsx                #   Button with variants
│   │   ├── card.jsx                  #   Card, CardHeader, CardContent, etc.
│   │   ├── carousel.jsx              #   Embla-based carousel
│   │   ├── dialog.jsx                #   Radix Dialog/Modal
│   │   ├── input.jsx                 #   Text input
│   │   ├── label.jsx                 #   Form label
│   │   ├── tabs.jsx                  #   Radix Tabs
│   │   └── textarea.jsx              #   Textarea input
│   │
│   ├── forms/                        # ── Form components ──
│   │   └── BookMeetingForm.jsx       #   "Book a Meeting" form
│   │
│   └── common/                       # ── Shared utility components ──
│       └── ImageWithFallback.jsx     #   Next/Image with error placeholder
│
├── lib/                              # ── Shared libraries ──
│   ├── firebase.js                   #   Firebase app + auth + db initialisation
│   ├── firestoreService.js           #   Generic CRUD helper for any collection
│   └── utils.js                      #   cn() helper for className merging
│
├── public/                           # ── Static assets ──
│   ├── logo.png                      #   Company logo
│   ├── *.jpeg                        #   Team member photos
│   └── ...
│
├── .env.example                      #   Template for env vars
├── .env.local                        #   Actual env vars (git-ignored)
├── next.config.js                    #   Next.js config (image domains, etc.)
├── tailwind.config.js                #   Tailwind theme & plugins
├── package.json                      #   Dependencies & scripts
└── README.md                         #   Project overview & setup guide
```

---

## 🔄 Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                         ADMIN PANEL                             │
│  /admin  →  AdminNews / AdminCareers / AdminFAQs / ...          │
│            ↓ writes via firestoreService.add/update/delete()    │
│            ↓                                                    │
│     ┌──────────────────────────────────┐                        │
│     │     Firebase Firestore           │                        │
│     │  Collections: news, careers,     │                        │
│     │  reviews, faqs, pricing, team    │                        │
│     └──────────────┬───────────────────┘                        │
│                    │                                            │
│                    │ reads via firestoreService.getAll()         │
│                    ↓                                            │
│          PUBLIC PAGES (NewsPage, CareerPage, ...)               │
│          • Fallback data as initial state                       │
│          • useEffect fetches live data                          │
│          • Shows loader while fetching                          │
│          • Falls back gracefully on error                       │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Key Patterns

### 1. Route ↔ Page Component Separation

Route files in `app/` are thin wrappers:

```jsx
// app/news/page.jsx
import { NewsPage } from "@/components/pages/NewsPage";
export default function News() {
  return <NewsPage />;
}
```

All actual logic lives in `components/pages/`. This keeps route files clean and makes page components reusable/testable.

### 2. Dynamic Data with Fallback

Every page that reads from Firestore follows this pattern:

```jsx
"use client";
import { useState, useEffect } from "react";
import { firestoreService } from "@/lib/firestoreService";

export function ExamplePage() {
  const fallbackData = [ /* hardcoded defaults */ ];

  const [data, setData] = useState(fallbackData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await firestoreService.getAll('collection_name');
        if (result?.length > 0) setData(result);
      } catch (error) {
        console.error("Fetch failed, using fallback.", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return loading ? <Spinner /> : <Content data={data} />;
}
```

### 3. Admin CRUD with CrudTable

Admin modules define field schemas and pass them to `CrudTable`:

```jsx
import CrudTable from './CrudTable';

const fields = [
  { name: 'title', label: 'Title', type: 'text', required: true },
  { name: 'content', label: 'Content', type: 'textarea' },
];

export default function AdminExample() {
  return <CrudTable collectionName="example" fields={fields} title="Examples" />;
}
```

### 4. Hydration Safety

Client components that use Radix UI (Dialog, Accordion) must guard against hydration mismatches:

```jsx
const [isMounted, setIsMounted] = useState(false);
useEffect(() => { setIsMounted(true); }, []);

// Only render Radix component after mount
{isMounted && <Dialog>...</Dialog>}
```

---

## ✏️ Common Tasks

### Add a new Firestore-managed section

1. **Admin module**: Create `components/admin/AdminXyz.jsx` using `CrudTable`
2. **Register in dashboard**: Add tab in `app/admin/page.jsx`
3. **Public page**: Add `useState` + `useEffect` fetch in the relevant page component
4. **Firestore rules**: Ensure the new collection is covered by your security rules

### Add a new static page

1. Create `components/pages/XyzPage.jsx`
2. Create `app/xyz/page.jsx` that imports and renders `<XyzPage />`
3. Add the link to `Header.jsx` navigation

### Modify brand colors

Edit `tailwind.config.js` → `theme.extend.colors`.

---

## 🧪 Debugging Tips

- **Firestore errors**: Check browser console for `"Failed to load X from database"` messages — the app will keep working with fallback data but the console will tell you exactly what failed.
- **Hydration errors**: If you see "hydration mismatch" in the console, ensure any browser-only component (Dialog, Accordion) is wrapped in an `isMounted` guard.
- **Email not sending**: Verify `GMAIL_USER`, `GMAIL_APP_PASSWORD`, and `EMAIL_TO` in `.env.local`. Gmail App Passwords require 2FA to be enabled.
- **Admin login fails**: Ensure a user exists in Firebase Console → Authentication → Users.

---

## 📦 Firestore Collection Schemas

### `news`
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Article title |
| `excerpt` | string | Short summary |
| `content` | string | Full article body |
| `category` | string | Category label |
| `date` | string | Display date |
| `image` / `imageUrl` | string | Image URL |
| `status` | string | `published` or `draft` |
| `createdAt` | timestamp | Auto-set |

### `careers`
| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Job title |
| `location` | string | Office/Remote |
| `type` | string | Full-time / Part-time |
| `department` | string | Department name |
| `description` | string | Job description |
| `status` | string | `open` or `closed` |
| `createdAt` | timestamp | Auto-set |

### `faqs`
| Field | Type | Description |
|-------|------|-------------|
| `question` | string | The question |
| `answer` | string | The answer |
| `category` | string | Category grouping |
| `createdAt` | timestamp | Auto-set |

### `pricing`
| Field | Type | Description |
|-------|------|-------------|
| `planName` | string | Plan display name |
| `label` | string | Subtitle |
| `idealFor` | string | Target audience |
| `features` | array/string | Feature list (newline-separated or array) |
| `isPopular` | boolean | Show "Most Popular" badge |
| `price` | string | Optional price display |
| `createdAt` | timestamp | Auto-set |

### `team`
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Full name |
| `role` | string | Job title |
| `image` / `imageUrl` | string | Profile photo URL |
| `order` | number | Display order |
| `createdAt` | timestamp | Auto-set |

### `reviews`
| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Reviewer name |
| `company` | string | Company name |
| `rating` | number | 1–5 star rating |
| `content` | string | Review text |
| `createdAt` | timestamp | Auto-set |
