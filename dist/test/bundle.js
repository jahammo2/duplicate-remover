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

	var _indexTest = __webpack_require__(1);

	var _indexTest2 = _interopRequireDefault(_indexTest);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _testHelpers = __webpack_require__(2);

	var _Home = __webpack_require__(8);

	var _Home2 = _interopRequireDefault(_Home);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var expectedValue = void 0;
	var actualValue = void 0;

	_testHelpers.testFramework.runTests(['Home', 'renderTasks'], [function () {
	  var home = new _Home2.default();
	  home.tasks = ['testHelpers', 'bar'];
	  actualValue = home.renderTasks();
	  expectedValue = '<li>testHelpers</li><li>bar</li>';

	  _testHelpers.testFramework.it('returns a list of list items with tasks', new _testHelpers.Test(actualValue).equals(expectedValue));
	}]);

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.removeWhiteSpace = exports.testFramework = exports.Test = exports.TestFramework = undefined;

	var _TestFramework = __webpack_require__(3);

	var _TestFramework2 = _interopRequireDefault(_TestFramework);

	var _helpers = __webpack_require__(5);

	var _Test = __webpack_require__(6);

	var _Test2 = _interopRequireDefault(_Test);

	var _Logger = __webpack_require__(7);

	var _Logger2 = _interopRequireDefault(_Logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testFramework = new _TestFramework2.default(_Logger2.default);

	exports.TestFramework = _TestFramework2.default;
	exports.Test = _Test2.default;
	exports.testFramework = testFramework;
	exports.removeWhiteSpace = _helpers.removeWhiteSpace;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _colors = __webpack_require__(4);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestFramework = function () {
	  function TestFramework(logger) {
	    _classCallCheck(this, TestFramework);

	    this.testSpaces = 0;
	    this.logger = logger;
	  }

	  _createClass(TestFramework, [{
	    key: 'it',
	    value: function it(description, test) {
	      new this.logger(this.testSpaces, description, _colors.GREEN).run();

	      if (!test.passed) {
	        new this.logger(this.testSpaces + 2, test.errorMessage, _colors.RED).run();
	      }
	    }
	  }, {
	    key: 'runTests',
	    value: function runTests(descriptions, tests) {
	      this.testSpaces = descriptions.length * 2;
	      this.logDescriptions(descriptions);

	      tests.forEach(function (test) {
	        test();
	      });
	    }
	  }, {
	    key: 'logDescriptions',
	    value: function logDescriptions(descriptions) {
	      var _this = this;

	      descriptions.forEach(function (description, index) {
	        new _this.logger(index * 2, description, _colors.GREEN).run();
	      });
	    }
	  }]);

	  return TestFramework;
	}();

	exports.default = TestFramework;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GREEN = exports.GREEN = '\x1b[32m%s\x1b[0m';
	var RED = exports.RED = '\x1b[31m%s\x1b[0m';

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var removeWhiteSpace = exports.removeWhiteSpace = function removeWhiteSpace(string) {
	  return string.replace(/  /g, '').replace(/(^[ \t]*\n)/gm, "").replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Logger = __webpack_require__(7);

	var _Logger2 = _interopRequireDefault(_Logger);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Test = function () {
	  function Test(actualValue) {
	    _classCallCheck(this, Test);

	    this.actualValue = actualValue;
	  }

	  _createClass(Test, [{
	    key: 'equals',
	    value: function equals(expectedValue) {
	      return {
	        passed: this.actualValue === expectedValue,
	        errorMessage: 'expected ' + this.actualValue + ' to equal ' + expectedValue
	      };
	    }
	  }, {
	    key: 'deeplyEquals',
	    value: function deeplyEquals(expectedValue) {
	      return {
	        passed: this.actualValue == expectedValue,
	        errorMessage: 'expected ' + this.actualValue + ' to deeply equal ' + expectedValue
	      };
	    }
	  }]);

	  return Test;
	}();

	exports.default = Test;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Logger = function () {
	  function Logger(spaces, text, color) {
	    _classCallCheck(this, Logger);

	    this.spaces = spaces;
	    this.text = text;
	    this.color = color;
	  }

	  _createClass(Logger, [{
	    key: 'createSentence',
	    value: function createSentence() {
	      return '' + ' '.repeat(this.spaces) + this.text;
	    }
	  }, {
	    key: 'run',
	    value: function run() {
	      console.log(this.color, this.createSentence());
	    }
	  }]);

	  return Logger;
	}();

	exports.default = Logger;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Home = function () {
	  function Home() {
	    _classCallCheck(this, Home);

	    this.tasks = ['foo', 'bar'];
	  }

	  _createClass(Home, [{
	    key: 'renderTasks',
	    value: function renderTasks() {
	      return this.tasks.map(function (task) {
	        return '<li>' + task + '</li>';
	      }).join('');
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return '\n      <div>' + new LogIn().render() + '</div>\n      <ul>' + this.renderTasks() + '</ul>\n    ';
	    }
	  }]);

	  return Home;
	}();

	exports.default = Home;

/***/ }
/******/ ]);