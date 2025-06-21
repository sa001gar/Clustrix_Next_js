import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 to-violet-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-violet-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-pink-200 rounded-full opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-violet-100 rounded-full px-4 py-2 mb-8 animate-bounce">
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Get Started Today</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your Free
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent animate-pulse">
                Quote Today!
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Ready to transform your business? Contact us for a free consultation and project quote.
            </p>

            <div className="space-y-6">
              {[
                "Free consultation and project analysis",
                "Detailed project proposal within 24 hours",
                "No obligation, completely free",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-700 group-hover:text-purple-600 transition-colors duration-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Request Your Quote</h3>
                <p className="text-gray-600 mt-2">Transform your business today</p>
              </div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                  />
                  <Input
                    placeholder="Last Name"
                    className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                />
                <Input
                  placeholder="Company Name"
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                />
                <Textarea
                  placeholder="Project Description"
                  rows={4}
                  className="border-gray-200 focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 transform hover:scale-105">
                  Get Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
