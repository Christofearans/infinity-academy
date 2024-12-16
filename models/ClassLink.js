const mongoose = require('mongoose');

const classLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model is already defined, to prevent overwriting
module.exports = mongoose.models.ClassLink || mongoose.model('ClassLink', classLinkSchema);
