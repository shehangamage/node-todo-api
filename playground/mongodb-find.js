//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch todos', err);
  });


//  db.close();
});
