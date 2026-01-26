"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe, Shield, TrendingUp, Users, Award, Clock, Package, Target, Zap } from "lucide-react";
import Image from "next/image";
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
    { value: "100+", label: "Brands Managed" },
    { value: "15,000+", label: "SKUs Managed" },
    { value: "$100M+", label: "Total Spend Managed" },
    { value: "95%+", label: "Client Satisfaction" },
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

  // VIDEO CONFIGURATION
  // Option 1: Use local video (RECOMMENDED - Best performance)
  // Place your video file in: public/videos/
  // In Next.js, public folder files are served from root, so use: "/videos/filename.mp4"
  const videoSource = "/videos/Supply-Chain-Concept-I-Explainer.mp4"; // Local video path
  
  // Option 2: Use YouTube video (Alternative)
  // For YouTube, you'll need to extract the video ID and use YouTube embed
  // Example: https://www.youtube.com/watch?v=VIDEO_ID
  // We'll use iframe embed for YouTube (see below)
  const useYouTube = false; // Set to true to use YouTube
  const youtubeVideoId = ""; // Your YouTube video ID (e.g., "dQw4w9WgXcQ")

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Video Background - Behind everything */}
        <div className="absolute inset-0" style={{ zIndex: 0 }}>
          {useYouTube && youtubeVideoId ? (
            // YouTube Embed Option
            <div className="absolute inset-0 w-full h-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&loop=1&playlist=${youtubeVideoId}&mute=1&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '177.77777778vh',
                  height: '56.25vw',
                  minWidth: '100%',
                  minHeight: '100%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </div>
          ) : (
            // Local Video Option (Recommended)
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ 
                objectFit: 'cover',
                width: '100%',
                height: '100%',
                position: 'absolute',
                top: 0,
                left: 0,
                zIndex: 1,
              }}
              onLoadedData={(e) => {
                // Force play when video data is loaded
                e.target.play().catch(() => {
                  // Autoplay was prevented, will be handled by useEffect
                });
              }}
              onError={(e) => {
                console.error("Video loading error:", e);
                console.error("Video source:", videoSource);
              }}
              onCanPlay={() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(() => {
                    console.log("Video play prevented, will retry on user interaction");
                  });
                }
              }}
            >
              <source src={videoSource} type="video/mp4" />
              {/* Fallback video options if local video doesn't exist */}
              <source
                src="https://videos.pexels.com/video-files/3045163/3045163-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
              <source
                src="https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_30fps.mp4"
                type="video/mp4"
              />
            </video>
          )}
          
          {/* Fallback gradient background if video doesn't load - Behind video */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00A896] to-[#008c7a]" style={{ zIndex: 0 }}></div>
          
          {/* Very subtle dark overlay only for text readability - minimal opacity */}
          <div className="absolute inset-0 bg-black/20" style={{ zIndex: 2 }}></div>
        </div>
        
        {/* Content - Above video with higher z-index */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 font-bold leading-tight">
              <span className="block mb-2 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">Your Gateway to</span>
              <span className="block bg-gradient-to-r from-white via-teal-50 to-white bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                Manufacturing Excellence
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-10 max-w-3xl mx-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] font-medium leading-relaxed">
              OT Global connects businesses worldwide with premium Chinese manufacturers. 
              Reduce costs, ensure quality, and scale your supply chain with confidence.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            >
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-white text-[#00A896] hover:bg-gray-50 hover:scale-110 hover:shadow-2xl transition-all duration-300 text-lg font-semibold px-8 py-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.3)] border-0"
                >
                  Request a Quote <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/90 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white hover:scale-110 hover:shadow-2xl transition-all duration-300 text-lg font-semibold px-8 py-6 rounded-lg shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
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
          <div className="max-w-7xl mx-auto relative">
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
              <CarouselPrevious className="left-0 md:left-4 h-14 w-14 border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-[#00A896] shadow-lg z-10 [&>svg]:h-6 [&>svg]:w-6" />
              <CarouselContent className="-ml-4 md:ml-0">
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 md:basis-1/2 lg:basis-1/3">
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
              <CarouselNext className="right-0 md:right-4 h-14 w-14 border-2 border-gray-300 bg-white hover:bg-gray-50 hover:border-[#00A896] shadow-lg z-10 [&>svg]:h-6 [&>svg]:w-6" />
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
            <h2 className="text-3xl lg:text-5xl text-gray-600 mb-4 font-bold">
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

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl mb-4 font-bold text-gray-900">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by businesses worldwide for reliable supply chain solutions
            </p>
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
                name: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                content: "OT Global transformed our supply chain operations. Their expertise in China sourcing helped us reduce costs by 35% while maintaining quality standards.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
              },
              {
                name: "Michael Chen",
                role: "Operations Director, RetailPlus",
                content: "The team's attention to detail and proactive communication made all the difference. We've been working with them for 3 years and couldn't be happier.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
              },
              {
                name: "Emily Rodriguez",
                role: "Founder, EcoProducts Co.",
                content: "From sourcing to delivery, OT Global handles everything seamlessly. Their dedicated support team is always available when we need them.",
                rating: 5,
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
              },
            ].map((testimonial, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full border-gray-200 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl mb-4 font-bold text-gray-900">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your supply chain success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {[
              {
                name: "David Wang",
                role: "CEO & Founder",
                description: "20+ years in China sourcing and supply chain management",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
              },
              {
                name: "Lisa Zhang",
                role: "Head of Operations",
                description: "Expert in quality control and supplier management",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
              },
              {
                name: "James Liu",
                role: "Logistics Director",
                description: "Specialized in international shipping and customs",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
              },
              {
                name: "Maria Garcia",
                role: "Client Success Manager",
                description: "Dedicated to ensuring client satisfaction and growth",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
              },
            ].map((member, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6 text-center">
                    <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-1 text-gray-900">{member.name}</h3>
                    <p className="text-[#00A896] font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <Link href="/careers">
              <Button
                variant="outline"
                className="border-[#00A896] text-[#00A896] hover:bg-[#00A896] hover:text-white"
              >
                Join Our Team
              </Button>
            </Link>
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
