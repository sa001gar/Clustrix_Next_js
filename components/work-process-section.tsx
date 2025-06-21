const processSteps = [
  {
    title: "Discover & Strategize",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    step: "01",
  },
  {
    title: "Execute & Optimize",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    step: "02",
  },
  {
    title: "Analyze & Grow",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...",
    step: "03",
  },
]

export function WorkProcessSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-lime-400 rounded-full"></div>
                <div className="w-6 h-6 bg-green-800 rounded-lg"></div>
              </div>
              <span className="text-gray-700 font-medium">Our Work Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Step-by-Step to
              <br />
              Your Growth
            </h2>
          </div>

          <div>
            <p className="text-gray-600 leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {processSteps.map((step, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
              <div className="bg-green-800 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2">
                <span className="text-sm font-medium">STEP</span>
                <span className="text-lime-400 font-bold">{step.step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
