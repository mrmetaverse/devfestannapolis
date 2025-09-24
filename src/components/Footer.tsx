import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-lg font-semibold text-gray-300 mb-4">
              9AM — 6PM | Oct 3, 2025
            </div>
            <h3 className="text-3xl font-bold mb-2">DevFest Annapolis</h3>
            <p className="text-gray-300">Historic Inns of Annapolis, 58 State Cir</p>
            <p className="text-gray-300">Annapolis, MD 21401</p>
          </div>
          
          <div className="mb-8">
            <Link
              href="#tickets"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Your Tickets
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © 2025 DevFest Annapolis.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Footer Link
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Footer Link
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Footer Link
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Footer Link
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Footer Link
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
