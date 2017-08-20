'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var isString = fav.type.isString;

describe('fav.type.isString', function() {

  it('Should return true when value is a string', function() {
    expect(isString('')).toEqual(true);
    expect(isString('abc')).toEqual(true);
    expect(isString('あ')).toEqual(true);
    expect(isString('ä')).toEqual(true);
    expect(isString(String(123))).toEqual(true);
  });

  it('Should return true when value is a string object', function() {
    expect(isString(Object(''))).toEqual(true);
    expect(isString(new String('abc'))).toEqual(true);
  });

  it('Should return false when value is other type', function() {
    expect(isString(undefined)).toEqual(false);
    expect(isString(null)).toEqual(false);
    expect(isString(true)).toEqual(false);
    expect(isString(false)).toEqual(false);
    expect(isString(0)).toEqual(false);
    expect(isString(987)).toEqual(false);
    expect(isString(-0.1234)).toEqual(false);
    expect(isString(NaN)).toEqual(false);
    expect(isString(Infinity)).toEqual(false);
    expect(isString(new Number(987))).toEqual(false);
    expect(isString([])).toEqual(false);
    expect(isString([1, 2])).toEqual(false);
    expect(isString({})).toEqual(false);
    expect(isString({ a: 1 })).toEqual(false);
    expect(isString(/a/g)).toEqual(false);
    expect(isString(new RegExp('a', 'g'))).toEqual(false);
    expect(isString(function() {})).toEqual(false);
    expect(isString(new Date())).toEqual(false);
    expect(isString(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isString(Symbol('foo'))).toEqual(false);
    }
  });
});
