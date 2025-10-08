import Link from 'next/link'
import { ArrowLeft, MessageCircle, Users } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - Join Our Community | DevFest Annapolis 2025',
  description: 'Join the DevFest Annapolis community and connect with fellow developers, organizers, and tech enthusiasts in Maryland.',
  keywords: 'community, chat, developers, DevFest, Annapolis, Chesapeake, Anne Arundel County, Maryland, technology, networking',
}

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white pt-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="inline-flex items-center text-purple-200 hover:text-white mb-8 transition-colors duration-200">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to DevFest
          </Link>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Join Our <span className="text-yellow-400">Community</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow developers, get event updates, and be part of a volunteer-driven community 
              that truly cares about technology in Maryland and connecting folks to resources that make a real difference.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Who We Are</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              DevFest Annapolis is organized by passionate volunteers from across the Chesapeake region 
              who truly care about technology in Maryland and connecting folks to resources that make a real difference.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">GDG</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Google Developer Groups</h3>
                  <p className="text-blue-600 font-medium">Global Community Network</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Google Developer Groups (GDG) are community-driven organizations that bring together developers 
                interested in Google technologies. With hundreds of chapters worldwide, GDGs provide a platform 
                for learning, sharing, and building with the latest Google tools and technologies.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">ANN</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">GDG Annapolis</h3>
                  <p className="text-green-600 font-medium">Our Local Chapter</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                GDG Annapolis serves the greater Chesapeake Bay region, bringing together developers, entrepreneurs, 
                students, and tech enthusiasts. We organize meetups, workshops, and events like DevFest to foster 
                learning, networking, and innovation in our local tech community.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">AACC</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Anne Arundel Community College</h3>
                  <p className="text-purple-600 font-medium">Our Venue Partner</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                AACC is a leading community college serving Anne Arundel County and beyond. Their CALT 
                (Center for Applied Learning & Technology) Building provides state-of-the-art facilities 
                perfect for our tech conference, supporting education and innovation in our region.
              </p>
            </div>

            <div className="bg-orange-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-lg">♥</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Volunteer-Driven</h3>
                  <p className="text-orange-600 font-medium">Community First</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our organizing team consists of volunteers from across the Chesapeake region—developers, 
                educators, entrepreneurs, and tech advocates who donate their time because they believe 
                in building a stronger, more connected tech community in Maryland.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Values</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🛡️ Open Source First</h4>
                <p className="text-gray-700 mb-4">
                  We believe in open technologies and transparent community building. Our tools and 
                  processes reflect these values.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🌐 Inclusive & Welcoming</h4>
                <p className="text-gray-700 mb-4">
                  Everyone is welcome in our community regardless of experience level, background, 
                  or preferred technologies.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🔗 Connect & Collaborate</h4>
                <p className="text-gray-700 mb-4">
                  We bring together developers, students, entrepreneurs, and tech enthusiasts to 
                  learn from each other and build together.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🚀 Long-term Impact</h4>
                <p className="text-gray-700 mb-4">
                  Our goal is to create lasting connections and drive innovation in Maryland&apos;s 
                  tech ecosystem for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Connection Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Connect</h2>
            <p className="text-xl text-gray-700">
              Join our community chat to stay connected with organizers, speakers, and fellow attendees
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="text-center mb-8">
              <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community Chat</h3>
              <p className="text-gray-700 mb-6">
                Join our planning committee discussions and connect with organizers, speakers, and fellow community members.
              </p>
              <div className="bg-blue-50 rounded-lg p-6 mb-6 text-left">
                <h4 className="font-bold text-gray-900 mb-3">How to Join Our Matrix Community:</h4>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  <li>Create a Matrix account at <a href="https://matrix.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">matrix.org</a></li>
                  <li>Contact our organizers via <a href="https://www.linkedin.com/company/gdg-annapolis/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> or email</li>
                  <li>Request access to our planning committee channel</li>
                  <li>Get involved in organizing DevFest Annapolis 2025!</li>
                </ol>
              </div>
              <a
                href="https://www.linkedin.com/company/gdg-annapolis/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Us on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Join Our Community</h2>
            <p className="text-xl text-gray-700">
              Follow these simple steps to join the DevFest Annapolis community
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6 bg-blue-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Our Team</h3>
                <p className="text-gray-700 mb-6">
                  First, reach out to our organizing team via LinkedIn or email to request access to our planning committee discussions.
                </p>
                <a
                  href="https://www.linkedin.com/company/gdg-annapolis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Users className="w-6 h-6 mr-2" />
                  Contact via LinkedIn
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6 bg-green-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Connecting</h3>
                <p className="text-gray-700 mb-6">
                  Once you&apos;re in, introduce yourself, ask questions, and connect with other developers, speakers, 
                  and organizers. Join discussions and stay updated on DevFest news.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">💬 General Discussion</h4>
                    <p className="text-sm text-gray-600">Main chat for all attendees</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🤖 AI & Tech Talks</h4>
                    <p className="text-sm text-gray-600">Deep dive into AI topics</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🚀 Networking</h4>
                    <p className="text-sm text-gray-600">Connect with other developers</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-2">📢 Announcements</h4>
                    <p className="text-sm text-gray-600">Event updates and news</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join a community of passionate volunteers from across the Chesapeake region who are building 
            a stronger, more connected tech ecosystem in Maryland. Every voice matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/company/gdg-annapolis/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
            >
              <Users className="w-6 h-6 mr-2" />
              Connect with Our Team
            </a>
            <Link
              href="/"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-blue-900 transition-all duration-200"
            >
              <ArrowLeft className="w-6 h-6 mr-2" />
              Back to DevFest
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
