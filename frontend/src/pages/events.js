import Navbar from '../components/Navbar';

export default function Events() {
  const events = [
    {
      id: 1,
      name: 'National School Festival 2024',
      date: 'March 15, 2024',
      location: 'New Delhi',
      schools: 45,
    },
    {
      id: 2,
      name: 'Inter-School Cultural Competition',
      date: 'April 20, 2024',
      location: 'Mumbai',
      schools: 32,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Events & Festivals</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">{event.name}</h2>
              <div className="space-y-2 text-gray-600">
                <p>📅 {event.date}</p>
                <p>📍 {event.location}</p>
                <p>🏫 {event.schools} schools participating</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
