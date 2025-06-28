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
import Image from "next/image"

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
              <span>(+91) 8629997123</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>contact@clustrix.tech</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Durgapur, West Bengal</span>
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
            <div className="w-10 h-10 relative">
              {/* You can replace this SVG with your actual logo image */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Clustrix logo design */}
                <circle cx="50" cy="20" r="12" fill="#2563eb" />
                <circle cx="20" cy="50" r="12" fill="#2563eb" />
                <circle cx="80" cy="50" r="12" fill="#2563eb" />
                <circle cx="50" cy="80" r="12" fill="#2563eb" />
                <circle cx="50" cy="50" r="8" fill="#1d4ed8" />
                
                {/* Connecting lines */}
                <line x1="42" y1="28" x2="28" y2="42" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
                <line x1="58" y1="28" x2="72" y2="42" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
                <line x1="28" y1="58" x2="42" y2="72" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
                <line x1="72" y1="58" x2="58" y2="72" stroke="#2563eb" strokeWidth="4" strokeLinecap="round" />
              </svg>
              
              {/* Alternative: Use your actual logo image
              <Image
                src="/clustrix-logo.png"
                alt="Clustrix Logo"
                fill
                className="object-contain"
                priority
              />
              */}
            </div>
            <span className="text-2xl font-bold text-gray-900">
              Clustrix
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
            </div>
          </div>
        )}
      </header>
    </>
  )
}