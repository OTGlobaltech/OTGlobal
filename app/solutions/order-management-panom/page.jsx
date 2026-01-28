"use client";

import { motion } from "framer-motion";
import { ClipboardList, CheckCircle2, BarChart3, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function OrderManagementPanomPage() {
  const benefits = [
    "Centralized visibility of all purchase orders across suppliers and regions",
    "Proactive exception management for delays, shortages, and quality issues",
    "Real-time collaboration between sourcing, logistics, finance, and operations teams",
    "Standardized workflows to reduce manual follow-ups and errors",
  ];

  const features = [
    {
      icon: ClipboardList,
      title: "End-to-End PO Tracking",
      description:
        "Monitor every purchase order from creation to delivery with status updates, milestones, and alerts.",
    },
    {
      icon: BarChart3,
      title: "Performance & KPI Dashboards",
      description:
        "Track supplier on-time delivery, lead times, cancellations, and other KPIs in one unified view.",
    },
    {
      icon: Truck,
      title: "Logistics & Production Alignment",
      description:
        "Connect order management with production and freight timelines to avoid stockouts and overstock.",
    },
    {
      icon: CheckCircle2,
      title: "Compliance & Audit Trail",
      description:
        "Maintain a full digital trail of approvals, changes, and documents for audits and compliance.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-teal-100 mb-4">
              Solutions
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Order Management – Panom
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              A centralized, data-driven order management layer that gives you real-time visibility
              and control across suppliers, factories, and logistics partners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[2fr,1.3fr] items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Built for Modern, Omnichannel Supply Chains
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                OT Global&apos;s Panom order management approach is designed for fast-growing brands,
                Amazon and ecommerce sellers, and distributors who need reliable execution at scale.
                We connect your sourcing, production, and logistics data to ensure every PO is
                aligned with demand and cash-flow priorities.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our team brings hands-on experience managing hundreds of millions of dollars in
                annual procurement. We plug into your existing tech stack and processes, then
                enhance them with clear workflows, reporting, and exception handling.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Key Benefits</h3>
              <ul className="space-y-2 mb-8">
                {benefits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#00A896] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white px-6">
                    Talk to Our Team
                  </Button>
                </Link>
                <Link href="/plans">
                  <Button variant="outline" className="border-[#00A896] text-[#00A896] px-6">
                    View Plans
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              {features.map((feature, idx) => (
                <Card key={idx} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-start gap-3 pb-3">
                    <div className="bg-teal-100 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="text-[#00A896]" size={22} />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg mb-1">{feature.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-700">
                        {feature.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

