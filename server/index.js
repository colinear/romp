var express = require('express')
var path = require('path');
var app = express()
var mongoose = require('mongoose');
const MONGODB_URI = require('../db/mongo.js');
mongoose.connect(MONGODB_URI);

app.set('port', (process.env.PORT || 5000))
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
