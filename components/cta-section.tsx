import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-100 rounded-full px-4 py-2 mb-8">
              <span className="text-sm font-semibold text-emerald-700">Get Started Today</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Get Your Free
              <br />
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
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
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Request Your Quote</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    placeholder="First Name"
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                  <Input
                    placeholder="Last Name"
                    className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                  />
                </div>
                <Input
                  placeholder="Email Address"
                  type="email"
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Input
                  placeholder="Phone Number"
                  type="tel"
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Input
                  placeholder="Company Name"
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Textarea
                  placeholder="Project Description"
                  rows={4}
                  className="border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                />
                <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3">
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
