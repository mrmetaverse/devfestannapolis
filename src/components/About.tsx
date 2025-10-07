'use client'

export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* What to Expect Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">What to Expect at DevFest Annapolis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Google Tech Talks</h3>
              <p className="text-gray-600">Hear from Google experts on the future of AI, cloud, and emerging technologies.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hands-On CodeLabs</h3>
              <p className="text-gray-600">Build real projects with the latest tools, guided step by step.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Small Business AI Clinics</h3>
              <p className="text-gray-600">Discover how AI can streamline operations and transform your business.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Startup & Community Showcase</h3>
              <p className="text-gray-600">Connect with Maryland&apos;s changemakers, founders, developers, and innovators.</p>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Why Attend DevFest?</h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
            Because technology isn&apos;t just about code: it&apos;s about people, ideas, and building the future together. 
            Whether you&apos;re a developer, small business owner, or student, you&apos;ll leave with new knowledge, 
            new connections, and new opportunities.
          </p>
        </div>

        {/* Event Details Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-blue-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">📍 Date & Location</h3>
              <p className="text-lg mb-2">November 15, 2025</p>
              <p className="text-lg mb-2">Anne Arundel Community College</p>
              <p className="text-lg mb-2">CALT Building</p>
              <p className="text-blue-200">Free Parking Available</p>
            </div>
            
            <div className="bg-green-600 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">🎟️ Free Registration</h3>
              <p className="text-lg mb-4">Admission is free, but space is limited</p>
              <button
                onClick={() => window.open('https://www.eventbrite.com/e/annapols-devfest-2025-tickets-1766314396909', '_blank')}
                className="bg-white text-green-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
              >
                Get Your Free Ticket
              </button>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Powered by Google Developer Groups (GDG Annapolis)</h2>
          <p className="text-xl text-gray-700 text-center max-w-4xl mx-auto leading-relaxed mb-8">
            DevFest is a global movement, with events hosted by Google Developer Groups around the world. 
            Annapolis DevFest 2025 is our Maryland chapter&apos;s contribution to this tradition, building bridges 
            between developers, entrepreneurs, and the wider tech ecosystem.
          </p>
          
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Who Should Attend?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-3">👨‍💻</div>
                <h4 className="font-semibold text-gray-900 mb-2">Developers & Engineers</h4>
                <p className="text-gray-600 text-sm">Learn cutting-edge tools and techniques</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="font-semibold text-gray-900 mb-2">Entrepreneurs & Business Owners</h4>
                <p className="text-gray-600 text-sm">Discover AI solutions for your business</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-3">🎓</div>
                <h4 className="font-semibold text-gray-900 mb-2">Students & Curious Learners</h4>
                <p className="text-gray-600 text-sm">Explore tech careers and opportunities</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="text-3xl mb-3">☁️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Professionals Exploring AI & Cloud</h4>
                <p className="text-gray-600 text-sm">Stay ahead of technology trends</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission: Building Tech Community in Maryland</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Our mission is to make Maryland a hub for innovation. DevFest isn&apos;t just about the tools and code, 
            it&apos;s about collaboration, growth, and creating opportunities that extend far beyond Annapolis.
          </p>
        </div>
      </div>
    </section>
  )
}
