'use strict';

var isString = require('../is-string');
var isFiniteNumber = require('../is-finite-number');

function toFiniteNumber(value) {
  if (isString(value)) {
    value = parseFloat(value);
  }

  if (isFiniteNumber(value)) {
    return value;
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toFiniteNumber;

