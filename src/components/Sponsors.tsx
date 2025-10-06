'use client'

interface Sponsor {
  name: string
  type: 'sponsor' | 'partner'
}

// Placeholder sponsors and partners - will be updated with real logos
const sponsors: Sponsor[] = [
  { name: "Google", type: "sponsor" },
  { name: "Sponsor Two", type: "sponsor" },
  { name: "Sponsor Three", type: "sponsor" },
  { name: "Sponsor Four", type: "sponsor" },
  { name: "Sponsor Five", type: "sponsor" },
  { name: "Sponsor Six", type: "sponsor" },
]

const partners: Sponsor[] = [
  { name: "Partner One", type: "partner" },
  { name: "Partner Two", type: "partner" },
  { name: "Partner Three", type: "partner" },
  { name: "Partner Four", type: "partner" },
  { name: "Partner Five", type: "partner" },
  { name: "Partner Six", type: "partner" },
]

function LogoPlaceholder({ name, type }: { name: string, type: 'sponsor' | 'partner' }) {
  const bgColor = type === 'sponsor' ? 'from-blue-500 to-indigo-600' : 'from-green-500 to-emerald-600'
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center h-24">
      <div className={`w-16 h-16 bg-gradient-to-br ${bgColor} rounded-lg flex items-center justify-center`}>
        <span className="text-white font-bold text-sm">
          {name.split(' ').map(word => word[0]).join('')}
        </span>
      </div>
      <div className="ml-4">
        <div className="font-semibold text-gray-900">{name}</div>
        <div className="text-sm text-gray-500 capitalize">{type}</div>
      </div>
    </div>
  )
}

function InfiniteScroll({ items, type }: { items: Sponsor[], type: 'sponsor' | 'partner' }) {
  // Duplicate items for seamless infinite scroll
  const duplicatedItems = [...items, ...items]
  
  return (
    <div className="overflow-hidden">
      <div className="flex gap-6 animate-marquee hover:pause-animation">
        {duplicatedItems.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex-shrink-0 w-72">
            <LogoPlaceholder name={item.name} type={type} />
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
        
        <div className="mb-20">
          <InfiniteScroll items={sponsors} type="sponsor" />
        </div>

        {/* Partners Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
          <p className="text-xl text-gray-700 mb-8">
            Collaborating with incredible organizations to bring you the best experience.
          </p>
        </div>
        
        <div className="mb-12">
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
