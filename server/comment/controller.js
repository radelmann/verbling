var Comment = require('./model');

module.exports = {
  getAll: function(req, res, next) {

    Comment.find()
      .then(function(comments) {
        if (!comments) {
          res.status(200);
          res.json([]);
        }

        res.status(200);
        res.json({
          'data': comments
        });
      });
  },

  post: function(req, res, next) {
    var comment = new Comment({
      title: req.body.title,
      message: req.body.message
    });

    comment.save(function(err, saved) {
        if (err) {
          next(err);
        }
        res.status(200);
        res.json(saved);
      },
      function(err) {
        next(err);
      });

    res.status(200);
  },

  delete: function(req, res, next) {
    Comment.remove({
        _id: req.params.id
      })
      .then(function(deleted) {
        if (!deleted) {
          res.status(404);
          return;
        }
        res.status(200);
        res.json(deleted);
      });
  }
}