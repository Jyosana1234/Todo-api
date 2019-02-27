const {ObjectID} =  require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

Todo.findOneAndRemove({_id:'5c767a9c71037dd8ad13c810'}).then((todo)=>{
    console.log(todo);
  });

Todo.findByIdAndRemove('5c767a9c71037dd8ad13c810').then((todo)=>{
  console.log(todo);
});