'use strict';

var formatDate = require('@fav/type.format-date');
var formatNumber = require('@fav/type.format-number');
var isArray = require('@fav/type.is-array');
var isEmpty = require('@fav/type.is-empty');
var isFiniteNumber = require('@fav/type.is-finite-number');
var isFunction = require('@fav/type.is-function');
var isInteger = require('@fav/type.is-integer');
var isPlainObject = require('@fav/type.is-plain-object');
var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');
var toDate = require('@fav/type.to-date');
var toFiniteNumber = require('@fav/type.to-finite-number');
var toInteger = require('@fav/type.to-integer');
var toNumber = require('@fav/type.to-number');

var type = {};

Object.defineProperties(type, {
  formatDate: { enumerable: true, value: formatDate },
  formatNumber: { enumerable: true, value: formatNumber },
  isArray: { enumerable: true, value: isArray },
  isEmpty: { enumerable: true, value: isEmpty },
  isFiniteNumber: { enumerable: true, value: isFiniteNumber },
  isFunction: { enumerable: true, value: isFunction },
  isInteger: { enumerable: true, value: isInteger },
  isPlainObject: { enumerable: true, value: isPlainObject },
  isString: { enumerable: true, value: isString },
  isValidDate: { enumerable: true, value: isValidDate },
  toDate: { enumerable: true, value: toDate },
  toFiniteNumber: { enumerable: true, value: toFiniteNumber },
  toInteger: { enumerable: true, value: toInteger },
  toNumber: { enumerable: true, value: toNumber },
});

module.exports = type;
