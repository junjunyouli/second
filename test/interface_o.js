'use strict';

var _supertest = require('supertest');

var _supertest2 = _interopRequireDefault(_supertest);

var _app_o = require('../app_o.js');

var _app_o2 = _interopRequireDefault(_app_o);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function request() {
  return (0, _supertest2.default)(_app_o2.default.listen());
}

describe('GET /index/update', function () {
  it('respond with json', function (done) {
    request(_app_o2.default).get('/index/update').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200, done);
  });
});
