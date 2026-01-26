import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "OT Global - Your Gateway to China Manufacturing Excellence",
  description: "OT Global connects businesses worldwide with premium Chinese manufacturers. Reduce costs, ensure quality, and scale your supply chain with confidence.",
  keywords: "China sourcing, manufacturing, supply chain, quality assurance, cost optimization",
  authors: [{ name: "OT Global" }],
  openGraph: {
    title: "OT Global - Your Gateway to China Manufacturing Excellence",
    description: "OT Global connects businesses worldwide with premium Chinese manufacturers.",
    type: "website",
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
