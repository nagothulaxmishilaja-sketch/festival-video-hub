// Navigation component
export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">
            🎬 Festival Hub
          </div>
          <div className="flex gap-6">
            <a href="/" className="text-gray-700 hover:text-indigo-600 transition">
              Home
            </a>
            <a href="/videos" className="text-gray-700 hover:text-indigo-600 transition">
              Videos
            </a>
            <a href="/events" className="text-gray-700 hover:text-indigo-600 transition">
              Events
            </a>
            <a href="/schools" className="text-gray-700 hover:text-indigo-600 transition">
              Schools
            </a>
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
