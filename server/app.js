const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const trainerController = require('./controllers/trainerController');
const memberController = require('./controllers/memberController');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/gymManagement');

const db = mongoose.connection;

// Event handlers for database connection
db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

 
 

app.use(bodyParser.json());

// Routes for trainers
app.get('/trainers', trainerController.getAllTrainers);
app.post('/trainers', trainerController.createTrainer);
app.get('/trainers/:id', trainerController.getTrainerById);
app.put('/trainers/:id', trainerController.updateTrainer);
app.delete('/trainers/:id', trainerController.deleteTrainer);

// Routes for members
app.get('/members', memberController.getAllMembers);
app.post('/members', memberController.createMember);
app.get('/members/:id', memberController.getMemberById);
app.put('/members/:id', memberController.updateMember);
app.delete('/members/:id', memberController.deleteMember);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
