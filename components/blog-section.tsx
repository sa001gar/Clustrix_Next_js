import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "A Beginner's Guide to Running Profitable Ad Campaigns",
    category: "Paid Advertising",
    image: "/placeholder.svg?height=200&width=280",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "Top 10 SEO Strategies That Still Work in 2025",
    category: "SEO",
    image: "/placeholder.svg?height=200&width=280",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
  {
    title: "Why Long-Form Content Still Dominates in 2025",
    category: "Content Marketing",
    image: "/placeholder.svg?height=200&width=280",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
  },
]

export function BlogSection() {
  return (
    <section className="py-20 bg-green-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-16">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <div className="w-6 h-6 bg-lime-400 rounded-lg"></div>
              </div>
              <span className="text-white font-medium">News & Blogs</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Our Latest
              <br />
              News & Blogs
            </h2>
          </div>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-green-800 rounded-full px-6"
          >
            View All Blogs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-green-700 rounded-2xl overflow-hidden group hover:bg-green-600 transition-colors"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={280}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="bg-lime-400 text-green-800 px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-lime-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-green-100 mb-6">{post.excerpt}</p>
                <button className="text-lime-400 font-medium flex items-center hover:underline">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
