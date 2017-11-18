'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _koaRouter = require('koa-router');

var _koaRouter2 = _interopRequireDefault(_koaRouter);

var _koaSwig = require('koa-swig');

var _koaSwig2 = _interopRequireDefault(_koaSwig);

var _co = require('co');

var _co2 = _interopRequireDefault(_co);

var _koaStatic = require('koa-static');

var _koaStatic2 = _interopRequireDefault(_koaStatic);

var _register = require('babel-core/register');

var _register2 = _interopRequireDefault(_register);

var _babelPolyfill = require('babel-polyfill');

var _babelPolyfill2 = _interopRequireDefault(_babelPolyfill);

var _initController = require('./controller/initController');

var _initController2 = _interopRequireDefault(_initController);

var _index = require('./config/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = new _koa2.default();
var router = new _koaRouter2.default();
app.use(router.routes()).use(router.allowedMethods());

_initController2.default.init(router);

app.context.render = _co2.default.wrap((0, _koaSwig2.default)({
	root: _index2.default.get('viewDir'),
	autoescape: true,
	cache: false,
	ext: 'html'
}));
app.use((0, _koaStatic2.default)(_index2.default.get('staticDir')));
app.listen(_index2.default.get('port'), function () {
	console.log("server is running!");
});

exports.default = app;
