'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#activities', label: 'Activities' },
    { href: '#get-involved', label: 'Get Involved' },
    { href: '#venue', label: 'Venue' },
    { href: '/community', label: 'Community' },
    { href: '#register', label: 'Register' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold text-blue-600">Annapolis</div>
            <div className="text-2xl font-bold text-gray-900">DevFest</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#register"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              Register Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#register"
                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200 font-medium mx-4 text-center"
                onClick={() => setIsOpen(false)}
              >
                Register Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
