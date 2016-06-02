/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************!*\
  !*** ./scr.js ***!
  \****************/
/***/ function(module, exports) {

	'use strict';
	
	//TODO:
	
	/*
	* 1. Create proxies with traps
	* 2. Create proxies with Reflect()
	* 3. Create proxies with get/set
	* 4. Intercept a keychain
	* 5. Check if any transpiler needs stage-0 in babel
	*/
	
	var target = {};
	
	var handler = {
	  get: function get(target, propKey, reciever) {
	    console.log("get" + propKey);
	    return 123;
	  }
	};
	
	var proxy = new Proxy(target, handler);
	
	console.log(proxy.foo);
	
	// this is core level
	var objekt = {
	  hellyea: function hellyea() {
	    // some arbitrary code
	  }
	};
	
	// this is meta level
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;
	
	try {
	  for (var _iterator = Object.keys(objekt)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	    var key = _step.value;
	
	    console.log(key);
	  }
	  // transfering props
	} catch (err) {
	  _didIteratorError = true;
	  _iteratorError = err;
	} finally {
	  try {
	    if (!_iteratorNormalCompletion && _iterator.return) {
	      _iterator.return();
	    }
	  } finally {
	    if (_didIteratorError) {
	      throw _iteratorError;
	    }
	  }
	}
	
	var obj = { hey: 'ho' };
	var obj2 = {};
	
	function moveProperty(source, propertyName, target) {
	  target[propertyName] = source[propertyName];
	  delete source[propertyName];
	}
	
	moveProperty(obj, 'hey', obj2);
	
	console.log(Object.keys(obj2).toString());

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map