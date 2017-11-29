var mongoose = require('mongoose');

var itemSchema = mongoose.Schema({
  title: {type: String, required: true},
  price: Number,
  comments: String,
  url: String,
  image_url: String,
  timestamp: {type: Date, default: Date.now},
  purchased: {type: Boolean, default: false},
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  list_id: {type: mongoose.Schema.Types.ObjectId, ref: 'List'}
})

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
