'use client'

import Image from 'next/image'

export default function OurMission() {

  return (
    <section id="our-mission" className="bg-blue-500 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Mission Statement */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Row 1 */}
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MaryLeaf.png"
                  alt="Mary Leaf"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Mary Leaf</h4>
              <p className="text-sm text-gray-600 mb-1">Founder & CEO</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">MLof Strategies</p>
              <a 
                href="https://www.linkedin.com/in/marielof/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Mary Leaf LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/AngeloThalassinidis.jpg"
                  alt="Angelo Thalassinidis"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Angelo Thalassinidis</h4>
              <p className="text-sm text-gray-600 mb-1">Assistant Dean</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">Anne Arundel Community College</p>
              <a 
                href="https://www.linkedin.com/in/angelo-thalassinidis-60630922/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Angelo Thalassinidis LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MarkFarmer2.png"
                  alt="Mark Farmer"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Mark Farmer</h4>
              <p className="text-sm text-gray-600 mb-1">CTO</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">Signum Technologies Inc</p>
              <a 
                href="https://www.linkedin.com/in/markafarmer000/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Mark Farmer LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/DennisChen.png"
                  alt="Dennis Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Dennis Chen</h4>
              <p className="text-sm text-gray-600 mb-1">Founder & Strategic Executive</p>
              <p className="text-xs text-gray-500 mb-1">Shannon Cyber AI</p>
              <a 
                href="https://www.linkedin.com/in/dennisschen/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Dennis Chen LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MichaelCarico.png"
                  alt="Michael Carico"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Michael Carico</h4>
              <p className="text-sm text-gray-600 mb-1">Founder & CTO</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">AbleSpark</p>
              <a 
                href="https://www.linkedin.com/in/michaelcarico/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Michael Carico LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Row 2 */}
            <div className="text-center md:mt-[1em]">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/speakers/BradyCusack2.png"
                  alt="Brady Cusack"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Brady Cusack</h4>
              <p className="text-sm text-gray-600 mb-1">Founder & AI Solutions Architect</p>
              <p className="text-xs text-gray-500 mb-1">Shannon Cyber AI</p>
              <a 
                href="https://www.linkedin.com/in/brady-cusack/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Brady Cusack LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:mt-[1em]">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/Sameer Rao.jpg"
                  alt="Sameer Rao"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Sameer Rao</h4>
              <p className="text-sm text-gray-600 mb-1">Journalist, editor, & writer</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <a 
                href="https://www.linkedin.com/in/sameer-rao-journalist/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Sameer Rao LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:mt-[1em]">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/Satya Kalaga.jpg"
                  alt="Satya Kalaga"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Satya Kalaga</h4>
              <p className="text-sm text-gray-600 mb-1">Graduate Instructional Assistant</p>
              <p className="text-xs text-gray-500 mb-1">George Washington University</p>
              <a 
                href="https://www.linkedin.com/in/phanindra-max/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Satya Kalaga LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:mt-[1em]">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/PatrickRockhill.jpg"
                  alt="Patrick Rockhill"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Patrick Rockhill</h4>
              <p className="text-sm text-gray-600 mb-1">Systems Developer & Entrepreneur</p>
              <p className="text-xs text-gray-500 mb-1">Innovation Maryland</p>
              <a 
                href="https://www.linkedin.com/in/ifmaybe/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Patrick Rockhill LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:mt-[1em]">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/JessieAlton.png"
                  alt="Jesse Alton"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Jesse Alton</h4>
              <p className="text-sm text-gray-600 mb-1">CEO</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">Virgent AI</p>
              <a 
                href="https://www.linkedin.com/in/mrmetaverse/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Jesse Alton LinkedIn"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0077B5" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="text-center md:mt-[1em]">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MaryCubbage.png"
                  alt="Mary Cubbage"
                  fill
                  className="object-cover"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-1">Mary Cubbage</h4>
              <p className="text-sm text-gray-600 mb-1">Logo & Visual Identity Designer</p>
              <p className="text-xs text-gray-500 mb-1">&nbsp;</p>
              <p className="text-xs text-gray-500 mb-1">MLof Strategies</p>
              <a 
                href="https://www.linkedin.com/in/mary-cubbage-53995a315/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center hover:opacity-80 transition-opacity mt-2.5"
                aria-label="Mary Cubbage LinkedIn"
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