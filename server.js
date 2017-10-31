// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var path = require('path');
var exphbs = require('express-handlebars');
var logger = require("morgan");
var router = require('./controllers/controller.js');

// Initialize Express
var app = express();

// Handlebars set as view engine
// Default layout 'main'
app.engine('handlebars', exphbs({defaultLayout: 'main', extname: '.handlebars'}));
app.set('view engine', 'handlebars');

// Use morgan and body-parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(logger("dev"));

// Serve static content for the app from the "public" directory 
app.use(express.static(process.cwd() + '/public'));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));
app.use('/', router);

// Set up the server
var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("App Listening on Port: " + port);
});