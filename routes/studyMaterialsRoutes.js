const express = require('express');
const router = express.Router();
const StudyMaterial = require('../models/StudyMaterial');

// Post a new study material
router.post('/studyMaterials', async (req, res) => {
  const { subject, type, title, link, timestamp } = req.body;
  try {
    const newStudyMaterial = new StudyMaterial({ subject, type, title, link, timestamp });
    await newStudyMaterial.save();
    res.status(201).send('Study material uploaded');
  } catch (error) {
    res.status(500).json({ message: 'Error uploading study material', error });
  }
});

// Get all study materials
router.get('/studyMaterials', async (req, res) => {
  try {
    const studyMaterials = await StudyMaterial.find();
    res.json(studyMaterials);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching study materials', error });
  }
});

// Delete a study material
router.delete('/studyMaterials/:id', async (req, res) => {
  try {
    await StudyMaterial.findByIdAndDelete(req.params.id);
    res.send('Study material deleted');
  } catch (error) {
    res.status(500).json({ message: 'Error deleting study material', error });
  }
});

module.exports = router;
