'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toInteger = fav.type.toInteger;

describe('fav.type.toInteger', function() {

  it('Should return an integer when value is an integer', function() {
    expect(toInteger(0)).toEqual(0);
    expect(toInteger(1)).toEqual(1);
    expect(toInteger(-1)).toEqual(-1);
    expect(toInteger(1234567890)).toEqual(1234567890);
    expect(toInteger(-1234567890)).toEqual(-1234567890);
    expect(toInteger(Number.MAX_VALUE)).toEqual(Number.MAX_VALUE);
    expect(toInteger(-Number.MAX_VALUE)).toEqual(-Number.MAX_VALUE);
  });

  it('Should return an integer when value is a finite number', function() {
    expect(toInteger(0.1234)).toEqual(0);
    expect(toInteger(-0.1234)).toEqual(0);
    expect(toInteger(12345.67890)).toEqual(12345);
    expect(toInteger(-12345.67890)).toEqual(-12345);
    expect(toInteger(Number.MIN_VALUE)).toEqual(0);
    expect(toInteger(-Number.MIN_VALUE)).toEqual(0);
  });

  it('Should return NaN when value is not a finite number', function() {
    expect(toInteger(NaN)).toEqual(NaN);;
    expect(toInteger(Number.POSITIVE_INFINITY)).toEqual(NaN);
    expect(toInteger(Number.NEGATIVE_INFINITY)).toEqual(NaN);
  });

  it('Should return an integer when value is a numeric string', function() {
    expect(toInteger('0')).toEqual('0');
    expect(toInteger('1')).toEqual('1');
    expect(toInteger('-1')).toEqual('-1');
    expect(toInteger('1234567890')).toEqual('1234567890');
    expect(toInteger('-1234567890')).toEqual('-1234567890');
    expect(toInteger(String(Number.MAX_VALUE))).toEqual(Number.MAX_VALUE);
    expect(toInteger(String(-Number.MAX_VALUE))).toEqual(-Number.MAX_VALUE);
    expect(toInteger('0.1234')).toEqual(0);
    expect(toInteger('-0.1234')).toEqual(0);
    expect(toInteger('12345.67890')).toEqual(12345);
    expect(toInteger('-12345.67890')).toEqual(-12345);
    expect(toInteger(String(Number.MIN_VALUE))).toEqual(0);
    expect(toInteger(String(-Number.MIN_VALUE))).toEqual(0);
  });

  it('Should return NaN when value is a non-numeric string', function() {
    expect(toInteger('')).toEqual(NaN);
    expect(toInteger('abc')).toEqual(NaN);
    expect(toInteger('１２３４５')).toEqual(NaN);
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toInteger(undefined)).toEqual(NaN);
    expect(toInteger(null)).toEqual(NaN);
    expect(toInteger(true)).toEqual(NaN);
    expect(toInteger(false)).toEqual(NaN);
    expect(toInteger([])).toEqual(NaN);
    expect(toInteger([1,2,3])).toEqual(NaN);
    expect(toInteger({})).toEqual(NaN);
    expect(toInteger({ a: 0 })).toEqual(NaN);
    expect(toInteger(/1/g)).toEqual(NaN);
    expect(toInteger(new RegExp('a', 'g'))).toEqual(NaN);
    expect(toInteger(function() {})).toEqual(NaN);
    expect(toInteger(new Date())).toEqual(NaN);
    expect(toInteger(new Error())).toEqual(NaN);

    if (typeof Symbol === 'function') {
      expect(toInteger(Symbol(123))).toEqual(NaN);
    }
  });

  it('Should return 1st arg integer when 2nd arg is specified but 1st arg' +
  'is\n\tvalid', function() {
    expect(toInteger(0), 999).toEqual(0);
    expect(toInteger(123), 999).toEqual(123);
    expect(toInteger(-123), 999).toEqual(-123);
  });

  it('Should return 2nd arg when 1st arg is invalid and 2nd arg is specified',
  function() {
    expect(toInteger(undefined, 999)).toEqual(999);
    expect(toInteger(null, 999)).toEqual(999);
    expect(toInteger('', 999)).toEqual(999);
    expect(toInteger(NaN, 999)).toEqual(999);
    expect(toInteger(Infinity, 999)).toEqual(999);
    expect(toInteger('ABC', 999)).toEqual(999);
  });
});

