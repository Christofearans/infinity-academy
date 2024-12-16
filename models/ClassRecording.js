const mongoose = require('mongoose');

const classLinkSchema = new mongoose.Schema({
  title: String,
  link: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ClassLink', classLinkSchema);
