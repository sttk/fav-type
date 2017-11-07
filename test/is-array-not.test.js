'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.type = require('..');

var isNotArray = fav.type.isArray.not;

describe('fav.type.isArray.not', function() {

  it('Should return false when value is an array', function() {
    expect(isNotArray([])).to.equal(false);
    expect(isNotArray([0, 1, 2])).to.equal(false);
    expect(isNotArray(new Array('a', 'b'))).to.equal(false);
  });

  it('Should return true when value is not an array', function() {
    expect(isNotArray(undefined)).to.equal(true);
    expect(isNotArray(null)).to.equal(true);
    expect(isNotArray(true)).to.equal(true);
    expect(isNotArray(false)).to.equal(true);
    expect(isNotArray(0)).to.equal(true);
    expect(isNotArray(123)).to.equal(true);
    expect(isNotArray('')).to.equal(true);
    expect(isNotArray('ABC')).to.equal(true);
    expect(isNotArray({})).to.equal(true);
    expect(isNotArray({ a: 0 })).to.equal(true);
    expect(isNotArray(/a/g)).to.equal(true);
    expect(isNotArray(new RegExp('a', 'g'))).to.equal(true);
    expect(isNotArray(function() {})).to.equal(true);
    expect(isNotArray(new Date())).to.equal(true);
    expect(isNotArray(new Error())).to.equal(true);

    if (typeof Symbol === 'function') {
      expect(isNotArray(Symbol('foo'))).to.equal(true);
    }
    if (typeof Map === 'function') {
      expect(isNotArray(new Map())).to.equal(true);
    }
    if (typeof Set === 'function') {
      expect(isNotArray(new Set())).to.equal(true);
    }
    if (typeof WeakMap === 'function') {
      expect(isNotArray(new WeakMap())).to.equal(true);
    }
    if (typeof WeakSet === 'function') {
      expect(isNotArray(new WeakSet())).to.equal(true);
    }
  });

  it('Should return true when value is a typed-array', function() {
    var tested = false;

    if (typeof Uint8Array === 'function') {
      tested = true;
      expect(isNotArray(new Uint8Array())).to.equal(true);
    }
    if (typeof Int8Array === 'function') {
      tested = true;
      expect(isNotArray(new Int8Array())).to.equal(true);
    }
    if (typeof Uint8ClampedArray === 'function') {
      tested = true;
      expect(isNotArray(new Uint8ClampedArray())).to.equal(true);
    }
    if (typeof Int16Array === 'function') {
      tested = true;
      expect(isNotArray(new Int16Array())).to.equal(true);
    }
    if (typeof Uint16Array === 'function') {
      tested = true;
      expect(isNotArray(new Uint16Array())).to.equal(true);
    }
    if (typeof Float16Array === 'function') {
      tested = true;
      expect(isNotArray(new Float16Array())).to.equal(true);
    }
    if (typeof Int32Array === 'function') {
      tested = true;
      expect(isNotArray(new Int32Array())).to.equal(true);
    }
    if (typeof Uint32Array === 'function') {
      tested = true;
      expect(isNotArray(new Int32Array())).to.equal(true);
    }
    if (typeof Float32Array === 'function') {
      tested = true;
      expect(isNotArray(new Float32Array())).to.equal(true);
    }
    if (typeof Float64Array === 'function') {
      tested = true;
      expect(isNotArray(new Float64Array())).to.equal(true);
    }

    if (!tested) {
      this.skip();
    }
  });

});
