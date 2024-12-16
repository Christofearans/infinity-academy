const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String, // 'admin', 'tutor', 'student'
  schoolType: String, // 'highschool', 'university'
});

module.exports = mongoose.model('User', userSchema);
