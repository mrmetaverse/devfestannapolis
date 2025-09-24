const scheduleItems = [
  {
    time: "9AM",
    title: "Registration, Networking & Coffee",
    audience: "Everyone"
  },
  {
    time: "10am",
    title: "Keynote Sessions",
    audience: "Keynote Speakers"
  },
  {
    time: "11am",
    title: "Breakout Sessions Begin",
    audience: "Everyone"
  },
  {
    time: "12pm",
    title: "Lunch Sponsored by Google",
    audience: "Everyone"
  },
  {
    time: "1pm",
    title: "Keynotes & Workshops",
    audience: "Speakers"
  },
  {
    time: "5pm",
    title: "Happy hour",
    audience: "Everyone"
  }
]

export default function Schedule() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Event schedule</h2>
          <p className="text-xl text-gray-700">
            Bring your laptop and join us for hands-on workshops.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {scheduleItems.map((item, index) => (
            <div key={index} className="flex items-center mb-8 p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <div className="flex-shrink-0 w-20 text-right mr-8">
                <span className="text-2xl font-bold text-blue-600">{item.time}</span>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.audience}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
