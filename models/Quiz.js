const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  subject: String,
  title: String,
  link: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Quiz', quizSchema);
