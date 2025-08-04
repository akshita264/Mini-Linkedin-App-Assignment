const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 }).populate('userId', 'fullName');
  res.json(posts);
};

exports.createPost = async (req, res) => {
  const { content } = req.body;
  const post = await Post.create({ userId: req.userId, content });
  const populated = await post.populate('userId', 'fullName');
  res.status(201).json(populated);
};

exports.getUserPosts = async (req, res) => {
  const posts = await Post.find({ userId: req.params.userId }).sort({ createdAt: -1 });
  res.json(posts);
};
