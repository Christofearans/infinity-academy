const express = require('express');
const router = express.Router();

// Validate secret code
router.post('/validateCode', (req, res) => {
  const { code } = req.body;
  const secretCodeMap = {
    'UN-2024': 'university',
    'HS-2021': 'highSchool',
    'T-2023': 'tutor',
    'AD-12345': 'admin'
  };

  if (secretCodeMap[code]) {
    res.json({ studentType: secretCodeMap[code] });
  } else {
    res.status(400).send('Invalid secret code');
  }
});

module.exports = router;
