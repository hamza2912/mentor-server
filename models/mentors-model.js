//Dependencies
var mongoose = require('mongoose');

var Ids = 3;

//Mentor Schema
var mentorsSchema = mongoose.Schema(
    {
        name:
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
        userId:
        {
            type: Number,
            required: true
        },
        content:
        {
            type: String,
            required: true
        },
        classes:
        {
            type: String,
            required: true
        },
        salary:
        {
            type: String,
            required: true
        },
        number:
        {
            type: String,
            required: true
        },
        // city:
        // {
        //     type: String,
        //     required: true
        // },
        location:
        {
            type: String,
            required: true
        },
        mark:
        {
            type: String,
            required: true
        },
        comments:
        {
            type: [String],
            required: true
        },
        messeges:
        {
            type: [String],
            required: true
        },
    }
);

var MentorModel = mongoose.model('MentorModel', mentorsSchema);

/*Functions to handle Http requests*/

exports.addMentor = function(mentorObject, callback)
{
    MentorModel.create(mentorObject, callback);   
}


exports.deleteMentor = function(_userId, callback)
{
    var query = { userId: _userId[1] };

    MentorModel.remove(query, callback);
}

exports.getMentors = function(callback)
{
    ///var query = { userId: _userId };

    MentorModel.find({}, callback);
}

exports.updateComment = function(_userId, updatedObject, callback)
{

    var query = {userId: _userId[1]};

    var update;
    
    if(updatedObject)
    {
        update = { comments: updatedObject};
    }

    MentorModel.findOneAndUpdate(query, update, callback);
    
}

exports.updateMesseges = function(_userId, updatedObject, callback)
{

    var query = {userId: _userId[1]};

    var update;
    
    if(updatedObject)
    {
        update = { messeges: updatedObject};
    }

    MentorModel.findOneAndUpdate(query, update, callback);
    
}


/*

exports.getMentorById = function(_userId, callback)
{
    var query = { userId: _userId };

    MentorModel.find(query, callback);
}

exports.update = function(_userId, _noteId, updatedNoteObject, options, callback)
{
    console.log("Here..");

    var query = {userId: _userId, noteId: _noteId};

    var update;
    
    if(updatedNoteObject.noteText)
    {
        update = { noteText: updatedNoteObject.noteText, updatedOn: new Date() };
        console.log(updatedNoteObject.noteText);
    }

    options.new = true;

    MentorModel.findOneAndUpdate(query, update, options, callback);
    console.log("DOnww");
}
*/