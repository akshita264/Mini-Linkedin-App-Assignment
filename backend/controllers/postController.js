const Post = require('../models/Post');
const User = require('../models/User');

exports.createPost = async (req, res) => {
  const post = await Post.create({
    content: req.body.content,
    userId: req.userId,
  });
  res.status(201).json(post);
};

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find()
    .sort({ createdAt: -1 })
    .populate('userId', 'fullName');
  res.json(posts);
};
