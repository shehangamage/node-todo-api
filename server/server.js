const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

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
  }
});

// var newTodo = new Todo({
//   text: 'Cook Dinner'
// });
//
//
// newTodo.save().then((docs)=>{
//   console.log(`Save new todo ${docs}`);
// },(err)=>{console.log('Unable to save todo.');});


var otherTodo = new Todo({
  text: 'Clean the workspace.',
});

  otherTodo.save().then((docs)=>{
    console.log(`Save new todo ${docs}`);
  },(err)=>{console.log('Unable to save todo.');});
