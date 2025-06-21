import Image from "next/image"
import { Users, Award, Clock, Shield, Zap } from "lucide-react"

const features = [
  {
    text: "Expert team with 10+ years of experience",
    icon: Users,
  },
  {
    text: "Cutting-edge technology and tools",
    icon: Zap,
  },
  {
    text: "24/7 customer support and maintenance",
    icon: Clock,
  },
  {
    text: "Proven track record of successful projects",
    icon: Award,
  },
  {
    text: "Secure and scalable solutions",
    icon: Shield,
  },
]

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/20 rounded-full px-4 py-2 mb-8">
              <span className="text-sm font-semibold text-emerald-300">Why Choose Us</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              Why Our Experts Believe
              <br />
              <span className="text-emerald-400">We're Different</span>
            </h2>

            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div key={index} className="flex items-center space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-lg font-medium group-hover:text-emerald-300 transition-colors">
                      {feature.text}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative group">
                <Image
                  src="/placeholder.svg?height=250&width=250"
                  alt={`Team collaboration ${item}`}
                  width={250}
                  height={250}
                  className="rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent rounded-2xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
