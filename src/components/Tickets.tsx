'use client'

export default function Tickets() {
  return (
    <section id="register" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Register for Annapolis DevFest 2025</h2>
          <p className="text-xl text-gray-700 mb-8">
            �️ Admission is free, but space is limited. Secure your seat today for Maryland&apos;s premier tech conference.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 text-center border-2 border-blue-200 hover:shadow-xl transition-all duration-300">
            <div className="text-6xl mb-4">🎟️</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Free Admission</h3>
            <div className="text-blue-600 font-semibold mb-4">November 15, 2025</div>
            <div className="text-5xl font-bold text-green-600 mb-4">FREE</div>
            <div className="text-gray-600 mb-6">
              Includes all activities, food, swag, and networking opportunities
            </div>
            <button 
              onClick={() => window.open('https://gdg.community.dev/events/details/google-gdg-annapolis-presents-devfest-annapolis-2025/cohost-gdg-annapolis', '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-full text-lg font-bold transition-colors duration-200 mb-4"
            >
              🎫 Register Free on Bevy
            </button>
            <div className="text-sm text-gray-500">
              Registration is quick and free - reserve your place at Annapolis DevFest 2025
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl mb-2">🎒</div>
              <div className="font-semibold text-gray-900">Exclusive Swag</div>
              <div className="text-gray-600 text-sm">DevFest branded goodies</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">☁️</div>
              <div className="font-semibold text-gray-900">Google Cloud Credits</div>
              <div className="text-gray-600 text-sm">For your next big project</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <div className="font-semibold text-gray-900">Professional Training</div>
              <div className="text-gray-600 text-sm">Career-boosting badges</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
