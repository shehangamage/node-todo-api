const mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
  text: {
    type: String,
    requred: true,
    minlength: 3,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  },
  _creator: {
    type: mongoose.Schema.Types.ObjectId,
    requred: true
  }
});


module.exports = {Todo};
