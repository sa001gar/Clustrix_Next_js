import { Button } from "@/components/ui/button"
import { Star, ArrowLeft, ArrowRight } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Rating Card */}
          <div className="bg-green-800 rounded-2xl p-8 text-white text-center">
            <div className="text-6xl font-bold mb-4">4.9</div>
            <div className="flex justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-lime-400 text-lime-400" />
              ))}
            </div>
            <div className="text-green-200 mb-6">(40+ Reviews)</div>
            <div className="text-lg font-semibold mb-2">Customer experiences</div>
            <div className="text-green-200 mb-6">that speak for them selves</div>
            <div className="flex justify-center space-x-2">
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              <div className="w-8 h-8 bg-green-700 rounded-full"></div>
              <div className="w-8 h-8 bg-lime-400 rounded-full flex items-center justify-center text-green-800 font-bold">
                +
              </div>
            </div>
          </div>

          {/* Right side - Testimonial Content */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
                  </div>
                  <span className="text-gray-700 font-medium">Testimonials</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Testimonials: Trusted
                  <br />
                  by Our Clients
                </h2>
              </div>
              <Button
                variant="outline"
                className="border-green-800 text-green-800 hover:bg-green-800 hover:text-white rounded-full px-6"
              >
                All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>

            <div className="flex items-center space-x-2 mb-6">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-lime-400 text-lime-400" />
                ))}
              </div>
              <span className="font-bold text-gray-900">5.0</span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>

            <div className="mb-6">
              <div className="font-bold text-gray-900">Dianne Russell</div>
              <div className="text-gray-600">Owner, Architecture Studio</div>
            </div>

            <div className="flex space-x-4">
              <Button size="sm" className="bg-lime-400 hover:bg-lime-300 text-green-800 rounded-full w-10 h-10 p-0">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button size="sm" className="bg-green-800 hover:bg-green-700 text-white rounded-full w-10 h-10 p-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
