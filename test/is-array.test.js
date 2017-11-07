'use strict';

var chai = require('chai');
var expect = chai.expect;

var fav = {}; fav.type = require('..');

var isArray = fav.type.isArray;

describe('fav.type.isArray', function() {

  it('Should return true when value is an array', function() {
    expect(isArray([])).to.equal(true);
    expect(isArray([0, 1, 2])).to.equal(true);
    expect(isArray(new Array('a', 'b'))).to.equal(true);
  });

  it('Should return false when value is not an array', function() {
    expect(isArray(undefined)).to.equal(false);
    expect(isArray(null)).to.equal(false);
    expect(isArray(true)).to.equal(false);
    expect(isArray(false)).to.equal(false);
    expect(isArray(0)).to.equal(false);
    expect(isArray(123)).to.equal(false);
    expect(isArray('')).to.equal(false);
    expect(isArray('ABC')).to.equal(false);
    expect(isArray({})).to.equal(false);
    expect(isArray({ a: 0 })).to.equal(false);
    expect(isArray(/a/g)).to.equal(false);
    expect(isArray(new RegExp('a', 'g'))).to.equal(false);
    expect(isArray(function() {})).to.equal(false);
    expect(isArray(new Date())).to.equal(false);
    expect(isArray(new Error())).to.equal(false);

    if (typeof Symbol === 'function') {
      expect(isArray(Symbol('foo'))).to.equal(false);
    }
    if (typeof Map === 'function') {
      expect(isArray(new Map())).to.equal(false);
    }
    if (typeof Set === 'function') {
      expect(isArray(new Set())).to.equal(false);
    }
    if (typeof WeakMap === 'function') {
      expect(isArray(new WeakMap())).to.equal(false);
    }
    if (typeof WeakSet === 'function') {
      expect(isArray(new WeakSet())).to.equal(false);
    }
  });

  it('Should return false when value is a typed-array', function() {
    var tested = false;

    if (typeof Uint8Array === 'function') {
      tested = true;
      expect(isArray(new Uint8Array())).to.equal(false);
    }
    if (typeof Int8Array === 'function') {
      tested = true;
      expect(isArray(new Int8Array())).to.equal(false);
    }
    if (typeof Uint8ClampedArray === 'function') {
      tested = true;
      expect(isArray(new Uint8ClampedArray())).to.equal(false);
    }
    if (typeof Int16Array === 'function') {
      tested = true;
      expect(isArray(new Int16Array())).to.equal(false);
    }
    if (typeof Uint16Array === 'function') {
      tested = true;
      expect(isArray(new Uint16Array())).to.equal(false);
    }
    if (typeof Float16Array === 'function') {
      tested = true;
      expect(isArray(new Float16Array())).to.equal(false);
    }
    if (typeof Int32Array === 'function') {
      tested = true;
      expect(isArray(new Int32Array())).to.equal(false);
    }
    if (typeof Uint32Array === 'function') {
      tested = true;
      expect(isArray(new Int32Array())).to.equal(false);
    }
    if (typeof Float32Array === 'function') {
      tested = true;
      expect(isArray(new Float32Array())).to.equal(false);
    }
    if (typeof Float64Array === 'function') {
      tested = true;
      expect(isArray(new Float64Array())).to.equal(false);
    }

    if (!tested) {
      this.skip();
    }
  });

});
