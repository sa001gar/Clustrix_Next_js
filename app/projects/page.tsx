"use client"

import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Calendar, Users, TrendingUp, Award, Star, Code, Eye, Search, Plus } from "lucide-react"

const categories = [
  { id: "all", name: "All Projects", count: 12, color: "from-purple-500 to-violet-500" },
  { id: "web-development", name: "Web Development", count: 5, color: "from-blue-500 to-cyan-500" },
  { id: "mobile-apps", name: "Mobile Apps", count: 3, color: "from-green-500 to-emerald-500" },
  { id: "branding", name: "Branding", count: 2, color: "from-pink-500 to-rose-500" },
  { id: "digital-marketing", name: "Digital Marketing", count: 2, color: "from-orange-500 to-amber-500" },
]

const projects = [
  {
    id: 1,
    title: "NovaLearn",
    subtitle: "E-Learning Platform",
    description:
      "An interactive e-learning platform with user dashboards, course management, and secure payment integration. Built with React and Node.js for seamless learning experiences.",
    category: "web-development",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    features: ["User Authentication", "Payment Integration", "Course Management", "Progress Tracking"],
    metrics: {
      increase: "250%",
      metric: "User Engagement",
      duration: "4 months",
      team: "6 members",
    },
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    featured: true,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 2,
    title: "Café Bliss",
    subtitle: "Restaurant Website",
    description:
      "A stylish single-page website for a local cafe featuring smooth menu animations, online booking system, and responsive design that captures the cafe's warm atmosphere.",
    category: "web-development",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop",
    tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
    features: ["Menu Showcase", "Booking System", "Location Map", "Mobile Responsive"],
    metrics: {
      increase: "180%",
      metric: "Online Bookings",
      duration: "2 months",
      team: "3 members",
    },
    icon: Calendar,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    featured: false,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 3,
    title: "BizTrackr",
    subtitle: "CRM Web Application",
    description:
      "A lightweight CRM web application for small businesses with user authentication, customer management, and comprehensive analytics dashboard for business insights.",
    category: "web-development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Chart.js"],
    features: ["Customer Management", "Analytics Dashboard", "User Roles", "Data Export"],
    metrics: {
      increase: "320%",
      metric: "Business Efficiency",
      duration: "5 months",
      team: "7 members",
    },
    icon: TrendingUp,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    featured: true,
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    id: 4,
    title: "FitTrack Pro",
    subtitle: "Fitness Mobile App",
    description:
      "A comprehensive fitness tracking mobile application with workout plans, nutrition tracking, and social features to keep users motivated and engaged.",
    category: "mobile-apps",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    tech: ["React Native", "Firebase", "Redux", "Stripe"],
    features: ["Workout Tracking", "Nutrition Plans", "Social Features", "Progress Analytics"],
    metrics: {
      increase: "400%",
      metric: "User Retention",
      duration: "6 months",
      team: "8 members",
    },
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    featured: false,
    liveUrl: "#",
    codeUrl: "#",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === "all" || project.category === activeCategory
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 text-sm font-semibold mb-8 animate-pulse-slow">
              <Star className="w-4 h-4 mr-2" />
              Our Latest Work
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover some of our recent projects and see how we've helped businesses grow through innovative digital
              solutions
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative mb-12">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all duration-300"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group relative px-8 py-4 rounded-2xl font-bold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-2xl scale-105`
                    : "bg-white text-gray-600 hover:text-purple-600 shadow-lg hover:shadow-xl border border-gray-100"
                }`}
              >
                <span className="relative z-10">
                  {category.name}
                  <span className="ml-2 text-sm opacity-75">({category.count})</span>
                </span>
                {activeCategory !== category.id && (
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                } gap-16 items-center`}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Image */}
                <div className="w-full lg:w-1/2">
                  <div className="group relative rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-6 left-6">
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 px-4 py-2">
                          <Award className="w-4 h-4 mr-2" />
                          Featured Project
                        </Badge>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="flex gap-4">
                        <Button
                          size="lg"
                          className="bg-white/90 backdrop-blur-sm text-gray-900 hover:bg-white font-bold rounded-2xl"
                        >
                          <Eye className="w-5 h-5 mr-2" />
                          Live Demo
                        </Button>
                        <Button
                          size="lg"
                          className="bg-purple-600/90 backdrop-blur-sm text-white hover:bg-purple-600 font-bold rounded-2xl"
                        >
                          <Code className="w-5 h-5 mr-2" />
                          View Code
                        </Button>
                      </div>
                    </div>

                    {/* Animated Border */}
                    <div
                      className={`absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}
                      style={{ padding: "4px" }}
                    >
                      <div className="w-full h-full bg-transparent rounded-3xl" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="w-full lg:w-1/2 space-y-8">
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${project.color} rounded-3xl flex items-center justify-center transform transition-transform duration-300 ${hoveredProject === project.id ? "scale-110 rotate-12" : ""}`}
                    >
                      <project.icon className="text-white w-10 h-10" />
                    </div>
                    <div>
                      <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">{project.title}</h3>
                      <p className="text-xl text-gray-600 font-bold">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-lg leading-relaxed">{project.description}</p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-6 py-6">
                    <div className="text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-purple-600">{project.metrics.increase}</div>
                      <div className="text-sm text-gray-500 font-medium">{project.metrics.metric}</div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-purple-600">{project.metrics.duration}</div>
                      <div className="text-sm text-gray-500 font-medium">Duration</div>
                    </div>
                    <div className="text-center">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${project.color} rounded-2xl flex items-center justify-center mx-auto mb-3`}
                      >
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-black text-purple-600">{project.metrics.team}</div>
                      <div className="text-sm text-gray-500 font-medium">Team Size</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 text-lg">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-4 py-2 bg-gradient-to-r ${project.bgColor} text-gray-700 rounded-full text-sm font-bold border border-gray-200 hover:scale-105 transition-transform duration-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-black text-gray-900 mb-4 text-lg">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center group">
                          <div
                            className={`w-8 h-8 bg-gradient-to-r ${project.color} rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-200`}
                          >
                            <div className="w-3 h-3 bg-white rounded-full"></div>
                          </div>
                          <span className="text-gray-700 font-semibold">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <Button
                      size="lg"
                      className={`bg-gradient-to-r ${project.color} text-white font-black rounded-2xl hover:scale-105 transition-all duration-200 group px-8 py-4`}
                    >
                      <ExternalLink className="w-5 h-5 mr-2 transition-transform group-hover:rotate-12" />
                      View Project
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-gray-300 text-gray-700 font-black rounded-2xl hover:border-purple-500 hover:text-purple-600 transition-all duration-200 px-8 py-4"
                    >
                      Case Study
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* More Coming Soon */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-16 border border-gray-100 shadow-2xl max-w-4xl mx-auto hover:shadow-3xl transition-shadow duration-300">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
              <Plus className="text-white w-12 h-12" />
            </div>
            <h3 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">More Projects Coming Soon</h3>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              We're constantly working on exciting new projects. Check back soon to see more of our latest work, or
              better yet, let's create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-violet-600 text-white font-black rounded-2xl hover:scale-105 transition-transform duration-200 px-10 py-5"
                >
                  Start Your Project
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 text-gray-700 font-black rounded-2xl hover:border-purple-500 hover:text-purple-600 transition-all duration-200 px-10 py-5"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
