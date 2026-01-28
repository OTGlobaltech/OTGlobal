"use client";

import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function AboutPage() {
  const stats = [
    { value: "100+", label: "Brands Managed", icon: Award },
    { value: "15,000+", label: "SKUs Managed", icon: Target },
    { value: "$100M+", label: "Total Spend Managed", icon: TrendingUp },
    { value: "95%+", label: "Client Satisfaction", icon: Users },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expertise",
      description: "Proven track record in managing large-scale procurement and logistics operations.",
    },
    {
      icon: Zap,
      title: "Customization",
      description: "Tailored solutions to meet the unique needs of each client.",
    },
    {
      icon: TrendingUp,
      title: "Technology-Driven",
      description: "Utilization of advanced tools like Anvyl for data-driven decision-making.",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "A committed team providing personalized and proactive support.",
    },
    {
      icon: Target,
      title: "Value-Driven",
      description: "Focus on optimizing costs and enhancing efficiency to drive business growth.",
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
              About OT Global Group
            </h1>
            <p className="text-xl text-teal-100">
              Empowering businesses with seamless and efficient supply chain solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-gray-200 bg-gradient-to-br from-teal-50 to-white">
                <CardContent className="p-8">
                  <div className="bg-[#00A896] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Target className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Vision</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Pursuing Excellence in Supply Chain Operations
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-gray-200 bg-gradient-to-br from-teal-50 to-white">
                <CardContent className="p-8">
                  <div className="bg-[#00A896] w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="text-white" size={32} />
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Mission</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Foster Technical Innovation, Adaption & Deployment
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Company */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center text-gray-900">
              About Our Company
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                At OT Global, we provide end-to-end supply chain management, seamlessly integrating global sourcing, procurement, logistics, and production planning, warehouse management, ERP & Data Analytics for your small and medium enterprises especially Amazon and e-commerce stores. With expertise in robust supply chain management, we optimize every aspect so you can focus on growing your brand. With over a decade of global supply chain expertise, OT Global Group brings world-class procurement and logistics solutions to businesses worldwide. Our leadership team has served in senior roles for renowned U.S. retail brands, including Monolith Brands Group and Thrasio, overseeing procurement operations worth hundreds of millions of dollars annually.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Key Metrics Overview
            </h2>
            <p className="text-xl text-gray-600">
              Our track record speaks for itself
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="bg-gradient-to-br from-[#00A896] to-[#008c7a] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-white" size={32} />
                </div>
                <div className="text-4xl lg:text-5xl text-[#00A896] mb-2 font-bold">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-center text-gray-900">
              Our Journey
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed">
                Since our inception, we have dedicated ourselves to mastering the complexities of supply chain management. Our commitment to excellence has allowed us to partner with Amazon Aggregators, we manage over 100 brands, 15,000 SKUs, and oversee more than $100 million in spend. This experience has honed our skills and deepened our understanding of the unique challenges and opportunities within the e-commerce landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-12 text-center text-gray-900">
              Meet Our CEO
            </h2>
            <Card className="border-gray-200 shadow-xl">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="relative w-48 h-48 rounded-full overflow-hidden mx-auto md:mx-0">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                        alt="John Doe"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">Bilal Asghar</h3>
                    <p className="text-[#00A896] font-semibold mb-6">CEO, OT Global Group</p>
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        OT Global Group is platform for young entrepreneurs to grow and shine in the field of supply chain. We strongly believe that real business success is not just about profits measured in numbers, but it is also how these numbers are achieved and how we can improve the customers supply chain operations.
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Our strategy reflects our commitment to sustainable business practices by balancing growth and productivity. With an excellent track record, I can confidently claim that OT Global Group will continue to set new standards in fulfilling supply chain needs of our customers. So, you can build your business knowing that your operations have a solid footing.
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Partner with us to enhance your supply chain efficiency and achieve sustainable growth. Let us handle the logistics, so you can focus on growing your brand.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl mb-4 font-bold">
              Why Choose Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              What sets us apart in the supply chain management industry
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="bg-[#00A896] w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="text-white" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Clientele Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-8 text-gray-900">
              Our Clientele
            </h2>
            <Card className="border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <p className="text-xl text-gray-700 mb-6">
                  We are proud to serve <span className="font-bold text-[#00A896]">Thrasio</span>, a leading e-commerce aggregator, managing over 100 brands and 1,500 SKUs with a total spend of over $80 million.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00A896] mb-2">100+</div>
                    <div className="text-gray-600">Brands</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00A896] mb-2">1,500+</div>
                    <div className="text-gray-600">SKUs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-[#00A896] mb-2">$80M+</div>
                    <div className="text-gray-600">Total Spend</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
