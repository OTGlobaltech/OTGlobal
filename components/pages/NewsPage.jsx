"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight, TrendingUp, Globe, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export function NewsPage() {
  const newsItems = [
    {
      title: "E-commerce Supply Chain Trends for 2024",
      excerpt:
        "Discover the latest trends shaping e-commerce supply chains, from AI-powered logistics to sustainable sourcing practices.",
      date: "January 15, 2024",
      category: "Industry News",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      icon: TrendingUp,
    },
    {
      title: "How Amazon Aggregators Are Transforming E-commerce",
      excerpt:
        "An in-depth look at how Amazon aggregators are reshaping the e-commerce landscape and what it means for sellers.",
      date: "January 10, 2024",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
      icon: Globe,
    },
    {
      title: "Optimizing Supply Chain Costs: Best Practices",
      excerpt:
        "Learn proven strategies to reduce supply chain costs while maintaining quality and efficiency in your operations.",
      date: "January 5, 2024",
      category: "Best Practices",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      icon: Package,
    },
    {
      title: "The Future of China Sourcing in 2024",
      excerpt:
        "Exploring how China sourcing is evolving and what businesses need to know to stay competitive in the global market.",
      date: "December 28, 2023",
      category: "Sourcing",
      image: "https://images.unsplash.com/photo-1548273989-e90f53ea0501?w=800&h=600&fit=crop",
      icon: TrendingUp,
    },
    {
      title: "Quality Control: Ensuring Product Excellence",
      excerpt:
        "Best practices for implementing robust quality control measures in your supply chain to protect your brand reputation.",
      date: "December 20, 2023",
      category: "Quality",
      image: "https://images.unsplash.com/photo-1758873263563-5ba4aa330799?w=800&h=600&fit=crop",
      icon: Package,
    },
    {
      title: "AGL and AWD: Navigating Amazon Logistics",
      excerpt:
        "A comprehensive guide to Amazon Global Logistics (AGL) and Amazon Warehousing and Distribution (AWD) for sellers.",
      date: "December 15, 2023",
      category: "Amazon",
      image: "https://images.unsplash.com/photo-1594571603435-0b192ab6dafa?w=800&h=600&fit=crop",
      icon: Globe,
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
              News & Insights
            </h1>
            <p className="text-xl text-teal-100">
              Stay updated with the latest trends, insights, and best practices in supply chain management
            </p>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsItems.map((item, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#00A896] text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Calendar size={16} />
                      {item.date}
                    </div>
                    <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-base">{item.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      variant="link"
                      className="text-[#00A896] hover:text-[#008c7a] p-0"
                    >
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Card className="border-gray-200 bg-gradient-to-br from-teal-50 to-white shadow-lg">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Stay Updated
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  Subscribe to our newsletter for the latest insights and updates on supply chain management
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1"
                  />
                  <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
