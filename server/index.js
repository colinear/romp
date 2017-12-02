var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MONGODB_URI = require('../db/mongo.js');
var session = require('express-session');
var routes = require('./api/route.js');
var app = express();

mongoose.connect(MONGODB_URI, { useMongoClient: true });

app.use(session({
  secret: 'romp secrets',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 600000 }
}));

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.set('port', process.env.PORT || 3000);

app.use('/', routes);

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.listen(app.get('port'), function() {
  console.log('Romp is running at localhost:' + app.get('port'));
});
