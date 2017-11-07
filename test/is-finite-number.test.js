'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.type = require('..');

var isFiniteNumber = fav.type.isFiniteNumber;

describe('fav.type.isFiniteNumber', function() {

  it('Should return true when value is a finite number', function() {
    expect(isFiniteNumber(0)).to.equal(true);
    expect(isFiniteNumber(123)).to.equal(true);
    expect(isFiniteNumber(0.456)).to.equal(true);
    expect(isFiniteNumber(-987)).to.equal(true);
    expect(isFiniteNumber(Number.MIN_VALUE)).to.equal(true);
    expect(isFiniteNumber(Number.MAX_VALUE)).to.equal(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MIN_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MAX_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isFiniteNumber(Number.EPSILON)).to.equal(true);
    }
    expect(isFiniteNumber(new Number(123))).to.equal(true);
    expect(isFiniteNumber(new Number(4.56))).to.equal(true);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isFiniteNumber(NaN)).to.equal(false);
    expect(isFiniteNumber(Infinity)).to.equal(false);
    expect(isFiniteNumber(-Infinity)).to.equal(false);
    expect(isFiniteNumber(Number.NaN)).to.equal(false);
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).to.equal(false);
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).to.equal(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isFiniteNumber(undefined)).to.equal(false);
    expect(isFiniteNumber(null)).to.equal(false);
    expect(isFiniteNumber(true)).to.equal(false);
    expect(isFiniteNumber(false)).to.equal(false);
    expect(isFiniteNumber('')).to.equal(false);
    expect(isFiniteNumber('abc')).to.equal(false);
    expect(isFiniteNumber('0')).to.equal(false);
    expect(isFiniteNumber('123')).to.equal(false);
    expect(isFiniteNumber([])).to.equal(false);
    expect(isFiniteNumber([1, 2])).to.equal(false);
    expect(isFiniteNumber({})).to.equal(false);
    expect(isFiniteNumber({ a: 1 })).to.equal(false);
    expect(isFiniteNumber(/a/g)).to.equal(false);
    expect(isFiniteNumber(new RegExp('a', 'g'))).to.equal(false);
    expect(isFiniteNumber(function() {})).to.equal(false);
    expect(isFiniteNumber(new Date())).to.equal(false);
    expect(isFiniteNumber(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isFiniteNumber(Symbol('foo'))).to.equal(false);
    }
  });

});
