'use client'

import Link from 'next/link'

export default function BuildFutureAI() {
  const aiFeatures = [
    {
      title: "AI Workshops",
      description: "Hands-on sessions with machine learning frameworks",
      icon: "🧠",
      topics: ["TensorFlow", "PyTorch", "Hugging Face", "OpenAI APIs"]
    },
    {
      title: "AI Hackathon",
      description: "Build innovative AI solutions in 24 hours",
      icon: "⚡",
      topics: ["Problem Solving", "Team Building", "Innovation", "Prizes"]
    },
    {
      title: "Expert Clinics",
      description: "One-on-one sessions with AI practitioners",
      icon: "👨‍⚕️",
      topics: ["Career Guidance", "Project Reviews", "Technical Q&A", "Mentoring"]
    },
    {
      title: "AI Demos",
      description: "See cutting-edge AI applications in action",
      icon: "🚀",
      topics: ["Computer Vision", "NLP", "Robotics", "Generative AI"]
    }
  ]

  const partners = [
    { name: "AI Research Lab", logo: "https://via.placeholder.com/200x100" },
    { name: "ML Startup", logo: "https://via.placeholder.com/200x100" },
    { name: "Tech Giant AI", logo: "https://via.placeholder.com/200x100" },
    { name: "University AI Dept", logo: "https://via.placeholder.com/200x100" }
  ]

  return (
    <section id="hackathon" className="bg-blue-600 py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          {/* Main Title */}
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-600 text-center mb-6">
            Build the Future of AI
          </h2>
          
          <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto mb-6">
            Dive deep into artificial intelligence and machine learning. Explore the latest tools, 
            techniques, and applications that are transforming our world.
          </p>

          <p className="text-lg text-blue-600 font-semibold text-center max-w-4xl mx-auto mb-8 leading-relaxed">
            Join the DevFest Annapolis Agentic AI Challenge! Are you a developer, data scientist, designer, 
            tinkerer, or just a tech enthusiast ready to explore the next frontier of AI?
          </p>

          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            DevFest Annapolis 2025 Agentic AI Challenge (Hackathon)
          </h3>

          {/* Content Section */}
          <div className="mb-16">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Are you ready to build a futuristic solution capable of optimizing a repeatable business process? 
                At the DevFest Annapolis 2025 Agentic AI Challenge, you can form a team and spend the day bringing 
                your innovative solution to life! We'll dive deep into the emerging world of Agentic AI - intelligent 
                systems that act, adapt, communicate, and solve complex real-world challenges autonomously.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Join the best minds from startups, corporations, and academia as you tackle use cases in government, 
                finance, travel, consumer, autonomous vehicles, manufacturing and other enterprise functions including IT.
              </p>
            </div>
          </div>



        </div>
      </div>
    </section>
  )
}