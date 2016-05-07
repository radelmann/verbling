var mongoose = require('mongoose');

// define the schema for our user model
var commentSchema = mongoose.Schema({
  title: {
    type: String
  },
  message: {
    type: String
  }
});

// create the model for users and expose it to our app
var CommentClass = mongoose.model('Comment', commentSchema);
module.exports = CommentClass;
