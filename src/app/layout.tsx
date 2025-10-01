import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevFest Annapolis 2025 | A Celebration of Technology, Innovation, and Community',
  description: 'Join us for a full day of learning, building, and connecting. From the latest in AI to hands-on coding, small business clinics, and family-friendly exploration at AACC CALT Building.',
  keywords: 'DevFest, Annapolis, Chesapeake, Anne Arundel County, Maryland, East Coast, AI, Google, cloud, developers, conference, technology, family, small business, GDG Annapolis',
  openGraph: {
    title: 'DevFest Annapolis 2025',
    description: 'A Celebration of Technology, Innovation, and Community - November 15, 2025',
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