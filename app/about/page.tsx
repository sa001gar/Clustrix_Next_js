import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Award, Target, Zap, CheckCircle, Star, Clock, Mail, MapPin } from "lucide-react"

const values = [
  {
    icon: Users,
    title: "Client-Centric Approach",
    description: "We put our clients at the heart of everything we do, ensuring their success is our priority.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Award,
    title: "Excellence in Delivery",
    description: "We maintain the highest standards in all our projects, delivering exceptional results consistently.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: Target,
    title: "Results-Driven Solutions",
    description: "Our strategies are designed to deliver measurable results that drive business growth.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Zap,
    title: "Innovation & Technology",
    description: "We leverage cutting-edge technology and innovative approaches to solve complex challenges.",
    color: "from-orange-500 to-amber-500",
  },
]

const achievements = [
  { number: "500+", label: "Projects Completed", icon: CheckCircle, color: "from-blue-500 to-cyan-500" },
  { number: "150+", label: "Happy Clients", icon: Users, color: "from-purple-500 to-violet-500" },
  { number: "98%", label: "Client Satisfaction", icon: Award, color: "from-green-500 to-emerald-500" },
  { number: "24/7", label: "Support Available", icon: Clock, color: "from-orange-500 to-amber-500" },
]

const milestones = [
  { year: "2018", title: "Company Founded", description: "Started with a vision to transform digital experiences" },
  { year: "2020", title: "50+ Projects", description: "Reached our first major milestone of completed projects" },
  { year: "2022", title: "Global Expansion", description: "Extended our services to international markets" },
  {
    year: "2024",
    title: "Industry Recognition",
    description: "Received multiple awards for innovation and excellence",
  },
]

const teamMembers = [
  {
    name: "Jenny Alexander",
    role: "Digital Marketing Manager",
    image: "/placeholder.svg?height=300&width=250",
    location: "New York, USA",
    email: "jenny@clustrix.tech",
  },
  {
    name: "Olivia Hughes",
    role: "SEO Specialist",
    image: "/placeholder.svg?height=300&width=250",
    location: "London, UK",
    email: "olivia@clustrix.tech",
  },
  {
    name: "Sophia Lewis",
    role: "Social Media Manager",
    image: "/placeholder.svg?height=300&width=250",
    location: "Toronto, Canada",
    email: "sophia@clustrix.tech",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              About Us
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Empowering Digital{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We are a team of passionate digital innovators dedicated to transforming businesses through cutting-edge
              technology solutions and strategic expertise.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <p className="text-gray-600 leading-relaxed">
                Founded in 2018, Clustrix.tech emerged from a simple belief: every business deserves access to
                world-class digital solutions that drive growth and success. What started as a small team of developers
                has grown into a full-service digital agency serving clients worldwide.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we combine technical expertise with creative innovation to deliver solutions that not only meet
                our clients' immediate needs but also position them for long-term success in an ever-evolving digital
                landscape.
              </p>

              {/* Key Points */}
              <div className="space-y-3 mt-8">
                {[
                  "Award-winning digital solutions",
                  "Expert team of 50+ professionals",
                  "Serving clients in 25+ countries",
                  "99% project success rate",
                ].map((point, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full" />
                    <span className="text-gray-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>

              <Button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white mt-8">
                Learn More About Our Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Our team at work"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-200 rounded-full opacity-50" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-violet-200 rounded-full opacity-50" />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon
              return (
                <div key={index} className="text-center group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we work with our clients and each other.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented professionals bring expertise and passion to every project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
              >
                <div className="relative mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={250}
                    height={250}
                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {member.location}
                </div>
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center text-sm text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-1" />
                  Contact
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Key milestones that have shaped our growth and success over the years
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-200" />

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline Dot */}
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {milestone.year}
                    </div>

                    {/* Content */}
                    <div className="ml-8 bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve your digital goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4">
              Start Your Project Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
