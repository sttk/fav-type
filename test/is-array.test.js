'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var isArray = fav.type.isArray;

describe('fav.type.isArray', function() {

  it('Should return true when value is an array', function() {
    expect(isArray([])).toEqual(true);
    expect(isArray([0, 1, 2])).toEqual(true);
    expect(isArray(new Array('a', 'b'))).toEqual(true);
  });

  it('Should return false when value is not an array', function() {
    expect(isArray(undefined)).toEqual(false);
    expect(isArray(null)).toEqual(false);
    expect(isArray(true)).toEqual(false);
    expect(isArray(false)).toEqual(false);
    expect(isArray(0)).toEqual(false);
    expect(isArray(123)).toEqual(false);
    expect(isArray('')).toEqual(false);
    expect(isArray('ABC')).toEqual(false);
    expect(isArray({})).toEqual(false);
    expect(isArray({ a: 0 })).toEqual(false);
    expect(isArray(/a/g)).toEqual(false);
    expect(isArray(new RegExp('a', 'g'))).toEqual(false);
    expect(isArray(function() {})).toEqual(false);
    expect(isArray(new Date())).toEqual(false);
    expect(isArray(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isArray(Symbol('foo'))).toEqual(false);
    }
    if (typeof Map === 'function') {
      expect(isArray(new Map())).toEqual(false);
    }
    if (typeof Set === 'function') {
      expect(isArray(new Set())).toEqual(false);
    }
    if (typeof WeakMap === 'function') {
      expect(isArray(new WeakMap())).toEqual(false);
    }
    if (typeof WeakSet === 'function') {
      expect(isArray(new WeakSet())).toEqual(false);
    }
  });

  it('Should return false when value is a typed-array', function() {
    var tested = false;

    if (typeof Uint8Array === 'function') {
      tested = true;
      expect(isArray(new Uint8Array())).toEqual(false);
    }
    if (typeof Int8Array === 'function') {
      tested = true;
      expect(isArray(new Int8Array())).toEqual(false);
    }
    if (typeof Uint8ClampedArray === 'function') {
      tested = true;
      expect(isArray(new Uint8ClampedArray())).toEqual(false);
    }
    if (typeof Int16Array === 'function') {
      tested = true;
      expect(isArray(new Int16Array())).toEqual(false);
    }
    if (typeof Uint16Array === 'function') {
      tested = true;
      expect(isArray(new Uint16Array())).toEqual(false);
    }
    if (typeof Float16Array === 'function') {
      tested = true;
      expect(isArray(new Float16Array())).toEqual(false);
    }
    if (typeof Int32Array === 'function') {
      tested = true;
      expect(isArray(new Int32Array())).toEqual(false);
    }
    if (typeof Uint32Array === 'function') {
      tested = true;
      expect(isArray(new Int32Array())).toEqual(false);
    }
    if (typeof Float32Array === 'function') {
      tested = true;
      expect(isArray(new Float32Array())).toEqual(false);
    }
    if (typeof Float64Array === 'function') {
      tested = true;
      expect(isArray(new Float64Array())).toEqual(false);
    }

    if (!tested) {
      this.skip();
    }
  });

});
