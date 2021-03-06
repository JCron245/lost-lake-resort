// app.js

// modules
var express = require('express');
var app = express();
var methodOverride = require('method-override');
var nodemailer = require('nodemailer');
app.nodemailer = nodemailer;
//Configure express here to use body parser
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// configurate it all
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 80; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 


// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 

// routes
require('./config/routes')(app); // configure our routes

// start app 
// startup our app at http://localhost:4321
app.listen(port);               

// shoutout to the user                     
console.log('[+] App can be found on port ' + port);

// expose app           
exports = module.exports = app;  
