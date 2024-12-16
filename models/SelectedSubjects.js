const mongoose = require('mongoose');

const selectedSubjectsSchema = new mongoose.Schema({
  selectedSubjects: [String],
});

module.exports = mongoose.model('SelectedSubjects', selectedSubjectsSchema);
