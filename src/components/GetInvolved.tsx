const involvement = [
  {
    title: "Sponsor",
    description: "Support innovation; become an official Chesapeake DevFest sponsor.",
    action: "Apply to sponsor",
    href: "#sponsor"
  },
  {
    title: "Partner",
    description: "Partner with Chesapeake DevFest to broaden your reach.",
    action: "Apply to partner",
    href: "#partner"
  },
  {
    title: "Speak",
    description: "Showcase your knowledge; apply to speak at Chesapeake DevFest 2025.",
    action: "Apply to speak",
    href: "#speak"
  },
  {
    title: "Volunteer",
    description: "Be part of Chesapeake DevFest 25&apos;s success; join our volunteer community.",
    action: "Join Community",
    href: "/community"
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
              <a
                href={item.href}
                className="inline-block px-6 py-3 rounded-full font-semibold transition-all duration-200 bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105"
              >
                {item.action}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
