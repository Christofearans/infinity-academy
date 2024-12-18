const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true }, // 'admin', 'tutor', 'student'
  schoolType: { type: String }, // 'highschool', 'university'
  lastSeen: { type: Date }, // Add this field
  totalTimeSpent: { type: Number, default: 0 } // Add this field to track time spent
});

module.exports = mongoose.model('User', userSchema);

