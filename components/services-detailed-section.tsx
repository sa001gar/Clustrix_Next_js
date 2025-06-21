import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Social Media Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/placeholder.svg?height=200&width=280",
    link: "Learn more",
  },
  {
    title: "Content Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/placeholder.svg?height=200&width=280",
    link: "Learn more",
    featured: true,
  },
  {
    title: "Email Marketing",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    image: "/placeholder.svg?height=200&width=280",
    link: "Learn more",
  },
]

export function ServicesDetailedSection() {
  return (
    <section className="py-20 bg-green-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <div className="w-6 h-6 bg-lime-400 rounded-lg"></div>
              </div>
              <span className="text-white font-medium">Our Services</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Boost Your Brand
              <br />
              with Our Expertise
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800 rounded-full px-6"
          >
            View All Services
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 ${
                service.featured ? "bg-lime-400 text-gray-900" : "bg-green-700 text-white"
              }`}
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={280}
                height={200}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className={`mb-6 ${service.featured ? "text-gray-700" : "text-green-100"}`}>{service.description}</p>
              <button
                className={`font-medium flex items-center ${
                  service.featured ? "text-green-800" : "text-lime-400"
                } hover:underline`}
              >
                {service.link}
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
