import { Facebook, Twitter, Instagram, Linkedin, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-2xl font-bold">Clustrix.tech</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with innovative digital solutions and expert technology services.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <div
                  key={index}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer"
                >
                  <Icon className="h-5 w-5" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Services</h3>
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
                  <a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Company</h3>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Portfolio", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-300 hover:text-emerald-300 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 text-emerald-300">Contact Info</h3>
            <div className="space-y-4">
              {[
                { icon: Phone, text: "+1 (555) 123-4567" },
                { icon: Mail, text: "hello@clustrix.tech" },
                { icon: MapPin, text: "123 Tech Street, Digital City" },
              ].map((contact, index) => {
                const IconComponent = contact.icon
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-emerald-400" />
                    </div>
                    <span className="text-gray-300">{contact.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-16 pt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Clustrix.tech. All rights reserved. Built with ❤️ for digital innovation.
          </p>
        </div>
      </div>
    </footer>
  )
}
