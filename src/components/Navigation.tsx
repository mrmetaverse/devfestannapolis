'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '#activities', label: 'Activities' },
    { href: '#venue', label: 'Venue' },
    { href: '#community', label: 'Community' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 bg-devfest-surface z-50 border-b border-devfest-lines">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Left aligned per DevFest guidelines */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="devfest-heading-3 text-google-blue">Annapolis</div>
            <div className="devfest-heading-3 text-devfest-ink">DevFest</div>
          </Link>

          {/* Desktop Navigation - Right aligned */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="devfest-nav-item devfest-body"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="https://www.eventbrite.com/e/annapols-devfest-2025-tickets-1766314396909"
              target="_blank"
              rel="noopener noreferrer"
              className="devfest-btn-primary ml-4"
            >
              Register Free
            </Link>
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
                  className="devfest-nav-item devfest-body block"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="https://www.eventbrite.com/e/annapols-devfest-2025-tickets-1766314396909"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="devfest-btn-primary w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Register Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
