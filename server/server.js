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
    res.status(400);
  });
});


app.listen(port, () => {
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
