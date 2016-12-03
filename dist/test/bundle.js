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

	var _indexTest3 = __webpack_require__(12);

	var _indexTest4 = _interopRequireDefault(_indexTest3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _testHelpers = __webpack_require__(2);

	var _Emails = __webpack_require__(9);

	var _Emails2 = _interopRequireDefault(_Emails);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var actualValue = void 0;

	global.document = _testHelpers.globalDocument;

	// Just to demostrate a basic test
	_testHelpers.testFramework.runTests(['Emails', 'handleShowHideClick'], [function () {
	  var emails = new _Emails2.default();
	  emails.showing = true;
	  emails.handleShowHideClick();
	  actualValue = emails.showing;
	  var expectedValue = false;

	  _testHelpers.testFramework.it('changes showing to false if initially set to true', new _testHelpers.Test(actualValue).equals(expectedValue));
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.testFramework = exports.Test = exports.removeWhiteSpace = exports.globalDocument = undefined;

	var _helpers = __webpack_require__(3);

	var _Logger = __webpack_require__(4);

	var _Logger2 = _interopRequireDefault(_Logger);

	var _Test = __webpack_require__(5);

	var _Test2 = _interopRequireDefault(_Test);

	var _TestFramework = __webpack_require__(7);

	var _TestFramework2 = _interopRequireDefault(_TestFramework);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var testFramework = new _TestFramework2.default(_Logger2.default);

	var globalDocument = {
	  getElementById: function getElementById() {
	    return {
	      className: {
	        replace: function replace() {}
	      }
	    };
	  }
	};

	exports.globalDocument = globalDocument;
	exports.removeWhiteSpace = _helpers.removeWhiteSpace;
	exports.Test = _Test2.default;
	exports.testFramework = testFramework;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var removeWhiteSpace = exports.removeWhiteSpace = function removeWhiteSpace(string) {
	  return string.replace(/  /g, '').replace(/(^[ \t]*\n)/gm, "").replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");
	};

/***/ },
/* 4 */
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

	    this.color = color;
	    this.spaces = spaces;
	    this.text = text;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _Logger = __webpack_require__(4);

	var _Logger2 = _interopRequireDefault(_Logger);

	var _utils = __webpack_require__(6);

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
	    key: 'isLessThan',
	    value: function isLessThan(max) {
	      return {
	        passed: this.actualValue < max,
	        errorMessage: 'expected ' + this.actualValue + ' to be less than ' + max
	      };
	    }
	  }, {
	    key: 'isOrderedAs',
	    value: function isOrderedAs(expectedValue) {
	      // Since the duplicates that are removed are the ones that aren't the first instance, this test will suffice.
	      // Example: the resulting array of [1,2,3,1] will be [1,2,3] so I only need to check that the first element in
	      // both arrays match.
	      //
	      // This doesn't cover cases where the first elements match but the rest of the array is out order.
	      var orderedCorrectly = (0, _utils.arraysInitiallyOrderedTheSame)(expectedValue, this.actualValue);

	      return {
	        passed: orderedCorrectly,
	        errorMessage: 'the new array is ordered differently than the original'
	      };
	    }
	  }]);

	  return Test;
	}();

	exports.default = Test;

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.arraysInitiallyOrderedTheSame = arraysInitiallyOrderedTheSame;
	exports.generateEmails = generateEmails;
	exports.getTime = getTime;
	exports.find = find;
	function findHighestAmountOfDuplicatesInArray(arr) {
	  var hash = {};
	  var highestAmounts = 0;

	  for (var i = 0; i < arr.length; i++) {
	    var hashValue = hash[arr[i]];

	    if (hashValue > -1) {
	      hash[arr[i]]++;

	      if (highestAmounts <= hashValue) {
	        highestAmounts = hashValue + 1;
	      }
	    } else {
	      hash[arr[i]] = 0;
	    }
	  }

	  return highestAmounts;
	}

	function shuffle(array) {
	  var randomNum = void 0;

	  for (var i = array.length; i; i--) {
	    randomNum = Math.floor(Math.random() * i);
	    var _ref = [array[randomNum], array[i - 1]];
	    array[i - 1] = _ref[0];
	    array[randomNum] = _ref[1];
	  }

	  return array;
	}

	function arraysInitiallyOrderedTheSame(arr1, arr2) {
	  var highestDuplicateAmounts = findHighestAmountOfDuplicatesInArray(arr1);

	  for (var i = 0; i < highestDuplicateAmounts; i++) {
	    if (arr1[i] !== arr2[i]) return false;
	  }

	  return true;
	}

	function generateEmails() {
	  var emailAddress = void 0;
	  var initialEmails = [];

	  for (var ii = 2; ii > 0; ii--) {
	    for (var i = 25000; i > 0; i--) {
	      emailAddress = "foo" + i + "@email.com";
	      initialEmails.push(emailAddress);
	    }
	  }

	  for (var _i = 50000; _i > 0; _i--) {
	    emailAddress = "bar" + _i + "@email.com";
	    initialEmails.push(emailAddress);
	  }

	  return shuffle(initialEmails);
	}

	function getTime() {
	  return new Date().getTime();
	}

	function find(id) {
	  return document.getElementById(id);
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _colors = __webpack_require__(8);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestFramework = function () {
	  function TestFramework(logger) {
	    _classCallCheck(this, TestFramework);

	    this.logger = logger;
	    this.testSpaces = 0;
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
	      this.logDescriptions(descriptions);
	      this.testSpaces = descriptions.length * 2;

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
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var GREEN = exports.GREEN = '\x1b[32m%s\x1b[0m';
	var RED = exports.RED = '\x1b[31m%s\x1b[0m';

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _EmailDuplicateRemover = __webpack_require__(10);

	var _EmailDuplicateRemover2 = _interopRequireDefault(_EmailDuplicateRemover);

	var _utils = __webpack_require__(6);

	var _dom = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Emails = function () {
	  function Emails() {
	    _classCallCheck(this, Emails);

	    this.handleShowHideClick = _dom.handleShowHideClick.bind(this);
	    this.generatorButton = (0, _utils.find)('generatorButton');
	    this.list = (0, _utils.find)('initialEmails');
	    this.showHideButton = (0, _utils.find)('showHideInitialEmailsButton');
	  }

	  _createClass(Emails, [{
	    key: 'handleGenerateClick',
	    value: function handleGenerateClick() {
	      var self = this;

	      self.showHideButton.className = self.showHideButton.className.replace(/\invisible\b/, '');
	      var promise = new Promise(function (resolve, reject) {
	        return resolve((0, _utils.generateEmails)());
	      });
	      promise.then(function (emails) {
	        self.list.innerHTML = emails.join(', ');
	        new _EmailDuplicateRemover2.default(emails).render();
	      });
	    }
	  }, {
	    key: 'registerEvents',
	    value: function registerEvents() {
	      var self = this;

	      self.generatorButton.addEventListener('click', self.handleGenerateClick.bind(self));
	      self.showHideButton.addEventListener('click', self.handleShowHideClick.bind(self));
	    }
	  }]);

	  return Emails;
	}();

	exports.default = Emails;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _utils = __webpack_require__(6);

	var _dom = __webpack_require__(11);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var EmailDuplicateRemover = function () {
	  function EmailDuplicateRemover(emails) {
	    _classCallCheck(this, EmailDuplicateRemover);

	    this.handleShowHideClick = _dom.handleShowHideClick.bind(this);
	    this.originalEmailsList = emails;

	    this.duplicateRemoverButton = (0, _utils.find)('duplicateRemoverButton');
	    this.list = (0, _utils.find)('removedDuplicatesList');
	    this.showHideButton = (0, _utils.find)('showHideRemovedDuplicatesButton');
	    this.totalTimeSentence = (0, _utils.find)('totalTimeSentence');
	  }

	  _createClass(EmailDuplicateRemover, [{
	    key: 'fillHtml',
	    value: function fillHtml(emails, totalTime) {
	      this.list.innerHTML = emails.join(', ');
	      this.totalTimeSentence.innerHTML = 'Duplicate removal completed in ' + totalTime + ' milliseconds';
	    }
	  }, {
	    key: 'handleDuplicateRemoverClick',
	    value: function handleDuplicateRemoverClick() {
	      // when `this` has to be called a bunch of times, I'll go ahead and assign it to a variable
	      var self = this;

	      self.showHideButton.className = self.showHideButton.className.replace(/\invisible\b/, '');
	      var t0 = (0, _utils.getTime)();
	      var promise = new Promise(function (resolve, reject) {
	        return resolve(self.removeDuplicates());
	      });

	      promise.then(function (emails) {
	        var t1 = (0, _utils.getTime)();
	        var totalTime = t1 - t0;
	        self.fillHtml(emails, totalTime);
	      });
	    }

	    // This should probably be handled as a util but I'll keep it in this class for now

	  }, {
	    key: 'removeDuplicates',
	    value: function removeDuplicates() {
	      var emailHash = {};
	      var emails = this.originalEmailsList;
	      var newEmailList = [];

	      for (var i = 0; i < emails.length; i++) {
	        if (!emailHash[emails[i]]) {
	          emailHash[emails[i]] = emails[i];
	          newEmailList.push(emails[i]);
	        }
	      }

	      return newEmailList;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var self = this;

	      self.duplicateRemoverButton.className = self.duplicateRemoverButton.className.replace(/\invisible\b/, '');
	      self.duplicateRemoverButton.addEventListener('click', self.handleDuplicateRemoverClick.bind(self));
	      self.showHideButton.addEventListener('click', self.handleShowHideClick.bind(self));
	    }
	  }]);

	  return EmailDuplicateRemover;
	}();

	exports.default = EmailDuplicateRemover;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.handleShowHideClick = handleShowHideClick;
	function handleShowHideClick() {
	  var self = this;

	  if (self.showing) {
	    self.list.className += ' hidden';
	    self.showing = false;
	  } else {
	    self.list.className = self.list.className.replace(/\hidden\b/, '');
	    self.showing = true;
	  }
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	var _testHelpers = __webpack_require__(2);

	var _EmailDuplicateRemover = __webpack_require__(10);

	var _EmailDuplicateRemover2 = _interopRequireDefault(_EmailDuplicateRemover);

	var _utils = __webpack_require__(6);

	var utils = _interopRequireWildcard(_utils);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var actualValue = void 0;

	global.document = _testHelpers.globalDocument;

	_testHelpers.testFramework.runTests(['EmailDuplicateRemover', 'removeDuplicates'], [function () {
	  var emails = utils.generateEmails();
	  var emailDuplicateRemover = new _EmailDuplicateRemover2.default(emails);
	  var t0 = utils.getTime();
	  var promise = new Promise(function (resolve) {
	    return resolve(emailDuplicateRemover.removeDuplicates());
	  });

	  return promise.then(function () {
	    var t1 = utils.getTime();
	    actualValue = t1 - t0;
	    var maxTime = 1000;

	    _testHelpers.testFramework.it('finishes in under 1 second', new _testHelpers.Test(actualValue).isLessThan(maxTime));
	  });
	}, function () {
	  var emails = utils.generateEmails();
	  var emailDuplicateRemover = new _EmailDuplicateRemover2.default(emails);
	  var promise = new Promise(function (resolve) {
	    return resolve(emailDuplicateRemover.removeDuplicates());
	  });

	  return promise.then(function (newEmails) {
	    actualValue = newEmails;
	    var oldEmails = emails;
	    _testHelpers.testFramework.it('returns it in the same order', new _testHelpers.Test(actualValue).isOrderedAs(oldEmails));
	  });
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }
/******/ ]);