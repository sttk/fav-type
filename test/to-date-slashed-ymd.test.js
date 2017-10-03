'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toDate = fav.type.toDate['Y/M/D'];

describe('fav.type.toDate["Y/M/D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21')).toEqual(new Date(2017, 8, 21));
    expect(toDate('123/4/5')).toEqual(new Date(123, 3, 5));
    expect(toDate('-99/9/9')).toEqual(new Date(-99, 8, 9));
    expect(toDate('+99/9/9')).toEqual(new Date(99, 8, 9));
    expect(toDate('2017/13/21')).toEqual(new Date(2018, 0, 21));
    expect(toDate('2017/09/31')).toEqual(new Date(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('-')).toEqual(null);
    expect(toDate('+')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('2017/09')).toEqual(null);
    expect(toDate('2017/09/')).toEqual(null);
    expect(toDate('2017/09/A')).toEqual(null);
    expect(toDate('20170921')).toEqual(null);
    expect(toDate('２０１７/９/２１')).toEqual(null);
    expect(toDate('2017/09/31/')).toEqual(null);
    expect(toDate('2017-09-21')).toEqual(null);
    expect(toDate('9999999/09/21')).toEqual(null);
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
      expect(toDate(Symbol('2017/09/10'))).toEqual(null);
    }
  });

});
