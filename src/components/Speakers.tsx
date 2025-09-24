interface Speaker {
  name: string
  title: string
  company: string
  session?: string
  bio?: string
}

const featuredSpeakers: Speaker[] = [
  {
    name: "Josh Gordon",
    title: "Head of AI Developer Relations",
    company: "Google"
  },
  {
    name: "Prof Mary (Missy) Cummings",
    title: "Director",
    company: "Mason Autonomy & Robotics Center"
  },
  {
    name: "Adam H Phillips",
    title: "Founder & Managing Partner",
    company: "AthletesInnovate Ventures"
  },
  {
    name: "Clinton Teegarden",
    title: "Distinguished Engineer",
    company: "Capital One"
  },
  {
    name: "Vaishnavi Gudur",
    title: "Software Engineer",
    company: "Microsoft"
  },
  {
    name: "Shilpa Shastri",
    title: "Principal Product Manager",
    company: "IBM"
  },
  {
    name: "Dr. Michelle Lee",
    title: "Chief Technology Officer",
    company: "ITHAKA"
  },
  {
    name: "Yufeng Guo",
    title: "Developer Advocate",
    company: "Google"
  }
]

const allSpeakers: Speaker[] = [
  ...featuredSpeakers,
  {
    name: "Sujata Sridharan",
    title: "Senior Software Engineer",
    company: "Bolt"
  },
  {
    name: "Hadar Geva",
    title: "CTO & Co-Founder",
    company: "Myop"
  },
  {
    name: "Madona Wambua",
    title: "Principal Software Engineer",
    company: "Capital One"
  },
  {
    name: "Brady Cusack",
    title: "Co-Founder",
    company: "Shannon AI"
  },
  {
    name: "Kiruthika Subramani",
    title: "Data Scientist",
    company: "Bell Canada"
  },
  {
    name: "Andrew Liu",
    title: "Senior Software Engineer",
    company: "Google"
  },
  {
    name: "Vrinda Bhatia",
    title: "Senior Software Engineer",
    company: "Block"
  },
  {
    name: "Will Angel",
    title: "AI Engineer",
    company: "Excella"
  },
  {
    name: "Kolton Andrus",
    title: "CEO",
    company: "Gremlin Inc."
  },
  {
    name: "Lior Hacohen",
    title: "Founder & CEO",
    company: "Hucheck Security"
  },
  {
    name: "Adalbert De La Cruz",
    title: "Founder",
    company: "Clarity"
  },
  {
    name: "Bharath Ramachandramurthy",
    title: "Director of Product Management",
    company: "Qualcomm"
  },
  {
    name: "Jason Michael Perry",
    title: "Founder & Chief AI Officer",
    company: "PerryLabs"
  },
  {
    name: "Andrey Mikhalchuk",
    title: "CTO",
    company: "Craftus"
  },
  {
    name: "Mary Leaf",
    title: "Founder",
    company: "MLof Strategies"
  },
  {
    name: "Binita Mehta",
    title: "Principal Software Engineer",
    company: "Hearst"
  },
  {
    name: "Andrew Levine",
    title: "Sales Engineering Lead",
    company: "SZNS Solutions"
  },
  {
    name: "Ryan Bannon",
    title: "Senior Software Engineer",
    company: "SZNS Solutions"
  },
  {
    name: "Priyanka Jain",
    title: "Executive Director of Engineering",
    company: "Hearst"
  },
  {
    name: "Vinay Pandurangi",
    title: "Senior Staff Engineer/Manager",
    company: "Qualcomm"
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured speakers</h2>
          <p className="text-xl text-gray-700">
            Great selection of speakers and content for an unforgettable experience.
          </p>
        </div>

        {/* Featured Speakers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>

        {/* Other Speakers */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other speakers</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allSpeakers.slice(8).map((speaker, index) => (
            <SpeakerCard key={index + 8} speaker={speaker} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#tickets"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105"
          >
            Get Your Tickets
          </a>
        </div>
      </div>
    </section>
  )
}
