const User = require('../models/User');

exports.getMe = async (req, res) => {
  const user = await User.findById(req.userId).select('-password');
  res.json(user);
};

exports.updateMe = async (req, res) => {
  const user = await User.findByIdAndUpdate(req.userId, req.body, { new: true }).select('-password');
  res.json(user);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find().select('-password');
  res.json(users);
};
