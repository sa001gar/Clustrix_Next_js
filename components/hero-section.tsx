import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gray-50 py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="absolute top-40 left-40 w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="absolute top-60 left-60 w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-80 w-4 h-4 bg-gray-400 rounded-full"></div>
        <div className="absolute top-32 right-40 w-3 h-3 bg-gray-400 rounded-full"></div>
        <div className="absolute top-80 right-20 w-2 h-2 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-60 right-60 w-4 h-4 bg-gray-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
              </div>
              <span className="text-gray-700 font-medium">Elevate Your Brand With Us</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Empowering Your
              <br />
              Success with
              <br />
              Digital Expertise
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore.
            </p>

            <div className="flex items-center space-x-6">
              <Button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg font-medium">
                Explore More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <button className="text-gray-700 font-medium hover:text-green-800 transition-colors underline decoration-2 underline-offset-4">
                View All Services
              </button>
            </div>
          </div>

          {/* Right Content - Image Collage */}
          <div className="relative">
            <div className="relative w-full h-[500px]">
              {/* Main collage container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-96 h-96">
                  {/* Top right image */}
                  <div className="absolute top-0 right-0 w-48 h-32 rounded-2xl overflow-hidden shadow-lg transform rotate-3">
                    <Image
                      src="/placeholder.svg?height=128&width=192"
                      alt="Team member"
                      width={192}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Left middle image */}
                  <div className="absolute top-16 left-0 w-40 h-40 rounded-2xl overflow-hidden shadow-lg transform -rotate-6">
                    <Image
                      src="/placeholder.svg?height=160&width=160"
                      alt="Team collaboration"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Center image */}
                  <div className="absolute top-20 left-20 w-44 h-44 rounded-2xl overflow-hidden shadow-lg transform rotate-2">
                    <Image
                      src="/placeholder.svg?height=176&width=176"
                      alt="Team meeting"
                      width={176}
                      height={176}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom right image */}
                  <div className="absolute bottom-0 right-8 w-36 h-36 rounded-2xl overflow-hidden shadow-lg transform rotate-6">
                    <Image
                      src="/placeholder.svg?height=144&width=144"
                      alt="Team success"
                      width={144}
                      height={144}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Green badge */}
                  <div className="absolute top-32 left-32 w-20 h-20 bg-green-800 rounded-full flex items-center justify-center shadow-lg z-10">
                    <div className="text-center">
                      <div className="text-lime-400 text-xs font-bold">WE ENSURE</div>
                      <div className="text-white text-xs font-bold">QUALITY</div>
                      <div className="text-lime-400 text-xs font-bold">SERVICE</div>
                    </div>
                  </div>

                  {/* Sparkle decorations */}
                  <div className="absolute bottom-4 right-4 text-lime-400">
                    <Sparkles className="h-8 w-8" />
                  </div>
                  <div className="absolute top-8 left-8 text-lime-400">
                    <div className="w-2 h-2 bg-lime-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
