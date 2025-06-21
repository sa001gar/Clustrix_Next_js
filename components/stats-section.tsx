import { TrendingUp, Users, Award, Target } from "lucide-react"

const stats = [
  {
    number: "200+",
    label: "Happy Clients",
    description: "Businesses transformed",
    icon: Users,
    color: "from-emerald-500 to-teal-500",
  },
  {
    number: "250+",
    label: "Projects Completed",
    description: "Successful deliveries",
    icon: Target,
    color: "from-teal-500 to-cyan-500",
  },
  {
    number: "98%",
    label: "Client Satisfaction",
    description: "Positive feedback",
    icon: Award,
    color: "from-cyan-500 to-blue-500",
  },
  {
    number: "300%",
    label: "Average Growth",
    description: "Client business growth",
    icon: TrendingUp,
    color: "from-emerald-500 to-green-500",
  },
]

export function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-emerald-900 via-teal-900 to-cyan-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Empowering Your Success with
            <br />
            <span className="text-emerald-300">Digital Expertise</span>
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            We've helped hundreds of businesses transform their digital presence and achieve remarkable growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="h-8 w-8 text-white" />
                </div>
                <div className="text-5xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-emerald-200 mb-1">{stat.label}</div>
                <div className="text-emerald-300 text-sm">{stat.description}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
