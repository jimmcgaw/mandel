/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _Complex = __webpack_require__(1);

	var _Complex2 = _interopRequireDefault(_Complex);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var complex = new _Complex2.default(4, 5);

	console.log(complex.prettyPrint());

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Complex = function () {
	  function Complex(real, imaginary) {
	    _classCallCheck(this, Complex);

	    this.real = real;
	    this.imaginary = imaginary;
	  }

	  _createClass(Complex, [{
	    key: "equals",
	    value: function equals(otherComplex) {
	      if (!(otherComplex instanceof Complex)) {
	        throw new TypeError("Value provided must also be of type 'Complex'.");
	      }
	      if (otherComplex.real === this.real && otherComplex.imaginary == this.imaginary) {
	        return true;
	      }
	      return false;
	    }
	  }, {
	    key: "add",
	    value: function add(otherComplex) {
	      if (!(otherComplex instanceof Complex)) {
	        throw new TypeError("Value provided must also be of type 'Complex'.");
	      }
	      return new Complex(otherComplex.real + this.real, otherComplex.imaginary + this.imaginary);
	    }
	  }, {
	    key: "multiply",
	    value: function multiply(otherComplex) {
	      if (!(otherComplex instanceof Complex)) {
	        throw new TypeError("Value provided must also be of type 'Complex'.");
	      }
	      var f = this.real * otherComplex.real;
	      var o = this.real * otherComplex.imaginary;
	      var i = this.imaginary * otherComplex.real;
	      var l = this.imaginary * otherComplex.imaginary;
	      l = -l;
	      return new Complex(f + l, o + i);
	    }
	  }, {
	    key: "exp",
	    value: function exp(n) {
	      if (n === 0) {
	        return new Complex(this.real + 1, 0);
	      } else if (n === 1) {
	        return this;
	      } else {
	        var c = this;
	        for (var i = 1; i < n; i++) {
	          c = c.multiply(c);
	        }
	        return c;
	      }
	    }
	  }, {
	    key: "magnitude",
	    value: function magnitude() {
	      return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
	    }
	  }, {
	    key: "complexConjugate",
	    value: function complexConjugate() {
	      return new Complex(this.real, -this.imaginary);
	    }
	  }, {
	    key: "prettyPrint",
	    value: function prettyPrint() {
	      var operator = "";
	      if (this.imaginary >= 0) {
	        operator = "+";
	      }
	      return this.real.toString() + operator + this.imaginary.toString() + 'i';
	    }
	  }]);

	  return Complex;
	}();

	exports.default = Complex;

/***/ }
/******/ ]);