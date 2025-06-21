import { ArrowRight } from "lucide-react"

const awards = [
  {
    category: "Digital Marketing",
    title: "Digital Impact Award",
    year: "2022",
  },
  {
    category: "PPC",
    title: "PPC Power Performer",
    year: "2023",
  },
  {
    category: "Digital Branding & Identity",
    title: "Brand Brilliance Award",
    year: "2024",
  },
]

export function AwardsSection() {
  return (
    <section className="py-20 bg-green-800">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <div className="w-6 h-6 bg-lime-400 rounded-lg"></div>
              </div>
              <span className="text-white font-medium">Our Award</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
              Our Journey to Award-
              <br />
              Winning Success
            </h2>

            {/* Award Badge */}
            <div className="w-32 h-32 bg-green-700 rounded-full flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center">
                  <div className="text-lime-400 text-2xl">★</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center justify-between py-4 border-b border-green-700">
                <div>
                  <div className="text-green-300 text-sm font-medium mb-1">{award.category}</div>
                  <div className="text-white text-lg font-bold">{award.title}</div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-lime-400 font-medium">/{award.year}</span>
                  <div className="w-8 h-8 bg-green-700 rounded-full flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
