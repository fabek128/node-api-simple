const request = require('supertest');
const should = require("should");
const app = require('../app.js'); 

var obj = {
    word: 'hello'
}

describe('POST /api/word', function() {
    it('send a word and return the same word', function(done) {
      request(app)
        .post('/api/word')        
        .send(obj)
        .expect(200)
        .end(function(err,res){
            res.status.should.equal(200);
            res.body.word.should.equal("hello");
            done();
          });
    });
  });