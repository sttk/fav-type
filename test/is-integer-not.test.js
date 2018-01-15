'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = require('..');

var isNotInteger = fav.type.isInteger.not;

describe('fav.type.isInteger.not', function() {

  it('Should return false when value is an integer', function() {
    expect(isNotInteger(0)).to.equal(false);
    expect(isNotInteger(123)).to.equal(false);
    expect(isNotInteger(-987)).to.equal(false);
    expect(isNotInteger(2^31)).to.equal(false);
    expect(isNotInteger(-2^32)).to.equal(false);
    expect(isNotInteger(Number.MAX_VALUE)).to.equal(false);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isNotInteger(Number.MIN_SAFE_INTEGER)).to.equal(false);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isNotInteger(Number.MAX_SAFE_INTEGER)).to.equal(false);
    }
    expect(isNotInteger(new Number(123))).to.equal(false);
    expect(isNotInteger(1.0)).to.equal(false);
  });

  it('Should return true when value is a floating point number', function() {
    expect(isNotInteger(0.1)).to.equal(true);
    expect(isNotInteger(1.23)).to.equal(true);
    expect(isNotInteger(-0.987)).to.equal(true);
    expect(isNotInteger(Number.MIN_VALUE)).to.equal(true);
    expect(isNotInteger(Number.EPSILON)).to.equal(true);
  });

  it('Should return true when value is NaN, +/-Infinity', function() {
    expect(isNotInteger(NaN)).to.equal(true);
    expect(isNotInteger(Infinity)).to.equal(true);
    expect(isNotInteger(-Infinity)).to.equal(true);
    expect(isNotInteger(Number.NaN)).to.equal(true);
    expect(isNotInteger(Number.POSITIVE_INFINITY)).to.equal(true);
    expect(isNotInteger(Number.NEGATIVE_INFINITY)).to.equal(true);
  });

  it('Should return true when value is not a number', function() {
    expect(isNotInteger(undefined)).to.equal(true);
    expect(isNotInteger(null)).to.equal(true);
    expect(isNotInteger(true)).to.equal(true);
    expect(isNotInteger(false)).to.equal(true);
    expect(isNotInteger('')).to.equal(true);
    expect(isNotInteger('abc')).to.equal(true);
    expect(isNotInteger('0')).to.equal(true);
    expect(isNotInteger('123')).to.equal(true);
    expect(isNotInteger([])).to.equal(true);
    expect(isNotInteger([1, 2])).to.equal(true);
    expect(isNotInteger({})).to.equal(true);
    expect(isNotInteger({ a: 1 })).to.equal(true);
    expect(isNotInteger(/a/g)).to.equal(true);
    expect(isNotInteger(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotInteger(function() {})).to.equal(true);
    expect(isNotInteger(new Date())).to.equal(true);
    expect(isNotInteger(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotInteger(Symbol('foo'))).to.equal(true);
    }
  });

});
