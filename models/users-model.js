//Dependencies
var mongoose = require('mongoose');

//Authentication Schema
var userSchema = mongoose.Schema(
    {
        name:
        {
            type: String,
            required: true
        },
        userId:
        {
            type: String,
            required: true
        },
        username:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        },
    }
);

var UserModel = exports.UserModel = mongoose.model('UserModel', userSchema);

/*Functions to handle Http requests*/

exports.addUser = function(newUserObject, callback)
{
    UserModel.create(newUserObject, callback);   
}


exports.getAllUsers = function(callback)
{
    UserModel.find(callback);
}


/*

exports.getUserById = function(_userId, callback)
{
    var query = { userId: _userId };

    UserModel.find(query, callback);
}

exports.validateUser = function(_userId, _password, callback)
{
    var query = { userId: _userId, password: _password };
    UserModel.find(query, callback);
}
*/

/*
exports.deleteUser = function(_userId, callback)
{
    var query = { userId: _userId };

    UserModel.remove(query, callback);
}
*/

/*exports.updateUser = function(_userId, updatedUserObject, options, callback)
{
    var query = {userId: _userId};

    var update;
    
    if(updatedUserObject.password)
    {
        update = { password:  updatedUserObject.password};
    }

    UserModel.findOneAndUpdate(query, update, options, callback)
}*/