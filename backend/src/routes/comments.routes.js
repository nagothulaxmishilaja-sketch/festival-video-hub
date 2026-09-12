const express = require('express');
const router = express.Router();

// GET /api/comments/video/:videoId - Get comments for video
router.get('/video/:videoId', (req, res) => {
  try {
    res.json({ message: 'Get video comments endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/comments - Add new comment
router.post('/', (req, res) => {
  try {
    res.json({ message: 'Create comment endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/comments/:id - Delete comment
router.delete('/:id', (req, res) => {
  try {
    res.json({ message: 'Delete comment endpoint' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
