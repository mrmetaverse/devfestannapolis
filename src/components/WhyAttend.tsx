'use client'

export default function WhyAttend() {
  const attendeeTypes = [
    { 
      title: "Developers", 
      description: "Learn Cutting-Edge Tools and Techniques",
      image: "/images/why_developers_engineers.png" 
    },
    { 
      title: "Business Owners", 
      description: "Discover AI Solutions for Your Business",
      image: "/images/why_business_owners.png" 
    },
    { 
      title: "Students", 
      description: "Explore Tech Careers and Opportunities",
      image: "/images/why_students.png" 
    },
    { 
      title: "Professionals", 
      description: "Stay Ahead of Technology Trends",
      image: "/images/why_professionals.png" 
    }
  ]


  return (
    <section id="why-attend" className="bg-yellow-500 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-yellow-600 text-center mb-6">
            Why Attend DevFest Annapolis?
          </h2>
          
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            DevFest is a global movement, with events hosted by Google Developer Groups around the world. 
            Annapolis DevFest 2025 is our Maryland chapter's contribution to this tradition, building bridges 
            between developers, entrepreneurs, and the wider tech ecosystem.
          </p>
          

          {/* Who Should Attend */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Who Should Attend?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-yellow-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">👨‍💻</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Developers</h3>
                <p className="text-gray-700 leading-relaxed">Learn cutting-edge tools and techniques to advance your development skills.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">💼</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Business Owners</h3>
                <p className="text-gray-700 leading-relaxed">Discover AI solutions and technology trends to transform your business.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Students</h3>
                <p className="text-gray-700 leading-relaxed">Explore tech careers and opportunities in Maryland's growing technology sector.</p>
              </div>
              <div className="bg-yellow-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">👔</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Professionals</h3>
                <p className="text-gray-700 leading-relaxed">Stay ahead of technology trends and expand your professional network.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}