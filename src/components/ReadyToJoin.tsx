'use client'

import Link from 'next/link'
import EventGallery from './EventGallery'

export default function ReadyToJoin() {
  const quickFacts = [
    { label: "Date", value: "November 15, 2025", icon: "📅" },
    { label: "Time", value: "10:00 AM - 5:00 PM", icon: "⏰" },
    { label: "Location", value: "AACC CALT Building", icon: "📍" },
    { label: "Cost", value: "Completely FREE", icon: "🎁" }
  ]

  const reasons = [
    { title: "Learn from Experts", description: "20+ sessions from industry leaders" },
    { title: "Network & Connect", description: "Meet 500+ fellow developers" },
    { title: "Hands-on Experience", description: "Interactive workshops and labs" },
    { title: "AI Innovation", description: "Cutting-edge AI talks and hackathon" },
    { title: "Free Everything", description: "Food, swag, and learning materials" },
    { title: "Local Community", description: "Build Maryland&apos;s tech ecosystem" }
  ]

  return (
    <section id="ready-to-join" className="bg-blue-500 py-16 pt-40">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-6">
            DevFest Annapolis 2025
          </h2>
          
          {/* Paragraph commented out */}
          {/*
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Don&apos;t miss Maryland&apos;s premier developer conference. Register now and be part of 
            an amazing community-driven tech event!
          </p>
          */}

          {/* Quick Facts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {quickFacts.map((fact, index) => (
              <div key={index} className="text-center bg-blue-50 rounded-xl p-6">
                <div className="text-3xl mb-3">{fact.icon}</div>
                <div className="font-semibold text-gray-900 mb-1">{fact.label}</div>
                <div className="text-blue-600 font-bold">{fact.value}</div>
              </div>
            ))}
          </div>


          {/* Thank You Message */}
          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Thank you to everyone who made DevFest Annapolis 2025<br />a huge success!
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              We couldn&apos;t have done it without our amazing speakers, sponsors, volunteers, and attendees. 
              Your passion and dedication made this event truly special!
            </p>
          </div>

          {/* Event Photo Gallery */}
          <EventGallery />

          {/* Registration CTA - Commented out for next year */}
          {/* 
          <div className="text-center bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Registration is Now Open!
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Secure your spot at DevFest Annapolis 2025. Early registration gets you 
              priority access to workshops and guaranteed swag!
            </p>
            <div className="flex justify-center mb-6">
              <Link
                href="https://gdg.community.dev/events/details/google-gdg-annapolis-presents-devfest-annapolis-2025/cohost-gdg-annapolis"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Register Free Now
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Limited to 500 attendees • Registration closes when full
            </p>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}