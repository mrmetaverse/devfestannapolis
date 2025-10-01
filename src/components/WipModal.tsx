'use client'

import { useState, useEffect } from 'react'
import { X, Calendar, ExternalLink, Construction } from 'lucide-react'

export default function WipModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already seen the modal in this session
    const hasSeenModal = sessionStorage.getItem('hasSeenWipModal')
    if (!hasSeenModal) {
      setIsOpen(true)
    }
  }, [])

  const closeModal = () => {
    setIsOpen(false)
    sessionStorage.setItem('hasSeenWipModal', 'true')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-6 text-white">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <Construction className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Work in Progress</h2>
          </div>
          <p className="text-orange-100">
            We're putting the finishing touches on the site!
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Registration Coming Soon</h3>
                <p className="text-gray-600 text-sm">
                  We'll be using <strong>Eventbrite</strong> for registration. The registration link and event details will be available soon!
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <ExternalLink className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">More Information</h3>
                <p className="text-gray-600 text-sm">
                  Speaker lineup, detailed schedule, and additional event information will be added as we get closer to the event.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 text-sm">
              <strong>Save the Date:</strong> November 15, 2025 | 10:00 AM – 5:00 PM (EST)<br />
              <strong>Location:</strong> AACC CALT Building, Arnold, MD
            </p>
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={closeModal}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Got it, thanks!
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              Join our community chat to stay updated on progress!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}