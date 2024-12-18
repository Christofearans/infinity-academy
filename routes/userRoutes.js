const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error fetching users.' });
  }
});

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password, role, secretCode } = req.body;

  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: 'Username already exists. Please choose another one.' });
  }

  let validCode = false;
  if (role === "student" && ['UN-2024', 'HS-2021'].includes(secretCode)) validCode = true;
  if (role === "tutor" && secretCode === 'T-2023') validCode = true;
  if (role === "admin" && secretCode === 'AD-12345') validCode = true;

  if (!validCode) {
    return res.status(400).json({ message: `Invalid secret code for ${role}.` });
  }

  try {
    const newUser = new User({ username, password, role });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).json({ message: 'Server error during registration.' });
  }
});

// Login a user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid username or password.' });
    }

    // Update the lastSeen field
    user.lastSeen = new Date();
    await user.save();

    res.json({ role: user.role, username: user.username });
  } catch (error) {
    res.status(500).json({ message: 'Server error during login.' });
  }
});

// Delete a user
router.delete('/user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Server error deleting user.' });
  }
});

module.exports = router;


