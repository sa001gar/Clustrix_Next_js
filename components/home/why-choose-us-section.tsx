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
    <section className="py-24 bg-purple-50">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 mb-8">
            <span className="text-sm font-semibold text-purple-700">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Why Our Clients Believe
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              We're Different
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="relative h-[500px]">
              {/* Main large image - positioned absolutely to match the design */}
              <div className="absolute top-0 left-0 w-[300px] h-[280px]">
                <Image
                  src="/placeholder.svg?height=280&width=300"
                  alt="Team collaboration"
                  width={300}
                  height={280}
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                />
              </div>
              
              {/* Smaller image positioned to overlap */}
              <div className="absolute bottom-0 right-0 w-[240px] h-[200px]">
                <Image
                  src="/placeholder.svg?height=200&width=240"
                  alt="Team meeting"
                  width={240}
                  height={200}
                  className="rounded-2xl shadow-lg object-cover w-full h-full"
                />
              </div>
              
              {/* 100% badge positioned to overlap both images */}
              <div className="absolute bottom-16 left-20 z-10">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-r from-lime-400 to-green-500 rounded-3xl flex items-center justify-center shadow-xl">
                    <div className="text-white font-bold text-2xl transform -rotate-12">100%</div>
                  </div>
                  <Sparkles className="absolute -top-3 -left-3 h-6 w-6 text-lime-400" />
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="bg-gradient-to-br from-purple-800 to-violet-800 rounded-3xl p-8 text-white">
            <div className="grid grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div 
                    key={index} 
                    className="space-y-4 p-4 rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl cursor-pointer group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-400 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-pink-300">{feature.title}</h3>
                    <p className="text-purple-100 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white">{feature.description}</p>
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
