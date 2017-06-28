const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
  email: {
    type: String,
    requred: true,
    minlength: 1,
    trim: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not valid email'
    }
  },
  password: {
    type: String,
    requred: true,
    minlength: 6
  },
  tokens: [{
    access: {
      type: String,
      requred: true
    },
    token: {
      type: String,
      requred: true
    }
  }]
});

module.exports = {User};
