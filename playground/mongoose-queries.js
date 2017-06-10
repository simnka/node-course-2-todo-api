const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '593be9d6c0ba3f3e0ef78c8f';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

// User.findById
// case 1: query works but there is no user --> print User not found
// case 2: user was found --> print user to the screen
// case 3: handle any errors that might have occured --> print error object to the screen
// no need to use is valid, just use findById call

// const userId = '5932eb59b6bb6f84076b7adeXXX';
// User.findById(userId).then((user) => {
//     if(!user){
//         return console.log('User does not exist');
//     }
//     console.log(user);
// }).catch((e) => console.log(e));

User.findById('5932eb59b6bb6f84076b7ade').then((user) => {
    if(!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});

