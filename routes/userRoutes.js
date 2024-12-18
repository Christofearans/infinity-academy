const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password, role, secretCode } = req.body;

  // Check if username already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    return res.status(400).json({ message: 'Username already exists. Please choose another one.' });
  }

  // Validate secret code based on user type
  let validCode = false;
  if (role === "student") {
    if (secretCode === 'UN-2024' || secretCode === 'HS-2021') {
      validCode = true;
    } else {
      return res.status(400).json({ message: 'Invalid secret code for students.' });
    }
  } else if (role === "tutor") {
    if (secretCode === 'T-2023') {
      validCode = true;
    } else {
      return res.status(400).json({ message: 'Invalid secret code for tutors.' });
    }
  } else if (role === "admin") {
    if (secretCode === 'AD-12345') {
      validCode = true;
    } else {
      return res.status(400).json({ message: 'Invalid secret code for admins.' });
    }
  }

  if (!validCode) {
    return res.status(400).json({ message: 'Invalid secret code.' });
  }

  const newUser = new User({ username, password, role });
  await newUser.save();
  res.status(201).send('User registered');
});

// Login a user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json(user);
  } else {
    res.status(401).send('Invalid username or password');
  }
});

// Get all users
router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// Delete a user
router.delete('/user/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send('User deleted');
});

module.exports = router;

