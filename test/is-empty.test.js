'use strict';

var chai = require('chai');
var expect = chai.expect;
var fav = {}; fav.type = require('..');

var isEmpty = fav.type.isEmpty;

describe('fav.type.isEmpty', function() {

  it('Should return true when value is null or undefined', function() {
    expect(isEmpty(undefined)).to.equal(true);
    expect(isEmpty(null)).to.equal(true);
  });

  it('Should return true when value is an array and it has no element',
  function() {
    expect(isEmpty([])).to.equal(true);
    expect(isEmpty(new Array())).to.equal(true);
  });

  it('Should return false when value is an array and it has elements',
  function() {
    expect(isEmpty([1, 2, 3])).to.equal(false);
    expect(isEmpty([0])).to.equal(false);
    expect(isEmpty([''])).to.equal(false);
    expect(isEmpty(new Array(1, 2, 3))).to.equal(false);
  });

  it('Should return true when value is a plain object and it has no property',
  function() {
    expect(isEmpty({})).to.equal(true);
    expect(isEmpty(new Object())).to.equal(true);
    expect(isEmpty(Object.create(Object.prototype))).to.equal(true);
    expect(isEmpty(Object.create(null))).to.equal(true);
  });

  it('Should return false when value is a plain object and it has properties',
  function() {
    expect(isEmpty({ a: 0 })).to.equal(false);
  });

  it('Should return false when value is `arguments` of a function',
  function() {
    (function() {
      expect(isEmpty(arguments)).to.equal(false);
    }());

    (function() {
      expect(isEmpty(arguments)).to.equal(false);
    }(1));
  });

  it('Should return true when value is HTMLCollection or NodeList,\n\t' +
  'and it has no element', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isEmpty(document.body.getElementsByTagName('xxx'))).to.equal(true);
    expect(isEmpty(document.querySelectorAll('xxx'))).to.equal(true);
  });

  it('Should return false when value is HTMLCollection or NodeList,\n\t' +
  'and it has elements', function() {
    if (typeof HTMLCollection === 'undefined') {
      this.skip();
      return;
    }
    expect(isEmpty(document.body.getElementsByTagName('div'))).to.equal(false);
    expect(isEmpty(document.querySelectorAll('div'))).to.equal(false);
  });

  it('Should return false when value is neither an array nor a plain object',
  function() {
    expect(isEmpty(true)).to.equal(false);
    expect(isEmpty(false)).to.equal(false);
    expect(isEmpty(0)).to.equal(false);
    expect(isEmpty(123)).to.equal(false);
    expect(isEmpty('')).to.equal(false);
    expect(isEmpty('ABC')).to.equal(false);
    expect(isEmpty(/a/g)).to.equal(false);
    expect(isEmpty(new RegExp('a', 'g'))).to.equal(false);
    expect(isEmpty(function() {})).to.equal(false);
    expect(isEmpty(new Date())).to.equal(false);
    expect(isEmpty(new Error())).to.equal(false);
    expect(isEmpty(Object.create({}))).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isEmpty(Symbol('foo'))).to.equal(false);
    }
    if (typeof Map === 'function') {
      expect(isEmpty(new Map())).to.equal(false);
    }
    if (typeof Set === 'function') {
      expect(isEmpty(new Set())).to.equal(false);
    }
    if (typeof WeakMap === 'function') {
      expect(isEmpty(new WeakMap())).to.equal(false);
    }
    if (typeof WeakSet === 'function') {
      expect(isEmpty(new WeakSet())).to.equal(false);
    }
    if (typeof Uint8Array === 'function') {
      expect(isEmpty(new Uint8Array())).to.equal(false);
    }
    if (typeof Int8Array === 'function') {
      expect(isEmpty(new Int8Array())).to.equal(false);
    }
    if (typeof Uint8ClampedArray === 'function') {
      expect(isEmpty(new Uint8ClampedArray())).to.equal(false);
    }
    if (typeof Int16Array === 'function') {
      expect(isEmpty(new Int16Array())).to.equal(false);
    }
    if (typeof Uint16Array === 'function') {
      expect(isEmpty(new Uint16Array())).to.equal(false);
    }
    if (typeof Float16Array === 'function') {
      expect(isEmpty(new Float16Array())).to.equal(false);
    }
    if (typeof Int32Array === 'function') {
      expect(isEmpty(new Int32Array())).to.equal(false);
    }
    if (typeof Uint32Array === 'function') {
      expect(isEmpty(new Int32Array())).to.equal(false);
    }
    if (typeof Float32Array === 'function') {
      expect(isEmpty(new Float32Array())).to.equal(false);
    }
    if (typeof Float64Array === 'function') {
      expect(isEmpty(new Float64Array())).to.equal(false);
    }
  });

});
