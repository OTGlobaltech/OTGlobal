import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./components/pages/Home";
import { Services } from "./components/pages/Services";
import { Plans } from "./components/pages/Plans";
import { News } from "./components/pages/News";
import { FAQs } from "./components/pages/FAQs";
import { Contact } from "./components/pages/Contact";
import { Privacy } from "./components/pages/Privacy";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "services":
        return <Services onNavigate={handleNavigate} />;
      case "plans":
        return <Plans onNavigate={handleNavigate} />;
      case "news":
        return <News onNavigate={handleNavigate} />;
      case "faqs":
        return <FAQs onNavigate={handleNavigate} />;
      case "contact":
        return <Contact />;
      case "privacy":
        return <Privacy />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
