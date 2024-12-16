const mongoose = require('mongoose');

const studyMaterialSchema = new mongoose.Schema({
  subject: String,
  type: String,
  title: String,
  link: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('StudyMaterial', studyMaterialSchema);
