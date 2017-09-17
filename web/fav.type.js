(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).type = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var isEmpty = require('./lib/is-empty');
var isArray = require('./lib/is-array');
var isString = require('./lib/is-string');
var isFunction = require('./lib/is-function');
var isPlainObject = require('./lib/is-plain-object');
var isInteger = require('./lib/is-integer');
var isFiniteNumber = require('./lib/is-finite-number');

var type = {};

Object.defineProperties(type, {
  isEmpty: { enumerable: true, value: isEmpty },
  isArray: { enumerable: true, value: isArray },
  isString: { enumerable: true, value: isString },
  isFunction: { enumerable: true, value: isFunction },
  isPlainObject: { enumerable: true, value: isPlainObject },
  isInteger: { enumerable: true, value: isInteger },
  isFiniteNumber: { enumerable: true, value: isFiniteNumber },
});

module.exports = type;

},{"./lib/is-array":2,"./lib/is-empty":3,"./lib/is-finite-number":4,"./lib/is-function":5,"./lib/is-integer":6,"./lib/is-plain-object":7,"./lib/is-string":8}],2:[function(require,module,exports){
'use strict';

function isArray(value) {
  return Array.isArray(value);
}

module.exports = isArray;

},{}],3:[function(require,module,exports){
'use strict';

var isArray = require('../is-array');
var isPlainObject = require('../is-plain-object');

function isEmpty(value) {
  if (value === undefined || value === null) {
    return true;
  }

  if (isArray(value) && value.length === 0) {
    return true;
  }

  if (isPlainObject(value)) {
    for (var key in value) {
      return false;
    }
    return true;
  }

  /* istanbul ignore next */
  switch (typeof HTMLCollection) {
    case 'object': // PhantomJS
    case 'function': {
      if(value instanceof HTMLCollection) {
        return value.length === 0;
      }
    }
  }

  /* istanbul ignore next */
  switch (typeof NodeList) {
    case 'object': // PhantomJS
    case 'function': {
      if (value instanceof NodeList) {
        return value.length === 0;
      }
    }
  }

  return false;
}

module.exports = isEmpty;

},{"../is-array":2,"../is-plain-object":7}],4:[function(require,module,exports){
'use strict';

function isFiniteNumber(value) {
  if (typeof value === 'number') {
    return isFinite(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return isFinite(value);
  }
  return false;
}

module.exports = isFiniteNumber;

},{}],5:[function(require,module,exports){
'use strict';

function isFunction(value) {
  return (typeof value === 'function');
}

module.exports = isFunction;

},{}],6:[function(require,module,exports){
'use strict';

function isInteger(value) {
  if (typeof value === 'number') {
    return checkInteger(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return checkInteger(Number(value));
  }
  return false;
}

function checkInteger(num) {
  /* istanbul ignore if */
  if (typeof Number.isInteger !== 'function') {
    if (!isFinite(num)) {
      return false;
    }
    return (num < 0 ? Math.ceil(num) : Math.floor(num)) === num;
  }
  return Number.isInteger(num);
}

module.exports = isInteger;

},{}],7:[function(require,module,exports){
'use strict';

function isPlainObject(value) {
  if (typeof value !== 'object') {
    return false;
  }

  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  switch (Object.getPrototypeOf(value)) {
    case Object.prototype: {
      return true;
    }
    case null: {
      return true;
    }
    default: {
      return false;
    }
  }
}

module.exports = isPlainObject;

},{}],8:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

module.exports = isString;

},{}]},{},[1])(1)
});