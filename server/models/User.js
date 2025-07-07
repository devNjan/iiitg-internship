const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        typr: String,
        required : true,
        unique : true
    },
    password : {
        typr: String,
        required : true,
    },
    role : {
        typr: String,
        default : 'user'
    },  
});

const User = mongoose.model('User', UserSchema);

module.exports = User;