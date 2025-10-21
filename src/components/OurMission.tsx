'use client'

export default function OurMission() {
  const organizers = [
    { name: "Organizer Name 1", role: "Lead Organizer", image: "/images/person.png" },
    { name: "Organizer Name 2", role: "Tech Lead", image: "/images/person.png" },
    { name: "Organizer Name 3", role: "Community Manager", image: "/images/person.png" },
    { name: "Organizer Name 4", role: "Events Coordinator", image: "/images/person.png" }
  ]

  return (
    <section id="our-mission" className="bg-yellow-500 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-yellow-600 mb-6">
              Our Mission
            </h2>
          <p className="text-2xl lg:text-3xl text-gray-700 font-medium max-w-4xl mx-auto leading-relaxed">
            Building Tech Community in Maryland
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6 leading-relaxed">
            We believe in fostering innovation, collaboration, and growth within Maryland&apos;s tech ecosystem. 
            DevFest Annapolis brings together developers, designers, and tech enthusiasts to learn, share, 
            and build the future together.
          </p>
        </div>

        {/* Organizers Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Meet Our Organizers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {Array.from({ length: 6 }, (_, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4 overflow-hidden rounded-2xl">
                  <img
                    src="/images/person.png"
                    alt="Coming Soon"
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Coming Soon
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}