import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-lg font-semibold text-blue-200 mb-2">
              November 15, 2025 | 10:00 AM – 5:00 PM (EST)
            </div>
            <div className="text-sm font-medium text-blue-300 mb-6">
              GDG Annapolis presents
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-yellow-400">Annapolis</span> DevFest <span className="text-white">2025</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              A Celebration of Technology, Innovation, and Community. Join us for a full day of learning, 
              building, and connecting. From the latest in AI to hands-on coding, small business clinics, 
              and family-friendly exploration.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#register"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
            >
              🆓 Register Free
            </Link>
            <Link
              href="#activities"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Explore Activities
            </Link>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-lg font-semibold text-blue-200 mb-4">Sponsored by</h3>
            <div className="flex justify-center items-center">
              <div className="text-2xl font-bold text-white">Google</div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">1k+</div>
              <div className="text-blue-200">Attendees</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">30+</div>
              <div className="text-blue-200">Speakers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-blue-200">Workshops</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
