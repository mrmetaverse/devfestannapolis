import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevFest Annapolis 2025 | Community-Led Software Engineering Conference',
  description: 'DevFest Annapolis is an annual, community-led software engineering conference aimed at educating software developers, architects, entrepreneurs, quality focused individuals and tech leaders.',
  keywords: 'DevFest, Annapolis, software engineering, developers, conference, AI, technology',
  openGraph: {
    title: 'DevFest Annapolis 2025',
    description: 'Community-led software engineering conference in Annapolis',
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
      <body className={inter.className}>{children}</body>
    </html>
  )
}