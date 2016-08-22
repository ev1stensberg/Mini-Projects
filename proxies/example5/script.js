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
	* 2. Create proxies with Reflect()
	* 4. Intercept a keychain
	*/
	
	function createSomething() {
	    for (var _len = arguments.length, a = Array(_len), _key = 0; _key < _len; _key++) {
	        a[_key] = arguments[_key];
	    }
	
	    var dill = [].concat(a);
	    return dill;
	}
	
	var arrays = createSomething(1, 2, 3);
	console.log(arrays.shift());
	
	// Allow proxies on negative indices & bracket notations
	function createArray() {
	    var handler = {
	        get: function get(target, propKey, receiver) {
	            // Sloppy way of checking for negative indices
	            var index = Number(propKey);
	            if (index < 0) {
	                propKey = String(target.length + index);
	            }
	            return Reflect.get(target, propKey, receiver);
	        }
	    };
	    // Wrap a proxy around an Array
	    var target = [];
	    target.push.apply(target, arguments);
	    return new Proxy(target, handler);
	}
	var arr = createArray('a', 'b', 'c');
	console.log(arr[-1]); // c
	
	// create databinding through set
	function createObservedArray(callback) {
	    var array = []; // create the array
	    return new Proxy(array, { // return a  proxy from func, on the array
	
	        set: function set(target, propertyKey, value, receiver) {
	            // use set trap and use target etc as params to pass down
	            callback(propertyKey, value); // call the callback func
	            return Reflect.set(target, propertyKey, value, receiver);
	        }
	    });
	}
	var observedArray = createObservedArray(function (key, value) {
	    return console.log(key + '=' + value);
	});
	observedArray.push('a', 'b');

/***/ }
/******/ ]);
//# sourceMappingURL=script.js.map