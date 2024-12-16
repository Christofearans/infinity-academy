const express = require('express');
const router = express.Router();
const Quiz = require('../models/Quiz');

// Post a new quiz
router.post('/quizzes', async (req, res) => {
  const { subject, title, link, timestamp } = req.body;
  const newQuiz = new Quiz({ subject, title, link, timestamp });
  await newQuiz.save();
  res.status(201).send('Quiz uploaded');
});

// Get all quizzes
router.get('/quizzes', async (req, res) => {
  const quizzes = await Quiz.find();
  res.json(quizzes);
});

// Delete a quiz
router.delete('/quizzes/:id', async (req, res) => {
  await Quiz.findByIdAndDelete(req.params.id);
  res.send('Quiz deleted');
});

module.exports = router;
