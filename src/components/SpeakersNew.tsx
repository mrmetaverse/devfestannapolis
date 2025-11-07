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
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/RoyaKandalan.jpg"
                    alt="Roya Kandalan"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% -32px' }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Roya Kandalan</p>
                <p className="text-xs text-gray-600 mb-1">Generative AI Research Scientist</p>
                <a 
                  href="https://www.linkedin.com/in/roya-kandalan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Roya Kandalan LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/NorbertKremerLinkedin.jpeg"
                    alt="Norbert Kremer"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% -15px' }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Norbert Kremer</p>
                <p className="text-xs text-gray-600 mb-1">Google Cloud Solution Architect</p>
                <a 
                  href="https://www.linkedin.com/in/datamaven/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Norbert Kremer LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/BradyCusack2.png"
                    alt="Brady Cusack"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Brady Cusack</p>
                <p className="text-xs text-gray-600 mb-1">Founder & AI Solutions Architect</p>
                <a 
                  href="https://www.linkedin.com/in/brady-cusack/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Brady Cusack LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/Satya.jpg"
                    alt="Satya"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Satya</p>
                <p className="text-xs text-gray-600 mb-1">Data Science, AI & Product Engineering</p>
                <a 
                  href="https://www.linkedin.com/in/phanindra-max/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Satya LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/MarkFarmer2.png"
                    alt="Mark Farmer"
                    fill
                    className="object-cover rounded-lg"
                    style={{ objectPosition: '50% -10px' }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Mark Farmer</p>
                <p className="text-xs text-gray-600 mb-1">CTO & AI Innovation Strategist</p>
                <a 
                  href="https://www.linkedin.com/in/markafarmer000/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Mark Farmer LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/JasonMichaelPerry.png"
                    alt="Jason Michael Perry"
                    fill
                    className="object-cover"
                    style={{ objectPosition: '50% calc(50% + 25px)' }}
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Jason Michael Perry</p>
                <p className="text-xs text-gray-600 mb-1">Founder & Chief AI Officer</p>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Jason Michael Perry LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              <div className="text-center">
                <div className="w-full h-[200px] md:h-40 rounded-lg mb-2 bg-gray-100 overflow-hidden relative">
                  <Image
                    src="/images/speakers/Speaker.png"
                    alt="Wesley Chun"
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 mb-1">Wesley Chun</p>
                <p className="text-xs text-gray-600 mb-1">Principal Technical Program Manager</p>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center hover:opacity-80 transition-opacity"
                  aria-label="Wesley Chun LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}