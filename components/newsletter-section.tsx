import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">Our Newsletter</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Subscribe for Digital
            <br />
            Growth Tips & Updates
          </h2>
        </div>

        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input placeholder="Enter Email Address" className="pl-10 py-3 border-gray-300" />
            </div>
            <Button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-full">Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
