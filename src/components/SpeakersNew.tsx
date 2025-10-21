'use client'

export default function SpeakersNew() {
  const speakers = [
    {
      name: "Featured Speaker 1",
      title: "Senior AI Engineer",
      company: "Tech Company",
      topic: "The Future of Machine Learning",
      image: "https://via.placeholder.com/300x300",
      bio: "Leading expert in artificial intelligence and machine learning applications."
    },
    {
      name: "Featured Speaker 2", 
      title: "Cloud Architect",
      company: "Major Cloud Provider",
      topic: "Scaling Applications in the Cloud",
      image: "https://via.placeholder.com/300x300",
      bio: "Specializes in cloud-native architectures and DevOps practices."
    },
    {
      name: "Featured Speaker 3",
      title: "Frontend Developer",
      company: "Design Studio",
      topic: "Modern Web Development",
      image: "https://via.placeholder.com/300x300",
      bio: "Expert in React, TypeScript, and modern frontend frameworks."
    },
    {
      name: "Featured Speaker 4",
      title: "Mobile Developer",
      company: "App Development Co",
      topic: "Cross-Platform Mobile Apps",
      image: "https://via.placeholder.com/300x300",
      bio: "Builds mobile applications using Flutter and React Native."
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
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 1"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 1</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 2"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 2</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 3"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 3</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 4"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 4</p>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 5"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 5</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 6"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 6</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 7"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 7</p>
              </div>
              <div className="text-center">
                <img
                  src="/images/person.png"
                  alt="Speaker 8"
                  className="w-full h-40 object-contain rounded-lg mb-2 bg-gray-100"
                />
                <p className="text-sm font-medium text-gray-700">Speaker 8</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}