const express = require('express');
const router = express.Router();
const SelectedSubjects = require('../models/SelectedSubjects');

// Post selected subjects
router.post('/selectedSubjects', async (req, res) => {
  const { selectedSubjects } = req.body;
  const newSelectedSubjects = new SelectedSubjects({ selectedSubjects });
  await newSelectedSubjects.save();
  res.status(201).send('Selected subjects saved');
});

// Get selected subjects
router.get('/selectedSubjects', async (req, res) => {
  const selectedSubjects = await SelectedSubjects.find();
  res.json(selectedSubjects);
});

module.exports = router;
