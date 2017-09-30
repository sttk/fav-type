'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var isValidDate = fav.type.isValidDate;

describe('fav.type.isValidDate', function() {

  it('Should return true when value is a valid date', function() {
    expect(isValidDate(new Date(2017, 8, 30))).toEqual(true);
  });

  it('Should return false when value is an invalid date', function() {
    expect(isValidDate(new Date(Infinity, 8, 30))).toEqual(false);
    expect(isValidDate(new Date(300000, 8, 30))).toEqual(false);
  });

  it('Should return false when value is not a date', function() {
    expect(isValidDate(undefined)).toEqual(false);
    expect(isValidDate(null)).toEqual(false);
    expect(isValidDate(true)).toEqual(false);
    expect(isValidDate(false)).toEqual(false);
    expect(isValidDate(0)).toEqual(false);
    expect(isValidDate(123)).toEqual(false);
    expect(isValidDate('')).toEqual(false);
    expect(isValidDate('ABC')).toEqual(false);
    expect(isValidDate(/a/g)).toEqual(false);
    expect(isValidDate(new RegExp('a', 'g'))).toEqual(false);
    expect(isValidDate(function() {})).toEqual(false);
    expect(isValidDate(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isValidDate(Symbol('foo'))).toEqual(false);
    }
  });
});
