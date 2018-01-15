'use strict';

var chai = require('chai');
var fav = {}; fav.type = require('..');

var expect = chai.expect;
var isNotString = fav.type.isString.not;

describe('fav.type.isString.not', function() {

  it('Should return false when value is a string', function() {
    expect(isNotString('')).to.equal(false);
    expect(isNotString('abc')).to.equal(false);
    expect(isNotString('あ')).to.equal(false);
    expect(isNotString('ä')).to.equal(false);
    expect(isNotString(String(123))).to.equal(false);
  });

  it('Should return false when value is a string object', function() {
    expect(isNotString(Object(''))).to.equal(false);
    expect(isNotString(new String('abc'))).to.equal(false);
  });

  it('Should return true when value is other type', function() {
    expect(isNotString(undefined)).to.equal(true);
    expect(isNotString(null)).to.equal(true);
    expect(isNotString(true)).to.equal(true);
    expect(isNotString(false)).to.equal(true);
    expect(isNotString(0)).to.equal(true);
    expect(isNotString(987)).to.equal(true);
    expect(isNotString(-0.1234)).to.equal(true);
    expect(isNotString(NaN)).to.equal(true);
    expect(isNotString(Infinity)).to.equal(true);
    expect(isNotString(new Number(987))).to.equal(true);
    expect(isNotString([])).to.equal(true);
    expect(isNotString([1, 2])).to.equal(true);
    expect(isNotString({})).to.equal(true);
    expect(isNotString({ a: 1 })).to.equal(true);
    expect(isNotString(/a/g)).to.equal(true);
    expect(isNotString(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotString(function() {})).to.equal(true);
    expect(isNotString(new Date())).to.equal(true);
    expect(isNotString(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotString(Symbol('foo'))).to.equal(true);
    }
  });
});
