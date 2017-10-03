'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var toDate = fav.type.toDate.ISO8601;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["ISO8601"]', function() {

  it('Should return a date object if format is basic calendar date',
  function() {
    expect(toDate('19850412'))
      .toEqual(new Date(1985, 3, 12));
    expect(toDate('19850412T101530'))
      .toEqual(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('19850412T101530Z'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('19850412T101530+09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('19850412T101530+0910'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('19850412T101530-09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('19850412T101530-0910'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic calendar date',
  function() {
    expect(toDate('+119850412'))
      .toEqual(new Date(11985, 3, 12));
    expect(toDate('+119850412T101530Z'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+119850412T101530+09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530+0910'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+119850412T101530-09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+119850412T101530-0910'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-219850412'))
      .toEqual(new Date(-21985, 3, 12));
    expect(toDate('-219850412T101530Z'))
      .toEqual(new Date(-21985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-219850412T101530+09'))
      .toEqual(new Date(-21985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530+0910'))
      .toEqual(new Date(-21985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-219850412T101530-09'))
      .toEqual(new Date(-21985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-219850412T101530-0910'))
      .toEqual(new Date(-21985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is basic ordinal date',
  function() {
    expect(toDate('1985102'))
      .toEqual(new Date(1985, 3, 12));
    expect(toDate('1985102T101530'))
      .toEqual(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985102T101530Z'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985102T101530+09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985102T101530+0910'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985102T101530-09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985102T101530-0910'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('The expanded basic ordinal date format is not supported because this ' +
  '\n\tcannot be distinguished from basic calendar date format.',
  function() {
    this.skip();
    return;
  });

  it('Should return a date object if format is basic week date',
  function() {
    expect(toDate('1985W155'))
      .toEqual(new Date(1985, 3, 12));
    expect(toDate('1985W155T101530'))
      .toEqual(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985W155T101530Z'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985W155T101530+09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530+0910'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985W155T101530-09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985W155T101530-0910'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded basic week date',
  function() {
    expect(toDate('+11985W155'))
      .toEqual(new Date(11985, 3, 12));
    expect(toDate('+11985W155T101530'))
      .toEqual(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985W155T101530Z'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530+0910'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985W155T101530-09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985W155T101530-0910'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985W155'))
      .toEqual(new Date(-11985, 3, 10));
    expect(toDate('-11985W155T101530'))
      .toEqual(new Date(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985W155T101530Z'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+09'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530+0910'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985W155T101530-09'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985W155T101530-0910'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended calendar date',
  function() {
    expect(toDate('1985-04-12'))
      .toEqual(new Date(1985, 3, 12));
    expect(toDate('1985-04-12T10:15:30'))
      .toEqual(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-04-12T10:15:30Z'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30+09:10'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-04-12T10:15:30-09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-04-12T10:15:30-09:10'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended calendar ' +
  'date', function() {
    expect(toDate('+11985-04-12'))
      .toEqual(new Date(11985, 3, 12));
    expect(toDate('+11985-04-12T10:15:30'))
      .toEqual(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-04-12T10:15:30Z'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30+09:10'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-04-12T10:15:30-09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-04-12T10:15:30-09:10'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-04-12'))
      .toEqual(new Date(-11985, 3, 12));
    expect(toDate('-11985-04-12T10:15:30'))
      .toEqual(new Date(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-04-12T10:15:30Z'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30+09:10'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-04-12T10:15:30-09'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-04-12T10:15:30-09:10'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended ordinal date',
  function() {
    expect(toDate('1985-102'))
      .toEqual(new Date(1985, 3, 12));
    expect(toDate('1985-102T10:15:30'))
      .toEqual(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-102T10:15:30Z'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30+09:10'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-102T10:15:30-09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-102T10:15:30-09:10'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended ordinal date',
  function() {
    expect(toDate('+11985-102'))
      .toEqual(new Date(11985, 3, 12));
    expect(toDate('+11985-102T10:15:30'))
      .toEqual(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-102T10:15:30Z'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30+09:10'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-102T10:15:30-09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-102T10:15:30-09:10'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-102'))
      .toEqual(new Date(-11985, 3, 12));
    expect(toDate('-11985-102T10:15:30'))
      .toEqual(new Date(-11985, 3, 12, 10, 15, 30));
    expect(toDate('-11985-102T10:15:30Z'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30+09:10'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-102T10:15:30-09'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-102T10:15:30-09:10'))
      .toEqual(new Date(-11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is extended week date',
  function() {
    expect(toDate('1985-W15-5'))
      .toEqual(new Date(1985, 3, 12));
    expect(toDate('1985-W15-5T10:15:30'))
      .toEqual(new Date(1985, 3, 12, 10, 15, 30));
    expect(toDate('1985-W15-5T10:15:30Z'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30+09:10'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('1985-W15-5T10:15:30-09'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('1985-W15-5T10:15:30-09:10'))
      .toEqual(new Date(1985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return a date object if format is expanded extended week date',
  function() {
    expect(toDate('+11985-W15-5'))
      .toEqual(new Date(11985, 3, 12));
    expect(toDate('+11985-W15-5T10:15:30'))
      .toEqual(new Date(11985, 3, 12, 10, 15, 30));
    expect(toDate('+11985-W15-5T10:15:30Z'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30+09:10'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('+11985-W15-5T10:15:30-09'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('+11985-W15-5T10:15:30-09:10'))
      .toEqual(new Date(11985, 3, 12, 10 - tzH + 9, 15 - tzM + 10, 30));

    expect(toDate('-11985-W15-5'))
      .toEqual(new Date(-11985, 3, 10));
    expect(toDate('-11985-W15-5T10:15:30'))
      .toEqual(new Date(-11985, 3, 10, 10, 15, 30));
    expect(toDate('-11985-W15-5T10:15:30Z'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30+09:10'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH - 9, 15 - tzM - 10, 30));
    expect(toDate('-11985-W15-5T10:15:30-09'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM, 30));
    expect(toDate('-11985-W15-5T10:15:30-09:10'))
      .toEqual(new Date(-11985, 3, 10, 10 - tzH + 9, 15 - tzM + 10, 30));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('201710')).toEqual(null);
    expect(toDate('201710234')).toEqual(null);
    expect(toDate('20171023 112233')).toEqual(null);
    expect(toDate('2017-10')).toEqual(null);
    expect(toDate('2017-10-23T4')).toEqual(null);
    expect(toDate('2017-10-23 11:22:33')).toEqual(null);
    expect(toDate('2017/10/23T11:22:33')).toEqual(null);
    expect(toDate('12017-10-23T11:22:33')).toEqual(null);
    expect(toDate('+017-10-23T11:22:33')).toEqual(null);
    expect(toDate('-17-10-23T11:22:33')).toEqual(null);
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


