'use strict';

var expect = require('expect');
var fav = {}; fav.type = require('..');

var isEmpty = fav.type.isEmpty;

describe('fav.type.isEmpty', function() {

  it('Should return true when value is null or undefined', function() {
    expect(isEmpty(undefined)).toEqual(true);
    expect(isEmpty(null)).toEqual(true);
  });

  it('Should return true when value is an array and it has no element',
  function() {
    expect(isEmpty([])).toEqual(true);
    expect(isEmpty(new Array())).toEqual(true);
  });

  it('Should return false when value is an array and it has elements',
  function() {
    expect(isEmpty([1, 2, 3])).toEqual(false);
    expect(isEmpty([0])).toEqual(false);
    expect(isEmpty([''])).toEqual(false);
    expect(isEmpty(new Array(1, 2, 3))).toEqual(false);
  });

  it('Should return true when value is a plain object and it has no property',
  function() {
    expect(isEmpty({})).toEqual(true);
    expect(isEmpty(new Object())).toEqual(true);
    expect(isEmpty(Object.create(Object.prototype))).toEqual(true);
    expect(isEmpty(Object.create(null))).toEqual(true);
  });

  it('Should return false when value is a plain object and it has properties',
  function() {
    expect(isEmpty({ a: 0 })).toEqual(false);
  });

  it('Should return false when value is `arguments` of a function',
  function() {
    (function() {
      expect(isEmpty(arguments)).toEqual(false);
    }());

    (function() {
      expect(isEmpty(arguments)).toEqual(false);
    }(1));
  });

  it('Should return true when value is HTMLCollection or NodeList,\n\t' +
  'and it has no element', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isEmpty(document.body.getElementsByTagName('xxx'))).toEqual(true);
    expect(isEmpty(document.querySelectorAll('xxx'))).toEqual(true);
  });

  it('Should return false when value is HTMLCollection or NodeList,\n\t' +
  'and it has elements', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isEmpty(document.body.getElementsByTagName('div'))).toEqual(false);
    expect(isEmpty(document.querySelectorAll('div'))).toEqual(false);
  });

  it('Should return false when value is neither an array nor a plain object',
  function() {
    expect(isEmpty(true)).toEqual(false);
    expect(isEmpty(false)).toEqual(false);
    expect(isEmpty(0)).toEqual(false);
    expect(isEmpty(123)).toEqual(false);
    expect(isEmpty('')).toEqual(false);
    expect(isEmpty('ABC')).toEqual(false);
    expect(isEmpty(/a/g)).toEqual(false);
    expect(isEmpty(new RegExp('a', 'g'))).toEqual(false);
    expect(isEmpty(function() {})).toEqual(false);
    expect(isEmpty(new Date())).toEqual(false);
    expect(isEmpty(new Error())).toEqual(false);
    expect(isEmpty(Object.create({}))).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isEmpty(Symbol('foo'))).toEqual(false);
    }
    if (typeof Map === 'function') {
      expect(isEmpty(new Map())).toEqual(false);
    }
    if (typeof Set === 'function') {
      expect(isEmpty(new Set())).toEqual(false);
    }
    if (typeof WeakMap === 'function') {
      expect(isEmpty(new WeakMap())).toEqual(false);
    }
    if (typeof WeakSet === 'function') {
      expect(isEmpty(new WeakSet())).toEqual(false);
    }
    if (typeof Uint8Array === 'function') {
      expect(isEmpty(new Uint8Array())).toEqual(false);
    }
    if (typeof Int8Array === 'function') {
      expect(isEmpty(new Int8Array())).toEqual(false);
    }
    if (typeof Uint8ClampedArray === 'function') {
      expect(isEmpty(new Uint8ClampedArray())).toEqual(false);
    }
    if (typeof Int16Array === 'function') {
      expect(isEmpty(new Int16Array())).toEqual(false);
    }
    if (typeof Uint16Array === 'function') {
      expect(isEmpty(new Uint16Array())).toEqual(false);
    }
    if (typeof Float16Array === 'function') {
      expect(isEmpty(new Float16Array())).toEqual(false);
    }
    if (typeof Int32Array === 'function') {
      expect(isEmpty(new Int32Array())).toEqual(false);
    }
    if (typeof Uint32Array === 'function') {
      expect(isEmpty(new Int32Array())).toEqual(false);
    }
    if (typeof Float32Array === 'function') {
      expect(isEmpty(new Float32Array())).toEqual(false);
    }
    if (typeof Float64Array === 'function') {
      expect(isEmpty(new Float64Array())).toEqual(false);
    }
  });

});
