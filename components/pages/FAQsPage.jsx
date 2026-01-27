"use client";

import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQsPage() {
  const faqs = [
    {
      question: "What is OT Global Group?",
      answer:
        "At OT Global, we provide end-to-end supply chain management, seamlessly integrating global sourcing, procurement, logistics, and production planning, warehouse management, ERP & Data Analytics for your small and medium enterprises especially Amazon and e-commerce stores. With expertise in robust supply chain management, we optimize every aspect so you can focus on growing your brand.\n\nWith over a decade of global supply chain expertise, OT Global Group brings world-class procurement and logistics solutions to businesses worldwide. Our leadership team has served in senior roles for renowned U.S. retail brands, including Monolith Brands Group and Thrasio, overseeing procurement operations worth hundreds of millions of dollars annually.",
    },
    {
      question: "How does your product/service work?",
      answer:
        "At OT Global Group, we provide end-to-end procurement and supply chain solutions tailored to your business needs. From sourcing quality products worldwide to managing purchasing, logistics, and delivery, we handle every stage of the process. Using advanced systems like NetSuite, Anvyl, and TMS platforms, we ensure transparency, real-time tracking, and cost efficiency. Whether you need global procurement, freight coordination, or supply chain automation, we deliver streamlined operations with reliable, on-time results.",
    },
    {
      question: "Do you handle Amazon FBA shipments?",
      answer:
        "Yes. We specialize in Amazon FBA shipments, including direct delivery to Amazon fulfillment centers, packaging compliance, and timely tracking updates to meet Amazon’s strict requirements.",
    },
    {
      question: "Which countries do you operate in?",
      answer:
        "We operate globally with a strong presence in the USA, China, and other key international markets. Our sourcing, logistics, and customs clearance services cover all major trade lanes.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We serve industries including construction, retail, e-commerce, manufacturing, and wholesale distribution.",
    },
    {
      question: "Do you help with customs clearance?",
      answer:
        "Yes. We manage the entire customs clearance process, ensuring compliance with local regulations to avoid delays or penalties.",
    },
    {
      question: "Can you assist with global sourcing of raw materials?",
      answer:
        "Absolutely. We connect clients with reliable suppliers worldwide, ensuring quality, cost efficiency, and timely delivery.",
    },
    {
      question: "What is your process for freight forwarding?",
      answer:
        "We manage the complete freight forwarding cycle — from pickup to customs clearance to final delivery — using sea, air, or land transport depending on client needs.",
    },
    {
      question: "Can you integrate with my ERP or inventory system?",
      answer:
        "Yes. We work with major ERP tools like SAP and can integrate data for smooth supply chain visibility.",
    },
    {
      question: "How do I get a quotation for your services?",
      answer:
        "You can fill out our online request form or contact our sales team with your shipment details, and we’ll respond with a tailored quote within 24 hours.",
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
              <HelpCircle size={64} className="text-teal-100" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-teal-100">
              Find answers to common questions about our services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <AccordionItem
                    value={`item-${index}`}
                    className="bg-white border border-gray-200 rounded-lg px-6 shadow-sm"
                  >
                    <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-[#00A896]">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>

          {/* Still Have Questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto shadow-sm">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Still Have Questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Our team is here to help. Contact us for personalized assistance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-[#00A896] hover:bg-[#008c7a] text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/services"
                  className="inline-block border-2 border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white px-8 py-3 rounded-md font-semibold transition-colors"
                >
                  View Services
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
