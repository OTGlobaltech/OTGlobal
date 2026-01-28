import { FileSearch, Globe2, ShieldCheck, Scale, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function CustomsBrokerageGlobalTradePage() {
  const valueProps = [
    "Proactive management of customs documentation, HS/HTS codes, and declarations",
    "Reduced risk of delays, penalties, and unexpected charges at borders and ports",
    "Guidance on trade agreements, duties, and regulatory requirements",
    "Alignment between sourcing, logistics, and finance teams on landed cost and compliance",
  ];

  const services = [
    {
      icon: FileSearch,
      title: "Documentation & Clearance",
      description:
        "Prepare and review all necessary documents for import and export, ensuring accuracy and compliance with local regulations.",
    },
    {
      icon: Scale,
      title: "Duty & Tax Optimization",
      description:
        "Support with HS/HTS classification, valuation, and use of trade agreements to help minimize duties where possible.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory Compliance",
      description:
        "Stay ahead of changing rules, sanctions, and product-specific regulations in the markets where you trade.",
    },
    {
      icon: Globe2,
      title: "Global Trade Advisory",
      description:
        "Advisory support on structuring your supply chain to balance cost, speed, and regulatory risk across regions.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#00A896] to-[#008c7a] text-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.25em] uppercase text-teal-100 mb-4">
              Solutions
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Customs Brokerage &amp; Global Trade
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Keep your cross-border shipments compliant and on schedule with structured customs and
              trade management.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop"
              alt="Customs Brokerage & Global Trade"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[2fr,1.3fr] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Compliance Without Losing Momentum
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Customs and trade compliance can quickly become a bottleneck if not managed
                correctly. OT Global&apos;s approach combines practical operations experience with
                structured documentation and classification processes so your goods keep moving.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We work alongside your freight forwarders and brokers, adding a layer of control,
                visibility, and expertise focused on your product portfolio and trade lanes.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Why It Matters</h3>
              <ul className="space-y-2 mb-8">
                {valueProps.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#00A896] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white px-6">
                    Talk Compliance with Us
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-[#00A896] text-[#00A896] px-6">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {services.map((service, idx) => (
                <Card key={idx} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-start gap-3 pb-3">
                    <div className="bg-teal-100 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="text-[#00A896]" size={22} />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg mb-1">{service.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-700">
                        {service.description}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

