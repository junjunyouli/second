'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var f = "";

var PraiseButton = function () {
	function PraiseButton(num, emlemt) {
		_classCallCheck(this, PraiseButton);

		this.num = num;
		this.emlemt = emlemt;
	}

	_createClass(PraiseButton, [{
		key: 'addPraiseButton',
		value: function addPraiseButton() {
			return add(this.num);
		}
	}]);

	return PraiseButton;
}();

var Thumb = function (_PraiseButton) {
	_inherits(Thumb, _PraiseButton);

	function Thumb(num, emlemt) {
		_classCallCheck(this, Thumb);

		return _possibleConstructorReturn(this, (Thumb.__proto__ || Object.getPrototypeOf(Thumb)).call(this, num, emlemt));
	}

	_createClass(Thumb, [{
		key: 'addThumb',
		value: function addThumb() {
			var _this2 = this;

			this.emlemt.click(function (e) {
				if (f) {
					clearTimeout(f);
				}
				f = setTimeout(function () {
					_this2.num = _get(Thumb.prototype.__proto__ || Object.getPrototypeOf(Thumb.prototype), 'addPraiseButton', _this2).call(_this2, _this2.num);
					$('#add').addClass('show');
					if (_this2.num % 10 == 0) {
						$(".pd").addClass('bd');
					} else {
						$(".pd").removeClass('bd');
					}
					axios.get('/index/update').then(function (response) {
						console.log(response);
					}).catch(function (error) {
						console.log(error);
					});
					setTimeout(function () {
						$('#add').removeClass('show');
					}, 1000);
				}, 800);
			});
		}
	}]);

	return Thumb;
}(PraiseButton);

exports.default = { Thumb: Thumb };
