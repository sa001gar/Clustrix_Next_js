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
    <section className="py-24 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-purple-700">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Work That Drives{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Results
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 group hover:shadow-lg transition-shadow">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                {item.category}
              </div>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900 flex-1 mr-4">{item.title}</h3>
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center group-hover:bg-purple-800 transition-colors">
                  <ArrowRight className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-full">
            View All Work
          </Button>
        </div>
      </div>
    </section>
  )
}
