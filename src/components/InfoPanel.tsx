'use client'

import { X, Calendar, ExternalLink, Info } from 'lucide-react'

interface InfoPanelProps {
  isOpen: boolean
  onClose: () => void
}

export default function InfoPanel({ isOpen, onClose }: InfoPanelProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative max-w-md w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center space-x-3 mb-2">
            <Info className="w-8 h-8" />
            <h2 className="text-2xl font-bold">Event Information</h2>
          </div>
          <p className="text-blue-100">
            Everything you need to know about DevFest Annapolis 2025
          </p>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Registration is Now Open!</h3>
                <p className="text-gray-600 text-sm">
                  Registration is available through <strong>Bevy</strong>. Space is limited, so get your free ticket today!
                </p>
                <button
                  onClick={() => window.open('https://gdg.community.dev/events/details/google-gdg-annapolis-presents-devfest-annapolis-2025/cohost-gdg-annapolis', '_blank')}
                  className="mt-2 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition-colors duration-200"
                >
                  Get Your Free Ticket
                </button>
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
              onClick={onClose}
              className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
            >
              Got it, thanks!
            </button>
          </div>

          <div className="mt-4 text-center">
            <p className="text-gray-500 text-xs">
              See you at DevFest Annapolis 2025!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}