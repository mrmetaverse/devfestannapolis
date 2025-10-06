export default function Venue() {
  return (
    <section id="venue" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Venue</h2>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">AACC CALT Building</h3>
              <div className="text-lg text-gray-700 space-y-2">
                <p className="font-semibold">Anne Arundel Community College</p>
                <p>101 College Parkway</p>
                <p>Arnold, MD 21012</p>
                <p className="text-green-600 font-medium">🚗 Free Parking Available on Campus</p>
              </div>
            </div>
            
            <div className="bg-blue-600 text-white p-6 rounded-lg mb-8">
              <div className="text-lg font-semibold mb-2">📍 November 15, 2025 | 10:00 AM – 5:00 PM (EST)</div>
              <h3 className="text-2xl font-bold">DevFest Annapolis 2025</h3>
              <p className="mt-2">Anne Arundel Community College</p>
              <p>CALT Building</p>
              <p>101 College Parkway, Arnold, MD 21012</p>
              <p className="mt-2 text-blue-200">🚗 Free Parking Available</p>
            </div>
            
            <button
              disabled
              className="inline-block bg-gray-400 text-gray-700 px-8 py-4 rounded-full text-lg font-bold cursor-not-allowed"
            >
              Registration Coming Soon
            </button>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">View map</h4>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-lg font-semibold mb-2">Historic Inns of Annapolis</div>
                  <div className="text-sm">58 State Cir</div>
                  <div className="text-sm">Annapolis, MD 21401</div>
                  <div className="mt-4 text-sm text-blue-600">
                    <a href="https://maps.google.com/?q=Historic+Inns+of+Annapolis,+58+State+Cir,+Annapolis,+MD+21401" 
                       target="_blank" 
                       rel="noopener noreferrer"
                       className="hover:underline">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
