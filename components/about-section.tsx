export function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-3 mb-8">
            <div className="flex items-center space-x-1">
              <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
              <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
            </div>
            <span className="text-gray-700 font-medium">About Us</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Empowering Your Success</h2>
        </div>
      </div>
    </section>
  )
}
