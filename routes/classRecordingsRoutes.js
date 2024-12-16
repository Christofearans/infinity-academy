const express = require('express');
const router = express.Router();
const ClassRecording = require('../models/ClassRecording');

// Post a new class recording
router.post('/classRecordings', async (req, res) => {
  const { subject, title, link, timestamp } = req.body;
  const newClassRecording = new ClassRecording({ subject, title, link, timestamp });
  await newClassRecording.save();
  res.status(201).send('Class recording uploaded');
});

// Get all class recordings
router.get('/classRecordings', async (req, res) => {
  const classRecordings = await ClassRecording.find();
  res.json(classRecordings);
});

// Delete a class recording
router.delete('/classRecordings/:id', async (req, res) => {
  await ClassRecording.findByIdAndDelete(req.params.id);
  res.send('Class recording deleted');
});

module.exports = router;
