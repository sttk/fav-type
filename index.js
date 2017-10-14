'use strict';

var isEmpty = require('@fav/type.is-empty');
var isArray = require('@fav/type.is-array');
var isString = require('@fav/type.is-string');
var isFunction = require('@fav/type.is-function');
var isPlainObject = require('@fav/type.is-plain-object');
var isInteger = require('@fav/type.is-integer');
var isFiniteNumber = require('@fav/type.is-finite-number');
var isValidDate = require('@fav/type.is-valid-date');
var toInteger = require('@fav/type.to-integer');
var toFiniteNumber = require('@fav/type.to-finite-number');
var toDate = require('@fav/type.to-date');

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
  toDate: { enumerable: true, value: toDate },
});

module.exports = type;
