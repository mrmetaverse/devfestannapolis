export default function About() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">What is DevFest?</h2>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            DevFest is the world&apos;s largest community-driven tech conference, bringing together 
            passionate developers from around the globe. Hosted annually by Google Developer Groups, 
            DevFest offers a unique opportunity to explore cutting-edge developer tools, learn from 
            Google and Google Developer Experts, and connect with fellow developers in your local community.
          </p>
        </div>
        
        <div className="text-center">
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
