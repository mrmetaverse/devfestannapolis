'use client'

export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="devfest-heading-2 mb-4">Event Venue</h2>
          <p className="devfest-body-large max-w-3xl mx-auto">
            Join us at the state-of-the-art CALT Building at Anne Arundel Community College - 
            a modern facility designed for innovation and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <div className="devfest-card p-8 mb-8">
              <h3 className="devfest-heading-3 text-google-blue mb-6">AACC CALT Building</h3>
              <div className="devfest-body space-y-3">
                <p className="font-semibold text-gray-900">Anne Arundel Community College</p>
                <p>Center for Applied Learning & Technology</p>
                <p>101 College Parkway</p>
                <p>Arnold, MD 21012</p>
                <div className="flex items-center gap-2 text-google-green font-medium mt-4">
                  <span>🚗</span>
                  <span>Free Parking Available on Campus</span>
                </div>
              </div>
            </div>
            
            <div className="bg-google-blue text-white p-8 rounded-lg devfest-card">
              <div className="text-lg font-semibold mb-3 text-blue-100">� Event Details</div>
              <h3 className="text-3xl font-bold mb-4">November 15, 2025</h3>
              <p className="text-xl mb-2">10:00 AM – 5:00 PM (EST)</p>
              <p className="text-blue-200 mb-4">Full day of tech talks, workshops, and networking</p>
              
              <button
                onClick={() => window.open('https://www.eventbrite.com/e/annapols-devfest-2025-tickets-1766314396909', '_blank')}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white/95 text-google-blue font-bold px-6 py-4 border border-white/80 shadow-sm hover:bg-white hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transition text-base"
                aria-label="Get your DevFest tickets on Eventbrite"
              >
                <span>🎟️</span>
                <span>Get Your Tickets Now</span>
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* Main venue image */}
            <div className="devfest-card overflow-hidden">
              <img 
                src="/Drone3.jpg" 
                alt="AACC CALT Building - Aerial View" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="devfest-heading-3 mb-2">Modern Campus Facility</h4>
                <p className="devfest-body">
                  The CALT Building features cutting-edge technology infrastructure, 
                  perfect for hosting Maryland&apos;s premier developer conference.
                </p>
              </div>
            </div>

            {/* Interior image */}
            <div className="devfest-card overflow-hidden">
              <img 
                src="/CALT-Building-2-Britney-Pieraldi2-900x506.jpg" 
                alt="AACC CALT Building - Interior Atrium" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h4 className="devfest-heading-3 mb-2">Collaborative Spaces</h4>
                <p className="devfest-body">
                  Open atrium design with multiple levels for breakout sessions, 
                  networking, and hands-on workshops.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Venue highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="devfest-card p-6 text-center">
            <div className="w-16 h-16 bg-google-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h4 className="devfest-heading-3 mb-2">Modern Facilities</h4>
            <p className="devfest-body">
              State-of-the-art classrooms, labs, and presentation spaces designed for learning and innovation.
            </p>
          </div>

          <div className="devfest-card p-6 text-center">
            <div className="w-16 h-16 bg-google-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚗</span>
            </div>
            <h4 className="devfest-heading-3 mb-2">Free Parking</h4>
            <p className="devfest-body">
              Ample free parking available on campus with easy access to the CALT Building entrance.
            </p>
          </div>

          <div className="devfest-card p-6 text-center">
            <div className="w-16 h-16 bg-google-yellow rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📍</span>
            </div>
            <h4 className="devfest-heading-3 mb-2">Prime Location</h4>
            <p className="devfest-body">
              Conveniently located in Arnold, MD with easy access from Annapolis, Baltimore, and DC metro areas.
            </p>
          </div>
        </div>

        {/* Map section */}
        <div className="mt-16 devfest-card p-8">
          <h4 className="devfest-heading-3 text-center mb-6">Getting to AACC</h4>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-lg font-semibold mb-2">Anne Arundel Community College</div>
                  <div className="text-sm">CALT Building</div>
                  <div className="text-sm">101 College Parkway</div>
                  <div className="text-sm">Arnold, MD 21012</div>
                  <div className="mt-4">
                    <a href="https://maps.google.com/?q=Anne+Arundel+Community+College,+101+College+Parkway,+Arnold,+MD+21012" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="devfest-btn-secondary">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="devfest-body">
              <h5 className="font-semibold text-gray-900 mb-3">Directions & Transportation</h5>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>From Annapolis:</strong> 15 minutes via MD-2 North</li>
                <li>• <strong>From Baltimore:</strong> 45 minutes via I-97 South</li>
                <li>• <strong>From DC Metro:</strong> 1 hour via US-50 East</li>
                <li>• <strong>Public Transit:</strong> Anne Arundel County Transit available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
