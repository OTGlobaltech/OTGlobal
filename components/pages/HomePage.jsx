"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Globe, Shield, TrendingUp, Users, Award, Clock, Package, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

export function HomePage() {
  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1548273989-e90f53ea0501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMGZhY3RvcnklMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc2MTY0NDQzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Advanced Manufacturing",
    },
    {
      url: "https://images.unsplash.com/photo-1758873263563-5ba4aa330799?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwY29udHJvbCUyMGluc3BlY3Rpb258ZW58MXx8fHwxNzYxNTU5NTUzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Quality Control",
    },
    {
      url: "https://images.unsplash.com/photo-1739204618173-3e89def7140f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGluYSUyMHdhcmVob3VzZSUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjE2NDQ0MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Logistics Solutions",
    },
    {
      url: "https://images.unsplash.com/photo-1585313736086-9a10c24f30dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwc291cmNpbmclMjBtYXRlcmlhbHN8ZW58MXx8fHwxNzYxNjQ0NDMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Product Sourcing",
    },
    {
      url: "https://images.unsplash.com/photo-1729843420196-1ff32bb39db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwYXNzZW1ibHklMjBsaW5lfGVufDF8fHx8MTc2MTY0NDQzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Assembly Lines",
    },
    {
      url: "https://images.unsplash.com/photo-1594571603435-0b192ab6dafa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGV4cG9ydCUyMGNvbnRhaW5lcnxlbnwxfHx8fDE3NjE2NDQ0MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "Global Shipping",
    },
  ];

  const services = [
    {
      icon: Globe,
      title: "China Sourcing",
      description: "Access to verified manufacturers and suppliers across China with competitive pricing",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control and inspection at every stage of production",
    },
    {
      icon: TrendingUp,
      title: "Cost Optimization",
      description: "Reduce procurement costs by up to 40% through our China network",
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "On-ground team in China managing your orders from start to finish",
    },
    {
      icon: Award,
      title: "Compliance & Certification",
      description: "Ensure all products meet international standards and regulations",
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Streamlined processes for quicker production and delivery times",
    },
  ];

  const stats = [
    { value: "500+", label: "Partner Factories" },
    { value: "50+", label: "Countries Served" },
    { value: "10K+", label: "Products Sourced" },
    { value: "98%", label: "Client Satisfaction" },
  ];

  const whyChoose = [
    {
      title: "Local Expertise",
      description: "Our team in China understands local business culture, regulations, and negotiation practices",
    },
    {
      title: "End-to-End Service",
      description: "From product sourcing to shipping - we handle everything so you can focus on growing your business",
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees. Clear, competitive pricing with detailed breakdowns for every project",
    },
    {
      title: "Risk Mitigation",
      description: "We conduct factory audits, product inspections, and ensure compliance to minimize your risk",
    },
  ];

  const overviewPoints = [
    {
      icon: Target,
      title: "Strategic Sourcing",
      description: "We connect you with the right manufacturers in China based on your specific product requirements, quality standards, and budget constraints.",
    },
    {
      icon: Package,
      title: "Full Supply Chain Management",
      description: "From initial sourcing to final delivery, we manage every step of your supply chain including production oversight, quality control, and logistics.",
    },
    {
      icon: Zap,
      title: "Fast & Efficient Process",
      description: "Our streamlined processes and established relationships enable faster turnaround times without compromising on quality or compliance.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
      <section className="relative bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnpNNiAzNGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTM2IDU0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl xl:text-7xl mb-6 font-bold">
              Your Gateway to China Manufacturing Excellence
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 mb-10 max-w-3xl mx-auto">
              OT Global connects businesses worldwide with premium Chinese manufacturers. 
              Reduce costs, ensure quality, and scale your supply chain with confidence.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#00A896] hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  Request a Quote <ArrowRight className="ml-2" size={24} />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
                >
                  Our Services
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="text-5xl text-[#00A896] mb-2 font-bold">{stat.value}</div>
                <div className="text-gray-600 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4 font-bold">
              How OT Global Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We simplify the complexity of China sourcing and manufacturing with our proven approach
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {overviewPoints.map((point, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-xl hover:border-[#00A896] transition-all duration-300 group">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-[#00A896] to-[#008c7a] w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <point.icon className="text-white" size={36} />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-4 font-semibold">{point.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4 font-bold">
              Our Capabilities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From sourcing to delivery, we manage every aspect of your China outsourcing needs
            </p>
          </motion.div>
          <div className="max-w-7xl mx-auto">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="relative h-80 rounded-xl overflow-hidden shadow-lg group">
                      <ImageWithFallback
                        src={image.url}
                        alt={image.title}
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        fill
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white text-2xl font-semibold">{image.title}</h3>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4 font-bold">
              Comprehensive China Outsourcing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to successfully source and manufacture products in China
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <CardContent className="p-8">
                    <div className="bg-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#00A896] transition-colors duration-300">
                      <service.icon className="text-[#00A896] group-hover:text-white transition-colors duration-300" size={32} />
                    </div>
                    <h3 className="text-2xl text-gray-900 mb-3 font-semibold">{service.title}</h3>
                    <p className="text-gray-600 text-lg">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              Why Partner with OT Global?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We bridge the gap between your business and China's manufacturing powerhouse
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {whyChoose.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <CheckCircle2 className="text-[#00A896] group-hover:scale-110 transition-transform duration-300" size={28} />
                </div>
                <div>
                  <h3 className="text-2xl mb-2 font-semibold">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-5xl mb-6 font-bold">
              Ready to Start Your China Sourcing Journey?
            </h2>
            <p className="text-xl text-teal-100 mb-10 max-w-2xl mx-auto">
              Join hundreds of businesses that trust OT Global for their manufacturing and sourcing needs
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-white text-[#00A896] hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg px-8 py-6"
              >
                Get Started Today <ArrowRight className="ml-2" size={24} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
