'use client'

import Link from 'next/link'

export default function EventVenue() {
  return (
    <section id="event-venue" className="bg-blue-500 py-16">
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
              <div className="bg-blue-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4 text-center">🚗</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4 text-center">By Car</h5>
                <div className="text-gray-700 leading-relaxed space-y-3 text-left">
                  <p>
                    Our venue is at Anne Arundel Community College — CALT Building (Center for Applied Learning & Technology), located at <strong>101 College Parkway, Arnold, MD 21012</strong>.
                  </p>
                  <p>
                    <strong>From Annapolis/Washington region:</strong><br />
                    Take US 50 East to Exit 27, then follow MD 2 North for about 3 miles. Turn right onto Peninsula Farm Road, then continue straight to the CALT Building lot.
                  </p>
                  <p>
                    <strong>From Baltimore area:</strong><br />
                    Take I-695 South to Exit 2 for MD 10 South toward Severna Park. When MD 10 ends, merge onto MD 2 South and continue about 5 miles. Turn left onto Peninsula Farm Road, then continue straight to the CALT Building lot.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4 text-center">🚌</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4 text-center">Public Transit</h5>
                <div className="text-gray-700 leading-relaxed text-left space-y-3">
                  <p>
                    The campus is accessible via the Anne Arundel County Transit 203 (Gold Line) with a stop at Ring Rd & West Campus Dr (AACC)—a short 3-minute walk to the CALT Building. For broader regional access, the MTA LocalLink 70 bus also serves the campus.
                  </p>
                  <p>
                    For route maps, schedules, and real-time updates, visit <a href="https://www.aacounty.org/transportation/transit" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">aacounty.org/transportation/transit</a> or download the Passio GO app.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4 text-center">✈️</div>
                <h5 className="text-2xl font-bold text-gray-900 mb-4 text-center">Flying In</h5>
                <p className="text-gray-700 leading-relaxed mb-4 text-left">
                  The closest major airport is Baltimore/Washington International (BWI) — approximately 17 miles / 24 minutes drive from our venue under normal traffic.<br></br><br></br>For those flying into the Washington DC area, Ronald Reagan Washington National (DCA) and Washington Dulles (IAD) are also viable options — typically around 45 minutes (or more depending on traffic) from the venue.
                </p>
                <p className="text-gray-700 text-sm leading-relaxed text-left">
                  <strong>Tip:</strong> From BWI, take I-195/I-97 south to MD 2 (Governor Ritchie Highway) and follow signs to the campus at 101 College Parkway.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}