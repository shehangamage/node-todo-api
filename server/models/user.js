const mongoose = require('mongoose');

var User = mongoose.model('User', {
  email: {
    type: String,
    requred: true,
    minlength: 1,
    trim: true
  }
});

module.exports = {User};
