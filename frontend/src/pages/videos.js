import Navbar from '../components/Navbar';
import VideoList from '../components/VideoList';

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: 'School Annual Day Dance Performance',
      description: 'Amazing dance performance from Delhi Public School',
      views: 1234,
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Cultural Festival - Classical Music',
      description: 'Traditional Hindustani music performance',
      views: 892,
      rating: 4.8,
    },
  ];

  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Festival Videos</h1>
        <VideoList videos={videos} />
      </main>
    </>
  );
}
