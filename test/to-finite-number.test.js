'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toFiniteNumber = fav.type.toFiniteNumber;

describe('fav.type.toFiniteNumber', function() {

  it('Should return value as it is when value is a finite number', function() {
    expect(toFiniteNumber(0)).toEqual(0);
    expect(toFiniteNumber(1)).toEqual(1);
    expect(toFiniteNumber(-1)).toEqual(-1);
    expect(toFiniteNumber(123456789)).toEqual(123456789);
    expect(toFiniteNumber(-123456789)).toEqual(-123456789);
    expect(toFiniteNumber(Number.MAX_VALUE)).toEqual(Number.MAX_VALUE);
    expect(toFiniteNumber(-Number.MAX_VALUE)).toEqual(-Number.MAX_VALUE);
    expect(toFiniteNumber(0.1234)).toEqual(0.1234);
    expect(toFiniteNumber(-0.1234)).toEqual(-0.1234);
    expect(toFiniteNumber(12345.6789)).toEqual(12345.6789);
    expect(toFiniteNumber(-12345.6789)).toEqual(-12345.6789);
    expect(toFiniteNumber(Number.MIN_VALUE)).toEqual(Number.MIN_VALUE);
    expect(toFiniteNumber(-Number.MIN_VALUE)).toEqual(-Number.MIN_VALUE);
  });

  it('Should return a finite number when value is a numeric string',
  function() {
    expect(toFiniteNumber('0')).toEqual(0);
    expect(toFiniteNumber('1')).toEqual(1);
    expect(toFiniteNumber('-1')).toEqual(-1);
    expect(toFiniteNumber('123456789')).toEqual(123456789);
    expect(toFiniteNumber('-123456789')).toEqual(-123456789);
    expect(toFiniteNumber(String(Number.MAX_VALUE)))
      .toEqual(Number.MAX_VALUE);
    expect(toFiniteNumber(String(-Number.MAX_VALUE)))
      .toEqual(-Number.MAX_VALUE);
    expect(toFiniteNumber('0.1234')).toEqual(0.1234);
    expect(toFiniteNumber('-0.1234')).toEqual(-0.1234);
    expect(toFiniteNumber('12345.6789')).toEqual(12345.6789);
    expect(toFiniteNumber('-12345.6789')).toEqual(-12345.6789);
    expect(toFiniteNumber(String(Number.MIN_VALUE)))
      .toEqual(Number.MIN_VALUE);
    expect(toFiniteNumber(String(-Number.MIN_VALUE)))
      .toEqual(-Number.MIN_VALUE);
  });

  it('Should return NaN when value is a number but not finite', function() {
    expect(toFiniteNumber(NaN)).toEqual(NaN);
    expect(toFiniteNumber(Number.POSITIVE_INFINITY)).toEqual(NaN);
    expect(toFiniteNumber(Number.NEGATIVE_INFINITY)).toEqual(NaN);
  });

  it('Should return NaN when value is a string but not numeric', function() {
    expect(toFiniteNumber('')).toEqual(NaN);
    expect(toFiniteNumber('abc')).toEqual(NaN);
    expect(toFiniteNumber('１２３４５')).toEqual(NaN);
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toFiniteNumber(undefined)).toEqual(NaN);
    expect(toFiniteNumber(null)).toEqual(NaN);
    expect(toFiniteNumber(true)).toEqual(NaN);
    expect(toFiniteNumber(false)).toEqual(NaN);
    expect(toFiniteNumber([])).toEqual(NaN);
    expect(toFiniteNumber([1,2,3])).toEqual(NaN);
    expect(toFiniteNumber({})).toEqual(NaN);
    expect(toFiniteNumber({ a: 0 })).toEqual(NaN);
    expect(toFiniteNumber(/1/g)).toEqual(NaN);
    expect(toFiniteNumber(new RegExp('1', 'g'))).toEqual(NaN);
    expect(toFiniteNumber(function() {})).toEqual(NaN);
    expect(toFiniteNumber(new Date())).toEqual(NaN);
    expect(toFiniteNumber(new Error())).toEqual(NaN);

    if (typeof Symbol === 'function') {
      expect(toFiniteNumber(Symbol(123))).toEqual(NaN);
    }
  });
});
