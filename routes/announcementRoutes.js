const express = require('express');
const router = express.Router();
const Announcement = require('../models/Announcement');

// Fetch all announcements
router.get('/announcements', async (req, res) => {
  try {
    const announcements = await Announcement.find();
    res.json(announcements);
  } catch (error) {
    console.error('Error fetching announcements:', error);
    res.status(500).json({ message: 'Server error fetching announcements.' });
  }
});

// Add a new announcement
router.post('/announcement', async (req, res) => {
  try {
    const newAnnouncement = new Announcement(req.body);
    await newAnnouncement.save();
    res.status(201).json(newAnnouncement);
  } catch (error) {
    console.error('Error adding announcement:', error);
    res.status(500).json({ message: 'Server error adding announcement.' });
  }
});

// Delete an announcement
router.delete('/announcement/:id', async (req, res) => {
  try {
    const announcementId = req.params.id;
    await Announcement.findByIdAndDelete(announcementId);
    res.status(200).json({ message: 'Announcement deleted successfully.' });
  } catch (error) {
    console.error('Error deleting announcement:', error);
    res.status(500).json({ message: 'Server error deleting announcement.' });
  }
});

module.exports = router;

