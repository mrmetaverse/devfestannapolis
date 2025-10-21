'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react' 

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#ready-to-join', label: 'Register Now', bgColor: 'bg-blue-500' },
    { href: '#what-to-expect', label: 'What to Expect', bgColor: 'bg-green-500' },
    { href: '#why-attend', label: 'Why Attend', bgColor: 'bg-yellow-500' },
    { href: '#event-venue', label: 'Event Venue', bgColor: 'bg-blue-500' },
    { href: '#speakers', label: 'Speakers', bgColor: 'bg-green-500' },
    { href: '#get-involved', label: 'Get Involved', bgColor: 'bg-yellow-500' },
    { href: '#hackathon', label: 'Hackathon', bgColor: 'bg-blue-500' },
    { href: '#partners', label: 'Partners', bgColor: 'bg-green-500' },
    { href: '#our-mission', label: 'Our Mission', bgColor: 'bg-yellow-500' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-devfest-surface z-50 border-b border-devfest-lines">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo - Left aligned per DevFest guidelines */}
          <Link href="/" className="flex items-center space-x-4">
            <Image
              src="/images/devfest_logo.png"
              alt="DevFest Annapolis logo"
              width={400}
              height={80}
              className="h-16 w-auto sm:h-20"
              priority
            />
            <div className="block">
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold">
                <span className="text-blue-600">DevFest</span>{' '}
                <span className="text-gray-900">Annapolis</span>
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation - Right aligned in two rows */}
          <div className="hidden md:flex flex-col space-y-2 items-end">
            {/* First row - 5 buttons */}
            <div className="flex space-x-2 justify-end">
              {navItems.slice(0, 5).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${item.bgColor} text-white px-3 py-1.5 rounded-md font-medium hover:opacity-90 transition-opacity text-sm`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            {/* Second row - 4 buttons */}
            <div className="flex space-x-2 justify-end">
              {navItems.slice(5, 9).map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${item.bgColor} text-white px-3 py-1.5 rounded-md font-medium hover:opacity-90 transition-opacity text-sm`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-devfest-ink hover:text-google-blue transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-devfest-lines">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${item.bgColor} text-white px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity block text-center`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
