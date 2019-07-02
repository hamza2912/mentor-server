/*
-- mLab --
DATABASE NAME: mn-mynotesapp
Database Username: Hamza
User Password: hamza

*/

//Dependencies
var mongoose = require('mongoose');

//Connecting to MongoDB

//mongoose.connect('mongodb://localhost/myapp');
mongoose.connect('mongodb+srv://dbHamza:Imdone12345%21@cluster0-esywb.mongodb.net/test?retryWrites=true&w=majority', () => 
    {
        console.log("Connected to DB...");
    });