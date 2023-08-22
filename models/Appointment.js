const mongoose = require("mongoose");
const { Schema } = mongoose;

const Appointment = new Schema({
  firstname: String,
  lastname: String,
  email: String,
  location: String,
  customers: String,
  services: {},
  date: Date,
});

module.exports = mongoose.model("appointment", Appointment);
