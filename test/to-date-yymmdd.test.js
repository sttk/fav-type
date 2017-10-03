'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toDate = fav.type.toDate['YYMMDD'];

describe('fav.type.toDate["YYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = new Date().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101')).toEqual(new Date(yyyy, 0, 1));
      expect(toDate(yy + '0615')).toEqual(new Date(yyyy, 5, 15));
      expect(toDate(yy + '1231')).toEqual(new Date(yyyy, 11, 31));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231')).toEqual(new Date(yyyy + 49, 11, 31));
    expect(toDate(yy + '1232')).toEqual(new Date(yyyy + 50, 0, 1));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101')).toEqual(new Date(yyyy - 50, 0, 1));
    expect(toDate(yy + '0100')).toEqual(new Date(yyyy - 51, 11,31));

    expect(toDate('000000')).toNotEqual(null);
    expect(toDate('999999')).toNotEqual(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('17')).toEqual(null);
    expect(toDate('1709')).toEqual(null);
    expect(toDate('17093')).toEqual(null);
    expect(toDate('1709301')).toEqual(null);
    expect(toDate('20170930')).toEqual(null);
    expect(toDate('17-09-30')).toEqual(null);
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
