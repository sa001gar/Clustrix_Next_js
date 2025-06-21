import { TrendingUp, Users, Award, Target, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const stats = [
  {
    number: "3k+",
    label: "Successful Projects",
    icon: Target,
  },
  {
    number: "200+",
    label: "Expert Team",
    icon: Users,
  },
  {
    number: "350+",
    label: "Happy Customers",
    icon: Award,
  },
  {
    number: "16+",
    label: "Years of Experience",
    icon: TrendingUp,
  },
]

const skills = [
  { name: "Marketing & Business Growth", percentage: 85 },
  { name: "Creativity & Innovation", percentage: 80 },
  { name: "Business & Financial Management", percentage: 95 },
]


export function AboutSection() {
  return (
    <div className="bg-gray-50">
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle className="h-5 w-5 text-purple-500" />
                <span className="text-purple-600 font-medium">About Us</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Empowering Your Success
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-violet-600">
                  with Digital Expertise
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              {/* Progress Bars */}
              <div className="space-y-6 mb-8">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">{skill.name}</span>
                      <span className="font-bold text-gray-900">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-purple-600 to-violet-600 h-3 rounded-full relative"
                        style={{ width: `${skill.percentage}%` }}
                      >
                        <div className="absolute right-0 top-0 w-6 h-6 bg-purple-400 rounded-full border-4 border-white -mt-1.5 -mr-3"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-full">
                About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right Images */}
            <div className="space-y-6">
              <div className="relative">
                <img 
                  src="https://img.freepik.com/free-vector/hand-drawn-people-doodle-illustration_23-2151175086.jpg?uid=R124957424&ga=GA1.1.689373160.1737052406&semt=ais_hybrid&w=740" 
                  alt="Team collaboration" 
                  className="w-full rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-purple-600 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
              </div>
              
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20 pt-12 border-t">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center group">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <div className="text-4xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {stat.number}
                    </div>
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      
    </div>
  )
}
