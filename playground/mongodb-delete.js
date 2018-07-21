//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
  if(err){
      return console.log('Unable to connect to MongoDB server');
  }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({text: 'Rain coming'}).then((result)=>{
    //  console.log(result);

    // db.collection('Todos').deleteOne({text: 'Rain coming'}).then((result)=>{
    //  console.log(result);

    // db.collection('Todos').findOneAndDelete({completed: true}).then((result)=>{
    //  console.log(result);

     //db.collection('Users').deleteMany({Name: 'Jyosana'});

      db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b5170bd5c3022235cb3d577")}).then((result)=>{
       console.log(JSON.stringify(result, undefined, 2));

   });

    //db.close();
});
