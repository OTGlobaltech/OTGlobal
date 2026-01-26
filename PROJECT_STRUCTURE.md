# Project Structure Overview

## 📁 Complete Folder Structure

```
otglobal/
├── app/                          # Next.js 16 App Router
│   ├── layout.jsx               # Root layout (Header + Footer)
│   ├── page.jsx                 # Home page route
│   ├── globals.css              # Global styles & Tailwind
│   ├── services/
│   │   └── page.jsx             # Services page
│   ├── plans/
│   │   └── page.jsx             # Plans page
│   ├── news/
│   │   └── page.jsx             # News page
│   ├── faqs/
│   │   └── page.jsx             # FAQs page
│   ├── contact/
│   │   └── page.jsx             # Contact page
│   └── privacy/
│       └── page.jsx             # Privacy page
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Site footer
│   │
│   ├── pages/                   # Page components
│   │   ├── HomePage.jsx         # Home page content
│   │   ├── ServicesPage.jsx     # (To be created)
│   │   ├── ContactPage.jsx      # (To be created)
│   │   └── ...                  # Other page components
│   │
│   ├── ui/                      # Reusable UI components
│   │   ├── button.jsx           # Button component
│   │   ├── card.jsx             # Card component
│   │   ├── dialog.jsx           # Dialog/Modal component
│   │   ├── input.jsx            # Input field
│   │   ├── label.jsx             # Label component
│   │   ├── textarea.jsx          # Textarea component
│   │   └── carousel.jsx          # Carousel component
│   │
│   └── common/                  # Common utilities
│       └── ImageWithFallback.jsx # Image with error handling
│
├── lib/
│   └── utils.js                 # Utility functions (cn helper)
│
├── public/                      # Static assets
│   └── logo.png                 # Company logo
│
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── jsconfig.json               # JavaScript path aliases
├── package.json                # Dependencies
├── .gitignore                  # Git ignore rules
├── .eslintrc.json              # ESLint configuration
├── README.md                   # Project documentation
├── VERCEL_DEPLOYMENT.md        # Deployment guide
└── PROJECT_STRUCTURE.md         # This file
```

## 🎯 Key Features

### 1. **Next.js 16 App Router**
- Modern file-based routing
- Server and Client Components
- Built-in SEO optimization
- Automatic code splitting

### 2. **Component Organization**
- **Layout Components**: Header, Footer (shared across pages)
- **Page Components**: Individual page content
- **UI Components**: Reusable, styled components
- **Common Components**: Shared utilities

### 3. **Styling**
- Tailwind CSS for utility-first styling
- Custom color scheme (Teal: #00A896)
- Responsive design (mobile-first)
- Dark mode support (configured but not active)

### 4. **Performance**
- Next.js Image optimization
- Automatic code splitting
- Server-side rendering
- Static generation where possible

## 🔧 Component Usage Patterns

### Layout Components
```jsx
// app/layout.jsx
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
```

### Page Components
```jsx
// app/page.jsx
import { HomePage } from "@/components/pages/HomePage";
```

### UI Components
```jsx
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
```

## 📝 Adding New Pages

1. **Create page component** in `components/pages/`
2. **Create route** in `app/[page-name]/page.jsx`
3. **Add to navigation** in `components/layout/Header.jsx`

Example:
```jsx
// components/pages/AboutPage.jsx
export function AboutPage() {
  return <div>About content</div>;
}

// app/about/page.jsx
import { AboutPage } from "@/components/pages/AboutPage";
export default function About() {
  return <AboutPage />;
}
```

## 🎨 Styling Guidelines

- Use Tailwind utility classes
- Follow existing color scheme
- Maintain responsive design
- Use semantic HTML

## 🚀 Best Practices

1. **Component Structure**: Keep components focused and reusable
2. **File Naming**: Use PascalCase for components, lowercase for routes
3. **Imports**: Use `@/` alias for cleaner imports
4. **Client Components**: Mark with `"use client"` when needed
5. **Metadata**: Add SEO metadata to each page

## 📦 Dependencies

- **Next.js 16**: Framework
- **React 18**: UI library
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations
- **Radix UI**: Accessible components
- **Lucide React**: Icons

## 🔄 Next Steps

1. ✅ Project structure created
2. ✅ Core components converted to JSX
3. ✅ Home page implemented
4. ⏳ Add content to other pages
5. ⏳ Implement contact form
6. ⏳ Add analytics
7. ⏳ Optimize images
8. ⏳ Add error boundaries
