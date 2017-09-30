'use strict';

var isEmpty = require('./lib/is-empty');
var isArray = require('./lib/is-array');
var isString = require('./lib/is-string');
var isFunction = require('./lib/is-function');
var isPlainObject = require('./lib/is-plain-object');
var isInteger = require('./lib/is-integer');
var isFiniteNumber = require('./lib/is-finite-number');
var isValidDate = require('./lib/is-valid-date');
var toInteger = require('./lib/to-integer');
var toFiniteNumber = require('./lib/to-finite-number');

var type = {};

Object.defineProperties(type, {
  isEmpty: { enumerable: true, value: isEmpty },
  isArray: { enumerable: true, value: isArray },
  isString: { enumerable: true, value: isString },
  isFunction: { enumerable: true, value: isFunction },
  isPlainObject: { enumerable: true, value: isPlainObject },
  isInteger: { enumerable: true, value: isInteger },
  isFiniteNumber: { enumerable: true, value: isFiniteNumber },
  isValidDate: { enumerable: true, value: isValidDate },
  toInteger: { enumerable: true, value: toInteger },
  toFiniteNumber: { enumerable: true, value: toFiniteNumber },
});

module.exports = type;
