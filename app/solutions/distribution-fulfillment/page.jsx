import { Warehouse, PackageSearch, Truck, Globe2, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function DistributionFulfillmentPage() {
  const highlights = [
    "Support for Amazon FBA, 3PL, and direct-to-retail distribution models",
    "Network design to balance cost, speed, and service levels",
    "Inventory placement strategies across multiple warehouses and regions",
    "Exception handling for delayed shipments, shortages, and surges in demand",
  ];

  const pillars = [
    {
      icon: Warehouse,
      title: "Warehouse & Network Design",
      description:
        "Optimize where inventory sits across your network to reduce lead times, shipping costs, and stockouts.",
    },
    {
      icon: PackageSearch,
      title: "Fulfillment Accuracy & SLAs",
      description:
        "Define and monitor SLAs around pick/pack accuracy, on-time shipment, and returns handling.",
    },
    {
      icon: Truck,
      title: "Last-Mile Coordination",
      description:
        "Align fulfillment with carrier selection and delivery promises to your customers and channel partners.",
    },
    {
      icon: Globe2,
      title: "Omnichannel Enablement",
      description:
        "Support marketplaces, DTC, and B2B orders from a unified operational playbook and data layer.",
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
              Distribution &amp; Fulfillment
            </h1>
            <p className="text-lg sm:text-xl text-teal-100">
              Seamless distribution and fulfillment operations that keep your products available,
              compliant, and on time—across Amazon FBA, DTC, and wholesale channels.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="grid gap-10 lg:grid-cols-[2fr,1.3fr] items-start">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">
                Designed for Modern Ecommerce &amp; Retail
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                OT Global helps you design and operate distribution flows that support fast-growing
                ecommerce brands, Amazon FBA portfolios, and multi-channel retailers. We align
                warehouse operations, inventory placement, and transportation so your products are
                exactly where they need to be.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                From inbound container scheduling to outbound parcel optimization, we bring a
                structured, data-informed approach that reduces costs while preserving service
                levels and marketplace performance.
              </p>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">What You Can Expect</h3>
              <ul className="space-y-2 mb-8">
                {highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#00A896] mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-[#00A896] hover:bg-[#008c7a] text-white px-6">
                    Discuss Distribution Needs
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" className="border-[#00A896] text-[#00A896] px-6">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>

            <div className="space-y-4">
              {pillars.map((pillar, idx) => (
                <Card key={idx} className="border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-start gap-3 pb-3">
                    <div className="bg-teal-100 w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0">
                      <pillar.icon className="text-[#00A896]" size={22} />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg mb-1">{pillar.title}</CardTitle>
                      <CardDescription className="text-sm text-gray-700">
                        {pillar.description}
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

