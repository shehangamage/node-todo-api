const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

const {
  mongoose
} = require('./db/mongoose');
const {
  Todo
} = require('./models/todo');
const {
  User
} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((docs) => {
    res.send(docs);
  }, (err) => {
    res.status(400).send(err);
  });
});

app.get('/todos', (req, res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  },(err)=>{
   res.status(400).send(err);
  });
});

app.get('/todos/:id', (req, res)=>{
  var id = req.params.id;
  if(!ObjectId.isValid(id)){
    return res.status(404).send('ID not valid.');
  }
  Todo.findById(id).then((todo)=>{
    if(todo === null){
        return res.status(404).send('ID not found.');
    }
    res.send(todo);
  },(err)=>{
     res.status(400).send(err);
  });

});

app.delete('/todos/:id',(req, res)=>{
  var id =  req.params.id;
  if(!ObjectId.isValid(id)){
    return res.status(404).send('ID not valid');
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(todo === null){
      return res.status(404).send('ID not found');
    }
    res.send(todo);
  }).catch((e)=>{
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res)=>{
  var id = req.params.id;
  var body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectId.isValid(id)){
    return res.status(404).send('ID not valid');
  }
  console.log(body.completed);
  if(_.isBoolean(body.completed) && body.completed){
    body.completedAt = new Date().getTime();
  }else{
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if(!todo){
      return res.status(404).send('ID not found');
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});

//POST /users -------------------------------------------------

app.post('/users', (req, res)=>{
  var body  = _.pick(req.body, ['email', 'password']);

  var user = new User(body);

  user.save().then((user)=>{
    res.send(user);
  }).catch((err)=>{
    res.status(400).send(err);
  });

});


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
