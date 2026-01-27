"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@otglobal.tech",
      link: "mailto:info@otglobal.tech",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "(+92) 333 5007115",
      link: "tel:+923335007115",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "United States",
      link: null,
    },
  ];

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
              Get In Touch
            </h1>
            <p className="text-xl text-teal-100">
              Ready to optimize your supply chain? Let's discuss how we can help your business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Send Us a Message</h2>
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                      <p className="text-green-800">
                        Thank you! Your message has been sent. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your supply chain needs..."
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#00A896] hover:bg-[#008c7a] text-white"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-gray-200 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="text-[#00A896]" size={24} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-gray-600 hover:text-[#00A896] transition-colors"
                            >
                              {info.content}
                            </a>
                          ) : (
                            <p className="text-gray-600">{info.content}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-gray-200 shadow-lg bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-white" size={24} />
                    <h3 className="text-xl font-bold">Book a Meeting</h3>
                  </div>
                  <p className="text-teal-100 mb-4">
                    Schedule a consultation to discuss your supply chain needs with our expert team.
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-white text-[#00A896] hover:bg-white hover:text-[#00A896]"
                  >
                    Schedule Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
