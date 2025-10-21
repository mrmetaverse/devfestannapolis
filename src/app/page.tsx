'use client'

// Force dynamic rendering - recompile on every request
export const dynamic = 'force-dynamic'

import { useState } from 'react'
import { Info } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import WhatToExpect from '@/components/WhatToExpect'
import OurMission from '@/components/OurMission'
import WhyAttend from '@/components/WhyAttend'
import EventVenue from '@/components/EventVenue'
import GetInvolvedNew from '@/components/GetInvolvedNew'
import SpeakersNew from '@/components/SpeakersNew'
import BuildFutureAI from '@/components/BuildFutureAI'
import SponsorsPartnersNew from '@/components/SponsorsPartnersNew'
import ReadyToJoin from '@/components/ReadyToJoin'
import About from '@/components/About'
import GetInvolved from '@/components/GetInvolved'
import Venue from '@/components/Venue'
import Tickets from '@/components/Tickets'
import Footer from '@/components/Footer'
import InfoPanel from '@/components/InfoPanel'

export default function Home() {
  const [showInfoPanel, setShowInfoPanel] = useState(false)

  return (
    <main className="min-h-screen relative">
      <ReadyToJoin />
      <Navigation />
      <WhatToExpect />
      <WhyAttend />
      <EventVenue />
      <SpeakersNew />
      <GetInvolvedNew />
      <BuildFutureAI />
      <SponsorsPartnersNew />
      <OurMission />
      <Footer />

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
    </main>
  )
}