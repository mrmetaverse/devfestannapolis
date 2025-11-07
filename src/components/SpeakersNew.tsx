'use client'

import Image from 'next/image'

export default function SpeakersNew() {
  const speakers = [
    {
      name: "Roya Kandalan",
      title: "Senior AI Engineer",
      company: "Tech Company",
      topic: "The Future of Machine Learning",
      image: "https://via.placeholder.com/300x300",
      bio: "Leading expert in artificial intelligence and machine learning applications."
    },
    {
      name: "Norbert Kremer", 
      title: "Cloud Architect",
      company: "Major Cloud Provider",
      topic: "Scaling Applications in the Cloud",
      image: "https://via.placeholder.com/300x300",
      bio: "Specializes in cloud-native architectures and DevOps practices."
    },
    {
      name: "Brady Cusack",
      title: "Frontend Developer",
      company: "Design Studio",
      topic: "Modern Web Development",
      image: "https://via.placeholder.com/300x300",
      bio: "Expert in React, TypeScript, and modern frontend frameworks."
    },
    {
      name: "Satya",
      title: "Mobile Developer",
      company: "App Development Co",
      topic: "Cross-Platform Mobile Apps",
      image: "https://via.placeholder.com/300x300",
      bio: "Builds mobile applications using Flutter and React Native."
    },
    {
      name: "Mark Farmer",
      title: "Tech Leader",
      company: "Technology Company",
      topic: "Innovation & Technology",
      image: "https://via.placeholder.com/300x300",
      bio: "Expert in technology leadership and innovation."
    }
  ]

  const tracks = [
    { name: "AI & Machine Learning", color: "bg-red-100 text-red-800" },
    { name: "Web Development", color: "bg-blue-100 text-blue-800" },
    { name: "Mobile Development", color: "bg-green-100 text-green-800" },
    { name: "Cloud & DevOps", color: "bg-purple-100 text-purple-800" },
    { name: "Data Science", color: "bg-orange-100 text-orange-800" },
    { name: "Security", color: "bg-gray-100 text-gray-800" }
  ]

  return (
    <section id="speakers" className="bg-green-600 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-green-600 text-center mb-6">
            Speakers
          </h2>
          
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
            Learn from industry experts and thought leaders who are shaping the future of technology.
          </p>

          <p className="text-lg text-green-600 font-semibold text-center mb-12">
            Amazing speakers and content coming soon for an unforgettable experience.
          </p>

          {/* Speaker Placeholder Images */}
          <div className="mb-16">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <a 
                href="https://www.linkedin.com/in/roya-kandalan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:opacity-75 transition-opacity"
              >
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/RoyaKandalan.jpg"
                    alt="Roya Kandalan"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% -32px' }}
                  />
                </div>
                <p className="text-sm font-medium text-blue-600 hover:underline">Roya Kandalan</p>
              </a>
              <a 
                href="https://www.linkedin.com/in/datamaven/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:opacity-75 transition-opacity"
              >
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/NorbertKremerLinkedin.jpeg"
                    alt="Norbert Kremer"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% -15px' }}
                  />
                </div>
                <p className="text-sm font-medium text-blue-600 hover:underline">Norbert Kremer</p>
              </a>
              <a 
                href="https://www.linkedin.com/in/brady-cusack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:opacity-75 transition-opacity"
              >
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/Speaver.png"
                    alt="Brady Cusack"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-blue-600 hover:underline">Brady Cusack</p>
              </a>
              <a 
                href="https://www.linkedin.com/in/phanindra-max/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:opacity-75 transition-opacity"
              >
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/Satya.jpg"
                    alt="Satya"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-sm font-medium text-blue-600 hover:underline">Satya</p>
              </a>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <a 
                href="https://www.linkedin.com/in/markafarmer000/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-center hover:opacity-75 transition-opacity"
              >
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/MarkFarmer2.png"
                    alt="Mark Farmer"
                    fill
                    className="object-cover rounded-lg"
                    style={{ objectPosition: '50% -10px' }}
                  />
                </div>
                <p className="text-sm font-medium text-blue-600 hover:underline">Mark Farmer</p>
              </a>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Coming Soon"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Coming Soon</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Coming Soon"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Coming Soon</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Coming Soon"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Coming Soon</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}