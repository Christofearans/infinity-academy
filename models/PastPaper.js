const mongoose = require('mongoose');

const pastPaperSchema = new mongoose.Schema({
  subject: String,
  title: String,
  link: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('PastPaper', pastPaperSchema);
