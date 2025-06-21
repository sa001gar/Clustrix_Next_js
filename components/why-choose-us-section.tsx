import Image from "next/image"
import { Users, Award, TrendingUp, FileText, Sparkles } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Certified Experts",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
  {
    icon: FileText,
    title: "Transparent Reporting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why Our Clients Believe
            <br />
            We're Different
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=280"
                  alt="Team collaboration"
                  width={280}
                  height={200}
                  className="rounded-2xl shadow-lg"
                />
                <div className="relative">
                  <div className="w-32 h-32 bg-lime-400 rounded-3xl flex items-center justify-center">
                    <div className="text-green-800 font-bold text-4xl transform -rotate-12">100%</div>
                  </div>
                  <Sparkles className="absolute -top-2 -left-2 h-8 w-8 text-lime-400" />
                </div>
              </div>
              <div className="pt-8">
                <Image
                  src="/placeholder.svg?height=250&width=280"
                  alt="Team meeting"
                  width={280}
                  height={250}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="bg-green-800 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="space-y-4">
                    <div className="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-green-800" />
                    </div>
                    <h3 className="text-lg font-bold">{feature.title}</h3>
                    <p className="text-green-100 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
