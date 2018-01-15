'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = require('..');

var isNotValidDate = fav.type.isValidDate.not;

describe('fav.type.isValidDate.not', function() {

  it('Should return false when value is a valid date', function() {
    expect(isNotValidDate(new Date(2017, 8, 30))).to.equal(false);
  });

  it('Should return true when value is an invalid date', function() {
    expect(isNotValidDate(new Date(Infinity, 8, 30))).to.equal(true);
    expect(isNotValidDate(new Date(300000, 8, 30))).to.equal(true);
  });

  it('Should return true when value is not a date', function() {
    expect(isNotValidDate(undefined)).to.equal(true);
    expect(isNotValidDate(null)).to.equal(true);
    expect(isNotValidDate(true)).to.equal(true);
    expect(isNotValidDate(false)).to.equal(true);
    expect(isNotValidDate(0)).to.equal(true);
    expect(isNotValidDate(123)).to.equal(true);
    expect(isNotValidDate('')).to.equal(true);
    expect(isNotValidDate('ABC')).to.equal(true);
    expect(isNotValidDate(/a/g)).to.equal(true);
    expect(isNotValidDate(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotValidDate(function() {})).to.equal(true);
    expect(isNotValidDate(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotValidDate(Symbol('foo'))).to.equal(true);
    }
  });
});
