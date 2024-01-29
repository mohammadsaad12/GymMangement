const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: String,
  dob: Date,
  startDate: Date,
  duration: String,
  mtype: String,
  weight: String,
  trainer: String,
  group: String,
  goals: String,
  payment: String,
});

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;


 