import { Button } from "@/components/ui/button"

export function MainHeader() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-lime-400 rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-green-800 rounded-sm"></div>
            </div>
            <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
          </div>
          <span className="text-xl font-semibold text-gray-900">Digital Marketing</span>
        </div>

        <nav className="hidden lg:flex items-center space-x-8">
          {[
            { name: "Home", active: true },
            { name: "Services", active: false },
            { name: "Projects", active: false },
            { name: "Blogs", active: false },
            { name: "About Us", active: false },
            { name: "Pricing", active: false },
          ].map((item) => (
            <a
              key={item.name}
              href="#"
              className={`font-medium transition-colors ${
                item.active ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <Button className="bg-green-800 hover:bg-green-700 text-white px-6 py-2 rounded-full">Get A Quote</Button>
      </div>
    </header>
  )
}
