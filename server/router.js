const Comment = require('./comment/controller');
var sanitize = require('mongo-sanitize');

var cleanInput = function(req, res, next) {
  req.body = sanitize(req.body);
  next();
}

module.exports = function(app) {
  //comment routes
  app.get('/comment', Comment.getAll);
  app.post('/comment', cleanInput, Comment.post);
  app.delete('/comment/:id', Comment.delete);
}