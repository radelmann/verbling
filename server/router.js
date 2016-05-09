const Comment = require('./comment/controller');
const sanitize = require('mongo-sanitize');

const cleanInput = function(req, res, next) {
  req.body = sanitize(req.body);
  next();
}

module.exports = function(app) {
  //comment routes
  app.get('/comment', Comment.getAll);
  app.post('/comment', cleanInput, Comment.post);
  app.delete('/comment/:id', Comment.delete);
}