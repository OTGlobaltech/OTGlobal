"use client";

import { motion } from "framer-motion";
import { Truck, Ship, Plane, Route, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export const metadata = {
  title: "Transportation | OT Global",
  description:
    "End-to-end transportation planning and execution across sea, air, and land for global supply chains.",
};

export default function TransportationPage() {
  const focusAreas = [
    "Mode selection and routing strategies (sea, air, rail, truck)",
    "Balancing cost, speed, and reliability for each lane and shipment type",
    "Coordination between factories, freight forwarders, and distribution centers",
    "Visibility into in-transit inventory and expected arrival times",
  ];

  const modes = [
    {
      icon: Ship,
      title: "Ocean Freight Optimization",
      description:
        "Plan FCL/LCL strategies, sailing schedules, and consolidation to reduce cost while protecting lead times.",
    },
    {
      icon: Plane,
      title: "Air & Expedited Options",
      description:
        "Use air and express selectively for launches, promotions, and recovery plans when sea freight is delayed.",
    },
    {
      icon: Truck,
      title: "Inland & Drayage Coordination",
      description:
        "Align port operations, drayage, and long-haul trucking to avoid demurrage, detention, and bottlenecks.",
    },
    {
      icon: Route,
      title: "Lane & Carrier Strategy",
      description:
        "Design lane-by-lane strategies and partner mix to diversify risk and maintain service under disruption.",
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
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Transportation</h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Structured transportation planning that connects your factories, ports, and
              distribution network with the right mix of modes and partners.
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
                Reduce Cost Without Losing Control
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Transportation is where supply chain decisions turn into real-world cost and
                service impact. OT Global helps you design pragmatic transportation strategies that
                respect both your budget and your customer commitments.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We don&apos;t replace your freight partners—we make them more effective by giving you
                the data, structure, and planning discipline needed to use the right mode and
                carrier at the right time.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Focus Areas</h3>
              <ul className="space-y-2 mb-8">
                {focusAreas.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#00A896] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white px-6">
                    Review Your Lanes
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-[#00A896] text-[#00A896] px-6">
                    Explore Services
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
              {modes.map((mode, idx) => (
                <Card key={idx} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-start gap-3 pb-3">
                    <div className="bg-teal-100 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                      <mode.icon className="text-[#00A896]" size={22} />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg mb-1">{mode.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-700">
                        {mode.description}
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

