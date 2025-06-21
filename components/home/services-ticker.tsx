import { Star } from "lucide-react"

export function ServicesTicker() {
  const services = [
    "Content Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Email Marketing",
    "Digital Advertising",
    "Brand Strategy",
    "Web Development",
    "Mobile App Development",
  ]

  return (
    <div className="bg-gradient-to-r from-purple-800 to-violet-800 py-4 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...services, ...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center space-x-8 text-white">
            <span className="text-lg font-medium px-8">{service}</span>
            <Star className="h-4 w-4 text-pink-400 fill-current" />
          </div>
        ))}
      </div>
    </div>
  )
}
