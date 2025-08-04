const express = require('express');
const router = express.Router();

const {
  getMe,
  updateMe,
  getAllUsers
} = require('../controllers/userController');

const { authMiddleware } = require('../middlewares/authMiddleware');

// Protected routes
router.get('/me', authMiddleware, getMe);
router.put('/me', authMiddleware, updateMe);

// Public route
router.get('/all', getAllUsers);

module.exports = router;
