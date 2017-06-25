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

```
