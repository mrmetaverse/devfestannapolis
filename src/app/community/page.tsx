import Link from 'next/link'
import { ArrowLeft, MessageCircle, Shield, Globe, Users, Zap, Link as LinkIcon } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Community - Join Our Matrix Space | Chesapeake DevFest 2025',
  description: 'Learn about Matrix and Element, and join the Chesapeake DevFest community for secure, decentralized communication with fellow developers.',
  keywords: 'Matrix, Element, community, chat, developers, DevFest, secure messaging, decentralized',
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
              Chesapeake DevFest is organized by passionate volunteers from across the Chesapeake region 
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
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Matrix for Our Community?</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🛡️ Privacy & Security</h4>
                <p className="text-gray-700 mb-4">
                  As a community that values open source and developer rights, we chose Matrix for its 
                  end-to-end encryption and decentralized architecture. Your conversations stay private.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🌐 Open Standards</h4>
                <p className="text-gray-700 mb-4">
                  Matrix aligns with our values of openness and interoperability. It&apos;s built on open 
                  standards, just like the web technologies we love and teach.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🔗 Bridge Everything</h4>
                <p className="text-gray-700 mb-4">
                  Our community members use different platforms. Matrix lets us bridge Discord, Slack, 
                  Telegram, and more, so everyone can participate from their preferred app.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">🚀 Future-Proof</h4>
                <p className="text-gray-700 mb-4">
                  Matrix is designed for the long term. As our community grows, Matrix scales with us 
                  without vendor lock-in or platform dependency concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Matrix/Element Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What is Matrix & Element?</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                <Globe className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Matrix Protocol</h3>
                <p className="text-blue-100 leading-relaxed">
                  Matrix is an <strong>open, decentralized protocol</strong> for secure, real-time communication—like 
                  email but for chat. It enables encrypted conversations, federation across independently run servers, 
                  and bridging to other platforms.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white">
                <MessageCircle className="w-12 h-12 mb-6" />
                <h3 className="text-2xl font-bold mb-4">Element Client</h3>
                <p className="text-green-100 leading-relaxed">
                  Element is the <strong>most widely used client</strong> built on top of Matrix, offering a polished 
                  interface for messaging, voice, video, file sharing, and collaboration with an intuitive user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Matrix + Element?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Privacy-Focused</h4>
                <p className="text-gray-600">End-to-end encryption and decentralized architecture protect your conversations</p>
              </div>
              <div className="text-center">
                <LinkIcon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Platform Bridging</h4>
                <p className="text-gray-600">Connect to Slack, Discord, WhatsApp, and other platforms from one interface</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-gray-900 mb-2">Open & Federated</h4>
                <p className="text-gray-600">No single company controls your data or communication</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">How to Join Our Matrix Space</h2>
            <p className="text-xl text-gray-700">
              Follow these simple steps to join the Chesapeake DevFest community
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-6 bg-blue-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                1
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Create an Account</h3>
                <p className="text-gray-700 mb-6">
                  You can create an account on any Matrix server. We recommend starting with Element&apos;s hosted service 
                  for the easiest experience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://app.element.io/#/register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Create Element Account
                  </a>
                  <a
                    href="https://element.io/download"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    Download Element App
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-6 bg-green-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                2
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Join Our Space</h3>
                <p className="text-gray-700 mb-6">
                  Click the link below or search for our space ID in Element. You&apos;ll get access to all DevFest channels 
                  and can start connecting with the community immediately.
                </p>
                <div className="bg-gray-100 rounded-lg p-4 mb-6">
                  <p className="text-sm text-gray-600 mb-2">Space ID:</p>
                  <code className="text-lg font-mono text-gray-900">#devfestannapolis:matrix.org</code>
                </div>
                <a
                  href="https://matrix.to/#/#devfestannapolis:matrix.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Zap className="w-6 h-6 mr-2" />
                  Join DevFest Matrix Space
                </a>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-6 bg-purple-50 rounded-2xl p-8">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                3
              </div>
              <div className="flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Connecting</h3>
                <p className="text-gray-700 mb-6">
                  Once you&apos;re in, introduce yourself, ask questions, and connect with other developers, speakers, 
                  and organizers. We have channels for different topics and interests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">💬 General Discussion</h4>
                    <p className="text-sm text-gray-600">Main chat for all attendees</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🤖 AI & Tech Talks</h4>
                    <p className="text-sm text-gray-600">Deep dive into AI topics</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">🚀 Networking</h4>
                    <p className="text-sm text-gray-600">Connect with other developers</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-2">📢 Announcements</h4>
                    <p className="text-sm text-gray-600">Event updates and news</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alternative Ways to Connect</h2>
            <p className="text-xl text-gray-700">
              Prefer other platforms? We&apos;ve got you covered with bridges and alternatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Bridge Connections</h3>
              <p className="text-gray-700 mb-6">
                Our Matrix space can bridge to other platforms, so you can participate from your preferred chat app:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Discord bridge (coming soon)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Slack bridge (coming soon)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Telegram bridge (coming soon)
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-700 mb-6">
                New to Matrix or having trouble joining? We&apos;re here to help!
              </p>
              <div className="space-y-3">
                <a
                  href="https://element.io/help"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 font-medium"
                >
                  → Element Help Center
                </a>
                <a
                  href="https://matrix.org/docs/guides/introduction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 font-medium"
                >
                  → Matrix Getting Started Guide
                </a>
                <p className="text-gray-600 text-sm mt-4">
                  Still stuck? Reach out to our organizers at the event or through our social channels.
                </p>
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
              href="https://matrix.to/#/#devfestannapolis:matrix.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-yellow-400 text-blue-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
            >
              <MessageCircle className="w-6 h-6 mr-2" />
              Join Matrix Space
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
