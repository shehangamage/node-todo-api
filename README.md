## NodeJs with MongoDB


1. Start mongoDB server
2. **npm install mongodb --save** install this library
3. Create connector class

```
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect MongoDB server');
  }

  console.log('Connected to MongoDB server');

//db.close();
//use this to close db
});

```

### Add data to MongoDB

```
db.collection('Todos').insertOne({
  text: 'Something to do',
  completed: false
},(err, result)=>{
  if(err){
    return console.log('Unable to insert todo', err);
  }

  console.log(JSON.stringify(result.ops, undefined, 2));
});

```

Result.ops → give all documents inside that collection

### Fetching data

```
db.collection('Todos').find().toArray().then((docs)=>{
  console.log('Todos');
  console.log(JSON.stringify(docs, undefined, 2));
},(err)=>{
  console.log('Unable to fetch todos', err);
});
```

### Delete documents

#### deleteMany()
```
db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  console.log(result);
});

```

#### deleteOne()

```
 db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
   console.log(result);
 });

```

#### findOneAndDelete()

```
db.collection('Users').findOneAndDelete({_id: new ObjectID('594fc3ad8597611f50587598')}).then((result)=>{
  console.log(JSON.stringify(result, undefined, 2));
});

```

### Updating Data

```
db.collection('Todos').findOneAndUpdate({
  _id: new ObjectID('594fdd3796602d99e6e9f4d3')
}, {
  $set: {
    completed: true
  }
}, {
  returnOriginal: false
}).then((result) => {
  console.log(result);
});

```


## Using mongoose

### connection

```
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

```

### Create mongoose model

```
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

```

### save model

```
var otherTodo = new Todo({
  text: 'Some work',
  completed: false,
  completedAt: 1234
});

  otherTodo.save().then((docs)=>{
    console.log(`Save new todo ${docs}`);
  },(err)=>{console.log('Unable to save todo.');});

```


### Validation with mongoose model

```
var User = mongoose.model('User', {
  email: {
    type: String,
    requred: true,
    minlength: 1,
    trim: true
  }
});
```
