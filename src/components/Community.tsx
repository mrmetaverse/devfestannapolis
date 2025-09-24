import { MessageCircle, Users, Calendar, Code } from 'lucide-react'

export default function Community() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Connect with fellow developers, get event updates, and participate in discussions 
            leading up to DevFest Annapolis 2025.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-8 h-8 text-yellow-400 mr-4" />
                <h3 className="text-2xl font-bold">Matrix Community Space</h3>
              </div>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">
                Join our Matrix space to connect with speakers, organizers, and fellow attendees. 
                Get real-time updates, ask questions, and be part of the DevFest Annapolis community.
              </p>
              <a
                href="https://matrix.to/#/#devfestannapolis:matrix.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all duration-200 transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Matrix Space
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Users className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Network</h4>
              <p className="text-purple-100">Connect with 1000+ developers and tech professionals</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Calendar className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Updates</h4>
              <p className="text-purple-100">Get the latest event news and schedule updates</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <Code className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Collaborate</h4>
              <p className="text-purple-100">Find hackathon teammates and project collaborators</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
              <MessageCircle className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">Discuss</h4>
              <p className="text-purple-100">Engage in tech discussions and Q&A with speakers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
