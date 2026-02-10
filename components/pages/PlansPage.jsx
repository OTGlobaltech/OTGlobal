"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

export function PlansPage() {


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
              Simple & Transparent Pricing
            </h1>
            <p className="text-xl text-teal-100">
              Straightforward pricing for complete supply chain peace of mind
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
            className="flex justify-center max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="w-full max-w-2xl">
              <Card className="h-full relative border-2 border-[#00A896] shadow-xl">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00A896] text-white px-6 py-1 rounded-full text-base font-semibold">
                    Simple & Transparent
                  </span>
                </div>
                <CardHeader className="text-center pb-8 mt-4">
                  <CardTitle className="text-4xl font-bold mb-4">Cost-Effective Supply Chain Support</CardTitle>
                  <CardDescription className="text-xl">
                    Compared to in-house hiring, OT Global delivers significant cost savings with faster deployment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8 max-w-md mx-auto">
                    <li className="flex items-center gap-3">
                      <div className="bg-teal-100 p-1 rounded-full">
                        <Check className="text-[#00A896]" size={20} />
                      </div>
                      <span className="text-gray-700 text-lg">Hourly rates under USD 20</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-teal-100 p-1 rounded-full">
                        <Check className="text-[#00A896]" size={20} />
                      </div>
                      <span className="text-gray-700 text-lg">No recruitment fees</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-teal-100 p-1 rounded-full">
                        <Check className="text-[#00A896]" size={20} />
                      </div>
                      <span className="text-gray-700 text-lg">No benefits or employment overhead</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="bg-teal-100 p-1 rounded-full">
                        <Check className="text-[#00A896]" size={20} />
                      </div>
                      <span className="text-gray-700 text-lg">Monthly billing</span>
                    </li>
                  </ul>
                  <div className="text-center">
                    <Link href="/contact">
                      <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white text-lg px-8 py-6 h-auto w-full sm:w-auto">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Tiered Plans Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">Flexible Engagement Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Choose the level of support that fits your business needs</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {[
              {
                name: "Part-Time",
                hours: "20 hours/week",
                idealFor: "Emerging brands with growing needs",
                features: ["Dedicated VA Support", "Email & Slack Communication", "Weekly Reporting", "Standard SOP Execution"],
                popular: false
              },
              {
                name: "Full-Time",
                hours: "40 hours/week",
                idealFor: "Scaling brands needing daily execution",
                features: ["Dedicated Full-Time VA", "Real-time Communication", "Daily & Weekly Reporting", "Proactive Process Improvement", "Priority Support"],
                popular: true
              },
              {
                name: "Multi-VA Team",
                hours: "Custom",
                idealFor: "Enterprise & Aggregators",
                features: ["Team Lead + VAs", "Comprehensive Supply Chain Management", "Custom KPI Dashboards", "Strategic Planning Support", "24/7 Coverage Options"],
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex"
              >
                <Card className={`flex flex-col w-full hover:shadow-xl transition-shadow duration-300 ${plan.popular ? 'border-2 border-[#00A896] relative' : 'border-gray-200'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-[#00A896] text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pb-8">
                    <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                    <div className="text-[#00A896] font-bold text-xl mb-2">{plan.hours}</div>
                    <CardDescription>{plan.idealFor}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow flex flex-col">
                    <ul className="space-y-4 mb-8 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="text-[#00A896] mt-1 flex-shrink-0" size={18} />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact" className="mt-auto">
                      <Button className={`w-full ${plan.popular ? 'bg-[#00A896] hover:bg-[#008c7a]' : 'bg-gray-800 hover:bg-gray-900'} text-white`}>
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
    </div >
  );
}
