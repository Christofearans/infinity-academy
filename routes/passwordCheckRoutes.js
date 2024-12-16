const express = require('express');
const router = express.Router();

// Check password
router.post('/checkPassword', (req, res) => {
  const { enteredPassword, correctPassword } = req.body;
  if (enteredPassword === correctPassword) {
    const redirectUrl = correctPassword === 'HS-request-Pass' ? 'highschool-dashboard.html' : 'university-dashboard.html';
    res.json({ redirectUrl });
  } else {
    res.status(400).send('Incorrect password');
  }
});

module.exports = router;
