import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 text-white">
      <div className="container mx-auto py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold">Clustrix.tech</span>
            </div>
            <p className="text-purple-200 leading-relaxed">
              Empowering businesses with innovative digital solutions and expert technology services that drive growth
              and success.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Youtube, label: "YouTube" }
              ].map(({ icon: Icon, label }, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group"
                  title={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-300">Quick Links</h3>
            <ul className="space-y-3">
              {["About Us", "Our Services", "Portfolio", "Team", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-purple-200 hover:text-pink-300 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-300">Services</h3>
            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "Digital Marketing",
                "UI/UX Design",
                "E-commerce",
                "Cloud Services",
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-purple-200 hover:text-pink-300 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-pink-300">Stay Updated</h3>
            <p className="text-purple-200 mb-4">Subscribe to our newsletter for the latest updates and insights.</p>
            <div className="flex gap-2">
              <Input
                placeholder="Your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-purple-300"
              />
              <Button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-purple-300 text-sm">
            © {new Date().getFullYear()} Clustrix.tech. All rights reserved. Built with ❤️ for digital innovation.
            </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-purple-300 hover:text-pink-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-purple-300 hover:text-pink-300 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}