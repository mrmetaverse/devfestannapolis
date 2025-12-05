'use client'

import Link from 'next/link'

export default function GetInvolvedNew() {
  return (
    <section id="get-involved" className="bg-blue-500 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-6">
            Get Involved
          </h2>
          
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
            DevFest Annapolis is a community-driven event. Join us in building something amazing together!
          </p>

          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            DevFest Annapolis is looking for Speakers, Sponsors, Partners, and Volunteers to help us deliver 
            a timeless experience that innovates our community and leads inspiration across industries. 
            Tech spans all industries and professions, and our goal is to connect all industries in a day 
            of engagement, learning, and activity.
          </p>


          {/* Calling Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Calling Speakers, Demos, and Robotics
            </h3>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Share your experiences, knowledge, and creations with Maryland&apos;s tech community. 
              We&apos;re looking for speakers on AI, cloud technologies, web development, mobile apps, 
              and emerging tech trends, Demos, & Robotics.
            </p>
          </div>

          {/* Get Involved Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sponsor</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Support innovation; become an official DevFest Annapolis sponsor.</p>
              {/* Apply to Sponsor Button - Commented out for next year */}
              {/* 
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSfyej_8YuhVnS_LgHtb-hkhmQY66gU3i33Asj5HO_3AUYfY8A/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-16 flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 text-sm leading-tight"
              >
                Apply to<br />Sponsor
              </Link>
              */}
            </div>

            <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🤝</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Partner with DevFest Annapolis to broaden your reach.<br /><br /></p>
              {/* Apply to Partner Button - Commented out for next year */}
              {/* 
              <Link
                href="https://forms.gle/X2BawbWefoRyBMqu8"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-16 flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 text-sm leading-tight"
              >
                Apply to<br />Partner
              </Link>
              */}
            </div>

            <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Speak</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Showcase your knowledge; apply to speak at DevFest Annapolis 2025.</p>
              {/* Apply to Speak Button - Commented out for next year */}
              {/* 
              <Link
                href="https://forms.gle/KRDGbMn6m9t4UPdv9"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-16 flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 text-sm leading-tight"
              >
                Apply to<br />Speak
              </Link>
              */}
            </div>

            <div className="bg-blue-50 rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="text-3xl mb-4">🙋‍♀️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">Be part of DevFest Annapolis 25&apos;s success; join our volunteer community.</p>
              {/* Join Our Community Button - Commented out for next year */}
              {/* 
              <Link
                href="https://forms.gle/cCes2WUpKPheFHZu7"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-16 flex items-center justify-center rounded-full font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105 text-sm leading-tight"
              >
                Join Our<br />Community
              </Link>
              */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}