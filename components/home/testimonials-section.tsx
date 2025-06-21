"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, ArrowLeft, ArrowRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Dianne Russell",
    role: "Owner, Architecture Studio",
    rating: 5,
    text: "Clustrix.tech transformed our online presence completely. Their team's expertise in digital marketing helped us increase our client base by 300% in just 6 months. The results speak for themselves!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "John Smith",
    role: "CEO, TechStart Inc",
    rating: 5,
    text: "Working with Clustrix.tech was a game-changer for our startup. Their strategic approach to digital marketing and web development helped us secure our first round of funding. Highly recommended!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Marketing Director, GrowthCorp",
    rating: 5,
    text: "The team at Clustrix.tech delivered beyond our expectations. Their innovative solutions and attention to detail resulted in a 250% increase in our online conversions. Exceptional service!",
    avatar: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const current = testimonials[currentTestimonial]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Rating Card */}
          <div className="bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl p-8 text-white text-center">
            <div className="text-6xl font-bold mb-4">4.9</div>
            <div className="flex justify-center space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <div className="text-purple-200 mb-6">(40+ Reviews)</div>
            <div className="text-lg font-semibold mb-2">Customer experiences</div>
            <div className="text-purple-200 mb-6">that speak for themselves</div>
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? "bg-yellow-400" : "bg-purple-400"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right side - Testimonial Content */}
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="flex items-center space-x-1">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-6 h-6 bg-purple-600 rounded-lg"></div>
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
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full px-6"
              >
                All Testimonials
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <p className="text-gray-600 mb-6">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>

            <div className="bg-gray-50 rounded-xl p-6 mb-6 relative">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-purple-300" />
              <div className="pl-12">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-900">{current.rating}.0</span>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">"{current.text}"</p>

                <div className="flex items-center space-x-4">
                  <img
                    src={current.avatar || "/placeholder.svg"}
                    alt={current.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-gray-900">{current.name}</div>
                    <div className="text-gray-600">{current.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                size="sm"
                onClick={prevTestimonial}
                className="bg-yellow-400 hover:bg-yellow-300 text-purple-600 rounded-full w-10 h-10 p-0"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                onClick={nextTestimonial}
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-10 h-10 p-0"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
