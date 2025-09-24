import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-lg font-semibold text-blue-200 mb-4">
              9AM — 6PM | Oct 3, 2025
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              DevFest <span className="text-yellow-400">Annapolis</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-8">
              DevFest Annapolis is an annual, community-led software engineering conference 
              aimed at educating software developers, architects, entrepreneurs, quality 
              focused individuals and tech leaders.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="#tickets"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
            >
              Get Your Tickets
            </Link>
            <Link
              href="#hackathon"
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              Join the AI Challenge
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
