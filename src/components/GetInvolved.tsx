const involvement = [
  {
    title: "Sponsor",
    description: "Support innovation; become an official DevFest Annapolis sponsor.",
    action: "Apply to sponsor",
    href: "https://forms.gle/X2BawbWefoRyBMqu8"
  },
  {
    title: "Partner",
    description: "Partner with DevFest Annapolis to broaden your reach.",
    action: "Apply to partner",
    href: "https://forms.gle/X2BawbWefoRyBMqu8"
  },
  {
    title: "Speak",
    description: "Showcase your knowledge; apply to speak at DevFest Annapolis 2025.",
    action: "Apply to speak",
    href: "https://forms.gle/KRDGbMn6m9t4UPdv9"
  },
  {
    title: "Volunteer",
    description: "Be part of DevFest Annapolis 25&apos;s success; join our volunteer community.",
    action: "Join Community",
    href: "https://forms.gle/cCes2WUpKPheFHZu7"
  }
]

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get involved</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {involvement.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
              {/* All Buttons - Commented out for next year */}
              {/* 
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
              >
                {item.action}
              </a>
              */}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
