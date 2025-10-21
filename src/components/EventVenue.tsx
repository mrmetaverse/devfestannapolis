'use client'

import Link from 'next/link'

export default function EventVenue() {
  return (
    <section id="event-venue" className="bg-blue-600 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-8">
            Event Venue
          </h2>
          
          {/* Venue Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Venue Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  Anne Arundel Community College
                </h3>
                <p className="text-xl text-blue-600 font-semibold mb-2">
                  CALT Building (Center for Applied Learning & Technology)
                </p>
                <div className="text-gray-700 space-y-2">
                  <p className="flex items-center">
                    <span className="text-2xl mr-3">📍</span>
                    <span>101 College Pkwy, Arnold, MD 21012</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-2xl mr-3">🚗</span>
                    <span>Free parking available on campus</span>
                  </p>
                  <p className="flex items-center">
                    <span className="text-2xl mr-3">♿</span>
                    <span>Fully accessible facility</span>
                  </p>
                </div>
              </div>

              {/* Venue Features */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Facility Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Modern classrooms</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">High-speed WiFi</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">A/V equipment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Food court nearby</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Large auditorium</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span className="text-gray-700">Outdoor spaces</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <Link
                  href="https://www.google.com/maps/place/AACC+CALT+Building/@39.0495431,-76.5192161,888m/data=!3m2!1e3!4b1!4m6!3m5!1s0x89b7f9c7aaa6cd2d:0x269da4155218742c!8m2!3d39.0495431!4d-76.5166412!16s%2Fg%2F1hf2ht3nj?entry=ttu&g_ep=EgoyMDI1MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-block"
                >
                  View on Google Maps
                </Link>
              </div>
            </div>

            {/* Right Side - Venue Images */}
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/CALT-Building-2-Britney-Pieraldi2-900x506.jpg"
                  alt="AACC CALT Building Exterior"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/dronemaxresdefault.jpg"
                    alt="AACC Campus Aerial View"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-md">
                  <img
                    src="/Drone3.jpg"
                    alt="AACC Campus Overview"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Getting There Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">Getting There</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">🚗</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">By Car</h5>
                <p className="text-gray-700 leading-relaxed">
                  Take I-97 to Exit 7 (Riva Road). Free parking available on campus.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">🚌</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">Public Transit</h5>
                <p className="text-gray-700 leading-relaxed">
                  Anne Arundel County Transit Route 14 serves the campus.
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">✈️</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4">Flying In</h5>
                <p className="text-gray-700 leading-relaxed">
                  BWI Airport is 20 minutes away. DCA and IAD are about 45 minutes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}