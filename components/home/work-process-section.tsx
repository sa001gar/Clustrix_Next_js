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
    <section className="py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center space-x-2 bg-purple-100 rounded-full px-6 py-3 mb-8">
              <span className="text-sm font-semibold text-purple-700">Our Work Process</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Step-by-Step to
              <br />
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                Your Growth
              </span>
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
              <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-4 py-2 rounded-full inline-flex items-center space-x-2">
                <span className="text-sm font-medium">STEP</span>
                <span className="text-pink-300 font-bold">{step.step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
