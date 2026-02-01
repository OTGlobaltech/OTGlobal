// components/pages/ServicesPage.jsx
"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  TrendingUp,
  Package,
  Truck,
  FileCheck,
  BarChart3,
  Users,
  CheckCircle2,
  Clock,
  Award,
  Zap,
  Database,
  LineChart,
  Layers,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function ServicesPage() {
  const videoRef = useRef(null);

  // Ensure video plays when component mounts
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Video autoplay prevented:", error);
        // Try to play again on user interaction
        const playVideo = () => {
          if (videoRef.current) {
            videoRef.current.play();
          }
        };
        document.addEventListener("click", playVideo, { once: true });
        document.addEventListener("touchstart", playVideo, { once: true });
      });
    }
  }, []);

  const mainServices = [
    {
      icon: Globe,
      title: "China Sourcing",
      description:
        "Access to verified manufacturers and suppliers across China with competitive pricing. We leverage our extensive network to find the best suppliers for your products.",
      features: [
        "Verified supplier network",
        "Competitive pricing negotiation",
        "Factory audits and inspections",
        "Product sourcing across industries",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control and inspection at every stage of production. We ensure your products meet international standards and your specifications.",
      features: [
        "Pre-production inspections",
        "In-process quality control",
        "Final inspection before shipment",
        "Quality certification support",
      ],
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description:
        "Reduce procurement costs by up to 40% through our China network. We help you find the best value without compromising on quality.",
      features: [
        "Price negotiation expertise",
        "Volume discount opportunities",
        "Supply chain cost analysis",
        "ROI optimization strategies",
      ],
    },
    {
      icon: Package,
      title: "Product Sourcing",
      description:
        "From raw materials to finished products, we source everything you need. Our team understands product requirements and finds the right suppliers.",
      features: [
        "Multi-category sourcing",
        "Custom product development",
        "Material sourcing",
        "OEM/ODM services",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Shipping",
      description:
        "End-to-end logistics management from factory to your door. We handle all shipping, customs, and delivery coordination.",
      features: [
        "Freight forwarding",
        "Customs clearance",
        "Warehouse management",
        "Last-mile delivery",
      ],
    },
    {
      icon: FileCheck,
      title: "Compliance & Certification",
      description:
        "Ensure all products meet international standards and regulations. We handle certifications and compliance requirements.",
      features: [
        "CE, FCC, FDA certifications",
        "Regulatory compliance",
        "Documentation management",
        "Import/export compliance",
      ],
    },
  ];

  const supplyChainServices = [
    {
      icon: BarChart3,
      title: "Supply Chain Dashboard",
      description: "Real-time visibility into your supply chain with comprehensive analytics and reporting.",
    },
    {
      icon: Users,
      title: "Dedicated Team & Contact",
      description: "Your dedicated account manager and support team available whenever you need assistance.",
    },
    {
      icon: CheckCircle2,
      title: "Supplier Scorecard",
      description: "Track and evaluate supplier performance with detailed metrics and analytics.",
    },
    {
      icon: Clock,
      title: "Demand & Supply Planning",
      description: "Optimize inventory levels and production schedules with advanced planning tools.",
    },
    {
      icon: Award,
      title: "SKU Data Hygiene Management",
      description: "Maintain clean, accurate product data across your entire catalog.",
    },
    {
      icon: Zap,
      title: "HTS Code Auditing",
      description: "Ensure accurate tariff classifications to avoid customs delays and penalties.",
    },
  ];

  const solutionsServices = [
    {
      icon: Globe,
      title: "Global Sourcing Services",
      description:
        "We offer alternative sources and access to specialized materials and products worldwide. With deep industry expertise, we can source the materials you need while offering the right mix of cost-effectiveness, quality, and dependable supply—always with compliance to safety and environmental regulations.",
      body: [
        "Dedicated sourcing specialists who share knowledge of the latest developments and technologies.",
        "Reach and stability of supply as a partner operating across key economic zones.",
        "Strong understanding of local regulatory challenges in the markets we serve.",
      ],
    },
    {
      icon: Truck,
      title: "Logistics Services",
      description:
        "Logistical services lie at the core of any supply chain organization. While we are not a pure logistics company, our deep understanding and long experience managing logistics for operations of varying scale allows us to design tailor-made strategies that directly target your pain points.",
      body: [
        "Support in identifying logistics partners and freight forwarders at the best price.",
        "Strategies that take into account current and emerging supply chain disruptions.",
        "Alignment between logistics decisions and your broader supply chain strategy.",
      ],
    },
    {
      icon: LineChart,
      title: "Sales Forecasting",
      description:
        "We manage sales forecasting through a structured monthly process, continuously refining forecasts based on historical data, statistical models, event analysis, dynamic regression, and expert insights.",
      body: [
        "Highlight key factors such as seasonality, trends, opportunities, and risks for each SKU.",
        "Incorporate promotions, business events, and launches directly into the forecast.",
        "Continuously monitor and improve forecast accuracy over time.",
      ],
    },
    {
      icon: Layers,
      title: "Inventory Planning",
      description:
        "For inventory planning, we use a robust, Excel-based system that calculates recommended order quantities for suppliers on a monthly basis.",
      body: [
        "Consider projected demand, current inventory, incoming shipments, lead times, MOQs, and container constraints.",
        "Design pricing and order strategies that balance order size and ordering frequency.",
        "Provide clear recommendations on product promotions, discontinuations, and FBA or DC replenishment plans.",
      ],
    },
    {
      icon: Package,
      title: "Sourcing Products from China for Amazon or Private Label",
      description:
        "Many clients have a strong product vision but struggle to identify and shortlist the right suppliers. This is where OT Global Group makes a difference.",
      body: [
        "Supplier research and validation for Amazon, ecommerce, and private-label brands.",
        "Custom product development, packaging, and logo/brand applications.",
        "Contract negotiations, favorable Incoterms (EXW, FOB, DDP), product sampling, and logistics strategy.",
        "A true one-window solution for all of your supply chain needs.",
      ],
    },
    {
      icon: Database,
      title: "Data Analytics & Reporting",
      description:
        "Gain access to an optimized supply chain tracking solution covering inventory, procurement, logistics, and financial performance.",
      body: [
        "Inventory tracking: monitor current, incoming, and ordered stock.",
        "Procurement tracker: view status of each PO and associated actions.",
        "Payables and logistics trackers for payments, outstanding amounts, and shipment statuses.",
        "COGS & landed cost visibility, plus dashboards for suppliers and freight partners.",
      ],
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

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
  };

  const cardVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
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
              Comprehensive Supply Chain Services
            </h1>
            <p className="text-xl text-teal-100">
              From sourcing to delivery, we manage every aspect of your China supply chain
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                See Our Supply Chain Solutions in Action
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch how we streamline global sourcing, logistics, and supply chain management
              </p>
            </div>
            <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=600&fit=crop"
                alt="Supply Chain Operations"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential services for efficient supply chain management
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div variants={cardVariants}>
                  <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#00A896]">
                    <CardHeader>
                      <motion.div
                        className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                        variants={iconVariants}
                      >
                        <service.icon className="text-[#00A896]" size={32} />
                      </motion.div>
                      <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-[#00A896] mt-1 flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Supply Chain Management Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Supply Chain Management Tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced tools and services to optimize your supply chain operations
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {supplyChainServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div variants={cardVariants}>
                  <Card className="h-full border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#00A896]">
                    <CardHeader>
                      <motion.div
                        className="bg-gradient-to-br from-[#00A896] to-[#008c7a] w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                        variants={iconVariants}
                      >
                        <service.icon className="text-white" size={32} />
                      </motion.div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Solutions Services Offering */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Solutions Services Offering
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A complete ecosystem of services that connects global sourcing, logistics, planning,
              data, and technology into one cohesive supply chain operation.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {solutionsServices.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover="hover"
                initial="rest"
                animate="rest"
              >
                <motion.div variants={cardVariants}>
                  <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-[#00A896]">
                    <CardHeader>
                      <motion.div
                        className="bg-gradient-to-br from-[#00A896]/10 to-[#008c7a]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                        variants={iconVariants}
                      >
                        <service.icon className="text-[#00A896]" size={26} />
                      </motion.div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-base text-gray-700">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.body.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="text-[#00A896] mt-1 flex-shrink-0" size={16} />
                            <span className="text-sm text-gray-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* One-stop shop strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-16 max-w-5xl mx-auto"
          >
            <motion.div
              className="bg-gradient-to-r from-[#00A896] to-[#008c7a] rounded-2xl px-8 py-10 text-white shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3
                className="text-2xl lg:text-3xl font-bold mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Your One-Stop Shop for All Supply Chain Operations
              </motion.h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm font-medium">
                {[
                  "Global Sourcing Services",
                  "Logistics Planning & Support",
                  "Demand & Production Planning",
                  "Data Analysis & Reporting",
                  "ERP Integration & Process Development",
                  "Supplier Management & Scorecards",
                ].map((item, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                    whileHover={{ x: 5, scale: 1.05 }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
              <motion.p
                className="mt-4 text-teal-50 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Get next-generation technology-enabled supply chain solutions tailored to your
                brand&apos;s growth ambitions.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach to supply chain management
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line animation */}
              <motion.div
                className="hidden md:block absolute top-10 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-[#00A896] to-[#008c7a]"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ originX: 0 }}
              />
              {[
                { step: "01", title: "Discovery", desc: "Understand your requirements" },
                { step: "02", title: "Sourcing", desc: "Find the right suppliers" },
                { step: "03", title: "Management", desc: "Oversee production & quality" },
                { step: "04", title: "Delivery", desc: "Ship to your destination" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center relative z-10"
                >
                  <motion.div
                    className="bg-gradient-to-br from-[#00A896] to-[#008c7a] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                    whileHover={{
                      rotate: 360,
                      boxShadow: "0 10px 30px rgba(0, 168, 150, 0.4)"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#00A896] to-[#008c7a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Optimize Your Supply Chain?
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Let's discuss how our services can help streamline your operations and reduce costs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-6">
                  Get Started
                </Button>
              </Link>
              <Link href="/plans">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-[#00A896] hover:bg-white/10 px-8 py-6"
                >
                  View Plans
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
