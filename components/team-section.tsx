import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Jenny Alexander",
    role: "Digital Marketing Manager",
    image: "/placeholder.svg?height=300&width=250",
    featured: true,
  },
  {
    name: "Olivia Hughes",
    role: "SEO Specialist",
    image: "/placeholder.svg?height=300&width=250",
  },
  {
    name: "Sophia Lewis",
    role: "Social Media Manager",
    image: "/placeholder.svg?height=300&width=250",
  },
]

export function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">Our Team</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Meet Our Expert Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden ${
                member.featured ? "bg-green-800 text-white" : "bg-gray-50 text-gray-900"
              }`}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={250}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className={`mb-4 ${member.featured ? "text-green-200" : "text-gray-600"}`}>{member.role}</p>
                {member.featured && (
                  <div className="flex space-x-3">
                    {[Facebook, Twitter, Instagram, Linkedin].map((Icon, iconIndex) => (
                      <div
                        key={iconIndex}
                        className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center cursor-pointer hover:bg-lime-300 transition-colors"
                      >
                        <Icon className="h-4 w-4 text-green-800" />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
