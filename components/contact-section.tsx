import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">Contact Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Get Your Free Quote Today!</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Ex. John Doe" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <Input placeholder="example@gmail.com" type="email" className="border-gray-300" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Phone <span className="text-red-500">*</span>
                </label>
                <Input placeholder="Enter Phone Number" type="tel" className="border-gray-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Service Interested In <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger className="border-gray-300">
                    <SelectValue placeholder="Select Service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="social-media">Social Media Marketing</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="content">Content Marketing</SelectItem>
                    <SelectItem value="ppc">PPC Advertising</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <Textarea placeholder="Enter here.." rows={6} className="border-gray-300" />
            </div>

            <Button className="bg-green-800 hover:bg-green-700 text-white px-8 py-3 rounded-full">Send Message</Button>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=500"
              alt="Team collaboration"
              width={500}
              height={400}
              className="rounded-2xl shadow-lg"
            />
            <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-lime-400" />
            <Sparkles className="absolute bottom-8 right-12 h-6 w-6 text-lime-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
