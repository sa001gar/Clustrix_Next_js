import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 py-20 lg:py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-10 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>

      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-purple-200 shadow-lg">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Digital Innovation Leaders</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-gray-900">Empowering Your</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Business
              </span>
              <br />
              <span className="text-gray-900">with</span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 bg-clip-text text-transparent">
                Digital Expertise
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
              Transform your business with our cutting-edge digital solutions. We help companies grow through innovative
              technology and strategic expertise.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">250+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">98%</div>
                <div className="text-sm text-gray-600">Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2">
                    <Image
                      src="https://img.freepik.com/free-vector/organic-flat-feedback-concept_52683-62653.jpg?uid=R124957424&ga=GA1.1.689373160.1737052406&semt=ais_hybrid&w=740"
                      alt="Team collaboration"
                      width={200}
                      height={150}
                      className="rounded-xl mb-4"
                    />
                    <div className="flex items-center space-x-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">5.0 Rating</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl p-6 text-white shadow-xl">
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-purple-100">Success Rate</div>
                  </div>
                </div>
                <div className="pt-12 space-y-6">
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2">
                    <Image
                      src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35046.jpg?uid=R124957424&ga=GA1.1.689373160.1737052406&semt=ais_hybrid&w=740"
                      alt="Digital solutions"
                      width={200}
                      height={150}
                      className="rounded-xl mb-4"
                    />
                    <div className="text-sm font-medium text-gray-600">Award Winning Team</div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl p-6 text-white shadow-xl">
                    <div className="text-2xl font-bold mb-2">24/7</div>
                    <div className="text-pink-100">Support</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-400 to-violet-400 rounded-2xl opacity-20 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-violet-400 to-indigo-400 rounded-full opacity-20 animate-float delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
