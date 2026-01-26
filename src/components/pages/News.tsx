import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "motion/react";

interface NewsProps {
  onNavigate: (page: string) => void;
}

export function News({ onNavigate }: NewsProps) {
  const newsArticles = [
    {
      id: 1,
      title: "OT Global Expands Partnership Network with 100+ New Chinese Manufacturers",
      excerpt: "We're excited to announce our expanded network of verified manufacturers across key industries in China, providing our clients with even more sourcing options.",
      image: "https://images.unsplash.com/photo-1697382608848-c5fea6dd9d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjY4MDc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "November 5, 2025",
      category: "Company News",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "New Quality Control Standards: Ensuring Excellence in Every Product",
      excerpt: "Learn about our enhanced quality control protocols that guarantee the highest standards for all sourced products from China.",
      image: "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjI2NzUzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "October 28, 2025",
      category: "Quality",
      readTime: "4 min read",
    },
    {
      id: 3,
      title: "Technology Integration: AI-Powered Supplier Matching Now Available",
      excerpt: "Our new AI-driven platform helps match your product requirements with the perfect Chinese manufacturers in record time.",
      image: "https://images.unsplash.com/photo-1758387836566-6a342434f5b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjI1ODE5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "October 15, 2025",
      category: "Technology",
      readTime: "6 min read",
    },
    {
      id: 4,
      title: "Global Shipping Update: Faster Transit Times to North America and Europe",
      excerpt: "We've negotiated new shipping routes and partnerships that reduce delivery times by up to 30% for our international clients.",
      image: "https://images.unsplash.com/photo-1568731053253-f99d388659f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB0cmFkZSUyMHNoaXBwaW5nfGVufDF8fHx8MTc2MjY4MDc0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "October 8, 2025",
      category: "Logistics",
      readTime: "4 min read",
    },
    {
      id: 5,
      title: "Sustainability Initiative: Partnering with Eco-Friendly Manufacturers",
      excerpt: "OT Global commits to sustainable sourcing by partnering with environmentally certified factories across China.",
      image: "https://images.unsplash.com/photo-1697382608848-c5fea6dd9d60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MjY4MDc0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "September 22, 2025",
      category: "Sustainability",
      readTime: "5 min read",
    },
    {
      id: 6,
      title: "Case Study: How We Helped a Startup Save 45% on Manufacturing Costs",
      excerpt: "Discover how our strategic sourcing approach helped a tech startup significantly reduce costs while maintaining quality.",
      image: "https://images.unsplash.com/photo-1573209680076-bd7ec7007616?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwbHklMjBjaGFpbiUyMGxvZ2lzdGljc3xlbnwxfHx8fDE3NjI2NzUzNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      date: "September 10, 2025",
      category: "Case Study",
      readTime: "7 min read",
    },
  ];

  const categories = ["All", "Company News", "Quality", "Technology", "Logistics", "Sustainability", "Case Study"];

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
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
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl lg:text-6xl mb-6">
              Latest News & Insights
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Stay updated with the latest developments, industry insights, and success stories from OT Global
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className={
                  category === "All"
                    ? "bg-[#00A896] hover:bg-[#008c7a]"
                    : "hover:bg-gray-100"
                }
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-4 bg-[#00A896]">Featured Article</Badge>
            <Card className="overflow-hidden border-gray-200 hover:shadow-2xl transition-all duration-300 group">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto overflow-hidden">
                  <ImageWithFallback
                    src={newsArticles[0].image}
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <Badge className="mb-4 w-fit bg-teal-100 text-[#00A896]">
                    {newsArticles[0].category}
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl text-gray-900 mb-4">
                    {newsArticles[0].title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6">
                    {newsArticles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-6 text-gray-500 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{newsArticles[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{newsArticles[0].readTime}</span>
                    </div>
                  </div>
                  <Button className="w-fit bg-[#00A896] hover:bg-[#008c7a] group">
                    Read Full Article
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {newsArticles.slice(1).map((article, index) => (
              <motion.div key={article.id} variants={itemVariants}>
                <Card className="h-full overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <Badge className="absolute top-4 left-4 bg-white text-[#00A896]">
                      {article.category}
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-[#00A896] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                    <Button variant="link" className="p-0 text-[#00A896] hover:text-[#008c7a] group">
                      Read More
                      <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#00A896] to-[#008c7a] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl lg:text-4xl mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Get the latest news, insights, and industry updates delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button className="bg-white text-[#00A896] hover:bg-gray-100 px-8">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl text-gray-900 mb-6">
              Ready to Start Your Sourcing Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how we can help you source quality products from China
            </p>
            <Button
              size="lg"
              className="bg-[#00A896] hover:bg-[#008c7a] text-lg px-8 py-6"
              onClick={() => onNavigate("contact")}
            >
              Get in Touch <ArrowRight className="ml-2" size={24} />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
