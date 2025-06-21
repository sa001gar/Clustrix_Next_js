import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Megaphone, Palette, ShoppingCart, Cloud, Search, BarChart } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web applications built with modern technologies and best practices for optimal performance.",
    icon: Code,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Secure & Scalable"],
    color: "from-purple-500 to-violet-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    icon: Smartphone,
    features: ["iOS & Android", "Cross-Platform", "UI/UX Design", "App Store Optimization"],
    color: "from-violet-500 to-indigo-500",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns that boost your online presence and drive measurable business growth.",
    icon: Megaphone,
    features: ["Social Media Marketing", "Content Strategy", "Email Marketing", "PPC Advertising"],
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive designs that enhance user experience and drive engagement across all platforms.",
    icon: Palette,
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store solutions with payment integration, inventory management, and conversion optimization.",
    icon: ShoppingCart,
    features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions that ensure reliability and performance.",
    icon: Cloud,
    features: ["Cloud Migration", "DevOps", "Monitoring", "Security"],
    color: "from-violet-500 to-purple-500",
  },
  {
    title: "SEO Optimization",
    description: "Comprehensive SEO strategies that improve your search rankings and drive organic traffic growth.",
    icon: Search,
    features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"],
    color: "from-indigo-500 to-violet-500",
  },
  {
    title: "Analytics & Insights",
    description: "Data-driven insights and analytics solutions that help you make informed business decisions.",
    icon: BarChart,
    features: ["Data Analysis", "Custom Dashboards", "Reporting", "Performance Tracking"],
    color: "from-purple-500 to-indigo-500",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business and drive sustainable growth in today's
            competitive landscape.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white"
                >
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      variant="ghost"
                      className="group-hover:bg-purple-50 group-hover:text-purple-600 p-0 h-auto font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business and achieve your digital goals.
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
