"use client"

import { useState } from "react"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Star, Award } from "lucide-react"

const teamMembers = [
  {
    name: "Jenny Alexander",
    role: "Digital Marketing Manager",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Expert in digital strategy with 8+ years of experience in driving growth through innovative marketing campaigns and data-driven insights.",
    location: "New York, USA",
    email: "jenny@clustrix.tech",
    featured: true,
    skills: ["Digital Strategy", "SEO", "Content Marketing", "Analytics"],
    achievements: ["Google Ads Certified", "HubSpot Expert", "Growth Hacker Award"],
    color: "from-purple-500 to-violet-500",
    bgColor: "from-purple-50 to-violet-50",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Olivia Hughes",
    role: "SEO Specialist",
    image: "/placeholder.svg?height=400&width=300",
    bio: "SEO expert specializing in technical optimization and organic growth strategies for enterprise clients with proven track record.",
    location: "London, UK",
    email: "olivia@clustrix.tech",
    featured: false,
    skills: ["Technical SEO", "Link Building", "Analytics", "Content Strategy"],
    achievements: ["Moz Certified", "SEMrush Expert", "Top 1% Rankings"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    name: "Sophia Lewis",
    role: "Social Media Manager",
    image: "/placeholder.svg?height=400&width=300",
    bio: "Creative social media strategist with a passion for building engaging communities and viral campaigns that drive real business results.",
    location: "Toronto, Canada",
    email: "sophia@clustrix.tech",
    featured: false,
    skills: ["Social Strategy", "Community Management", "Influencer Marketing", "Creative Direction"],
    achievements: ["Meta Certified", "Viral Campaign Creator", "Community Builder"],
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
    social: {
      facebook: "#",
      twitter: "#",
      instagram: "#",
      linkedin: "#",
    },
  },
]

export function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null)

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-violet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-violet-100 text-purple-800 text-sm font-semibold mb-8 animate-pulse-slow">
            <Star className="w-4 h-4 mr-2" />
            Our Team
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
            Meet Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our talented professionals bring diverse expertise and passion to every project, ensuring exceptional
            results for our clients through innovation and dedication.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative rounded-3xl overflow-hidden transition-all duration-500 transform hover:-translate-y-6 hover:scale-105 ${
                member.featured
                  ? `bg-gradient-to-br ${member.color} text-white shadow-2xl`
                  : "bg-white text-gray-900 shadow-xl hover:shadow-2xl border border-gray-100"
              }`}
              onMouseEnter={() => setHoveredMember(member.name)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Background Animation */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              {/* Image Container */}
              <div className="relative overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Social Icons Overlay */}
                <div className="absolute top-6 right-6 flex flex-col space-y-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                  {Object.entries(member.social).map(([platform, link], socialIndex) => {
                    const icons = {
                      facebook: Facebook,
                      twitter: Twitter,
                      instagram: Instagram,
                      linkedin: Linkedin,
                    }
                    const Icon = icons[platform as keyof typeof icons]

                    return (
                      <a
                        key={socialIndex}
                        href={link}
                        className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                        style={{ animationDelay: `${socialIndex * 100}ms` }}
                      >
                        <Icon className="h-5 w-5 text-white" />
                      </a>
                    )
                  })}
                </div>

                {/* Featured Badge */}
                {member.featured && (
                  <div className="absolute top-6 left-6">
                    <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center animate-bounce">
                      <Award className="w-4 h-4 mr-2" />
                      Team Lead
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-8 relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-black mb-2 group-hover:text-purple-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className={`font-bold text-lg mb-4 ${member.featured ? "text-purple-200" : "text-purple-600"}`}>
                    {member.role}
                  </p>

                  {/* Location & Email */}
                  <div className="flex flex-col space-y-2 text-sm opacity-75 mb-4">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {member.location}
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      <a href={`mailto:${member.email}`} className="hover:underline">
                        {member.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    member.featured ? "text-purple-100" : "text-gray-600"
                  } transition-all duration-300`}
                >
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 hover:scale-105 ${
                          member.featured
                            ? "bg-white/20 text-purple-100"
                            : `bg-gradient-to-r ${member.bgColor} text-gray-700 border border-gray-200`
                        }`}
                        style={{ animationDelay: `${skillIndex * 50}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="font-bold mb-3 text-sm uppercase tracking-wide">Achievements</h4>
                  <div className="space-y-2">
                    {member.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-center text-sm">
                        <div className={`w-2 h-2 bg-gradient-to-r ${member.color} rounded-full mr-3`} />
                        <span className={member.featured ? "text-purple-200" : "text-gray-600"}>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Desktop Social Links for Featured */}
                {member.featured && (
                  <div className="flex space-x-3 md:hidden">
                    {Object.entries(member.social).map(([platform, link], socialIndex) => {
                      const icons = {
                        facebook: Facebook,
                        twitter: Twitter,
                        instagram: Instagram,
                        linkedin: Linkedin,
                      }
                      const Icon = icons[platform as keyof typeof icons]

                      return (
                        <a
                          key={socialIndex}
                          href={link}
                          className="w-10 h-10 bg-pink-400 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-pink-300 transition-all duration-200 hover:scale-110"
                        >
                          <Icon className="h-5 w-5 text-white" />
                        </a>
                      )
                    })}
                  </div>
                )}
              </div>

              {/* Animated Border */}
              <div
                className={`absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 ${
                  hoveredMember === member.name ? "animate-pulse" : ""
                }`}
                style={{ padding: "4px" }}
              >
                <div className="w-full h-full bg-transparent rounded-3xl" />
              </div>

              {/* Floating Elements */}
              <div
                className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r ${member.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-float`}
              />
              <div
                className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r ${member.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-float`}
                style={{ animationDelay: "1s" }}
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-3xl p-12 shadow-2xl max-w-4xl mx-auto border border-gray-100 hover:shadow-3xl transition-shadow duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-violet-500 rounded-3xl flex items-center justify-center mx-auto mb-8 hover:scale-110 transition-transform duration-300">
              <Star className="text-white w-10 h-10" />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">Want to Join Our Team?</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence. Join us
              in creating amazing digital experiences!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-10 py-4 rounded-2xl font-black transition-all duration-300 hover:scale-105 hover:shadow-xl">
                View Open Positions
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-10 py-4 rounded-2xl font-black hover:border-purple-500 hover:text-purple-600 transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
