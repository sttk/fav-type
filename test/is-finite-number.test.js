'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var isFiniteNumber = fav.type.isFiniteNumber;

describe('fav.type.isFiniteNumber', function() {

  it('Should return true when value is a finite number', function() {
    expect(isFiniteNumber(0)).toEqual(true);
    expect(isFiniteNumber(123)).toEqual(true);
    expect(isFiniteNumber(0.456)).toEqual(true);
    expect(isFiniteNumber(-987)).toEqual(true);
    expect(isFiniteNumber(Number.MIN_VALUE)).toEqual(true);
    expect(isFiniteNumber(Number.MAX_VALUE)).toEqual(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MIN_SAFE_INTEGER)).toEqual(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MAX_SAFE_INTEGER)).toEqual(true);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isFiniteNumber(Number.EPSILON)).toEqual(true);
    }
    expect(isFiniteNumber(new Number(123))).toEqual(true);
    expect(isFiniteNumber(new Number(4.56))).toEqual(true);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isFiniteNumber(NaN)).toEqual(false);
    expect(isFiniteNumber(Infinity)).toEqual(false);
    expect(isFiniteNumber(-Infinity)).toEqual(false);
    expect(isFiniteNumber(Number.NaN)).toEqual(false);
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).toEqual(false);
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).toEqual(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isFiniteNumber(undefined)).toEqual(false);
    expect(isFiniteNumber(null)).toEqual(false);
    expect(isFiniteNumber(true)).toEqual(false);
    expect(isFiniteNumber(false)).toEqual(false);
    expect(isFiniteNumber('')).toEqual(false);
    expect(isFiniteNumber('abc')).toEqual(false);
    expect(isFiniteNumber('0')).toEqual(false);
    expect(isFiniteNumber('123')).toEqual(false);
    expect(isFiniteNumber([])).toEqual(false);
    expect(isFiniteNumber([1, 2])).toEqual(false);
    expect(isFiniteNumber({})).toEqual(false);
    expect(isFiniteNumber({ a: 1 })).toEqual(false);
    expect(isFiniteNumber(/a/g)).toEqual(false);
    expect(isFiniteNumber(new RegExp('a', 'g'))).toEqual(false);
    expect(isFiniteNumber(function() {})).toEqual(false);
    expect(isFiniteNumber(new Date())).toEqual(false);
    expect(isFiniteNumber(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isFiniteNumber(Symbol('foo'))).toEqual(false);
    }
  });

});
