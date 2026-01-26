import { Search, ClipboardCheck, Factory, Ship, BarChart3, Shield, FileCheck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ServicesProps {
  onNavigate: (page: string) => void;
}

export function Services({ onNavigate }: ServicesProps) {
  const services = [
    {
      icon: Search,
      title: "Product Sourcing",
      description:
        "We identify and vet the best manufacturers in China for your specific product requirements. Our extensive network ensures competitive pricing and quality standards.",
      features: [
        "Supplier identification and verification",
        "Price negotiation and cost analysis",
        "Sample procurement and testing",
        "MOQ negotiation",
      ],
    },
    {
      icon: ClipboardCheck,
      title: "Quality Control & Inspection",
      description:
        "Our on-ground QC team conducts thorough inspections at every production stage to ensure your products meet exact specifications.",
      features: [
        "Pre-production inspections",
        "During production monitoring",
        "Final random inspection (FRI)",
        "Detailed inspection reports with photos",
      ],
    },
    {
      icon: Factory,
      title: "Manufacturing Management",
      description:
        "We oversee the entire manufacturing process, ensuring timelines are met and quality standards are maintained throughout production.",
      features: [
        "Production timeline management",
        "Factory communication and coordination",
        "Progress updates and reporting",
        "Issue resolution and mitigation",
      ],
    },
    {
      icon: Ship,
      title: "Logistics & Shipping",
      description:
        "Comprehensive logistics solutions from factory to your destination, including customs clearance and documentation management.",
      features: [
        "Ocean and air freight coordination",
        "Customs clearance assistance",
        "Door-to-door delivery options",
        "Real-time shipment tracking",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Certification",
      description:
        "Ensure your products meet all international standards and regulations with our compliance and certification services.",
      features: [
        "Product testing and certification",
        "Regulatory compliance checks",
        "Documentation preparation",
        "Standards verification (CE, FDA, etc.)",
      ],
    },
    {
      icon: BarChart3,
      title: "Supply Chain Optimization",
      description:
        "Data-driven insights and strategies to optimize your supply chain, reduce costs, and improve efficiency.",
      features: [
        "Cost analysis and optimization",
        "Supplier performance tracking",
        "Lead time reduction strategies",
        "Risk assessment and mitigation",
      ],
    },
    {
      icon: Shield,
      title: "Factory Audits",
      description:
        "Comprehensive factory evaluations to assess capabilities, quality systems, and ethical compliance before you commit.",
      features: [
        "Social compliance audits",
        "Technical capability assessment",
        "Quality management system review",
        "Ethical sourcing verification",
      ],
    },
    {
      icon: Users,
      title: "Account Management",
      description:
        "Dedicated account managers who understand your business and act as your local team in China.",
      features: [
        "Single point of contact",
        "Regular progress updates",
        "Proactive issue resolution",
        "Strategic sourcing advice",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Requirements",
      description: "We discuss your product needs, budget, and timeline to create a sourcing strategy",
    },
    {
      step: "02",
      title: "Supplier Identification",
      description: "Our team identifies and vets qualified manufacturers from our network",
    },
    {
      step: "03",
      title: "Sampling & Negotiation",
      description: "We obtain samples, negotiate pricing, and finalize terms on your behalf",
    },
    {
      step: "04",
      title: "Production & QC",
      description: "Manufacturing begins with our team conducting regular quality inspections",
    },
    {
      step: "05",
      title: "Logistics & Delivery",
      description: "We arrange shipping and handle all logistics until products reach you",
    },
    {
      step: "06",
      title: "Ongoing Support",
      description: "Continuous support for reorders, improvements, and new product development",
    },
  ];

  const industries = [
    "Consumer Electronics",
    "Home & Garden",
    "Fashion & Apparel",
    "Health & Beauty",
    "Automotive Parts",
    "Industrial Equipment",
    "Toys & Games",
    "Furniture & Decor",
    "Sports & Outdoors",
    "Pet Supplies",
    "Packaging Materials",
    "Medical Devices",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl mb-6">
              Complete China Outsourcing Solutions
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100">
              From initial sourcing to final delivery, we manage every aspect of your 
              China manufacturing needs with expertise and transparency.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              End-to-end support for all your China sourcing and manufacturing requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                    <service.icon className="text-[#00A896]" size={32} />
                  </div>
                  <CardTitle className="text-gray-900 text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-lg">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-[#00A896] mr-3 mt-1">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step approach to successful China sourcing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="text-6xl text-[#00A896] opacity-20 mb-4">{item.step}</div>
                <h3 className="text-2xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive experience across diverse product categories and industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center hover:bg-teal-50 hover:text-[#00A896] transition-colors cursor-default border border-gray-200"
              >
                <span className="text-gray-900 hover:text-[#00A896]">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Content Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1548273989-e90f53ea0501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMGZhY3RvcnklMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MTY0NDQzMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing facility"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-5xl text-gray-900 mb-6">
                Your China Operations Team
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                With offices and staff based in major Chinese manufacturing hubs, we act as 
                your local team on the ground. Our expertise in Chinese business culture, 
                language, and manufacturing practices ensures smooth operations and successful outcomes.
              </p>
              <p className="text-xl text-gray-600 mb-8">
                We eliminate the complexities and risks of dealing with overseas manufacturers, 
                giving you peace of mind and allowing you to focus on growing your business.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Native Mandarin speakers on staff",
                  "Local presence in Shenzhen, Guangzhou, and Shanghai",
                  "15+ years of China sourcing experience",
                  "Network of 500+ verified manufacturers",
                ].map((point, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-teal-100 rounded-full p-2 mr-4">
                      <div className="w-2 h-2 bg-[#00A896] rounded-full"></div>
                    </div>
                    <span className="text-lg text-gray-700">{point}</span>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="bg-[#00A896] hover:bg-[#008c7a] text-lg"
                onClick={() => onNavigate("contact")}
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl mb-6">
            Ready to Source from China?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Let's discuss your project and how we can help you achieve your sourcing goals
          </p>
          <Button
            size="lg"
            className="bg-white text-[#00A896] hover:bg-gray-100 text-lg px-8 py-6"
            onClick={() => onNavigate("contact")}
          >
            Request a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
