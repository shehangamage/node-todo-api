const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
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
  text: 'Some work',
  completed: false,
  completedAt: 1234
});

  otherTodo.save().then((docs)=>{
    console.log(`Save new todo ${docs}`);
  },(err)=>{console.log('Unable to save todo.');});
