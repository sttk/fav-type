'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.type = require('..');

var isInteger = fav.type.isInteger;

describe('fav.type.isInteger', function() {

  it('Should return true when value is an integer', function() {
    expect(isInteger(0)).to.equal(true);
    expect(isInteger(123)).to.equal(true);
    expect(isInteger(-987)).to.equal(true);
    expect(isInteger(2^31)).to.equal(true);
    expect(isInteger(-2^32)).to.equal(true);
    expect(isInteger(Number.MAX_VALUE)).to.equal(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MIN_SAFE_INTEGER)).to.equal(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MAX_SAFE_INTEGER)).to.equal(true);
    }
    expect(isInteger(new Number(123))).to.equal(true);
    expect(isInteger(1.0)).to.equal(true);
  });

  it('Should return false when value is a floating point number', function() {
    expect(isInteger(0.1)).to.equal(false);
    expect(isInteger(1.23)).to.equal(false);
    expect(isInteger(-0.987)).to.equal(false);
    expect(isInteger(Number.MIN_VALUE)).to.equal(false);
    expect(isInteger(Number.EPSILON)).to.equal(false);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isInteger(NaN)).to.equal(false);
    expect(isInteger(Infinity)).to.equal(false);
    expect(isInteger(-Infinity)).to.equal(false);
    expect(isInteger(Number.NaN)).to.equal(false);
    expect(isInteger(Number.POSITIVE_INFINITY)).to.equal(false);
    expect(isInteger(Number.NEGATIVE_INFINITY)).to.equal(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isInteger(undefined)).to.equal(false);
    expect(isInteger(null)).to.equal(false);
    expect(isInteger(true)).to.equal(false);
    expect(isInteger(false)).to.equal(false);
    expect(isInteger('')).to.equal(false);
    expect(isInteger('abc')).to.equal(false);
    expect(isInteger('0')).to.equal(false);
    expect(isInteger('123')).to.equal(false);
    expect(isInteger([])).to.equal(false);
    expect(isInteger([1, 2])).to.equal(false);
    expect(isInteger({})).to.equal(false);
    expect(isInteger({ a: 1 })).to.equal(false);
    expect(isInteger(/a/g)).to.equal(false);
    expect(isInteger(new RegExp('a', 'g'))).to.equal(false);
    expect(isInteger(function() {})).to.equal(false);
    expect(isInteger(new Date())).to.equal(false);
    expect(isInteger(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isInteger(Symbol('foo'))).to.equal(false);
    }
  });

});
