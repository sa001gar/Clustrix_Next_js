"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube 
} from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
]

const socialIcons = {
  Facebook: Facebook,
  Twitter: Twitter,
  Instagram: Instagram,
  LinkedIn: Linkedin,
  YouTube: Youtube,
}

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Top Header */}
      <div className="bg-gradient-to-r from-purple-600 to-violet-600 py-3">
        <div className="container mx-auto flex items-center justify-between text-sm text-white">
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>(000) 000-0000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>hello@clustrix.tech</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            {Object.entries(socialIcons).map(([social, Icon]) => (
              <div
                key={social}
                className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer"
              >
                <Icon className="h-4 w-4" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-lg border-b sticky top-0 z-50">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
              Clustrix.tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors duration-200 relative group ${
                  pathname === item.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-purple-600 transition-all duration-200 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button className="hidden md:flex bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white shadow-lg">
              Get Started
            </Button>
            <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t">
            <div className="container mx-auto py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-2 font-medium transition-colors ${
                    pathname === item.href ? "text-purple-600" : "text-gray-700 hover:text-purple-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
