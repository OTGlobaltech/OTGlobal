// components/layout/Header.jsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BookMeetingForm } from "@/components/forms/BookMeetingForm";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [meetingDialogOpen, setMeetingDialogOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);

  const solutionItems = [
    {
      name: "Order Management – Panom",
      path: "/solutions/order-management-panom",
    },
    {
      name: "Distribution & Fulfillment",
      path: "/solutions/distribution-fulfillment",
    },
    {
      name: "Transportation",
      path: "/solutions/transportation",
    },
    {
      name: "Customs Brokerage & Global Trade",
      path: "/solutions/customs-brokerage-global-trade",
    },
  ];

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Plans", path: "/plans" },
    { name: "News", path: "/news" },
    { name: "FAQs", path: "/faqs" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy", path: "/privacy" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 lg:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="OT Global Group"
              width={180}
              height={90}
              className="h-20 lg:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Home first */}
            <Link
              href="/"
              className={`text-sm transition-colors ${isActive("/")
                ? "text-[#00A896]"
                : "text-gray-600 hover:text-gray-900"
                }`}
            >
              Home
            </Link>

            {/* Solutions immediately after Home */}
            <div className="relative group">
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors"
              >
                Solutions
                <span className="text-[10px] translate-y-px">▼</span>
              </button>
              {/* Invisible bridge to prevent gap between button and dropdown */}
              <div className="absolute left-0 right-0 h-4 bg-transparent"></div>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 delay-100 absolute left-1/2 -translate-x-1/2 mt-4 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
                {solutionItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#00A896] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Remaining nav items */}
            {navItems
              .filter((item) => item.name !== "Home")
              .map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm transition-colors ${isActive(item.path)
                    ? "text-[#00A896]"
                    : "text-gray-600 hover:text-gray-900"
                    }`}
                >
                  {item.name}
                </Link>
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
                <BookMeetingForm onSuccess={() => setMeetingDialogOpen(false)} />
              </DialogContent>
            </Dialog>
            <Link href="/contact">
              <Button
                size="sm"
                className="bg-[#00A896] hover:bg-[#008c7a]"
              >
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 space-y-2">
            {/* Home first */}
            <Link
              href="/"
              onClick={() => {
                setMobileMenuOpen(false);
                setMobileSolutionsOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 text-sm ${isActive("/")
                ? "text-[#00A896] bg-teal-50"
                : "text-gray-600 hover:bg-gray-50"
                }`}
            >
              Home
            </Link>

            {/* Solutions immediately after Home (tap to expand) */}
            <button
              type="button"
              onClick={() => setMobileSolutionsOpen((open) => !open)}
              className="w-full flex items-center justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
            >
              <span className="font-medium">Solutions</span>
              <span className="text-xs text-gray-500">
                {mobileSolutionsOpen ? "▲" : "▼"}
              </span>
            </button>
            {mobileSolutionsOpen && (
              <div className="px-4 pb-2 space-y-1">
                {solutionItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setMobileSolutionsOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-sm rounded-md text-gray-700 hover:bg-gray-50 hover:text-[#00A896]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Remaining items after Solutions */}
            {navItems
              .filter((item) => item.name !== "Home")
              .map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block w-full text-left px-4 py-2 text-sm ${isActive(item.path)
                    ? "text-[#00A896] bg-teal-50"
                    : "text-gray-600 hover:bg-gray-50"
                    }`}
                >
                  {item.name}
                </Link>
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
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-[#00A896] hover:bg-[#008c7a]">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
