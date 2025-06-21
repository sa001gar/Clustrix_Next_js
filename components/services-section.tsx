import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Smartphone, Megaphone, Palette, ShoppingCart, Cloud } from "lucide-react"

const services = [
  {
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices",
    icon: Code,
    image: "/placeholder.svg?height=200&width=300",
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android platforms",
    icon: Smartphone,
    image: "/placeholder.svg?height=200&width=300",
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Digital Marketing",
    description: "Strategic marketing campaigns to boost your online presence and drive growth",
    icon: Megaphone,
    image: "/placeholder.svg?height=200&width=300",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "UI/UX Design",
    description: "Beautiful and intuitive designs that enhance user experience and engagement",
    icon: Palette,
    image: "/placeholder.svg?height=200&width=300",
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "E-commerce Solutions",
    description: "Complete online store solutions with payment integration and inventory management",
    icon: ShoppingCart,
    image: "/placeholder.svg?height=200&width=300",
    color: "from-teal-500 to-emerald-500",
  },
  {
    title: "Cloud Services",
    description: "Scalable cloud infrastructure and deployment solutions for modern applications",
    icon: Cloud,
    image: "/placeholder.svg?height=200&width=300",
    color: "from-cyan-500 to-teal-500",
  },
]

export function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold text-emerald-700">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Boost Your Brand with
            <br />
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Our Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to your business needs with cutting-edge technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div className="relative mb-6">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover rounded-xl"
                    />
                    <div
                      className={`absolute -bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <Button
                    variant="ghost"
                    className="group-hover:bg-emerald-50 group-hover:text-emerald-600 p-0 h-auto font-semibold"
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
  )
}
