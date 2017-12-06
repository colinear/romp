var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var MONGODB_URI = require('../db/mongo.js');
var session = require('express-session');
var routes = require('./api/route.js');
var app = express();

mongoose.connect(MONGODB_URI, { useMongoClient: true });

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('port', process.env.PORT || 3001);

app.use('/', routes);

app.listen(app.get('port'), function() {
  console.log('Romp is running at localhost:' + app.get('port'));
});
