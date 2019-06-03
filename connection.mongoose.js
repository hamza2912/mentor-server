/*
-- mLab --
DATABASE NAME: mn-mynotesapp
Database Username: emad
User Password: emadmlab123

*/

//Dependencies
var mongoose = require('mongoose');

//Connecting to MongoDB

//mongoose.connect('mongodb://localhost/MyNotesApp');
mongoose.connect('mongodb://localhost/myapp', () => 
    {
        console.log("Connected to DB...");
    });