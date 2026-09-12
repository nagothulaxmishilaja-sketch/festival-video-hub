import Navbar from '../components/Navbar';

export default function Schools() {
  const schools = [
    {
      id: 1,
      name: 'Delhi Public School',
      location: 'New Delhi',
      videos: 12,
      followers: 456,
    },
    {
      id: 2,
      name: 'Bombay International School',
      location: 'Mumbai',
      videos: 8,
      followers: 234,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Schools</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {schools.map((school) => (
            <div key={school.id} className="bg-white rounded-lg p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-2">{school.name}</h2>
              <p className="text-gray-600 mb-4">{school.location}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{school.videos} videos</span>
                <span>{school.followers} followers</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
