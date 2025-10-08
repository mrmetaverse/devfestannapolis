import type { Metadata, Viewport } from 'next'
import { Roboto, Open_Sans } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto',
  display: 'swap',
})

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${roboto.variable} ${openSans.variable} font-roboto`}>{children}</body>
    </html>
  )
}