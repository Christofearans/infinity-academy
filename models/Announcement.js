const mongoose = require('mongoose');

const announcementSchema = new mongoose.Schema({
  content: { type: String, required: true },  // Ensure content is required
  image: { type: String },  // Optional field for image URL
  timestamp: { type: Date, default: Date.now }  // Add timestamp with default value
});

module.exports = mongoose.model('Announcement', announcementSchema);

