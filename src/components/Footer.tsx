'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-lg font-semibold text-gray-300 mb-4">
              November 15, 2025 | 10:00 AM – 5:00 PM (EST)
            </div>
            <h3 className="text-3xl font-bold mb-2">DevFest Annapolis 2025</h3>
            <p className="text-gray-300">AACC CALT Building</p>
            <p className="text-gray-300">101 College Parkway, Arnold, MD 21012</p>
          </div>
          
          <div className="mb-8">
            <Link
              href="https://gdg.community.dev/events/details/google-gdg-annapolis-presents-devfest-annapolis-2025/cohost-gdg-annapolis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold transition-colors duration-200"
            >
              Get Your Tickets Now
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © 2025 DevFest Annapolis - GDG Annapolis.
            </p>
            <div className="flex flex-col gap-2 justify-center md:justify-end max-w-[50%]">
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                <Link href="#ready-to-join" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Register Now
                </Link>
                <Link href="#what-to-expect" className="text-gray-400 hover:text-white transition-colors duration-200">
                  What to Expect
                </Link>
                <Link href="#why-attend" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Why Attend
                </Link>
                <Link href="#event-venue" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Event Venue
                </Link>
                <Link href="#speakers" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Speakers
                </Link>
                <Link href="#get-involved" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Get Involved
                </Link>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                <Link href="#hackathon" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Hackathon
                </Link>
                <Link href="#partners" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Partners
                </Link>
                <Link href="#our-mission" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Our Mission
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
