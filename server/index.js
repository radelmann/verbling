var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
var config = require('./config');
var router = require('./router');
var app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.static('../client'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

mongoose.connect(config.db_url);

router(app);

var server = app.listen(config.port, function () {
  var host = this.address().address;
  host === '::' ? host = 'localhost' : true;
  var port = this.address().port;

  console.log(`Express server listening on http://${host}:${port}`);
});

module.exports = app;