import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Linkedin } from "lucide-react"

export function TopHeader() {
  return (
    <div className="bg-lime-400 py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-6 text-sm text-gray-800">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <span>(000) 000-0000</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <span>example@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4" />
            <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
            <div
              key={index}
              className="w-8 h-8 bg-green-800 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer"
            >
              <Icon className="h-4 w-4 text-white" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
