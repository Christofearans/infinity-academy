const mongoose = require('mongoose');

const classRecordingSchema = new mongoose.Schema({
  subject: {
    type: String,
    required: true,
  },
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
module.exports = mongoose.models.ClassRecording || mongoose.model('ClassRecording', classRecordingSchema);
