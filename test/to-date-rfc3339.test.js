'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toDate = fav.type.toDate.RFC3339;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC3339"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-26T23:37:51Z'))
      .toEqual(new Date(2017, 8, 26, 23 - tzH, 37 - tzM, 51));
    expect(toDate('2017-09-26T23:37:51+00:00'))
      .toEqual(new Date(2017, 8, 26, 23 - tzH, 37 - tzM, 51));

    expect(toDate('2017-09-27T08:37:51+09:00'))
      .toEqual(new Date(2017, 8, 27, 8 - 9 - tzH, 37 + tzM, 51));
    expect(toDate('2017-09-26T20:27:51-03:10'))
      .toEqual(new Date(2017, 8, 26, 20 + 3 - tzH, 27 + 10 - tzM, 51));
    expect(toDate('2017-09-24T19:59:51.123Z'))
      .toEqual(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));

    expect(toDate('2017-09-24T19:59:51.123+00:00'))
      .toEqual(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));
    expect(toDate('2017-09-24T19:59:51.1+00:00'))
      .toEqual(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 100));
    expect(toDate('2017-09-24T19:59:51.12+00:00'))
      .toEqual(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 120));
    expect(toDate('2017-09-24T19:59:51.1234+00:00'))
      .toEqual(new Date(2017, 8, 24, 19 - tzH, 59 - tzM, 51, 123));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('12017-09-24T10:59:51Z')).toEqual(null);
    expect(toDate('217-09-24T10:59:51Z')).toEqual(null);
    expect(toDate('2017-9-24T10:59:51Z')).toEqual(null);
    expect(toDate('2017-009-24T10:59:51Z')).toEqual(null);
    expect(toDate('2017-09-4T10:59:51Z')).toEqual(null);
    expect(toDate('2017-09-124T10:59:51Z')).toEqual(null);
    expect(toDate('2017-09-12A10:59:51Z')).toEqual(null);
    expect(toDate('2017-09-12T1:59:51Z')).toEqual(null);
    expect(toDate('2017-09-12T101:59:51Z')).toEqual(null);
    expect(toDate('2017-09-12T10:9:51Z')).toEqual(null);
    expect(toDate('2017-09-12T10:159:51Z')).toEqual(null);
    expect(toDate('2017-09-12T10:59:1Z')).toEqual(null);
    expect(toDate('2017-09-12T10:59:151Z')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15.Z')).toEqual(null);
    expect(toDate('2017/09-12T10:59:15')).toEqual(null);
    expect(toDate('2017-09/12T10:59:15')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15+')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15-:')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15+1')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15-12')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15+12:')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15-12:3')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15-12:345')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15-12:34Z')).toEqual(null);
    expect(toDate(' 2017-09-12T10:59:15-12:34')).toEqual(null);
    expect(toDate('2017-09-12T10:59:15-12:34 ')).toEqual(null);
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
