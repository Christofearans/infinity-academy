const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register a new user
router.post('/register', async (req, res) => {
  const { username, password, role, secretCode } = req.body;

  console.log('Received registration request:', req.body);

  // Check if username already exists
  const userExists = await User.findOne({ username });
  if (userExists) {
    console.log('Username already exists:', username);
    return res.status(400).json({ message: 'Username already exists. Please choose another one.' });
  }

  // Validate secret code based on user type
  let validCode = false;
  if (role === "student") {
    if (secretCode === 'UN-2024' || secretCode === 'HS-2021') {
      validCode = true;
    } else {
      console.log('Invalid secret code for students:', secretCode);
      return res.status(400).json({ message: 'Invalid secret code for students.' });
    }
  } else if (role === "tutor") {
    if (secretCode === 'T-2023') {
      validCode = true;
    } else {
      console.log('Invalid secret code for tutors:', secretCode);
      return res.status(400).json({ message: 'Invalid secret code for tutors.' });
    }
  } else if (role === "admin") {
    if (secretCode === 'AD-12345') {
      validCode = true;
    } else {
      console.log('Invalid secret code for admins:', secretCode);
      return res.status(400).json({ message: 'Invalid secret code for admins.' });
    }
  }

  if (!validCode) {
    console.log('Invalid secret code:', secretCode);
    return res.status(400).json({ message: 'Invalid secret code.' });
  }

  // Proceed with registration
  try {
    const newUser = new User({ username, password, role });
    await newUser.save();
    console.log('User registered successfully:', username);
    res.status(201).send('User registered');
  } catch (error) {
    console.error('Error during registration:', error);
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

    res.json({ role: user.role, username: user.username });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Server error during login.' });
  }
});

module.exports = router;
