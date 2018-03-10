'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = require('..');

var toNumber = fav.type.toNumber;

describe('fav.type.toNumber', function() {

  it('Should return value as it is when value is a number', function() {
    expect(toNumber(0)).to.equal(0);
    expect(toNumber(1)).to.equal(1);
    expect(toNumber(-1)).to.equal(-1);
    expect(toNumber(123456789)).to.equal(123456789);
    expect(toNumber(-123456789)).to.equal(-123456789);
    expect(toNumber(Number.MAX_VALUE)).to.equal(Number.MAX_VALUE);
    expect(toNumber(-Number.MAX_VALUE)).to.equal(-Number.MAX_VALUE);
    expect(toNumber(0.1234)).to.equal(0.1234);
    expect(toNumber(-0.1234)).to.equal(-0.1234);
    expect(toNumber(12345.6789)).to.equal(12345.6789);
    expect(toNumber(-12345.6789)).to.equal(-12345.6789);
    expect(toNumber(Number.MIN_VALUE)).to.equal(Number.MIN_VALUE);
    expect(toNumber(-Number.MIN_VALUE)).to.equal(-Number.MIN_VALUE);
    expect(toNumber(Infinity)).to.equal(Infinity);
    expect(toNumber(-Infinity)).to.equal(-Infinity);
    expect(toNumber(Number.POSITIVE_INFINITY))
      .to.equal(Number.POSITIVE_INFINITY);
    expect(toNumber(-Number.POSITIVE_INFINITY))
      .to.equal(-Number.POSITIVE_INFINITY);
  });

  it('Should return a number when value is a numeric string', function() {
    expect(toNumber('0')).to.equal(0);
    expect(toNumber('1')).to.equal(1);
    expect(toNumber('-1')).to.equal(-1);
    expect(toNumber('123456789')).to.equal(123456789);
    expect(toNumber('-123456789')).to.equal(-123456789);
    expect(toNumber(String(Number.MAX_VALUE))).to.equal(Number.MAX_VALUE);
    expect(toNumber(String(-Number.MAX_VALUE))).to.equal(-Number.MAX_VALUE);
    expect(toNumber('0.1234')).to.equal(0.1234);
    expect(toNumber('-0.1234')).to.equal(-0.1234);
    expect(toNumber('12345.6789')).to.equal(12345.6789);
    expect(toNumber('-12345.6789')).to.equal(-12345.6789);
    expect(toNumber(String(Number.MIN_VALUE))).to.equal(Number.MIN_VALUE);
    expect(toNumber(String(-Number.MIN_VALUE))).to.equal(-Number.MIN_VALUE);
    expect(toNumber(String(Infinity))).to.equal(Infinity);
    expect(toNumber(String(-Infinity))).to.equal(-Infinity);
    expect(toNumber(String(Number.POSITIVE_INFINITY)))
      .to.equal(Number.POSITIVE_INFINITY);
    expect(toNumber(String(-Number.POSITIVE_INFINITY)))
      .to.equal(-Number.POSITIVE_INFINITY);
  });

  it('Should return NaN when value is NaN', function() {
    expect(toNumber(NaN)).to.be.NaN;
  });

  it('Should return NaN when value is a string but not numeric', function() {
    expect(toNumber('')).to.be.NaN;
    expect(toNumber('   ')).to.be.NaN;
    expect(toNumber('abc')).to.be.NaN;
    expect(toNumber('１２３４５')).to.be.NaN;
    expect(toNumber(' 123')).to.be.NaN;
    expect(toNumber('123abc')).to.be.NaN;
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toNumber(undefined)).to.be.NaN;
    expect(toNumber(null)).to.be.NaN;
    expect(toNumber(true)).to.be.NaN;
    expect(toNumber(false)).to.be.NaN;
    expect(toNumber([])).to.be.NaN;
    expect(toNumber([1,2,3])).to.be.NaN;
    expect(toNumber({})).to.be.NaN;
    expect(toNumber({ a: 0 })).to.be.NaN;
    expect(toNumber(/1/g)).to.be.NaN;
    expect(toNumber(new RegExp('1', 'g'))).to.be.NaN;
    expect(toNumber(function() {})).to.be.NaN;
    expect(toNumber(new Date())).to.be.NaN;
    expect(toNumber(new Error())).to.be.NaN;

    if (typeof Symbol === 'function') {
      expect(toNumber(Symbol(123))).to.be.NaN;
    }
  });

  it('Should return 1st arg number when 2nd arg is specified but 1st arg is' +
  '\n\tvalid', function() {
    expect(toNumber(0, 99.99)).to.equal(0);
    expect(toNumber(1.23, 9)).to.equal(1.23);
    expect(toNumber(-0.88, 10)).to.equal(-0.88);
  });

  it('Should return 2nd arg when 2nd arg is specified and 1st arg is invalid',
  function() {
    expect(toNumber(undefined, 9.99)).to.equal(9.99);
    expect(toNumber(null, 9.99)).to.equal(9.99);
    expect(toNumber('', 9.99)).to.equal(9.99);
    expect(toNumber(NaN, 9.99)).to.equal(9.99);
    expect(toNumber('ABC', 9.99)).to.equal(9.99);
  });
});
