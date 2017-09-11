'use strict';

var expect = require('expect');
var semver = require('semver');
var fav = {}; fav.type = require('..');

var isFunction = fav.type.isFunction;

describe('fav.type.isFunction', function() {

  it('Should return true when value is a function', function() {
    expect(isFunction(function fn() {})).toEqual(true);
  });

  it('Should return true when value is a generator function', function() {
    if (!isSupportGenerator()) {
      this.skip();
      return;
    }
    eval('expect(isFunction(function *genFn() {})).toEqual(true)');
  });

  it('Should return true when value is a async function', function() {
    if (!isSupportAsyncAwait()) {
      this.skip();
      return;
    }
    eval('expect(isFunction(async function asyncFn() {})).toEqual(true)');
  });

  it('Should return false when value is other type', function() {
    expect(isFunction(undefined)).toEqual(false);
    expect(isFunction(null)).toEqual(false);
    expect(isFunction(true)).toEqual(false);
    expect(isFunction(false)).toEqual(false);
    expect(isFunction(0)).toEqual(false);
    expect(isFunction(123)).toEqual(false);
    expect(isFunction(-0.987)).toEqual(false);
    expect(isFunction(NaN)).toEqual(false);
    expect(isFunction(Infinity)).toEqual(false);
    expect(isFunction(new Number(111))).toEqual(false);
    expect(isFunction([])).toEqual(false);
    expect(isFunction([1, 2])).toEqual(false);
    expect(isFunction({})).toEqual(false);
    expect(isFunction({ a: 1 })).toEqual(false);
    expect(isFunction(/a/g)).toEqual(false);
    expect(isFunction(new RegExp('a', 'g'))).toEqual(false);
    expect(isFunction(new Date())).toEqual(false);
    expect(isFunction(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isFunction(Symbol('foo'))).toEqual(false);
    }
  });

});

function isSupportAsyncAwait() {
  if (isNode()) {
    return semver.gte(process.version, '7.6.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return true;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
  }
  return false;
}

function isSupportGenerator() {
  if (isNode()) {
    return semver.gte(process.version, '4.0.0');
  }

  if (typeof xslet !== 'undefined' && typeof xslet.platform !== 'undefined') {
    var ua = xslet.platform.ua;

    // Check by latest version
    if (ua.CHROME) {
      return true;
    }
    if (ua.FIREFOX) {
      return true;
    }
    if (ua.MSIE) {
      return false;
    }
    if (ua.EDGE) {
      return true;
    }
    if (ua.SAFARI) {
      return false;
    }
    if (ua.VIVALDI) {
      return true;
    }
    if (ua.PHANTOMJS) {
      return false;
    }
  }

  return false;
}

function isNode() {
  if (typeof process === 'object') {
    if (typeof process.kill === 'function') { // exist from v0.0.6
      return true;
    }
  }
  return false;
}

