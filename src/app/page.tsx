'use client'

import { useState } from 'react'
import { Info } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Speakers from '@/components/Speakers'
import GetInvolved from '@/components/GetInvolved'
import Hackathon from '@/components/Hackathon'
import Community from '@/components/Community'
import Schedule from '@/components/Schedule'
import Venue from '@/components/Venue'
import Sponsors from '@/components/Sponsors'
import Tickets from '@/components/Tickets'
import Footer from '@/components/Footer'
import InfoPanel from '@/components/InfoPanel'

export default function Home() {
  const [showInfoPanel, setShowInfoPanel] = useState(false)

  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <About />
      <Speakers />
      <GetInvolved />
      <Hackathon />
      <Community />
      <Schedule />
      <Venue />
      <Sponsors />
      <Tickets />
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