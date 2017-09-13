'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var isInteger = fav.type.isInteger;

describe('fav.type.isInteger', function() {

  it('Should return true when value is an integer', function() {
    expect(isInteger(0)).toEqual(true);
    expect(isInteger(123)).toEqual(true);
    expect(isInteger(-987)).toEqual(true);
    expect(isInteger(2^31)).toEqual(true);
    expect(isInteger(-2^32)).toEqual(true);
    expect(isInteger(Number.MAX_VALUE)).toEqual(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MIN_SAFE_INTEGER)).toEqual(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MAX_SAFE_INTEGER)).toEqual(true);
    }
    expect(isInteger(new Number(123))).toEqual(true);
    expect(isInteger(1.0)).toEqual(true);
  });

  it('Should return false when value is a floating point number', function() {
    expect(isInteger(0.1)).toEqual(false);
    expect(isInteger(1.23)).toEqual(false);
    expect(isInteger(-0.987)).toEqual(false);
    expect(isInteger(Number.MIN_VALUE)).toEqual(false);
    expect(isInteger(Number.EPSILON)).toEqual(false);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isInteger(NaN)).toEqual(false);
    expect(isInteger(Infinity)).toEqual(false);
    expect(isInteger(-Infinity)).toEqual(false);
    expect(isInteger(Number.NaN)).toEqual(false);
    expect(isInteger(Number.POSITIVE_INFINITY)).toEqual(false);
    expect(isInteger(Number.NEGATIVE_INFINITY)).toEqual(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isInteger(undefined)).toEqual(false);
    expect(isInteger(null)).toEqual(false);
    expect(isInteger(true)).toEqual(false);
    expect(isInteger(false)).toEqual(false);
    expect(isInteger('')).toEqual(false);
    expect(isInteger('abc')).toEqual(false);
    expect(isInteger('0')).toEqual(false);
    expect(isInteger('123')).toEqual(false);
    expect(isInteger([])).toEqual(false);
    expect(isInteger([1, 2])).toEqual(false);
    expect(isInteger({})).toEqual(false);
    expect(isInteger({ a: 1 })).toEqual(false);
    expect(isInteger(/a/g)).toEqual(false);
    expect(isInteger(new RegExp('a', 'g'))).toEqual(false);
    expect(isInteger(function() {})).toEqual(false);
    expect(isInteger(new Date())).toEqual(false);
    expect(isInteger(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isInteger(Symbol('foo'))).toEqual(false);
    }
  });

});
