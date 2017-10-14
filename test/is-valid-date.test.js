'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = require('..');

var isValidDate = fav.type.isValidDate;

describe('fav.type.isValidDate', function() {

  it('Should return true when value is a valid date', function() {
    expect(isValidDate(new Date(2017, 8, 30))).to.equal(true);
  });

  it('Should return false when value is an invalid date', function() {
    expect(isValidDate(new Date(Infinity, 8, 30))).to.equal(false);
    expect(isValidDate(new Date(300000, 8, 30))).to.equal(false);
  });

  it('Should return false when value is not a date', function() {
    expect(isValidDate(undefined)).to.equal(false);
    expect(isValidDate(null)).to.equal(false);
    expect(isValidDate(true)).to.equal(false);
    expect(isValidDate(false)).to.equal(false);
    expect(isValidDate(0)).to.equal(false);
    expect(isValidDate(123)).to.equal(false);
    expect(isValidDate('')).to.equal(false);
    expect(isValidDate('ABC')).to.equal(false);
    expect(isValidDate(/a/g)).to.equal(false);
    expect(isValidDate(new RegExp('a', 'g'))).to.equal(false);
    expect(isValidDate(function() {})).to.equal(false);
    expect(isValidDate(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isValidDate(Symbol('foo'))).to.equal(false);
    }
  });
});
