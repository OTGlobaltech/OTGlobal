import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "info@otglobal.com",
      link: "mailto:info@otglobal.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      content: "123 Logistics Way, New York, NY 10001",
      link: "#",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "24/7 Support Available",
      link: "#",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl mb-6">Let's Start Your Sourcing Journey</h1>
          <p className="text-xl lg:text-2xl text-teal-100 max-w-3xl mx-auto">
            Ready to source from China? Get in touch for a free consultation and quote. 
            We respond to all inquiries within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6 text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <info.icon className="text-[#00A896]" size={24} />
                  </div>
                  <h3 className="text-gray-900 mb-2">{info.title}</h3>
                  <a
                    href={info.link}
                    className="text-sm text-gray-600 hover:text-[#00A896]"
                  >
                    {info.content}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Request Your Free Quote
            </h2>
            <p className="text-xl text-gray-600">
              Share your product requirements and we'll get back to you with supplier options and pricing
            </p>
          </div>

          <Card className="border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Company Inc."
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service of Interest</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) =>
                      setFormData({ ...formData, service: value })
                    }
                  >
                    <SelectTrigger id="service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sourcing">Product Sourcing</SelectItem>
                      <SelectItem value="full">Full Management</SelectItem>
                      <SelectItem value="partnership">Partnership Program</SelectItem>
                      <SelectItem value="qc">Quality Control & Inspection</SelectItem>
                      <SelectItem value="manufacturing">Manufacturing Management</SelectItem>
                      <SelectItem value="logistics">Logistics & Shipping</SelectItem>
                      <SelectItem value="other">Other / Not Sure</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Product Details & Requirements *</Label>
                  <Textarea
                    id="message"
                    placeholder="Please describe your product, target quantity, budget range, and any specific requirements..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#00A896] hover:bg-[#008c7a]"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Offices Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-5xl text-gray-900 mb-4">
              Our Locations
            </h2>
            <p className="text-xl text-gray-600">
              With teams in China and around the world, we're always close to your supply chain
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                city: "Shenzhen, China",
                address: "Futian District",
                region: "Shenzhen, Guangdong",
                phone: "+86 755 1234 5678",
              },
              {
                city: "Hong Kong",
                address: "Central Business District",
                region: "Hong Kong SAR",
                phone: "+852 1234 5678",
              },
              {
                city: "United States",
                address: "Global Headquarters",
                region: "Available Worldwide",
                phone: "+1 (555) 123-4567",
              },
            ].map((office, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-xl text-gray-900 mb-4">{office.city}</h3>
                  <p className="text-sm text-gray-600 mb-1">{office.address}</p>
                  <p className="text-sm text-gray-600 mb-3">{office.region}</p>
                  <p className="text-sm text-[#00A896]">{office.phone}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
