import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            Clustrix.tech
          </span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {["Home", "About", "Services", "Portfolio", "Team", "Blog", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="hidden md:flex bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg">
            Get Started
          </Button>
          <Button variant="ghost" size="sm" className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
