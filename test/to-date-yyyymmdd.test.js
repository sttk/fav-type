'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toDate = fav.type.toDate['YYYYMMDD'];

describe('fav.type.toDate["YYYYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923')).toEqual(new Date(2017, 8, 23));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('201709')).toEqual(null);
    expect(toDate('2017093')).toEqual(null);
    expect(toDate('201709301')).toEqual(null);
    expect(toDate('170930')).toEqual(null);
    expect(toDate('2017-09-30')).toEqual(null);
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
      expect(toDate(Symbol('2017-09-10'))).toEqual(null);
    }
  });

});
