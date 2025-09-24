import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="text-lg font-semibold text-gray-300 mb-4">
              November 15, 2025 | 10:00 AM – 5:00 PM (EST)
            </div>
            <h3 className="text-3xl font-bold mb-2">Chesapeake DevFest 2025</h3>
            <p className="text-gray-300">AACC CALT Building</p>
            <p className="text-gray-300">101 College Parkway, Arnold, MD 21012</p>
          </div>
          
          <div className="mb-8">
            <Link
              href="#register"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Register Free
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              Copyright © 2025 Chesapeake DevFest - GDG Annapolis.
            </p>
            <div className="flex space-x-6">
              <Link href="https://matrix.to/#/#devfestannapolis:matrix.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                Matrix Community
              </Link>
              <Link href="https://github.com/mrmetaverse/devfestannapolis" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-200">
                GitHub
              </Link>
              <Link href="#speakers" className="text-gray-400 hover:text-white transition-colors duration-200">
                Speakers
              </Link>
              <Link href="#hackathon" className="text-gray-400 hover:text-white transition-colors duration-200">
                Hackathon
              </Link>
              <Link href="#get-involved" className="text-gray-400 hover:text-white transition-colors duration-200">
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
