const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 1,
    max: 120,
    required: true,

  },
  createdOn: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const friendModel = mongoose.model('Friend', friendSchema); //creates a friends collection

module.exports = friendModel;