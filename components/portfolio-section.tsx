import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const portfolioItems = [
  {
    title: "A Social Campaign for Real Estate Agency",
    category: "Social Media Marketing",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Search to Schedule: SEO & PPC for Dental Clinic",
    category: "SEO, PPC",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Healthy Clicks: Google Ads for Yoga Studio",
    category: "Social Media Marketing",
    image: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Runway to Revenue: Instagram Ad Campaign for Fashion Brand",
    category: "Paid Advertising",
    image: "/placeholder.svg?height=200&width=350",
  },
]

export function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Work That Drives Results</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 group hover:shadow-lg transition-shadow">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="bg-green-800 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                {item.category}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 flex-1 mr-4">{item.title}</h3>
                <div className="w-10 h-10 bg-lime-400 rounded-full flex items-center justify-center group-hover:bg-green-800 transition-colors">
                  <ArrowRight className="h-5 w-5 text-green-800 group-hover:text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-full">View All Work</Button>
        </div>
      </div>
    </section>
  )
}
