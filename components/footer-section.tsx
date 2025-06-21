import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Let's Connect there</h2>
          <Button className="bg-green-800 hover:bg-green-700 text-white px-6 py-3 rounded-full">Contact Us</Button>
        </div>

        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-green-800 rounded-sm"></div>
                </div>
                <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">Digital Marketing</span>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex space-x-3">
              {[Facebook, Twitter, Instagram, Linkedin, Youtube].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-lime-400 rounded-lg flex items-center justify-center hover:bg-lime-300 transition-colors cursor-pointer"
                >
                  <Icon className="h-5 w-5 text-green-800" />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {["Our Team", "Career", "About Us", "Testimonial", "FAQs"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 hover:text-green-800 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Contact</h3>
            <div className="space-y-3 text-gray-600">
              <div>(000) 000-0000</div>
              <div>example@gmail.com</div>
              <div>
                2464 Royal Ln. Mesa,
                <br />
                New Jersey 45463
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-gray-900 mb-6">Get the latest information</h3>
            <div className="flex gap-2">
              <Input placeholder="Email address" className="border-gray-300" />
              <Button className="bg-green-800 hover:bg-green-700 text-white px-4">
                <span className="sr-only">Subscribe</span>→
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 flex items-center justify-between text-sm text-gray-600">
          <div>Copyright © 2025 Digital Marketing Companyo. All Rights Reserved.</div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-green-800 transition-colors">
              User Terms & Conditions
            </a>
            <a href="#" className="hover:text-green-800 transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
