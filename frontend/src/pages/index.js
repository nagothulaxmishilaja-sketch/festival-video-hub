export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">🎬 Festival Video Hub</h1>
          <p className="text-xl mb-4">Share your school's festival performances with the world</p>
          <p className="text-lg text-indigo-100 mb-8">Connect with students and celebrate talent across schools</p>
          
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-indigo-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">📹</div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Upload Videos</h2>
            <p className="text-gray-600">Schools can easily upload and showcase their festival performances</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">💬</div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Live Chat</h2>
            <p className="text-gray-600">Real-time comments and reactions from students around the world</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="text-3xl mb-4">🌟</div>
            <h2 className="text-xl font-bold mb-2 text-gray-900">Discover Talent</h2>
            <p className="text-gray-600">Browse and rate performances from different schools and festivals</p>
          </div>
        </div>
      </div>
    </main>
  );
}
