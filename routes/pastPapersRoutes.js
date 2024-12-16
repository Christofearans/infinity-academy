const express = require('express');
const router = express.Router();
const PastPaper = require('../models/PastPaper');

// Post a new past paper
router.post('/pastPapers', async (req, res) => {
  const { subject, title, link, timestamp } = req.body;
  const newPastPaper = new PastPaper({ subject, title, link, timestamp });
  await newPastPaper.save();
  res.status(201).send('Past paper uploaded');
});

// Get all past papers
router.get('/pastPapers', async (req, res) => {
  const pastPapers = await PastPaper.find();
  res.json(pastPapers);
});

// Delete a past paper
router.delete('/pastPapers/:id', async (req, res) => {
  await PastPaper.findByIdAndDelete(req.params.id);
  res.send('Past paper deleted');
});

module.exports = router;
