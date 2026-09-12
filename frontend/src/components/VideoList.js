// Video listing and display component
export default function VideoList({ videos = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {videos.length === 0 ? (
        <div className="col-span-full text-center py-12">
          <p className="text-gray-500">No videos found</p>
        </div>
      ) : (
        videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
            <div className="aspect-video bg-gray-200">
              {/* Video thumbnail */}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{video.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{video.description}</p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>{video.views || 0} views</span>
                <span>⭐ {video.rating || 0}</span>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
