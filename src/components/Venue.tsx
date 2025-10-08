"use client"

import { useEffect, useRef, useState } from 'react'

export default function Venue() {
  const mapRef = useRef<HTMLDivElement | null>(null)
  const [mapVisible, setMapVisible] = useState(false)

  useEffect(() => {
    if (!mapRef.current || mapVisible) return
    const el = mapRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setMapVisible(true)
            observer.disconnect()
          }
        })
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.25 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [mapVisible])
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
              <div ref={mapRef} className="relative aspect-video overflow-hidden rounded-lg shadow-sm group">
                {/* Minimalist Google Map Embed (grayscale) */}
                {mapVisible ? (
                  <iframe
                    title="Map showing location of Anne Arundel Community College"
                    className="absolute inset-0 w-full h-full filter grayscale contrast-110 brightness-105 group-hover:grayscale-0 transition duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12393.807569236124!2d-76.52116826325663!3d39.05061478599836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7f9c7dea9619f%3A0x7396e4719d820190!2sAnne%20Arundel%20Community%20College!5e0!3m2!1sen!2sus!4v1759953869806!5m2!1sen!2sus"
                    allowFullScreen
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse text-gray-500 text-sm tracking-wide">
                    Loading map…
                  </div>
                )}
                {/* Subtle gradient overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/70 via-white/20 to-white/0 pointer-events-none" />
                {/* Fallback / quick info chip */}
                <div className="absolute bottom-4 left-4 bg-white/85 backdrop-blur-sm rounded-md px-4 py-2 shadow text-sm text-gray-800 flex flex-col">
                  <span className="font-semibold">Anne Arundel Community College</span>
                  <span>CALT Building</span>
                  <span>101 College Parkway</span>
                  <span>Arnold, MD 21012</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <a
                    href="https://maps.google.com/?q=Anne+Arundel+Community+College,+101+College+Parkway,+Arnold,+MD+21012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-md bg-white/90 hover:bg-white text-gray-800 text-sm font-medium px-4 py-2 shadow focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/40"
                    aria-label="Open location in Google Maps"
                  >
                    Open in Google Maps ↗
                  </a>
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
