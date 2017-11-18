import supertest from 'supertest';
import app  from "../app_o.js";

function request(){
	return supertest(app.listen());
}

describe('GET /index/update', function() {
  it('respond with json', function(done) {
    request(app)
      .get('/index/update')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});