const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public')); // Serve static files from the public directory

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Routes
const userRoutes = require('./routes/userRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const classLinksRoutes = require('./routes/classLinksRoutes');
const classRecordingsRoutes = require('./routes/classRecordingsRoutes');
const pastPapersRoutes = require('./routes/pastPapersRoutes');
const studyMaterialsRoutes = require('./routes/studyMaterialsRoutes');
const quizzesRoutes = require('./routes/quizzesRoutes');
const selectedSubjectsRoutes = require('./routes/selectedSubjectsRoutes');
const validationRoutes = require('./routes/validationRoutes');
const passwordCheckRoutes = require('./routes/passwordCheckRoutes');

app.use('/api', userRoutes);
app.use('/api', announcementRoutes);
app.use('/api', classLinksRoutes);
app.use('/api', classRecordingsRoutes);
app.use('/api', pastPapersRoutes);
app.use('/api', studyMaterialsRoutes);
app.use('/api', quizzesRoutes);
app.use('/api', selectedSubjectsRoutes);
app.use('/api', validationRoutes);
app.use('/api', passwordCheckRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});