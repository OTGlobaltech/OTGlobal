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
  ClipboardList,
  UserCheck,
  Settings,
  Rocket,
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

  // Consolidated services based on user request
  const services = [
    {
      icon: TrendingUp,
      title: "Planning & Forecasting",
      description: "Data-driven insights to optimize your inventory and production.",
      features: [
        "Demand forecasting & trend analysis",
        "Supply planning & replenishment",
        "Inventory optimization",
      ],
    },
    {
      icon: Shield,
      title: "Procurement & Vendor Management",
      description: "Streamlined sourcing and supplier relationship management.",
      features: [
        "Purchase order creation & tracking",
        "Supplier coordination & follow-ups",
        "Cost, MOQ, and lead-time tracking",
      ],
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Efficient movement of goods from factory to destination.",
      features: [
        "Freight coordination (air, sea, ground)",
        "Shipment tracking & exception management",
        "Freight invoice validation",
      ],
    },
    {
      icon: Package,
      title: "Warehouse & Operations Support",
      description: "Ensuring smooth operations within your warehousing facilities.",
      features: [
        "Inbound & outbound coordination",
        "Inventory reconciliation",
        "SOP execution & process tracking",
      ],
    },
    {
      icon: BarChart3,
      title: "Reporting & Systems",
      description: "Comprehensive reporting to keep you informed and in control.",
      features: [
        "Daily / weekly / monthly reports",
        "KPI dashboards",
        "ERP, WMS, Amazon Seller Central updates",
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
              End-to-End Supply Chain Services
            </h1>
            <p className="text-xl text-teal-100">
              OT Global supports the full supply chain lifecycle through dedicated Virtual Assistants.
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
            {services.map((service, index) => (
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

      {/* Process Section - Merged from How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-gray-900">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A simple, streamlined process to get your supply chain operations running smoothly.
            </p>
          </motion.div>

          <div className="space-y-16 relative">
            {/* Connecting line (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-100 transform -translate-x-1/2 z-0"></div>

            {[
              {
                icon: ClipboardList,
                title: "Understand Your Needs",
                description: "We review your supply chain setup, tools, SKUs, and workload.",
              },
              {
                icon: UserCheck,
                title: "Assign a Dedicated VA",
                description: "We match you with a supply chain VA experienced in your business model.",
              },
              {
                icon: Settings,
                title: "Onboard & Integrate",
                description: "Your VA is onboarded into your systems and aligned with your SOPs and KPIs.",
              },
              {
                icon: Rocket,
                title: "Execute & Scale",
                description: "Your VA manages daily execution while you retain full visibility and control.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 relative z-10 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                <div className="flex-1 text-center lg:text-left">
                  <div className={`lg:max-w-md ${index % 2 === 0 ? "ml-auto lg:text-right" : "mr-auto"}`}>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{index + 1}. {step.title}</h3>
                    <p className="text-gray-600 text-lg">{step.description}</p>
                  </div>
                </div>

                <div className="w-16 h-16 rounded-full bg-[#00A896] text-white flex items-center justify-center shadow-lg border-4 border-white flex-shrink-0 z-10 relative">
                  <step.icon size={32} />
                </div>

                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section - Merged from How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Engagement Models</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                "Part-time (20 hrs/week)",
                "Full-time (40 hrs/week)",
                "Multi-VA support",
              ].map((model, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#00A896] transition-colors">
                  <h3 className="font-semibold text-lg text-gray-800">{model}</h3>
                </div>
              ))}
            </div>
            <p className="text-xl font-medium text-[#00A896] mb-8">No long-term lock-in.</p>
          </motion.div>
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
