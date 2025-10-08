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
import InfoIconGlobal from '@/components/InfoIconGlobal'

export default function Home() {
  return (
    <main className="min-h-screen">
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
      <InfoIconGlobal />
    </main>
  )
}