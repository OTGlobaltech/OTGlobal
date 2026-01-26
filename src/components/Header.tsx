import { Menu, X, Calendar } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import logo from "figma:asset/0dc038fcc1c58d688ae7924bed38575810e1154a.png";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [meetingDialogOpen, setMeetingDialogOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Services", id: "services" },
    { name: "Plans", id: "plans" },
    { name: "News", id: "news" },
    { name: "FAQs", id: "faqs" },
    { name: "Contact", id: "contact" },
    { name: "Privacy", id: "privacy" },
  ];

  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle meeting booking logic here
    alert("Meeting request submitted! We'll contact you soon.");
    setMeetingDialogOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer"
            onClick={() => onNavigate("home")}
          >
            <img src={logo} alt="OT Global Group" className="h-16" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm transition-colors ${
                  currentPage === item.id
                    ? "text-[#00A896]"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {item.name}
              </button>
            ))}
            <Dialog open={meetingDialogOpen} onOpenChange={setMeetingDialogOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Book Meeting
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle>Book a Meeting with Our Expert</DialogTitle>
                  <DialogDescription>
                    Schedule a consultation to discuss your China sourcing needs. We'll get back to you within 24 hours.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleMeetingSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@company.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Your Company Ltd." required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">What would you like to discuss?</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your sourcing needs, product requirements, or any questions you have..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full bg-[#00A896] hover:bg-[#008c7a]">
                    Submit Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              onClick={() => onNavigate("contact")}
              size="sm"
              className="bg-[#00A896] hover:bg-[#008c7a]"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  currentPage === item.id
                    ? "text-[#00A896] bg-teal-50"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Dialog open={meetingDialogOpen} onOpenChange={setMeetingDialogOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white"
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Meeting
                  </Button>
                </DialogTrigger>
              </Dialog>
              <Button
                onClick={() => {
                  onNavigate("contact");
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-[#00A896] hover:bg-[#008c7a]"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
