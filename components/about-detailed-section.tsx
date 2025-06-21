import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const progressBars = [
  { label: "Marketing & Business Growth", percentage: 85 },
  { label: "Creativity & Innovation", percentage: 80 },
  { label: "Business & Financial Management", percentage: 95 },
]

const stats = [
  { number: "3k+", label: "Successful Projects" },
  { number: "200+", label: "Expert Team" },
  { number: "350+", label: "Happy Customers" },
  { number: "16+", label: "Years of Experience" },
]

export function AboutDetailedSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">About Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-8">
            Empowering Your Success
            <br />
            with Digital Expertise
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side - Images */}
          <div className="space-y-6">
            <Image
              src="https://img.freepik.com/free-vector/hand-drawn-people-doodle-illustration_23-2151175086.jpg?uid=R124957424&ga=GA1.1.689373160.1737052406&semt=ais_hybrid&w=740"
              alt="Team collaboration"
              width={400}
              height={200}
              className="rounded-2xl shadow-lg"
            />
            <Image
              src="/placeholder.svg?height=200&width=400"
              alt="Team meeting"
              width={400}
              height={200}
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div className="space-y-8">
            <div className="relative">
              <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-lime-400 text-xs font-bold">WE ENSURE</div>
                  <div className="text-white text-xs font-bold">QUALITY</div>
                  <div className="text-lime-400 text-xs font-bold">SERVICE</div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>

            <div className="space-y-6">
              {progressBars.map((bar, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900">{bar.label}</span>
                    <span className="font-bold text-gray-900">{bar.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-800 h-2 rounded-full relative" style={{ width: `${bar.percentage}%` }}>
                      <div className="absolute right-0 top-0 w-4 h-4 bg-lime-400 rounded-full -mt-1 -mr-2"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-full">
              About Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <div className="flex items-center space-x-1">
                  <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                  <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
                </div>
              </div>
              <div className="text-4xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
