const express = require('express');
const router = express.Router();
const SelectedSubjects = require('../models/SelectedSubjects');

// Post selected subjects
router.post('/selectedSubjects', async (req, res) => {
  try {
    const { selectedSubjects } = req.body;
    const newSelectedSubjects = new SelectedSubjects({ selectedSubjects });
    await newSelectedSubjects.save();
    res.status(201).send('Selected subjects saved');
  } catch (error) {
    res.status(500).json({ message: 'Error saving selected subjects', error });
  }
});

// Get selected subjects
router.get('/selectedSubjects', async (req, res) => {
  try {
    const selectedSubjects = await SelectedSubjects.find();
    res.json(selectedSubjects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching selected subjects', error });
  }
});

module.exports = router;

