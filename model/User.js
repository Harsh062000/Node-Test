const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
       employee_id: {
              type: String,
              required: true,
              unique: true
       },
       first_name: {
              type: String,
              required: true
       },
       last_name: { type: String },
       department: { type: String },
       Address: { type: String },
       hire_date: { type: Date },
       dob: { type: Date },
       joiningDate: { type: Date },
       salary: { type: Number }
})

module.exports = mongoose.model('User', userSchema);