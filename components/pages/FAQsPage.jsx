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
      question: "What services does E-com Synergy Solutions provide?",
      answer: "We provide comprehensive procurement and logistics services including China sourcing, quality assurance, cost optimization, product sourcing, logistics & shipping, compliance & certification, supply chain dashboard management, and dedicated team support. We offer three service tiers: Basic, Plus, and Pro to meet different business needs.",
    },
    {
      question: "How do you ensure product quality?",
      answer: "We implement rigorous quality control measures at every stage of production. This includes pre-production inspections, in-process quality control, final inspection before shipment, and quality certification support. Our team conducts factory audits and product inspections to ensure all products meet international standards and your specifications.",
    },
    {
      question: "What is your experience with Amazon Aggregators?",
      answer: "We have extensive experience working with Amazon Aggregators, managing over 100 brands, 15,000 SKUs, and overseeing more than $100 million in spend. We specialize in AGL and AWD shipments, ensuring timely deliveries and strict compliance with Amazon requirements to maintain high ratings.",
    },
    {
      question: "How much can I save on procurement costs?",
      answer: "Our clients typically see cost reductions of up to 40% through our China network. We leverage our extensive supplier relationships, volume discounts, and negotiation expertise to optimize your procurement costs while maintaining quality standards.",
    },
    {
      question: "What is the difference between Basic, Plus, and Pro plans?",
      answer: "Basic includes essential services like RFQ validation, PO management, inbound logistics, and standard reporting. Plus adds advanced tools like demand planning, SKU data hygiene, and HTS code auditing. Pro provides comprehensive solutions including regulatory compliance, counter sourcing, AGL logistics management, ERP management, and weekly supply chain time.",
    },
    {
      question: "Do you handle customs and shipping?",
      answer: "Yes, we provide end-to-end logistics management including freight forwarding, customs clearance, warehouse management, and last-mile delivery. Our team ensures all documentation is properly handled and products comply with import/export regulations.",
    },
    {
      question: "How quickly can you source products?",
      answer: "Our streamlined processes and established relationships enable faster turnaround times. The exact timeline depends on product complexity, quantity, and customization requirements. We provide detailed timelines during the initial consultation and keep you updated throughout the process.",
    },
    {
      question: "What industries do you serve?",
      answer: "We serve various industries including e-commerce, retail, consumer goods, electronics, textiles, and more. Our expertise spans multiple product categories, and we can source everything from raw materials to finished products.",
    },
    {
      question: "How do you ensure compliance with regulations?",
      answer: "We handle all compliance requirements including CE, FCC, FDA certifications, regulatory compliance, documentation management, and import/export compliance. Our team stays updated with the latest regulations to ensure your products meet all necessary standards.",
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide dedicated account managers and support teams available whenever you need assistance. Our team offers personalized and proactive support, ensuring smooth communication and quick resolution of any issues. We also provide comprehensive supply chain dashboards for real-time visibility.",
    },
    {
      question: "Can you help with existing supply chains?",
      answer: "Absolutely. We can audit and optimize existing supply chains, identify cost-saving opportunities, improve quality control processes, and enhance overall efficiency. Our team works with you to understand your current operations and provide tailored improvement solutions.",
    },
    {
      question: "How do I get started?",
      answer: "Getting started is easy. Simply contact us through our contact page or book a meeting with our expert team. We'll discuss your specific needs, provide a customized solution, and guide you through the onboarding process. Our team is ready to help you optimize your supply chain operations.",
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
