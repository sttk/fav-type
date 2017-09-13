'use strict';

var isArray = require('./lib/is-array');
var isString = require('./lib/is-string');
var isFunction = require('./lib/is-function');
var isPlainObject = require('./lib/is-plain-object');
var isInteger = require('./lib/is-integer');
var isFiniteNumber = require('./lib/is-finite-number');

var type = {};

Object.defineProperties(type, {
  isArray: { enumerable: true, value: isArray },
  isString: { enumerable: true, value: isString },
  isFunction: { enumerable: true, value: isFunction },
  isPlainObject: { enumerable: true, value: isPlainObject },
  isInteger: { enumerable: true, value: isInteger },
  isFiniteNumber: { enumerable: true, value: isFiniteNumber },
});

module.exports = type;
