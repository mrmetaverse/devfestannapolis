import Image from 'next/image'

export default function Schedule() {
  return (
    <section id="agenda" className="py-20 bg-yellow-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-yellow-600 text-center mb-6">Schedule</h2>
            <p className="text-xl text-gray-700">
              A full day of learning, building, and connecting with Maryland&apos;s tech community.
            </p>
          </div>

          <div className="rounded-2xl overflow-hidden">
            <div className="relative w-full">
              <Image
                src="/images/Schedule.png"
                alt="DevFest Annapolis 2025 Schedule - Complete event schedule with time slots, rooms, speakers, and activities"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
