module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New user connected:', socket.id);

    // Join video room
    socket.on('join-video', (videoId) => {
      socket.join(`video-${videoId}`);
      console.log(`User ${socket.id} joined video ${videoId}`);
    });

    // Send live comment
    socket.on('send-comment', (data) => {
      io.to(`video-${data.videoId}`).emit('new-comment', {
        userId: data.userId,
        userName: data.userName,
        comment: data.comment,
        timestamp: new Date()
      });
    });

    // Video reaction (like, emoji)
    socket.on('react', (data) => {
      io.to(`video-${data.videoId}`).emit('new-reaction', {
        userId: data.userId,
        reaction: data.reaction,
        timestamp: new Date()
      });
    });

    // Live stream events
    socket.on('join-live-stream', (streamId) => {
      socket.join(`stream-${streamId}`);
      console.log(`User ${socket.id} joined live stream ${streamId}`);
    });

    socket.on('stream-update', (data) => {
      io.to(`stream-${data.streamId}`).emit('stream-updated', data);
    });

    // Disconnect
    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};
