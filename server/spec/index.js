var chai = require('chai');
var expect = chai.expect;
var request = require('supertest');
var app = require('../index.js');

var _id;

describe("API - Server - REST API Routes", function() {

  describe('POST /comment', function() {
    it('responds with a 200 (successful) and returned json object of new comment post', function(done) {

      var data = {
        title: 'this is the title',
        message: 'this is the message'
      };

      request(app)
        .post('/comment')
        .send(data)
        .expect(function(res) {
          expect(res.body).to.exist;
          expect(res.body._id).to.exist;
          expect(res.body.title).to.equal('this is the title');
          expect(res.body.message).to.equal('this is the message');
          _id = res.body._id;
        })
        .expect(200, done);
    });
  });
  
  describe('GET /comment', function() {
    it('responds with a 200 (successful) and the json array of messages', function(done) {

      request(app)
        .get('/comment')
        .expect(function(res) {
          expect(res.body.data).to.exist;
          expect(res.body.data).to.be.array;
        })
        .expect(200, done);
    });
  });


  describe('DELETE /comment', function() {
    it('responds with a 200 (successful)', function(done) {

      request(app)
        .delete('/comment/' + _id)
        .expect(function(res) {
          expect(res.body).to.exist;
          expect(res.body.ok).to.equal(1);
        })
        .expect(200, done);
    });
  });
});