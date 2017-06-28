const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '595392234facfc171c8f5797';

// Remove All
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove()
// Todo.findOneAndRemove({
//   completed: false
// }).then((result)=>{
//   console.log(result);
// });

//Todo.findByIdAndRemove()

Todo.findByIdAndRemove(id).then((result)=>{
  console.log(result);
});
