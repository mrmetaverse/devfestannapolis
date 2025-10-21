'use client'

export default function WhatToExpect() {
  return (
    <section id="what-to-expect" className="bg-green-600 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 text-center mb-8">
            What to Expect at DevFest Annapolis
          </h2>
          
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Technology isn't just about code, it's about people, ideas, and building the future together. 
            Whether you're a developer, small business owner, or student, you'll leave with new knowledge, 
            new connections, and new opportunities.
          </p>
          
          {/* What to Expect Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-green-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tech Talks</h3>
              <p className="text-gray-700 leading-relaxed">Expert speakers sharing insights on the latest technologies and industry trends.</p>
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🛠️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Code Labs</h3>
              <p className="text-gray-700 leading-relaxed">Interactive hands-on coding sessions where you'll build real projects and learn new skills.</p>
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Clinic</h3>
              <p className="text-gray-700 leading-relaxed">Connect technology with business strategy and entrepreneurship opportunities.</p>
            </div>
            <div className="bg-green-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Showcase</h3>
              <p className="text-gray-700 leading-relaxed">Demo innovative projects and technologies from local developers and companies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}