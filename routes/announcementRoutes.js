const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// Post a new announcement
router.post('/announcement', async (req, res) => {
  const { text, date } = req.body;
  const newAnnouncement = new Announcement({ text, date });
  await newAnnouncement.save();
  res.status(201).send('Announcement posted');
});

// Get all announcements
router.get('/announcements', async (req, res) => {
  const announcements = await Announcement.find();
  res.json(announcements);
});

// Delete an announcement
router.delete('/announcement/:id', async (req, res) => {
  await Announcement.findByIdAndDelete(req.params.id);
  res.send('Announcement deleted');
});

module.exports = router;
