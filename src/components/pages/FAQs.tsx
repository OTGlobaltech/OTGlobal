import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Button } from "../ui/button";

interface FAQsProps {
  onNavigate: (page: string) => void;
}

export function FAQs({ onNavigate }: FAQsProps) {
  const faqCategories = [
    {
      category: "Getting Started",
      faqs: [
        {
          q: "How do I start sourcing products from China with OT Global?",
          a: "Simply contact us with your product requirements, target price, and quantity. We'll schedule a consultation to understand your needs, then begin identifying suitable manufacturers. Within 5-7 business days, we'll present you with vetted supplier options and price quotes.",
        },
        {
          q: "What information do I need to provide to get started?",
          a: "We need product specifications (photos, drawings, or samples), target quantity, quality requirements, budget range, and desired delivery timeline. The more detailed information you provide, the better we can match you with the right manufacturers.",
        },
        {
          q: "How long does the sourcing process take?",
          a: "Supplier identification typically takes 5-7 days. Sample production takes 1-3 weeks depending on product complexity. Once you approve samples, mass production timelines vary from 2-8 weeks. Shipping adds another 3-6 weeks depending on your chosen method.",
        },
        {
          q: "Do I need to speak Chinese to work with you?",
          a: "Not at all. Our bilingual team handles all communication with Chinese manufacturers. We translate technical specifications, negotiate on your behalf, and ensure nothing gets lost in translation.",
        },
      ],
    },
    {
      category: "Quality & Manufacturing",
      faqs: [
        {
          q: "How do you ensure product quality?",
          a: "We implement a comprehensive quality control process: factory audits before production, inspection of raw materials, during-production monitoring, pre-shipment inspections, and detailed reports with photos. Our QC team is based in China and conducts inspections in person.",
        },
        {
          q: "What happens if the products don't meet quality standards?",
          a: "If issues are found during our inspection, we work with the factory to correct them before shipment. If defective products somehow reach you, we'll negotiate with the factory for replacements or refunds. This is why our QC process is so thorough - to prevent issues before they occur.",
        },
        {
          q: "Can I visit the factory before placing an order?",
          a: "Absolutely! We encourage factory visits when possible and can arrange them for you. Our team will accompany you, provide translation services, and help you assess the facility's capabilities. Virtual factory tours via video call are also available.",
        },
        {
          q: "What's the minimum order quantity (MOQ)?",
          a: "MOQs vary by product and factory. We work to negotiate the lowest possible MOQs for you. Typically, MOQs range from 500-3000 units, but some factories accept smaller quantities for initial orders. We'll be transparent about MOQ requirements upfront.",
        },
      ],
    },
    {
      category: "Costs & Payments",
      faqs: [
        {
          q: "How much can I save by sourcing from China?",
          a: "Cost savings typically range from 30-60% compared to domestic manufacturing, depending on your product category. However, remember to factor in shipping, duties, and our service fees when calculating total landed costs. We provide detailed cost breakdowns for transparency.",
        },
        {
          q: "What are the payment terms with factories?",
          a: "Standard terms are 30% deposit before production and 70% balance before shipment. For established relationships, we can sometimes negotiate better terms like 30/70 or even payment after delivery. We never recommend 100% upfront payment.",
        },
        {
          q: "How do I pay the factories?",
          a: "We recommend wire transfer (T/T) for most transactions. For larger orders, Letter of Credit (L/C) provides additional security. We guide you through the payment process and can act as a trusted intermediary if needed.",
        },
        {
          q: "Are there any hidden costs I should know about?",
          a: "We believe in complete transparency. Beyond the product cost and our service fee, consider: shipping (ocean or air), customs duties and taxes, product testing/certification if required, and warehousing if needed. We provide detailed quotes that include all anticipated costs.",
        },
      ],
    },
    {
      category: "Shipping & Logistics",
      faqs: [
        {
          q: "How long does shipping from China take?",
          a: "Ocean freight typically takes 3-6 weeks depending on destination. Air freight takes 5-10 days but costs significantly more. We'll help you choose the best shipping method based on your timeline and budget. Express air can deliver in 3-5 days for urgent orders.",
        },
        {
          q: "Do you handle customs clearance?",
          a: "Yes, we can assist with customs clearance and provide all necessary documentation (commercial invoice, packing list, bill of lading, certificates of origin, etc.). We ensure all paperwork is accurate to prevent customs delays.",
        },
        {
          q: "What shipping method should I choose?",
          a: "Ocean freight is most cost-effective for large, heavy shipments and non-urgent orders. Air freight is best for time-sensitive, high-value, or lightweight products. We'll calculate both options and help you decide based on your priorities.",
        },
        {
          q: "Can you ship directly to my customers (dropshipping)?",
          a: "Yes, we can arrange direct shipping to your customers or Amazon FBA warehouses. Many of our clients use this service for e-commerce businesses. We can also handle labeling, packaging customization, and quality control for dropshipping orders.",
        },
      ],
    },
    {
      category: "Risk & Protection",
      faqs: [
        {
          q: "How do I know I won't get scammed?",
          a: "We only work with verified, established manufacturers that we've personally audited. We conduct factory visits, check business licenses, verify production capabilities, and review client references. Our local presence and industry experience help us identify legitimate suppliers.",
        },
        {
          q: "What if the factory doesn't deliver on time?",
          a: "We monitor production progress closely and provide regular updates. If delays occur, we work with the factory to expedite production or find solutions. Our contracts include delivery timelines, and we negotiate compensation for significant delays when warranted.",
        },
        {
          q: "Is my product design/intellectual property protected?",
          a: "We take IP protection seriously. We can help you register trademarks in China, have factories sign NDAs and non-compete agreements, and implement measures to protect your designs. However, IP enforcement in China can be challenging, so we recommend appropriate precautions.",
        },
        {
          q: "What happens if there's a dispute with the factory?",
          a: "As your representative in China, we mediate disputes and work toward resolution. Our local presence, relationships, and understanding of Chinese business practices give us leverage in negotiations. We act as your advocate throughout the process.",
        },
      ],
    },
    {
      category: "Ongoing Partnership",
      faqs: [
        {
          q: "Do you help with product development and improvements?",
          a: "Yes! We can work with factories on product modifications, cost reduction initiatives, and new product development. Our team understands manufacturing processes and can suggest improvements to quality, cost, or functionality.",
        },
        {
          q: "Can you manage multiple products and suppliers for me?",
          a: "Absolutely. Many clients use us to manage their entire China supply chain across multiple product lines and factories. We coordinate production schedules, consolidate shipments, and provide unified reporting for all your sourcing activities.",
        },
        {
          q: "What happens after my first order?",
          a: "We maintain relationships with your suppliers and can manage reorders efficiently. We'll monitor quality consistency, negotiate better pricing for larger volumes, and continually seek ways to optimize your supply chain.",
        },
        {
          q: "Can I work directly with the factory eventually?",
          a: "Some clients choose to transition to direct relationships after establishing trust with factories. We're transparent about this possibility and won't hold you hostage. However, many clients find our ongoing management valuable even after multiple successful orders.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto">
            Everything you need to know about sourcing from China with OT Global
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h2 className="text-3xl text-gray-900 mb-8 pb-4 border-b-2 border-[#00A896]">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faqIndex}
                    value={`${categoryIndex}-${faqIndex}`}
                    className="border-b border-gray-200"
                  >
                    <AccordionTrigger className="text-left text-gray-900 hover:text-[#00A896] text-lg py-6">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Our team is ready to answer any questions about your specific sourcing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#00A896] hover:bg-[#008c7a] text-lg px-8 py-6"
              onClick={() => onNavigate("contact")}
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-gray-300 text-gray-900 hover:bg-gray-50 text-lg px-8 py-6"
              onClick={() => onNavigate("services")}
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
