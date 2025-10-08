'use client'

import { useState } from 'react'
import { Info } from 'lucide-react'
import InfoPanel from './InfoPanel'

export default function InfoIconGlobal() {
  const [showInfoPanel, setShowInfoPanel] = useState(false)

  return (
    <>
      {/* Fixed Info Icon - Global */}
      <div className="fixed bottom-8 right-8 z-50">
        <button
          onClick={() => setShowInfoPanel(true)}
          className="glass-panel rounded-full p-3 hover:bg-white/20 transition-all duration-200 group shadow-lg"
          aria-label="Event Information"
        >
          <Info className="w-6 h-6 text-black/70 group-hover:text-black transition-colors duration-200" />
        </button>
      </div>

      {/* Info Panel */}
      <InfoPanel 
        isOpen={showInfoPanel} 
        onClose={() => setShowInfoPanel(false)} 
      />
    </>
  )
}