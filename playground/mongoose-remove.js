const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id: '593da6ded58668973748e937'}).then((todo) => {
    console.log(todo);
});

// Todo.findByIdAndRemove('593da6ded58668973748e937').then((todo) => {
//     console.log(todo);    
// });
