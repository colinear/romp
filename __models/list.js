var mongoose = require('mongoose'); /* http://mongoosejs.com/docs/ */

var listSchema = mongoose.Schema({
  title: {type: String, required: true},
  user_id: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  secret: Boolean,
  items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }]
})

var List = mongoose.model('List', listSchema);


module.exports = List;
