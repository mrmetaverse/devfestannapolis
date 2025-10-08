'use client'

import Image from 'next/image'

interface Sponsor {
  name: string
  type: 'sponsor' | 'partner'
  image?: string // path relative to /public
  width?: number
  height?: number
}

// Placeholder sponsors and partners - will be updated with real logos
const sponsors: Sponsor[] = [
  { name: 'Google', type: 'sponsor', image: '/sponsors/google.png', width: 200, height: 64 },
  { name: 'Virgent AI', type: 'sponsor', image: '/sponsors/virgentai.png', width: 320, height: 120 },
  // Placeholders (no image yet)
  { name: 'Sponsor Three', type: 'sponsor' },
  { name: 'Sponsor Four', type: 'sponsor' },
  { name: 'Sponsor Five', type: 'sponsor' },
  { name: 'Sponsor Six', type: 'sponsor' },
]

const partners: Sponsor[] = [
  { name: 'Virgent AI', type: 'partner', image: '/partners/virgentai.png', width: 320, height: 120 },
  { name: 'Partner Two', type: 'partner' },
  { name: 'Partner Three', type: 'partner' },
  { name: 'Partner Four', type: 'partner' },
  { name: 'Partner Five', type: 'partner' },
  { name: 'Partner Six', type: 'partner' },
]

function LogoItem({ name, type, image, width = 160, height = 64 }: { name: string, type: 'sponsor' | 'partner', image?: string, width?: number, height?: number }) {
  const gradient = type === 'sponsor' ? 'from-blue-500 to-indigo-600' : 'from-green-500 to-emerald-600'
  const initials = name.split(' ').map(w => w[0]).join('').slice(0,4)
  return (
    <div className="flex items-center justify-center h-24 w-56">
      {image ? (
        <Image
          src={image}
          alt={`${name} logo`}
          width={width}
          height={height}
          className="object-contain max-h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
          priority={false}
        />
      ) : (
        <div className={`w-20 h-20 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center text-white font-bold text-lg tracking-wide`}>{initials}</div>
      )}
    </div>
  )
}

function InfiniteScroll({ items, type }: { items: Sponsor[], type: 'sponsor' | 'partner' }) {
  const duplicatedItems = [...items, ...items]
  return (
    <div className="overflow-hidden py-4">
      <div className="flex gap-16 animate-marquee hover:pause-animation">
        {duplicatedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0">
            <LogoItem name={item.name} type={type} image={item.image} width={item.width} height={item.height} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Sponsors() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sponsors Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Sponsors</h2>
          <p className="text-xl text-gray-700 mb-8">
            Thank you to our amazing sponsors who make this event possible.
          </p>
        </div>
        
        <div className="mb-12 marquee-wrapper" tabIndex={0} aria-label="Sponsor logos scrolling. Focus to pause.">
          <InfiniteScroll items={sponsors} type="sponsor" />
        </div>

        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-700 mb-8">
            Collaborating with incredible organizations to bring you the best experience.
          </p>
        </div>
        
        <div className="mb-12 marquee-wrapper" tabIndex={0} aria-label="Partner logos scrolling. Focus to pause.">
          <InfiniteScroll items={partners} type="partner" />
        </div>

        <div className="text-center">
          <div className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-semibold mb-8">
            🤝 Interested in sponsoring or partnering? Get in touch!
          </div>
          <br />
          <a
            href="https://forms.gle/X2BawbWefoRyBMqu8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  )
}
