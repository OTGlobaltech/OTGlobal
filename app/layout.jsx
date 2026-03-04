import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "OT Global - Scale Your Supply Chain Without Scaling Headcount",
  description: "OT Global provides trained Virtual Assistants (VAs) who manage day-to-day supply chain execution across planning, procurement, logistics, and inventory operations.",
  keywords: "supply chain, virtual assistants, VA, operations, logistics, demand planning, procurement, inventory management",
  authors: [{ name: "OT Global" }],
  icons: {
    icon: '/favicon.ico',
    apple: '/logo.png',
  },
  openGraph: {
    title: "OT Global - Scale Your Supply Chain Without Scaling Headcount",
    description: "End-to-end supply chain Virtual Assistants for retail and Amazon FBA brands. Stay lean, agile, and cost-efficient.",
    type: "website",
    url: "https://www.otglobal.tech",
    siteName: "OT Global",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "OT Global Logo",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
