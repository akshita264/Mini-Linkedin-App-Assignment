const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { fullName, email, password, bio } = req.body;

  // Check if email already exists
  const existing = await User.findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already registered' });

  // ✅ Hash the password before saving
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user with hashed password
  const user = await User.create({
    fullName,
    email,
    password: hashedPassword,
    bio
  });

  // Create JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.json({ token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    console.log('❌ User not found');
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    console.log('❌ Password mismatch');
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  console.log('✅ Login successful', token);
  res.json({ token });
};