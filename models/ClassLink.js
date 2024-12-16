const mongoose = require('mongoose');

const classLinkSchema = new mongoose.Schema({
  title: String,
  link: String,
  timestamp: { type: Date, default: Date.now },
});

<<<<<<< HEAD
module.exports = mongoose.model('ClassLink', classLinkSchema);
=======
module.exports = mongoose.models.ClassLink || mongoose.model('ClassLink', classLinkSchema);

>>>>>>> 7827409024688337fea1c7e55b89a5aa16bb3282
