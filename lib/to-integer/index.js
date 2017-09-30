'use strict';

var isString = require('../is-string');
var isFiniteNumber = require('../is-finite-number');

function toInteger(value) {
  if (isString(value)) {
    value = parseFloat(value);
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
  if (isFiniteNumber(value)) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }
  return NaN;
}

module.exports = toInteger;
