const express = require('express');
const router = express.Router();
const ClassLink = require('../models/ClassLink');

// Post a new class link
router.post('/classLinks', async (req, res) => {
  const { title, link, timestamp } = req.body;
  const newClassLink = new ClassLink({ title, link, timestamp });
  await newClassLink.save();
  res.status(201).send('Class link uploaded');
});

// Get all class links
router.get('/classLinks', async (req, res) => {
  const classLinks = await ClassLink.find();
  res.json(classLinks);
});

// Delete a class link
router.delete('/classLinks/:id', async (req, res) => {
  await ClassLink.findByIdAndDelete(req.params.id);
  res.send('Class link deleted');
});

module.exports = router;

