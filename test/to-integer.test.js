'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.type = require('..');

var toInteger = fav.type.toInteger;

describe('fav.type.toInteger', function() {

  it('Should return an integer when value is an integer', function() {
    expect(toInteger(0)).to.equal(0);
    expect(toInteger(1)).to.equal(1);
    expect(toInteger(-1)).to.equal(-1);
    expect(toInteger(1234567890)).to.equal(1234567890);
    expect(toInteger(-1234567890)).to.equal(-1234567890);
    expect(toInteger(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
    expect(toInteger(-Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
  });

  it('Should return an integer when value is a finite number', function() {
    expect(toInteger(0.1234)).to.equal(0);
    expect(toInteger(-0.1234)).to.equal(0);
    expect(toInteger(12345.67890)).to.equal(12345);
    expect(toInteger(-12345.67890)).to.equal(-12345);
    expect(toInteger(Number.MIN_VALUE)).to.equal(0);
    expect(toInteger(-Number.MIN_VALUE)).to.equal(0);
  });

  it('Should return NaN when value is not a finite number', function() {
    expect(toInteger(NaN)).to.be.NaN;
    expect(toInteger(Number.POSITIVE_INFINITY)).to.be.NaN;
    expect(toInteger(Number.NEGATIVE_INFINITY)).to.be.NaN;
  });

  it('Should return an integer when value is a numeric string', function() {
    expect(toInteger('0')).to.equal(0);
    expect(toInteger('1')).to.equal(1);
    expect(toInteger('-1')).to.equal(-1);
    expect(toInteger('1234567890')).to.equal(1234567890);
    expect(toInteger('-1234567890')).to.equal(-1234567890);
    expect(toInteger(String(Number.MAX_VALUE))).to.equal(Number.MAX_VALUE);
    expect(toInteger(String(-Number.MAX_VALUE))).to.equal(-Number.MAX_VALUE);
    expect(toInteger('0.1234')).to.equal(0);
    expect(toInteger('-0.1234')).to.equal(0);
    expect(toInteger('12345.67890')).to.equal(12345);
    expect(toInteger('-12345.67890')).to.equal(-12345);
    expect(toInteger(String(Number.MIN_VALUE))).to.equal(0);
    expect(toInteger(String(-Number.MIN_VALUE))).to.equal(0);
  });

  it('Should return NaN when value is a non-numeric string', function() {
    expect(toInteger('')).to.be.NaN;
    expect(toInteger('abc')).to.be.NaN;
    expect(toInteger('１２３４５')).to.be.NaN;
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toInteger(undefined)).to.be.NaN;
    expect(toInteger(null)).to.be.NaN;
    expect(toInteger(true)).to.be.NaN;
    expect(toInteger(false)).to.be.NaN;
    expect(toInteger([])).to.be.NaN;
    expect(toInteger([1,2,3])).to.be.NaN;
    expect(toInteger({})).to.be.NaN;
    expect(toInteger({ a: 0 })).to.be.NaN;
    expect(toInteger(/1/g)).to.be.NaN;
    expect(toInteger(new RegExp('a', 'g'))).to.be.NaN;
    expect(toInteger(function() {})).to.be.NaN;
    expect(toInteger(new Date())).to.be.NaN;
    expect(toInteger(new Error())).to.be.NaN;

    if (typeof Symbol === 'function') {
      expect(toInteger(Symbol(123))).to.be.NaN;
    }
  });

  it('Should return 1st arg integer when 2nd arg is specified but 1st arg' +
  'is\n\tvalid', function() {
    expect(toInteger(0), 999).to.equal(0);
    expect(toInteger(123), 999).to.equal(123);
    expect(toInteger(-123), 999).to.equal(-123);
  });

  it('Should return 2nd arg when 1st arg is invalid and 2nd arg is specified',
  function() {
    expect(toInteger(undefined, 999)).to.equal(999);
    expect(toInteger(null, 999)).to.equal(999);
    expect(toInteger('', 999)).to.equal(999);
    expect(toInteger(NaN, 999)).to.equal(999);
    expect(toInteger(Infinity, 999)).to.equal(999);
    expect(toInteger('ABC', 999)).to.equal(999);
  });
});

