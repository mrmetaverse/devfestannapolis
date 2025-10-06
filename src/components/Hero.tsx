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
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-yellow-400">Annapolis DevFest 2025:</span><br />
              <span className="text-white">A Celebration of Technology, Innovation & Community</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Maryland&apos;s premier tech and innovation conference, bringing developers, entrepreneurs, and business leaders together for a full day of learning and connection. Hosted by Google Developer Group Annapolis at Anne Arundel Community College&apos;s CALT Building.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              disabled
              className="bg-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-bold cursor-not-allowed opacity-75"
            >
              🆓 Registration Coming Soon
            </button>
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
