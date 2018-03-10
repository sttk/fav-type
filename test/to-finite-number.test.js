'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = require('..');

var toFiniteNumber = fav.type.toFiniteNumber;

describe('fav.type.toFiniteNumber', function() {

  it('Should return value as it is when value is a finite number', function() {
    expect(toFiniteNumber(0)).to.equal(0);
    expect(toFiniteNumber(1)).to.equal(1);
    expect(toFiniteNumber(-1)).to.equal(-1);
    expect(toFiniteNumber(123456789)).to.equal(123456789);
    expect(toFiniteNumber(-123456789)).to.equal(-123456789);
    expect(toFiniteNumber(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
    expect(toFiniteNumber(-Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
    expect(toFiniteNumber(0.1234)).to.equal(0.1234);
    expect(toFiniteNumber(-0.1234)).to.equal(-0.1234);
    expect(toFiniteNumber(12345.6789)).to.equal(12345.6789);
    expect(toFiniteNumber(-12345.6789)).to.equal(-12345.6789);
    expect(toFiniteNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    expect(toFiniteNumber(-Number.MIN_VALUE)).to.equal(-Number.MIN_VALUE);
  });

  it('Should return a finite number when value is a numeric string',
  function() {
    expect(toFiniteNumber('0')).to.equal(0);
    expect(toFiniteNumber('1')).to.equal(1);
    expect(toFiniteNumber('-1')).to.equal(-1);
    expect(toFiniteNumber('123456789')).to.equal(123456789);
    expect(toFiniteNumber('-123456789')).to.equal(-123456789);
    expect(toFiniteNumber(String(Number.MAX_VALUE)))
      .to.equal(Number.MAX_VALUE);
    expect(toFiniteNumber(String(-Number.MAX_VALUE)))
      .to.equal(-Number.MAX_VALUE);
    expect(toFiniteNumber('0.1234')).to.equal(0.1234);
    expect(toFiniteNumber('-0.1234')).to.equal(-0.1234);
    expect(toFiniteNumber('12345.6789')).to.equal(12345.6789);
    expect(toFiniteNumber('-12345.6789')).to.equal(-12345.6789);
    expect(toFiniteNumber(String(Number.MIN_VALUE)))
      .to.equal(Number.MIN_VALUE);
    expect(toFiniteNumber(String(-Number.MIN_VALUE)))
      .to.equal(-Number.MIN_VALUE);
  });

  it('Should return NaN when value is a number but not finite', function() {
    expect(toFiniteNumber(NaN)).to.be.NaN;
    expect(toFiniteNumber(Infinity)).to.be.NaN;
    expect(toFiniteNumber(-Infinity)).to.be.NaN;
    expect(toFiniteNumber(Number.POSITIVE_INFINITY)).to.be.NaN;
    expect(toFiniteNumber(Number.NEGATIVE_INFINITY)).to.be.NaN;
  });

  it('Should return NaN when value is a string but not numeric or not finite',
  function() {
    expect(toFiniteNumber('')).to.be.NaN;
    expect(toFiniteNumber(' ')).to.be.NaN;
    expect(toFiniteNumber('abc')).to.be.NaN;
    expect(toFiniteNumber('１２３４５')).to.be.NaN;
    expect(toFiniteNumber(' 123')).to.be.NaN;
    expect(toFiniteNumber('123abc')).to.be.NaN;
    expect(toFiniteNumber(String(Infinity))).to.be.NaN;
    expect(toFiniteNumber(String(-Infinity))).to.be.NaN;
    expect(toFiniteNumber(String(Number.POSITIVE_INFINITY))).to.be.NaN;
    expect(toFiniteNumber(String(Number.NEGATIVE_INFINITY))).to.be.NaN;
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toFiniteNumber(undefined)).to.be.NaN;
    expect(toFiniteNumber(null)).to.be.NaN;
    expect(toFiniteNumber(true)).to.be.NaN;
    expect(toFiniteNumber(false)).to.be.NaN;
    expect(toFiniteNumber([])).to.be.NaN;
    expect(toFiniteNumber([1,2,3])).to.be.NaN;
    expect(toFiniteNumber({})).to.be.NaN;
    expect(toFiniteNumber({ a: 0 })).to.be.NaN;
    expect(toFiniteNumber(/1/g)).to.be.NaN;
    expect(toFiniteNumber(new RegExp('1', 'g'))).to.be.NaN;
    expect(toFiniteNumber(function() {})).to.be.NaN;
    expect(toFiniteNumber(new Date())).to.be.NaN;
    expect(toFiniteNumber(new Error())).to.be.NaN;

    if (typeof Symbol === 'function') {
      expect(toFiniteNumber(Symbol(123))).to.be.NaN;
    }
  });

  it('Should return 1st arg number when 2nd arg is specified but 1st arg is' +
  ' valid', function() {
    expect(toFiniteNumber(0, 99.99)).to.equal(0);
    expect(toFiniteNumber(1.23, 9)).to.equal(1.23);
    expect(toFiniteNumber(-0.88, 10)).to.equal(-0.88);
  });

  it('Should return 2nd arg when 2nd arg is specified and 1st arg is invalid',
  function() {
    expect(toFiniteNumber(undefined, 9.99)).to.equal(9.99);
    expect(toFiniteNumber(null, 9.99)).to.equal(9.99);
    expect(toFiniteNumber('', 9.99)).to.equal(9.99);
    expect(toFiniteNumber(NaN, 9.99)).to.equal(9.99);
    expect(toFiniteNumber(Infinity, 9.99)).to.equal(9.99);
    expect(toFiniteNumber('ABC', 9.99)).to.equal(9.99);
  });
});
