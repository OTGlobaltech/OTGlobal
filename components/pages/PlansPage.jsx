"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export function PlansPage() {
  const plans = [
    {
      name: "Basic",
      tagline: "Essential services for efficient supply chain management",
      features: [
        "RFQ Data Validation",
        "PO Placement",
        "PO Management",
        "Inbound logistics",
        "Standard KPI Reporting",
        "Data Powered by Anvyl",
        "Supply Chain Dashboard",
        "Dedicated Team & Contact",
        "Supplier Scorecard",
      ],
      popular: false,
    },
    {
      name: "Plus",
      tagline: "Advanced supply chain tools and optimization services",
      features: [
        "All Sourcing Basic Services",
        "Demand Planning / Supply Planning",
        "SKU Data Hygiene Management",
        "HTS Code Auditing",
        "Freight Forwarding Invoice Auditing",
      ],
      popular: true,
    },
    {
      name: "Pro",
      tagline: "Comprehensive supply chain management solutions for achieving growth objectives",
      features: [
        "All Sourcing Plus Services",
        "Regulatory Compliance",
        "Sourcing / Counter Sourcing",
        "AGL Inbound Logistics Management",
        "NetSuite/ERP management",
        "Weekly Supply Chain Time",
      ],
      popular: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

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
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choose Your Plan
            </h1>
            <p className="text-xl text-teal-100">
              Select the perfect supply chain management solution for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {plans.map((plan, index) => (
              <motion.div key={plan.name} variants={itemVariants}>
                <Card
                  className={`h-full relative ${
                    plan.popular
                      ? "border-2 border-[#00A896] shadow-xl scale-105"
                      : "border-gray-200"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#00A896] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-3xl font-bold mb-2">{plan.name}</CardTitle>
                    <CardDescription className="text-base">{plan.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-4 mb-8">
                      {plan.name === "Basic" && (
                        <>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">RFQ Data Validation</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">PO Placement</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">PO Management</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Inbound logistics</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Standard KPI Reporting</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Data Powered by Anvyl</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Supply Chain Dashboard</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Dedicated Team & Contact</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Supplier Scorecard</span>
                          </li>
                        </>
                      )}
                      {plan.name === "Plus" && (
                        <>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700 font-semibold">All Sourcing Basic Services</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Demand Planning / Supply Planning</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">SKU Data Hygiene Management</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">HTS Code Auditing</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Freight Forwarding Invoice Auditing</span>
                          </li>
                        </>
                      )}
                      {plan.name === "Pro" && (
                        <>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700 font-semibold">All Sourcing Plus Services</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Regulatory Compliance</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Sourcing / Counter Sourcing</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">AGL Inbound Logistics Management</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">NetSuite/ERP management</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <Check className="text-[#00A896] mt-1 flex-shrink-0" size={20} />
                            <span className="text-gray-700">Weekly Supply Chain Time</span>
                          </li>
                        </>
                      )}
                    </ul>
                    <Link href="/contact">
                      <Button
                        className={`w-full ${
                          plan.popular
                            ? "bg-[#00A896] hover:bg-[#008c7a] text-white"
                            : "bg-gray-900 hover:bg-gray-800 text-white"
                        }`}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us to discuss a tailored plan that fits your specific supply chain needs
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-[#00A896] hover:bg-[#008c7a] text-white px-8 py-6">
                Contact Sales
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
