//Application dependencies
var server = require('./server.js');
var connection = require('./connection.mongoose.js');
var mentorsSchema = require('./models/mentors-model.js');
var userSchema = require('./models/users-model.js');
var ChatsSchema = require('./models/chats-model.js');
//var authenticationSchema = require('./models/authentication.mongoose.js');

var mongoose = require('mongoose');
var express = require('express');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var cors = require('cors');

var app = express();

//Middlewares
app.use(express.json());
app.use(cors());
//app.use(express.static(__dirname + '/public'));


/*app.use(function(req, res, next)
{
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});*/

/*Http Requests*/

/* 
Mentor Schema
*/
//addMentor
app.post('/newmentor', (req, res) => {

    mentorsSchema.addMentor(req.body, function(err, userObject)
            {
                if(err)
                {
                    res.status(400).send("Bad request.");
                    return;
                }
                res.json(userObject);
            });

    // mentorsSchema.MentorModel.find({ userId: req.body.userId }, function(err, userObject)
    // {
    //     if(userObject.length === 1)
    //     {
    //         res.json({ "status": false });
    //     }
    //     else
    //     {
    //         mentorsSchema.addMentor(req.body, function(err, userObject)
    //         {
    //             if(err)
    //             {
    //                 res.status(400).send("Bad request.");
    //                 return;
    //             }
    //             res.json(userObject);
    //         });
    //     }
    // });
});


//getMentors
app.get('/mentorposts', (req, res) => {
            
    mentorsSchema.getMentors(function(err, noteObject)
            {
                if(err)
                {
                    res.status(404).send("Error getting the object.");
                    return;
                }
                res.json(noteObject);
                
            });
});

//deleteMentor
app.delete('/posts/:noteId', (req, res) => {

    mentorsSchema.deleteMentor(req.params.noteId, function(err, noteObject)
    {
        
        if(err)
        {
            res.status(404).send("Error deleting the object.");
            return;
        }
        res.json(noteObject);
    });
    }

);

//updateMesseges
app.put('/mentorMesseges/:userId', (req, res) => {
    
    mentorsSchema.updateMesseges(req.params.userId, req.body,  function(err, userObject)
    {
        if(err)
        {
            console.log(err);
            res.status(404).send("Error updating the object.");
            return;
        }
        res.json(userObject);
    });
});

//updateComments
app.put('/mentorComments/:userId', (req, res) => {
    console.log(req.body);
    mentorsSchema.updateComment(req.params.userId, req.body,  function(err, userObject)
    {
        if(err)
        {
            console.log(err);
            res.status(404).send("Error updating the object.");
            return;
        }
        //console.log("Hereeeeee");
        res.json(userObject);
    });
});

/* User Schema
*/
//addUser
app.post('/newuser', (req, res) => {
    //console.log(req);

        userSchema.addUser(req.body, function(err, userObject)
            {
                if(err)
                {
                    console.log(err);
                    res.status(400).send("Bad request.");
                    return;
                }
                res.json(userObject);
        });
});


//getUsers

app.get('/userposts', (req, res) => {
            
    userSchema.getAllUsers(function(err, noteObject)
            {
                if(err)
                {
                    res.status(404).send("Error getting the object.");
                    return;
                }
                res.json(noteObject);
                console.log(noteObject);
            });
});

/* Chats Schema
*/
//addChats
app.post('/newTutorRequest', (req, res) => {

    ChatsSchema.addChats(req.body, function(err, userObject)
        {
            if(err)
            {
            res.status(400).send("Bad request.");
                return;
            }
        res.json(userObject);
    });
    
});


//getChats

app.get('/allchats', (req, res) => {
            
    ChatsSchema.getChats(function(err, noteObject)
            {
                if(err)
                {
                    res.status(404).send("Error getting the object.");
                    return;
                }
                
                res.json(noteObject);
                
            });
});



app.get('/', (req, res) => {
    res.send("Hellohii/");
});


//Running the server
server.run(app, 8000 || process.env.PORT );



//getMentorById
/*
app.get('/mentorposts:noteId', (req, res) => {
    mentorSchema.getUserById(req.params.userId, function(err, userObject)
    {
        if(err)
        {
            res.status(404).send("Error getting the object.");
            return;
        }
        res.json(userObject);
    });
});
*/

/*
app.post('/newmentor', verifyToken, (req, res) => {

    console.log("i am here");

    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err)
        {
            res.status(400).send("Token not verified.");
        }
        else
        {
            MentorModel.addMentor(authData.user[0].userId, req.body, function(err, noteObject)
            {
                console.log(authData);
                if(err)
                {
                    console.log("i am here");
                    res.status(400).send("Bad request.");
                    return;
                }
                res.json(noteObject);
            });
        }
    });

});
*/



//updateNote
/*app.put('/posts/:noteId', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err)
        {
            console.log("HEREEEEEE..");
            console.log(err);
            res.status(400).send("Token not verified.");
        }
        else
        {
            console.log(authData);
            MentorModel.updateNote(authData.user[0].userId, req.params.noteId, req.body, {}, function(err, noteObject)
            {
                if(err)
                {
                    res.status(404).send("Error updating the object.");
                    return;
                }
                res.json(noteObject);
            });
        }
    });
});
*/


//updateUser
/*app.put('/authentication/:userId', (req, res) => {
    userSchema.updateUser(req.params.userId, req.body, {}, function(err, userObject)
    {
        if(err)
        {
            res.status(404).send("Error updating the object.");
            return;
        }
        res.json(userObject);
    });
}); */

//deleteUser
//app.delete('/authentication/:userId', (req, res) => {
//    userSchema.deleteUser(req.params.userId, function(err, userObject)
//    {
//        if(err)
//        {
//            res.status(404).send("Error deleting the object.");
//            return;
///        }
//        res.json(userObject);
//    });
//});



//validateUser
/*
app.post('/newuser', (req, res) => {
    UserModel.validateUser(req.query.userId, req.query.password, function(err, isValid)
    {
        if(err)
        {
            res.status(400).send("Error validating the user");
            return;
        }

        //console.log(isValid);
        if(isValid.length === 1)
        {
            jwt.sign({ user: isValid }, 'secretkey', (err, token) => {
                res.json({ userId: isValid[0].userId, password: isValid[0].password, token: token });
            });
        }
        else
        {
            res.status(400).send("Unknown user.");
        }
        
    });
});


//Verify token
function verifyToken(req, res, next)
{
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined')
    {
        const token = bearerHeader.split(' ')[1];
        req.token = token;
        next();
    }
    else
    {
        res.status(400).send("Token not verified.");
    }

}


*/
