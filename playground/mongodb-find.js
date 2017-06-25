//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    console.log('Unable to connect MongoDB server');
  }

  console.log('Connected to MongoDB server');

  db.collection('Todos').find({
    _id: new ObjectID('594fcb4296602d99e6e9f13f')
  }).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch todos', err);
  });

//Get count-----------------------------
  db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count: ${count}`);
  },(err)=>{
    console.log('Unable to fetch todos', err);
  });

  db.collection('Users').find({name: 'Shehan Gamage'}).toArray().then((docs)=>{
    console.log('Result----------------');
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch todos', err);
  });


//  db.close();
});
