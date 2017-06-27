const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5952000cb0088542e4cd5d36';

//check id validation -------------------------
if(!ObjectId.isValid(id)){
  return console.log('ID not valid.');
}

Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos');
  console.log(todos);
});

Todo.findOne({
  completed: false
}).then((todo)=>{
  console.log('Todo');
  console.log(todo);
});

Todo.findById(id).then((todo)=>{
  if(!todo){
    return console.log('ID not found.');
  }
  console.log('Todo by id ');
  console.log(todo);
}).catch((err)=> console.log(err));

var useID = '5950dabc37522f384496e5c0';

User.findById(useID).then((user)=>{
  if(!user){
    return console.log('user not found.');
  }
  console.log('User by id');
  console.log(JSON.stringify(user, undefined, 2));
},(err)=>{
  console.log(err);
});
