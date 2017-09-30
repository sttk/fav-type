'use strict';

var isString = require('../is-string');
var isFiniteNumber = require('../is-finite-number');

function toFiniteNumber(value) {
  if (isString(value)) {
    return parseFloat(value);
  }
  if (isFiniteNumber(value)) {
    return value;
  }
  return NaN;
}

module.exports = toFiniteNumber;

