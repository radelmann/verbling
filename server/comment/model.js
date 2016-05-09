const mongoose = require('mongoose');

// define the schema for our user model
const commentSchema = mongoose.Schema({
  title: {
    type: String
  },
  message: {
    type: String
  }
});

// create the model for users and expose it to our app
const CommentClass = mongoose.model('Comment', commentSchema);
module.exports = CommentClass;
