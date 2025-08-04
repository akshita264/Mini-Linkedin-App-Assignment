const express = require('express');
const router = express.Router();
const { getUserPosts } = require('../controllers/postController');
const {
  createPost,
  getAllPosts
} = require('../controllers/postController');

const { authMiddleware } = require('../middlewares/authMiddleware');

// Public route - Get all posts
router.get('/', getAllPosts);

// Protected route - Create a post
router.post('/', authMiddleware, createPost);

router.get('/user/:id', getUserPosts);
module.exports = router;
