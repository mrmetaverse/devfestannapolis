'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center px-4 pt-32">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Event Date Chip */}
        <div className="inline-flex items-center bg-red-100 text-red-800 px-6 py-3 rounded-full font-semibold mb-4">
          <span className="font-bold">November 15, 2025 • 10:00 AM – 5:00 PM EST</span>
        </div>

        {/* GDG Branding */}
        <div className="text-lg text-gray-700 font-semibold">
          GDG Annapolis presents
        </div>

        {/* Main Headline */}
        <h1 className="text-6xl md:text-8xl font-bold leading-tight">
          <span className="text-blue-600">DevFest</span>{' '}
          <span className="text-gray-900">Annapolis</span>
          <br />
          <span className="text-green-600">2025</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
          Maryland&apos;s premier developer conference. Join us for tech talks, hands-on workshops, and AI clinics at Anne Arundel Community College.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
          <Link
            href="https://gdg.community.dev/events/details/google-gdg-annapolis-presents-devfest-annapolis-2025/cohost-gdg-annapolis"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            Register Free
          </Link>
          <Link
            href="#venue"
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-bold border-2 border-blue-600 hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            View Venue
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600 font-medium">Developers</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-red-600 mb-2">20+</div>
            <div className="text-gray-600 font-medium">Sessions</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg">
            <div className="text-4xl font-bold text-green-600 mb-2">8hrs</div>
            <div className="text-gray-600 font-medium">Learning</div>
          </div>
        </div>
      </div>

      {/* Venue Preview Card */}
      <div className="absolute bottom-8 right-8 hidden xl:block">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-xs shadow-lg">
          <img 
            src="/dronemaxresdefault.jpg" 
            alt="AACC Campus" 
            className="w-full h-24 object-cover rounded-lg mb-4"
          />
          <div>
            <p className="font-semibold text-gray-900 mb-1">Event Venue</p>
            <p className="text-gray-600 text-sm">AACC CALT Building</p>
            <p className="text-blue-600 text-sm font-medium">Arnold, MD</p>
          </div>
        </div>
      </div>
    </section>
  )
}