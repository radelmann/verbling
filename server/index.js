'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const router = require('./router');
const app = express();

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

const server = app.listen(config.port, function () {
  let host = this.address().address;
  host === '::' ? host = 'localhost' : true;
  const port = this.address().port;

  console.log(`Express server listening on http://${host}:${port}`);
});

module.exports = app;