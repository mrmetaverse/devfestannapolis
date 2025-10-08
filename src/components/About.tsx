'use client'

export default function About() {
  return (
    <section id="about" className="devfest-section bg-devfest-surface-alt">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* What to Expect Section */}
        <div className="text-center mb-16">
          <h2 className="devfest-heading-2 text-devfest-ink mb-12">What to Expect at DevFest Annapolis</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="devfest-card-interactive text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="devfest-heading-3 text-devfest-ink mb-3">Google Tech Talks</h3>
              <p className="devfest-body">Hear from Google experts on the future of AI, cloud, and emerging technologies.</p>
            </div>
            
            <div className="devfest-card-interactive text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="devfest-heading-3 text-devfest-ink mb-3">Hands-On CodeLabs</h3>
              <p className="devfest-body">Build real projects with the latest tools, guided step by step.</p>
            </div>
            
            <div className="devfest-card-interactive text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="devfest-heading-3 text-devfest-ink mb-3">Small Business AI Clinics</h3>
              <p className="devfest-body">Discover how AI can streamline operations and transform your business.</p>
            </div>
            
            <div className="devfest-card-interactive text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="devfest-heading-3 text-devfest-ink mb-3">Startup & Community Showcase</h3>
              <p className="devfest-body">Connect with Maryland&apos;s changemakers, founders, developers, and innovators.</p>
            </div>
          </div>
        </div>

        {/* Why Attend Section */}
        <div className="devfest-card p-12 mb-16 text-center">
          <h2 className="devfest-heading-2 text-devfest-ink mb-6">Why Attend DevFest?</h2>
          <p className="devfest-body text-devfest-sub-ink max-w-2xl mx-auto leading-relaxed">
            Technology isn&apos;t just about code—it&apos;s about people, ideas, and building the future together. 
            Whether you&apos;re a developer, small business owner, or student, you&apos;ll leave with new knowledge, 
            new connections, and new opportunities.
          </p>
        </div>

        {/* Event Details Section */}
        <div className="text-center mb-16">
          <h2 className="devfest-heading-2 text-devfest-ink mb-12">Event Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Date & Location Card - improved contrast with darker gradient & backdrop */}
            <div className="relative overflow-hidden devfest-card border border-white/40 shadow-xl bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700">
              <div className="absolute inset-0 backdrop-blur-sm bg-blue-700/20" aria-hidden="true" />
              <div className="relative text-left">
                <h3 className="devfest-heading-3 mb-4 text-white font-bold flex items-center gap-2">
                  <span aria-hidden="true">📍</span>
                  <span>Date & Location</span>
                </h3>
                <p className="devfest-body mb-2 text-white font-semibold drop-shadow-sm">November 15, 2025</p>
                <p className="devfest-body mb-2 text-blue-50 font-semibold drop-shadow-sm">Anne Arundel Community College</p>
                <p className="devfest-body mb-2 text-blue-50 font-semibold drop-shadow-sm">CALT Building</p>
                <p className="devfest-caption text-blue-100 font-medium">Free Parking Available</p>
              </div>
            </div>

            {/* Registration Card - improved contrast */}
            <div className="relative overflow-hidden devfest-card border border-white/40 shadow-xl bg-gradient-to-br from-green-600 via-green-600 to-green-700">
              <div className="absolute inset-0 backdrop-blur-sm bg-green-800/10" aria-hidden="true" />
              <div className="relative text-left">
                <h3 className="devfest-heading-3 mb-4 text-white font-bold flex items-center gap-2">
                  <span aria-hidden="true">🎟️</span>
                  <span>Free Registration</span>
                </h3>
                <p className="devfest-body mb-6 text-green-50 font-semibold drop-shadow-sm">Admission is free, but space is limited</p>
                <button
                  onClick={() => window.open('https://gdg.community.dev/events/details/google-gdg-annapolis-presents-devfest-annapolis-2025/cohost-gdg-annapolis', '_blank')}
                  className="devfest-btn-secondary bg-white/95 text-green-700 border-white/60 hover:bg-white cursor-pointer font-bold focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-green-700 transition"
                >
                  Get Your Free Ticket
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="devfest-card p-12 mb-16 text-center">
          <h2 className="devfest-heading-2 text-devfest-ink mb-6">Powered by Google Developer Groups (GDG Annapolis)</h2>
          <p className="devfest-body text-devfest-sub-ink max-w-2xl mx-auto leading-relaxed mb-12">
            DevFest is a global movement, with events hosted by Google Developer Groups around the world. 
            Annapolis DevFest 2025 is our Maryland chapter&apos;s contribution to this tradition, building bridges 
            between developers, entrepreneurs, and the wider tech ecosystem.
          </p>
          
          <div>
            <h3 className="devfest-heading-3 text-devfest-ink mb-8">Who Should Attend?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="devfest-card text-center">
                <div className="text-3xl mb-4">👨‍💻</div>
                <h4 className="devfest-body font-medium text-devfest-ink mb-2">Developers & Engineers</h4>
                <p className="devfest-caption text-devfest-sub-ink">Learn cutting-edge tools and techniques</p>
              </div>
              <div className="devfest-card text-center">
                <div className="text-3xl mb-4">🚀</div>
                <h4 className="devfest-body font-medium text-devfest-ink mb-2">Entrepreneurs & Business Owners</h4>
                <p className="devfest-caption text-devfest-sub-ink">Discover AI solutions for your business</p>
              </div>
              <div className="devfest-card text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h4 className="devfest-body font-medium text-devfest-ink mb-2">Students & Curious Learners</h4>
                <p className="devfest-caption text-devfest-sub-ink">Explore tech careers and opportunities</p>
              </div>
              <div className="devfest-card text-center">
                <div className="text-3xl mb-4">☁️</div>
                <h4 className="devfest-body font-medium text-devfest-ink mb-2">Professionals Exploring AI & Cloud</h4>
                <p className="devfest-caption text-devfest-sub-ink">Stay ahead of technology trends</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <h2 className="devfest-heading-2 text-devfest-ink mb-6">Our Mission: Building Tech Community in Maryland</h2>
          <p className="devfest-body text-devfest-sub-ink max-w-2xl mx-auto leading-relaxed">
            Our mission is to make Maryland a hub for innovation. DevFest isn&apos;t just about the tools and code—
            it&apos;s about collaboration, growth, and creating opportunities that extend far beyond Annapolis.
          </p>
        </div>
      </div>
    </section>
  )
}
