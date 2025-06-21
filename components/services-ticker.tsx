import { Star } from "lucide-react"

export function ServicesTicker() {
  const services = [
    "Content Marketing",
    "Social Media Marketing",
    "Search Engine Optimization",
    "Email Marketing",
    "Digital Advertising",
    "Brand Strategy",
  ]

  return (
    <div className="bg-green-800 py-4 overflow-hidden">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...services, ...services, ...services].map((service, index) => (
          <div key={index} className="flex items-center space-x-8 text-white">
            <span className="text-lg font-medium px-8">{service}</span>
            <Star className="h-4 w-4 text-lime-400 fill-current" />
          </div>
        ))}
      </div>
    </div>
  )
}
