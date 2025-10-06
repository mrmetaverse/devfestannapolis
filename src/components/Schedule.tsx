export default function Schedule() {
  return (
    <section id="agenda" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Annapolis DevFest 2025 Agenda</h2>
          <p className="text-xl text-gray-700">
            A full day of learning, building, and connecting with Maryland&apos;s tech community.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Keynotes & Google Tech Talks */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🎯 Keynotes & Google Tech Talks</h3>
            <p className="text-gray-700 mb-6">
              Future-focused insights from Google leaders and industry experts.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                AI and Machine Learning Trends
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Cloud Technology Future
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Developer Tool Innovations
              </li>
            </ul>
          </div>

          {/* CodeLabs & Workshops */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">💻 CodeLabs & Workshops</h3>
            <p className="text-gray-700 mb-6">
              Practical, guided sessions to sharpen your skills.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Hands-on AI Development
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Cloud Platform Building
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Modern Web Development
              </li>
            </ul>
          </div>

          {/* Small Business AI Sessions */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🤖 Small Business AI Sessions</h3>
            <p className="text-gray-700 mb-6">
              Tailored for entrepreneurs and professionals.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                AI for Operations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Customer Service Automation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Data-Driven Insights
              </li>
            </ul>
          </div>

          {/* Networking & Community Showcase */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">🚀 Networking & Community Showcase</h3>
            <p className="text-gray-700 mb-6">
              Meet Maryland&apos;s top startups, innovators, and community builders.
            </p>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Startup Demos
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Developer Networking
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Community Project Showcase
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Detailed schedule and speaker announcements coming soon!
          </p>
          <button
            disabled
            className="bg-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-bold cursor-not-allowed"
          >
            Full Schedule Coming Soon
          </button>
        </div>
      </div>
    </section>
  )
}
