interface Speaker {
  name: string
  title: string
  company: string
  session?: string
  bio?: string
}

const featuredSpeakers: Speaker[] = [
  {
    name: "Speaker One",
    title: "TBA",
    company: "Coming Soon"
  },
  {
    name: "Speaker Two", 
    title: "TBA",
    company: "Coming Soon"
  },
  {
    name: "Speaker Three",
    title: "TBA", 
    company: "Coming Soon"
  }
]

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-white text-2xl font-bold">
          {speaker.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
      <p className="text-blue-600 font-semibold mb-1">{speaker.title}</p>
      <p className="text-gray-600">{speaker.company}</p>
    </div>
  )
}

export default function Speakers() {
  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Speakers</h2>
          <p className="text-xl text-gray-700 mb-8">
            Amazing speakers and content coming soon for an unforgettable experience.
          </p>
          <div className="inline-block bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold">
            📢 Speaker announcements coming soon!
          </div>
        </div>

        {/* Featured Speakers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
          {featuredSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

        <div className="text-center">
          <a
            href="#register"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Register Free
          </a>
        </div>
      </div>
    </section>
  )
}
