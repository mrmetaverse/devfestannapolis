'use client'

// Force dynamic rendering - recompile on every request
export const dynamic = 'force-dynamic'

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

export default function Home() {

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
      
    </main>
  )
}