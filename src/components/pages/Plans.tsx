import { Check } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";

interface PlansProps {
  onNavigate: (page: string) => void;
}

export function Plans({ onNavigate }: PlansProps) {
  const plans = [
    {
      name: "Product Sourcing",
      price: "Project-Based",
      period: "",
      description: "Perfect for one-time orders or testing new products",
      features: [
        "Supplier identification & verification",
        "Price negotiation assistance",
        "Sample procurement (up to 3 samples)",
        "Basic quality inspection",
        "Shipping coordination",
        "Email support",
        "Suitable for orders under $10,000",
      ],
      popular: false,
    },
    {
      name: "Full Management",
      price: "5-8%",
      period: "of order value",
      description: "Comprehensive service for regular manufacturing needs",
      features: [
        "Everything in Product Sourcing",
        "Dedicated account manager",
        "Factory audits and verification",
        "Complete QC at all stages",
        "Production monitoring",
        "Logistics management",
        "Compliance & certification support",
        "Priority support (24/7)",
        "Suitable for orders $10K - $100K",
      ],
      popular: true,
    },
    {
      name: "Partnership",
      price: "Custom",
      period: "",
      description: "Strategic partnership for large-scale operations",
      features: [
        "Everything in Full Management",
        "Dedicated team in China",
        "Custom pricing structure",
        "Strategic sourcing consultation",
        "Supply chain optimization",
        "Vendor management system access",
        "Quarterly business reviews",
        "Risk mitigation strategies",
        "Direct factory negotiations",
        "Volume discounts on services",
        "For orders above $100K",
      ],
      popular: false,
    },
  ];

  const additionalServices = [
    {
      name: "Factory Audit",
      price: "$500 - $1,500",
      description: "Comprehensive evaluation of factory capabilities and compliance",
    },
    {
      name: "Product Testing",
      price: "$300 - $2,000",
      description: "Third-party laboratory testing and certification",
    },
    {
      name: "Sample Development",
      price: "$200 - $1,000",
      description: "Custom sample creation and refinement",
    },
    {
      name: "Packaging Design",
      price: "$500 - $2,500",
      description: "Custom packaging design and prototyping services",
    },
  ];

  const benefits = [
    "No Hidden Fees - Transparent pricing on all services",
    "Pay As You Go - Only pay for the services you need",
    "No Long-Term Contracts - Flexible engagement models",
    "Money-Back Guarantee - If we don't find suitable suppliers",
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">
            Transparent, Value-Driven Pricing
          </h1>
          <p className="text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto">
            Choose the service level that matches your sourcing needs. 
            No hidden fees, no surprises - just honest pricing.
          </p>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.popular
                    ? "border-[#00A896] border-2 shadow-2xl scale-105 z-10"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-[#00A896] text-white px-6 py-2 text-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-gray-900 text-2xl mb-4">{plan.name}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl text-gray-900">{plan.price}</span>
                    {plan.period && <div className="text-gray-600 mt-2">{plan.period}</div>}
                  </div>
                  <p className="text-gray-600 mt-4 text-lg">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="text-[#00A896] mr-3 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full text-lg py-6 ${
                      plan.popular
                        ? "bg-[#00A896] hover:bg-[#008c7a] text-white"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                    onClick={() => onNavigate("contact")}
                  >
                    {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your sourcing project with our specialized services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {additionalServices.map((service, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{service.name}</CardTitle>
                  <div className="text-3xl text-[#00A896] mt-3">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Our Pricing Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="bg-teal-100 rounded-full p-3 mr-4 flex-shrink-0">
                  <Check className="text-[#00A896]" size={24} />
                </div>
                <span className="text-lg text-gray-900">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Pricing Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "How is the service fee calculated?",
                a: "Our fee is based on the total order value and complexity of your project. For Full Management services, we typically charge 5-8% of the order value. Product Sourcing is project-based with fixed fees. Partnership plans are customized based on your volume and requirements.",
              },
              {
                q: "Are there any upfront costs?",
                a: "For Product Sourcing, we may require a small deposit to begin work. Full Management and Partnership services typically have their fees included in the final invoice. Any third-party costs (samples, testing, etc.) are quoted separately and approved by you before proceeding.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank wire transfers, PayPal, and credit cards for service fees. For factory payments, we recommend wire transfer or letter of credit for larger orders.",
              },
              {
                q: "Can I switch between service levels?",
                a: "Absolutely! Many clients start with Product Sourcing and upgrade to Full Management for subsequent orders. We're flexible and will work with whatever makes sense for your business at each stage.",
              },
              {
                q: "What if I'm not satisfied with the suppliers you find?",
                a: "We offer a money-back guarantee on our Product Sourcing service. If we cannot find suitable suppliers that meet your requirements and budget, we'll refund your service fee. Your satisfaction is our priority.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl text-gray-900 mb-3">{item.q}</h3>
                <p className="text-gray-600 text-lg">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl mb-6">
            Ready to Discuss Your Project?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
            Get a detailed quote tailored to your specific sourcing needs
          </p>
          <Button
            size="lg"
            className="bg-white text-[#00A896] hover:bg-gray-100 text-lg px-8 py-6"
            onClick={() => onNavigate("contact")}
          >
            Request a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
