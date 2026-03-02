"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Image
                src="/logo.png"
                alt="OT Global Group"
                width={180}
                height={90}
                className="h-20 lg:h-24 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for sourcing and manufacturing. We connect
              businesses worldwide with premium Chinese suppliers, ensuring quality,
              cost-efficiency, and peace of mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61579732108794"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
                aria-label="Facebook"
                target="_blank"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/otglobalgroup/?viewAsMember=true"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
                aria-label="LinkedIn"
                target="_blank"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:info@otglobal.tech"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/news"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  News
                </Link>
              </li>
              <li>
                <Link
                  href="/faqs"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  FAQs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} Otglobal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
