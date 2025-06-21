import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: "+1 (555) 123-4567",
    description: "Mon-Fri from 8am to 5pm",
  },
  {
    icon: Mail,
    title: "Email",
    details: "hello@clustrix.tech",
    description: "Online support",
  },
  {
    icon: MapPin,
    title: "Office",
    details: "2464 Royal Ln. Mesa, New Jersey 45463",
    description: "Come say hello",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: "Mon-Fri: 8am-5pm",
    description: "Weekend support available",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 via-violet-50 to-indigo-50 py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your digital transformation journey? We'd love to hear from you and discuss how we can help
            achieve your goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                    <p className="text-purple-600 font-medium mb-2">{info.details}</p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you within 24 hours. We're here to help you succeed.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">First Name *</label>
                    <Input
                      placeholder="John"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Last Name *</label>
                    <Input
                      placeholder="Doe"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email *</label>
                  <Input
                    placeholder="john@example.com"
                    type="email"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    type="tel"
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Service Interested In</label>
                  <Select>
                    <SelectTrigger className="border-gray-300 focus:border-purple-500 focus:ring-purple-500">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="web-development">Web Development</SelectItem>
                      <SelectItem value="mobile-apps">Mobile App Development</SelectItem>
                      <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                      <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                      <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
                      <SelectItem value="cloud-services">Cloud Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Message *</label>
                  <Textarea
                    placeholder="Tell us about your project..."
                    rows={6}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Clustrix.tech?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Expert Team</h4>
                    <p className="text-gray-600 text-sm">
                      Our experienced professionals bring years of expertise to every project.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proven Results</h4>
                    <p className="text-gray-600 text-sm">
                      We've helped 200+ businesses achieve their digital transformation goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                    <p className="text-gray-600 text-sm">
                      Round-the-clock support to ensure your success every step of the way.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Cutting-Edge Technology</h4>
                    <p className="text-gray-600 text-sm">
                      We use the latest technologies and best practices in all our solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
