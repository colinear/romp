var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MONGODB_URI = require('../db/mongo.js');
mongoose.connect(MONGODB_URI);
var router = require('./api/route.js');

var app = express();
app.set('port', (process.env.PORT || 3000));
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.json());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log("Romp is running at localhost:" + app.get('port'));
});
