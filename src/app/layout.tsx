import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'

// Google Sans fallback to Roboto as per DevFest guidelines
const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
  display: 'swap',
})

const robotoMono = Roboto_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-roboto-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Annapolis DevFest 2025 | Tech & Innovation Conference',
  description: 'Join Annapolis DevFest 2025 for tech talks, coding labs, and AI clinics. Free event at AACC. Learn, connect, and build the future.',
  keywords: 'DevFest, Annapolis, Maryland, tech conference, AI, Google, cloud, developers, innovation, AACC, Anne Arundel County, East Coast, coding labs, small business',
  openGraph: {
    title: 'Annapolis DevFest 2025 | Tech & Innovation Conference',
    description: 'Join Annapolis DevFest 2025 for tech talks, coding labs, and AI clinics. Free event at AACC - November 15, 2025',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${robotoMono.variable} font-roboto`}>{children}</body>
    </html>
  )
}