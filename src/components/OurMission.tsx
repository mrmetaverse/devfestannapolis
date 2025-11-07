'use client'

import Image from 'next/image'

export default function OurMission() {

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
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {/* Row 1 */}
            <a 
              href="https://www.linkedin.com/in/marielof/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MaryLeaf.png"
                  alt="Mary Leaf"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Mary Leaf</h4>
            </a>
            <a 
              href="https://www.linkedin.com/in/angelo-thalassinidis-60630922/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/AngeloThalassinidis.jpg"
                  alt="Angelo Thalassinidis"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Angelo Thalassinidis</h4>
            </a>
            <a 
              href="https://www.linkedin.com/in/markafarmer000/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MarkFarmer2.png"
                  alt="Mark Farmer"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Mark Farmer</h4>
            </a>
            <a 
              href="https://www.linkedin.com/in/dennisschen/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/DennisChen.png"
                  alt="Dennis Chen"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Dennis Chen</h4>
            </a>
            <a 
              href="https://www.linkedin.com/in/michaelcarico/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/MichaelCarico.png"
                  alt="Michael Carico"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Michael Carico</h4>
            </a>

            {/* Row 2 */}
            <a 
              href="https://www.linkedin.com/in/sameer-rao-journalist/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/Sameer Rao.jpg"
                  alt="Sameer Rao"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Sameer Rao</h4>
            </a>
            <a 
              href="https://www.linkedin.com/in/phanindra-max/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/partners/Satya Kalaga.jpg"
                  alt="Satya Kalaga"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Satya Kalaga</h4>
            </a>
            <a 
              href="https://www.linkedin.com/in/brady-cusack/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-center hover:opacity-75 transition-opacity group"
            >
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/person.png"
                  alt="Brady Cusack"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-blue-600 hover:underline">Brady Cusack</h4>
            </a>
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/person.png"
                  alt="Patrick"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Patrick</h4>
            </div>
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/person.png"
                  alt="Jesse Alton"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Jesse Alton</h4>
            </div>

            {/* Row 3 */}
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/person.png"
                  alt="Nate Hartmeyer"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Nate Hartmeyer</h4>
            </div>
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/person.png"
                  alt="Elizabeth Leonard"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Elizabeth Leonard</h4>
            </div>
            <div className="text-center group">
              <div className="relative mb-4 overflow-hidden rounded-2xl h-48">
                <Image
                  src="/images/person.png"
                  alt="Stephanie Goldenberg"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Stephanie Goldenberg</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>
  )
}