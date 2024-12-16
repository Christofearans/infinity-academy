const express = require('express');
const router = express.Router();
const StudyMaterial = require('../models/StudyMaterial');

// Post a new study material
router.post('/studyMaterials', async (req, res) => {
  const { subject, type, title, link, timestamp } = req.body;
  const newStudyMaterial = new StudyMaterial({ subject, type, title, link, timestamp });
  await newStudyMaterial.save();
  res.status(201).send('Study material uploaded');
});

// Get all study materials
router.get('/studyMaterials', async (req, res) => {
  const studyMaterials = await StudyMaterial.find();
  res.json(studyMaterials);
});

// Delete a study material
router.delete('/studyMaterials/:id', async (req, res) => {
  await StudyMaterial.findByIdAndDelete(req.params.id);
  res.send('Study material deleted');
});

module.exports = router;
