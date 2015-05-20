// app.js

// modules
var express = require('express');
var app = express();
var methodOverride = require('method-override');

// configuration 
    
// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 4321; 

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