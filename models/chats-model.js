//Dependencies
var mongoose = require('mongoose');

//Chats Schema
var ChatsSchema = mongoose.Schema(
    {
        Messege:
        {
            type: String,
            required: true
        },
        Email:
        {
            type: String,
            required: true
        }
    }
);

var ChatsModel = mongoose.model('ChatsModel', ChatsSchema);

/*Functions to handle Http requests*/

exports.addChats = function(chatObject, callback)
{
    ChatsModel.create(chatObject, callback);   
}


exports.getChats = function(_userId, callback)
{
    ChatsModel.find(callback);

}

