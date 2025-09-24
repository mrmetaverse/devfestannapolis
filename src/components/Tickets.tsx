const ticketTypes = [
  {
    type: "Student",
    label: "Early bird",
    price: "$47.99",
    description: "Price + applicable fees",
    note: "Ends Oct 3, 6:30pm"
  },
  {
    type: "Single",
    label: "Early bird",
    price: "$79.99",
    description: "Price + applicable fees",
    note: "$129.99 from Sept 26"
  },
  {
    type: "Group (5+)",
    label: "Early bird",
    price: "$71.99",
    description: "Price + applicable fees",
    note: "$119.99 from Sept 26"
  }
]

export default function Tickets() {
  return (
    <section id="tickets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Get your tickets</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ticketTypes.map((ticket, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 text-center hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{ticket.type}</h3>
              <div className="text-blue-600 font-semibold mb-4">{ticket.label}</div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{ticket.price}</div>
              <div className="text-gray-600 mb-6">{ticket.description}</div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200 mb-4">
                Get your ticket
              </button>
              <div className="text-sm text-gray-500">{ticket.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
