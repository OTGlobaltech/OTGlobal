"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Users, TrendingUp, Heart, Zap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CareerPage() {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities for professional development and advancement",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options",
    },
    {
      icon: Award,
      title: "Competitive Salary",
      description: "Attractive compensation packages with performance bonuses",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with talented professionals in a collaborative environment",
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Be part of cutting-edge supply chain solutions",
    },
  ];

  const openPositions = [
    {
      title: "Supply Chain Manager",
      location: "Shanghai, China",
      type: "Full-time",
      department: "Operations",
      description: "Lead supply chain operations and manage supplier relationships in China.",
    },
    {
      title: "Quality Assurance Specialist",
      location: "Guangzhou, China",
      type: "Full-time",
      department: "Quality Control",
      description: "Ensure product quality through inspections and quality control processes.",
    },
    {
      title: "Business Development Manager",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Sales",
      description: "Build relationships with clients and expand our global reach.",
    },
    {
      title: "Logistics Coordinator",
      location: "Shenzhen, China",
      type: "Full-time",
      department: "Logistics",
      description: "Coordinate shipping, customs, and delivery operations.",
    },
    {
      title: "Client Success Manager",
      location: "Remote",
      type: "Full-time",
      department: "Customer Success",
      description: "Ensure client satisfaction and manage ongoing relationships.",
    },
    {
      title: "Data Analyst",
      location: "Remote / Hybrid",
      type: "Full-time",
      department: "Analytics",
      description: "Analyze supply chain data and provide insights for optimization.",
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
              Join Our Team
            </h1>
            <p className="text-xl text-teal-100">
              Build your career with a leading supply chain management company
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're building the future of supply chain management
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <benefit.icon className="text-[#00A896]" size={32} />
                    </div>
                    <CardTitle className="text-xl mb-2">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Open Positions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore opportunities to join our growing team
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
          >
            {openPositions.map((position, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#00A896]">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{position.title}</CardTitle>
                      <Briefcase className="text-[#00A896] flex-shrink-0" size={24} />
                    </div>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <MapPin size={16} />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={16} />
                        {position.type}
                      </span>
                    </div>
                    <div className="mt-2">
                      <span className="inline-block bg-teal-100 text-[#00A896] px-3 py-1 rounded-full text-sm font-medium">
                        {position.department}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <Link href="/contact">
                      <Button className="w-full bg-[#00A896] hover:bg-[#008c7a] text-white">
                        Apply Now
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
      <section className="py-20 bg-gradient-to-r from-[#00A896] to-[#008c7a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Don't See a Role That Fits?
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Link href="/contact">
              <Button size="lg" className="bg-white text-[#00A896] hover:bg-gray-100 px-8 py-6">
                Send Your Resume
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
