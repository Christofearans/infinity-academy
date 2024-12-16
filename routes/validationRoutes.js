const express = require('express');
const router = express.Router();

// Validate secret code
router.post('/validateCode', (req, res) => {
  const { code } = req.body;
  if (code === 'UN-2024') {
    res.json({ studentType: 'university' });
  } else if (code === 'HS-2021') {
    res.json({ studentType: 'highSchool' });
  } else {
    res.status(400).send('Invalid secret code');
  }
});

module.exports = router;
