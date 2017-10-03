'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toDate = fav.type.toDate['YYMMDDHHmmss'];

describe('fav.type.toDate["YYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = new Date().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101000000'))
        .toEqual(new Date(yyyy, 0, 1, 0, 0, 0));
      expect(toDate(yy + '0615123030'))
        .toEqual(new Date(yyyy, 5, 15, 12, 30, 30));
      expect(toDate(yy + '1231235959'))
        .toEqual(new Date(yyyy, 11, 31, 23, 59, 59));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231235959'))
      .toEqual(new Date(yyyy + 49, 11, 31, 23, 59, 59));
    expect(toDate(yy + '1231235960'))
      .toEqual(new Date(yyyy + 50, 0, 1, 0, 0, 0));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101000000'))
      .toEqual(new Date(yyyy - 50, 0, 1, 0, 0, 0));
    expect(toDate(yy + '0100235959'))
      .toEqual(new Date(yyyy - 51, 11,31, 23, 59, 59));

    expect(toDate('000000000000')).toNotEqual(null);
    expect(toDate('999999999999')).toNotEqual(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('17')).toEqual(null);
    expect(toDate('1709')).toEqual(null);
    expect(toDate('17093')).toEqual(null);
    expect(toDate('17093012')).toEqual(null);
    expect(toDate('1709301234')).toEqual(null);
    expect(toDate('17093012345')).toEqual(null);
    expect(toDate('1709301234567')).toEqual(null);
    expect(toDate('20170930123456')).toEqual(null);
    expect(toDate('17-09-30 12:34:56')).toEqual(null);
  });

  it('Should return null if value is illegal data type', function() {
    expect(toDate(undefined)).toEqual(null);
    expect(toDate(null)).toEqual(null);
    expect(toDate(true)).toEqual(null);
    expect(toDate(false)).toEqual(null);
    expect(toDate(123)).toEqual(null);
    expect(toDate([])).toEqual(null);
    expect(toDate([1, 2, 3])).toEqual(null);
    expect(toDate({})).toEqual(null);
    expect(toDate({ y: 1, m: 2, d: 3 })).toEqual(null);
    expect(toDate(/a/g)).toEqual(null);
    expect(toDate(new RegExp('a', 'g'))).toEqual(null);
    expect(toDate(function() {})).toEqual(null);
    expect(toDate(new Date())).toEqual(null);
    expect(toDate(new Error())).toEqual(null);

    if (typeof Symbol === 'function') {
      expect(toDate(Symbol('17-09-10'))).toEqual(null);
    }
  });

});
