const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  dob: Date,
  joiningDate: Date,
  expertise: String,
  experience: String,
  testimonial: String,
  certification: String,
});

const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;


 