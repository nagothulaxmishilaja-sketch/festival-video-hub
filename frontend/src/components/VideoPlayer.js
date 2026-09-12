// Video player component with comments
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function VideoPlayer({ videoId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect to socket server
    const newSocket = io(API_URL);
    setSocket(newSocket);

    // Join video room
    newSocket.emit('join-video', videoId);

    // Listen for new comments
    newSocket.on('new-comment', (comment) => {
      setComments((prev) => [...prev, comment]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, [videoId]);

  const handleSubmitComment = () => {
    if (newComment.trim() && socket) {
      socket.emit('send-comment', {
        videoId,
        userId: 'user123', // From auth
        userName: 'Student Name',
        comment: newComment,
      });
      setNewComment('');
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Video */}
      <div className="lg:col-span-2">
        <div className="bg-black rounded-lg aspect-video mb-6">
          {/* Video player would go here */}
        </div>
        <h1 className="text-3xl font-bold mb-4">Video Title</h1>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-4">Comments</h2>
        
        {/* Comment Input */}
        <div className="mb-6">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            rows="3"
          />
          <button
            onClick={handleSubmitComment}
            className="mt-2 w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Comment
          </button>
        </div>

        {/* Comments List */}
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {comments.map((comment, idx) => (
            <div key={idx} className="border-b pb-4">
              <p className="font-semibold text-sm">{comment.userName}</p>
              <p className="text-gray-700 text-sm mt-1">{comment.comment}</p>
              <p className="text-gray-400 text-xs mt-2">{new Date(comment.timestamp).toLocaleTimeString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
