'use client'

import Link from 'next/link'

export default function SponsorsPartnersNew() {
  const allPartners = [
    { name: "AACC", logo: "/images/sponsors/AACC.png", width: 280, height: 100, url: "https://www.aacc.edu/" },
    { name: "Technically", logo: "/images/sponsors/Technically.png", width: 280, height: 100, url: "https://technical.ly/" },
    { name: "MLof Strategies", logo: "/images/sponsors/MLoS.png", width: 280, height: 100, url: "https://www.mlofstrategies.com/" },
    { name: "Shannon Cyber AI", logo: "/images/sponsors/ShannonAI.png", width: 280, height: 100, url: "https://www.shannoncyber.ai/" },
    { name: "AbleSpark", logo: "/images/sponsors/ablespark.png", width: 280, height: 100, url: "https://www.ablespark.com" },
    { name: "Signum", logo: "/images/sponsors/SignumTechnologies.png", width: 280, height: 100, url: "https://signum-tech.com/" },
    { name: "Innovation Maryland", logo: "/images/sponsors/InnovationMaryland.png", width: 280, height: 100, url: "https://innovationmaryland.org/" },
    { name: "Virgent AI", logo: "/images/sponsors/virgentai.png", width: 320, height: 120, url: "https://www.virgent.ai/" },
    { name: "GDG Washington DC", logo: "/images/sponsors/GDGDC.png", width: 280, height: 100, url: "https://gdg.community.dev/gdg-washington-dc/" },
    { name: "GDG Washington University", logo: "/images/sponsors/GDGGEorgeWashingtonUniversity.png", width: 280, height: 100, url: "https://gdg.community.dev/gdg-on-campus-the-george-washington-university-washington-dc-united-states/" },
    { name: "GDG College Park", logo: "/images/sponsors/GDGCollegePark.png", width: 280, height: 100, url: "https://gdg.community.dev/gdg-on-campus-university-of-maryland-college-park-united-states/" },
    { name: "GDG Baltimore", logo: "/images/sponsors/GDGBaltimore.png", width: 280, height: 100, url: "https://gdg.community.dev/gdg-baltimore/" },
    { name: "GDG Annapolis", logo: "/images/sponsors/GDGAnnapolis.png", width: 280, height: 100, url: "https://gdg.community.dev/gdg-annapolis/" }
  ]

  const sponsorshipBenefits = [
    { tier: "Platinum", price: "$5,000+", benefits: ["Logo on all materials", "Keynote opportunity", "Premium booth space", "5 tickets"] },
    { tier: "Gold", price: "$2,500+", benefits: ["Logo on website", "Speaking slot", "Booth space", "3 tickets"] },
    { tier: "Silver", price: "$1,000+", benefits: ["Logo recognition", "Table space", "2 tickets", "Social media mention"] },
    { tier: "Community", price: "$500+", benefits: ["Logo on website", "1 ticket", "Social media mention", "Swag table"] }
  ]

  return (
    <section id="partners" className="bg-green-600 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 text-center mb-6">
            Partners
          </h2>
          
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Thank you to our amazing partners who make DevFest Annapolis possible!
          </p>

          {/* All Partners */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {allPartners.map((partner, index) => (
                <Link
                  key={index}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity ${partner.name.includes('GDG') ? 'h-24' : 'h-16'}`}
                  />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}