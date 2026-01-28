"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText } from "lucide-react";

export function PrivacyPage() {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "Personal information such as name, email address, phone number, and company details when you contact us or use our services.",
        "Business information including procurement needs, supply chain requirements, and operational data necessary to provide our services.",
        "Technical information such as IP address, browser type, and usage data collected through cookies and similar technologies.",
        "Communication records including emails, messages, and other correspondence with our team.",
      ],
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "To provide and improve our supply chain management services.",
        "To communicate with you about your account, services, and inquiries.",
        "To process transactions and manage business relationships.",
        "To send you updates, newsletters, and marketing communications (with your consent).",
        "To comply with legal obligations and protect our rights.",
        "To analyze and improve our website and services.",
      ],
    },
    {
      icon: Lock,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal and business information.",
        "All data is encrypted during transmission and stored securely.",
        "Access to personal information is restricted to authorized personnel only.",
        "We regularly review and update our security practices to address emerging threats.",
        "Despite our efforts, no method of transmission over the internet is 100% secure.",
      ],
    },
    {
      icon: Shield,
      title: "Data Sharing and Disclosure",
      content: [
        "We do not sell your personal information to third parties.",
        "We may share information with service providers who assist in our operations (under strict confidentiality agreements).",
        "We may disclose information if required by law or to protect our rights and safety.",
        "Business information may be shared with suppliers and partners necessary to fulfill our services.",
        "In case of business transfer, information may be transferred to the acquiring entity.",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="flex justify-center mb-6">
              <Shield size={64} className="text-teal-100" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-teal-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-teal-200 mt-4">
              Last updated: January 26, 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                OT Global Group ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website and services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </motion.div>

            {/* Policy Sections */}
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-8 mb-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <section.icon className="text-[#00A896]" size={24} />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#00A896] mt-1">•</span>
                      <span className="text-gray-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Additional Sections */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Access and receive a copy of your personal information</li>
                <li>• Request correction of inaccurate or incomplete information</li>
                <li>• Request deletion of your personal information</li>
                <li>• Object to processing of your personal information</li>
                <li>• Request restriction of processing</li>
                <li>• Data portability</li>
                <li>• Withdraw consent at any time</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Types of cookies we use: Essential cookies (required for website functionality), Analytics cookies (to understand website usage), and Marketing cookies (to deliver relevant advertisements).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#00A896] to-[#008c7a] rounded-lg shadow-lg p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <ul className="space-y-2">
                <li>Email: info@otglobal.tech</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: United States</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
