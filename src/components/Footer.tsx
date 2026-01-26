import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";
import logo from "figma:asset/0dc038fcc1c58d688ae7924bed38575810e1154a.png";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="OT Global Group" className="h-16 brightness-0 invert" />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Your trusted partner for China sourcing and manufacturing. We connect
              businesses worldwide with premium Chinese suppliers, ensuring quality, 
              cost-efficiency, and peace of mind.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#00A896] transition-colors"
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
                <button
                  onClick={() => onNavigate("services")}
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("plans")}
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Plans
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("news")}
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  News
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("faqs")}
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("privacy")}
                  className="text-sm text-gray-400 hover:text-[#00A896] transition-colors"
                >
                  Privacy Policy
                </button>
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
          <p>&copy; {new Date().getFullYear()} Otglobal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
