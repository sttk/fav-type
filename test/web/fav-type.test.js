(function(){
'use strict';




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

})();
(function(){
'use strict';




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

})();
(function(){
'use strict';




var isFiniteNumber = fav.type.isFiniteNumber;

describe('fav.type.isFiniteNumber', function() {

  it('Should return true when value is a finite number', function() {
    expect(isFiniteNumber(0)).toEqual(true);
    expect(isFiniteNumber(123)).toEqual(true);
    expect(isFiniteNumber(0.456)).toEqual(true);
    expect(isFiniteNumber(-987)).toEqual(true);
    expect(isFiniteNumber(Number.MIN_VALUE)).toEqual(true);
    expect(isFiniteNumber(Number.MAX_VALUE)).toEqual(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MIN_SAFE_INTEGER)).toEqual(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isFiniteNumber(Number.MAX_SAFE_INTEGER)).toEqual(true);
    }
    if (typeof Number.EPSILON === 'number') {
      expect(isFiniteNumber(Number.EPSILON)).toEqual(true);
    }
    expect(isFiniteNumber(new Number(123))).toEqual(true);
    expect(isFiniteNumber(new Number(4.56))).toEqual(true);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isFiniteNumber(NaN)).toEqual(false);
    expect(isFiniteNumber(Infinity)).toEqual(false);
    expect(isFiniteNumber(-Infinity)).toEqual(false);
    expect(isFiniteNumber(Number.NaN)).toEqual(false);
    expect(isFiniteNumber(Number.POSITIVE_INFINITY)).toEqual(false);
    expect(isFiniteNumber(Number.NEGATIVE_INFINITY)).toEqual(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isFiniteNumber(undefined)).toEqual(false);
    expect(isFiniteNumber(null)).toEqual(false);
    expect(isFiniteNumber(true)).toEqual(false);
    expect(isFiniteNumber(false)).toEqual(false);
    expect(isFiniteNumber('')).toEqual(false);
    expect(isFiniteNumber('abc')).toEqual(false);
    expect(isFiniteNumber('0')).toEqual(false);
    expect(isFiniteNumber('123')).toEqual(false);
    expect(isFiniteNumber([])).toEqual(false);
    expect(isFiniteNumber([1, 2])).toEqual(false);
    expect(isFiniteNumber({})).toEqual(false);
    expect(isFiniteNumber({ a: 1 })).toEqual(false);
    expect(isFiniteNumber(/a/g)).toEqual(false);
    expect(isFiniteNumber(new RegExp('a', 'g'))).toEqual(false);
    expect(isFiniteNumber(function() {})).toEqual(false);
    expect(isFiniteNumber(new Date())).toEqual(false);
    expect(isFiniteNumber(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isFiniteNumber(Symbol('foo'))).toEqual(false);
    }
  });

});

})();
(function(){
'use strict';





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


})();
(function(){
'use strict';




var isInteger = fav.type.isInteger;

describe('fav.type.isInteger', function() {

  it('Should return true when value is an integer', function() {
    expect(isInteger(0)).toEqual(true);
    expect(isInteger(123)).toEqual(true);
    expect(isInteger(-987)).toEqual(true);
    expect(isInteger(2^31)).toEqual(true);
    expect(isInteger(-2^32)).toEqual(true);
    expect(isInteger(Number.MAX_VALUE)).toEqual(true);
    if (typeof Number.MIN_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MIN_SAFE_INTEGER)).toEqual(true);
    }
    if (typeof Number.MAX_SAFE_INTEGER === 'number') {
      expect(isInteger(Number.MAX_SAFE_INTEGER)).toEqual(true);
    }
    expect(isInteger(new Number(123))).toEqual(true);
    expect(isInteger(1.0)).toEqual(true);
  });

  it('Should return false when value is a floating point number', function() {
    expect(isInteger(0.1)).toEqual(false);
    expect(isInteger(1.23)).toEqual(false);
    expect(isInteger(-0.987)).toEqual(false);
    expect(isInteger(Number.MIN_VALUE)).toEqual(false);
    expect(isInteger(Number.EPSILON)).toEqual(false);
  });

  it('Should return false when value is NaN, +/-Infinity', function() {
    expect(isInteger(NaN)).toEqual(false);
    expect(isInteger(Infinity)).toEqual(false);
    expect(isInteger(-Infinity)).toEqual(false);
    expect(isInteger(Number.NaN)).toEqual(false);
    expect(isInteger(Number.POSITIVE_INFINITY)).toEqual(false);
    expect(isInteger(Number.NEGATIVE_INFINITY)).toEqual(false);
  });

  it('Should return false when value is not a number', function() {
    expect(isInteger(undefined)).toEqual(false);
    expect(isInteger(null)).toEqual(false);
    expect(isInteger(true)).toEqual(false);
    expect(isInteger(false)).toEqual(false);
    expect(isInteger('')).toEqual(false);
    expect(isInteger('abc')).toEqual(false);
    expect(isInteger('0')).toEqual(false);
    expect(isInteger('123')).toEqual(false);
    expect(isInteger([])).toEqual(false);
    expect(isInteger([1, 2])).toEqual(false);
    expect(isInteger({})).toEqual(false);
    expect(isInteger({ a: 1 })).toEqual(false);
    expect(isInteger(/a/g)).toEqual(false);
    expect(isInteger(new RegExp('a', 'g'))).toEqual(false);
    expect(isInteger(function() {})).toEqual(false);
    expect(isInteger(new Date())).toEqual(false);
    expect(isInteger(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isInteger(Symbol('foo'))).toEqual(false);
    }
  });

});

})();
(function(){
'use strict';





var isPlainObject = fav.type.isPlainObject;

describe('fav.type.isPlainObject', function() {

  it('Should return true when value is a plain object', function() {
    expect(isPlainObject({})).toEqual(true);
    expect(isPlainObject({ a: 1 })).toEqual(true);
    expect(isPlainObject(new Object())).toEqual(true);
    expect(isPlainObject(Object.create(Object.prototype))).toEqual(true);
    expect(isPlainObject(Object.create(null))).toEqual(true);
  });

  it('Should return false when value is not a plain object', function() {
    expect(isPlainObject(undefined)).toEqual(false);
    expect(isPlainObject(null)).toEqual(false);
    expect(isPlainObject(true)).toEqual(false);
    expect(isPlainObject(false)).toEqual(false);
    expect(isPlainObject(0)).toEqual(false);
    expect(isPlainObject(123)).toEqual(false);
    expect(isPlainObject(NaN)).toEqual(false);
    expect(isPlainObject(Infinity)).toEqual(false);
    expect(isPlainObject(new Number(123))).toEqual(false);
    expect(isPlainObject([])).toEqual(false);
    expect(isPlainObject([1, 2])).toEqual(false);
    expect(isPlainObject(new Array(1, 2))).toEqual(false);
    expect(isPlainObject(/a/g)).toEqual(false);
    expect(isPlainObject(new RegExp('a', 'g'))).toEqual(false);
    expect(isPlainObject(function() {})).toEqual(false);
    expect(isPlainObject(new Date())).toEqual(false);
    expect(isPlainObject(new Error())).toEqual(false);
    expect(isPlainObject(new Foo())).toEqual(false);
    expect(isPlainObject(new FooEx())).toEqual(false);
    expect(isPlainObject(new SubclassOfPlainObject())).toEqual(false);
    expect(isPlainObject(Object.create({}))).toEqual(false);
  });

  it('Should return false when value is a class instance', function() {
    if (!isSupportClass()) {
      this.skip();
      return;
    }

    var code = codeForClass();
    eval(code);
  });

  it('Should return false when value is a symbol', function() {
    if (typeof Symbol !== 'function') {
      this.skip();
      return;
    }

    expect(isPlainObject(Symbol('foo'))).toEqual(false);
  });

});


function Foo() {
  this.baz = 'Baz';
  return this;
}

function FooEx() {
  this.baz = 'Baaaaz';
}
FooEx.prototype = Foo.prototype;

Foo.prototype.bar = function() {
  return this.baz;
};

/*
var foo = new Foo();
console.log(foo);
console.log(foo.baz);
console.log(foo.bar());
console.log(typeof foo);
console.log(Object.prototype.toString.call(foo));
console.log(foo.constructor);
console.log(foo.constructor.name);
console.log(foo.prototype);
console.log(Object.getPrototypeOf(foo));
console.log(foo.constructor === Object);

var fooex = new FooEx();
console.log(fooex);
console.log(fooex.baz);
console.log(fooex.bar());
console.log(fooex.constructor === Object);
*/

function SubclassOfPlainObject() {}
SubclassOfPlainObject.prototype = {};

function codeForClass() {
  return "\
class Qux {\
  constructor(n) {\
    this.count = n || 1;\
  }\
\
  get text() {\
    return 'Q' + 'u'.repeat(this.count) + 'x';\
  }\
}\
\
class Quux extends Qux {\
  constructor(n) {\
    super(n);\
  }\
\
  get text() {\
    return 'Q' + 'u'.repeat(this.count * 2) + 'x';\
  }\
}\
\
/*\
const qux = new Qux(3);\
console.log(qux);\
console.log(qux.count);\
console.log(qux.text);\
console.log(qux.constructor === Object);\
*/\
\
/*\
const quux = new Quux(3);\
console.log(quux);\
console.log(quux.count);\
console.log(quux.text);\
console.log(quux.constructor === Object);\
*/\
\
expect(isPlainObject(new Qux())).toEqual(false);\
expect(isPlainObject(new Quux())).toEqual(false);\
";
}

function isSupportClass() {
  if (isNode()) {
    return semver.gte(process.version, '2.0.0');
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
    return false;
  }
}

function isNode() {
  if (typeof process === 'object') {
    if (typeof process.kill === 'function') { // exist from v0.0.6
      return true;
    }
  }
  return false;
}

})();
(function(){
'use strict';




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

})();
(function(){
'use strict';




var isValidDate = fav.type.isValidDate;

describe('fav.type.isValidDate', function() {

  it('Should return true when value is a valid date', function() {
    expect(isValidDate(new Date(2017, 8, 30))).toEqual(true);
  });

  it('Should return false when value is an invalid date', function() {
    expect(isValidDate(new Date(Infinity, 8, 30))).toEqual(false);
    expect(isValidDate(new Date(300000, 8, 30))).toEqual(false);
  });

  it('Should return false when value is not a date', function() {
    expect(isValidDate(undefined)).toEqual(false);
    expect(isValidDate(null)).toEqual(false);
    expect(isValidDate(true)).toEqual(false);
    expect(isValidDate(false)).toEqual(false);
    expect(isValidDate(0)).toEqual(false);
    expect(isValidDate(123)).toEqual(false);
    expect(isValidDate('')).toEqual(false);
    expect(isValidDate('ABC')).toEqual(false);
    expect(isValidDate(/a/g)).toEqual(false);
    expect(isValidDate(new RegExp('a', 'g'))).toEqual(false);
    expect(isValidDate(function() {})).toEqual(false);
    expect(isValidDate(new Error())).toEqual(false);

    if (typeof Symbol === 'function') {
      expect(isValidDate(Symbol('foo'))).toEqual(false);
    }
  });
});

})();
(function(){
'use strict';




var toDate = fav.type.toDate['Y-M-D H:m:s'];

describe('fav.type.toDate["Y-M-D H:m:s"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21 19:23:01'))
      .toEqual(new Date(2017, 8, 21, 19, 23, 1));
    expect(toDate('2017-09-21 9:03:01.5'))
      .toEqual(new Date(2017, 8, 21, 9, 3, 1, 500));
    expect(toDate('123-4-5 10:20:30.40'))
      .toEqual(new Date(123, 3, 5, 10, 20, 30, 400));
    expect(toDate('-99-9-9 1:2:3'))
      .toEqual(new Date(-99, 8, 9, 1, 2, 3));
    expect(toDate('+99-9-9 23:59:59.99999'))
      .toEqual(new Date(99, 8, 9, 23, 59, 59, 999));
    expect(toDate('2017-13-21 00:00:00'))
      .toEqual(new Date(2018, 0, 21, 0, 0, 0));
    expect(toDate('2017-09-31    01:23:45.678'))
      .toEqual(new Date(2017, 9, 1, 1, 23, 45, 678));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('-')).toEqual(null);
    expect(toDate('+')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('2017-09')).toEqual(null);
    expect(toDate('2017-09-')).toEqual(null);
    expect(toDate('2017-09-01')).toEqual(null);
    expect(toDate('2017-09-01 11')).toEqual(null);
    expect(toDate('2017-09-01 11:')).toEqual(null);
    expect(toDate('2017-09-01 11:22')).toEqual(null);
    expect(toDate('2017-09-01 11:22:')).toEqual(null);
    expect(toDate('2017-09-01 11:22:33.')).toEqual(null);
    expect(toDate('2017-09-01 11:22:A')).toEqual(null);
    expect(toDate('2017-09-0111:22:33')).toEqual(null);
    expect(toDate('20170921223311')).toEqual(null);
    expect(toDate('２０１７-９-２１ １１:２２:３３')).toEqual(null);
    expect(toDate('2017/09/21 11:22:33')).toEqual(null);
    expect(toDate('9999999-09-21 11:22:33')).toEqual(null);
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

})();
(function(){
'use strict';




var toDate = fav.type.toDate['Y-M-D'];

describe('fav.type.toDate["Y-M-D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017-09-21')).toEqual(new Date(2017, 8, 21));
    expect(toDate('123-4-5')).toEqual(new Date(123, 3, 5));
    expect(toDate('-99-9-9')).toEqual(new Date(-99, 8, 9));
    expect(toDate('+99-9-9')).toEqual(new Date(99, 8, 9));
    expect(toDate('2017-13-21')).toEqual(new Date(2018, 0, 21));
    expect(toDate('2017-09-31')).toEqual(new Date(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('-')).toEqual(null);
    expect(toDate('+')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('2017-09')).toEqual(null);
    expect(toDate('2017-09-')).toEqual(null);
    expect(toDate('2017-09-A')).toEqual(null);
    expect(toDate('20170921')).toEqual(null);
    expect(toDate('２０１７-９-２１')).toEqual(null);
    expect(toDate('2017-09-31-')).toEqual(null);
    expect(toDate('2017/09/21')).toEqual(null);
    expect(toDate('9999999-09-21')).toEqual(null);
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

})();
(function(){
'use strict';




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



})();
(function(){
'use strict';




var toDate = fav.type.toDate.RFC2822;

var tz = new Date().getTimezoneOffset();
var tzM = tz % 60;
var tzH = (tz - tzM) / 60;

describe('fav.type.toDate["RFC2822"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 +0900'))
      .toEqual(new Date(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));
    expect(toDate('Tue, 26 Sep 2017 08:15:02 -0900'))
      .toEqual(new Date(2017, 8, 26, 8 - tzH + 9, 15 - tzM, 2, 0));
    expect(toDate('  26  Sep  2017  08:15:02   +0900  '))
      .toEqual(new Date(2017, 8, 26, 8 - tzH - 9, 15 - tzM, 2, 0));

    expect(toDate('Mon, 24 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 24, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 25, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Wed, 26 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 26, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Thu, 27 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 27, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Fri, 28 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 28, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sat, 29 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 29, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Sun, 30 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate('30 Jan 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 0, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Feb 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 1, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Mar 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 2, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Apr 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 3, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 May 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 4, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jun 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 5, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Jul 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 6, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Aug 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 7, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Oct 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 9, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Nov 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 10, 30, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('30 Dec 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 11, 30, 23 - tzH, 15 - tzM, 2, 0));

    expect(toDate(' Tue, 5 Sep 2017 23:15:02 +0000'))
      .toEqual(new Date(2017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
    expect(toDate('Tue, 5 Sep 12017 23:15:02 +0000'))
      .toEqual(new Date(12017, 8, 5, 23 - tzH, 15 - tzM, 2, 0));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('AAA, 25 Sep 2017 23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, A25 Sep 2017 23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25A Sep 2017 23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 AAA 2017 23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep2017 23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 117 23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017T23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 A23:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 2:15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23A15:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:1:02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:15A02 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:2 +0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02A+0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 A0000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +000')).toEqual(null);
    expect(toDate('Tue, 25 Sep 2017 23:15:02 +0000A')).toEqual(null);
    expect(toDate('Tue, 25 Sep 99999999 23:15:02 +0000')).toEqual(null);
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

})();
(function(){
'use strict';




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

})();
(function(){
'use strict';




var toDate = fav.type.toDate['Y/M/D H:m:s'];

describe('fav.type.toDate["Y/M/D H:m:s"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21 19:23:01'))
      .toEqual(new Date(2017, 8, 21, 19, 23, 1));
    expect(toDate('2017/09/21 9:03:01.5'))
      .toEqual(new Date(2017, 8, 21, 9, 3, 1, 500));
    expect(toDate('123/4/5 10:20:30.40'))
      .toEqual(new Date(123, 3, 5, 10, 20, 30, 400));
    expect(toDate('-99/9/9 1:2:3'))
      .toEqual(new Date(-99, 8, 9, 1, 2, 3));
    expect(toDate('+99/9/9 23:59:59.99999'))
      .toEqual(new Date(99, 8, 9, 23, 59, 59, 999));
    expect(toDate('2017/13/21 00:00:00'))
      .toEqual(new Date(2018, 0, 21, 0, 0, 0));
    expect(toDate('2017/09/31    01:23:45.678'))
      .toEqual(new Date(2017, 9, 1, 1, 23, 45, 678));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('-')).toEqual(null);
    expect(toDate('+')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('2017/09')).toEqual(null);
    expect(toDate('2017/09/')).toEqual(null);
    expect(toDate('2017/09/01')).toEqual(null);
    expect(toDate('2017/09/01 11')).toEqual(null);
    expect(toDate('2017/09/01 11:')).toEqual(null);
    expect(toDate('2017/09/01 11:22')).toEqual(null);
    expect(toDate('2017/09/01 11:22:')).toEqual(null);
    expect(toDate('2017/09/01 11:22:33.')).toEqual(null);
    expect(toDate('2017/09/01 11:22:A')).toEqual(null);
    expect(toDate('2017/09/0111:22:33')).toEqual(null);
    expect(toDate('20170921223311')).toEqual(null);
    expect(toDate('２０１７/９/２１ １１:２２:３３')).toEqual(null);
    expect(toDate('2017-09-21 11:22:33')).toEqual(null);
    expect(toDate('9999999/09/21 11:22:33')).toEqual(null);
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
      expect(toDate(Symbol('2017/09/10'))).toEqual(null);
    }
  });

});

})();
(function(){
'use strict';




var toDate = fav.type.toDate['Y/M/D'];

describe('fav.type.toDate["Y/M/D"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('2017/09/21')).toEqual(new Date(2017, 8, 21));
    expect(toDate('123/4/5')).toEqual(new Date(123, 3, 5));
    expect(toDate('-99/9/9')).toEqual(new Date(-99, 8, 9));
    expect(toDate('+99/9/9')).toEqual(new Date(99, 8, 9));
    expect(toDate('2017/13/21')).toEqual(new Date(2018, 0, 21));
    expect(toDate('2017/09/31')).toEqual(new Date(2017, 9, 1));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('-')).toEqual(null);
    expect(toDate('+')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('2017/09')).toEqual(null);
    expect(toDate('2017/09/')).toEqual(null);
    expect(toDate('2017/09/A')).toEqual(null);
    expect(toDate('20170921')).toEqual(null);
    expect(toDate('２０１７/９/２１')).toEqual(null);
    expect(toDate('2017/09/31/')).toEqual(null);
    expect(toDate('2017-09-21')).toEqual(null);
    expect(toDate('9999999/09/21')).toEqual(null);
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
      expect(toDate(Symbol('2017/09/10'))).toEqual(null);
    }
  });

});

})();
(function(){
'use strict';




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

})();
(function(){
'use strict';




var toDate = fav.type.toDate['YYMMDDHHmmss'];

describe('fav.type.toDate["YYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    var yyyy = new Date().getFullYear(),
        yy;

    for (var y = yyyy - 50; y < yyyy + 50; y++) {
      yy = String(yyyy).slice(-2);
      expect(toDate(yy + '0101000000'))
        .toEqual(new Date(yyyy, 0, 1, 0, 0, 0));
      expect(toDate(yy + '0615123030'))
        .toEqual(new Date(yyyy, 5, 15, 12, 30, 30));
      expect(toDate(yy + '1231235959'))
        .toEqual(new Date(yyyy, 11, 31, 23, 59, 59));
    }

    yy = String(yyyy + 49).slice(-2);
    expect(toDate(yy + '1231235959'))
      .toEqual(new Date(yyyy + 49, 11, 31, 23, 59, 59));
    expect(toDate(yy + '1231235960'))
      .toEqual(new Date(yyyy + 50, 0, 1, 0, 0, 0));

    yy = String(yyyy + 50).slice(-2);
    expect(toDate(yy + '0101000000'))
      .toEqual(new Date(yyyy - 50, 0, 1, 0, 0, 0));
    expect(toDate(yy + '0100235959'))
      .toEqual(new Date(yyyy - 51, 11,31, 23, 59, 59));

    expect(toDate('000000000000')).toNotEqual(null);
    expect(toDate('999999999999')).toNotEqual(null);
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('17')).toEqual(null);
    expect(toDate('1709')).toEqual(null);
    expect(toDate('17093')).toEqual(null);
    expect(toDate('17093012')).toEqual(null);
    expect(toDate('1709301234')).toEqual(null);
    expect(toDate('17093012345')).toEqual(null);
    expect(toDate('1709301234567')).toEqual(null);
    expect(toDate('20170930123456')).toEqual(null);
    expect(toDate('17-09-30 12:34:56')).toEqual(null);
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

})();
(function(){
'use strict';




var toDate = fav.type.toDate['YYYYMMDD'];

describe('fav.type.toDate["YYYYMMDD"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923')).toEqual(new Date(2017, 8, 23));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('201709')).toEqual(null);
    expect(toDate('2017093')).toEqual(null);
    expect(toDate('201709301')).toEqual(null);
    expect(toDate('170930')).toEqual(null);
    expect(toDate('2017-09-30')).toEqual(null);
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

})();
(function(){
'use strict';




var toDate = fav.type.toDate['YYYYMMDDHHmmss'];

describe('fav.type.toDate["YYYYMMDDHHmmss"]', function() {

  it('Should return a date object if value is normal', function() {
    expect(toDate('20170923112233'))
      .toEqual(new Date(2017, 8, 23, 11, 22, 33));
  });

  it('Should return null if value is a illegal string', function() {
    expect(toDate('')).toEqual(null);
    expect(toDate('2017')).toEqual(null);
    expect(toDate('201709')).toEqual(null);
    expect(toDate('2017093')).toEqual(null);
    expect(toDate('2017093011')).toEqual(null);
    expect(toDate('201709301122')).toEqual(null);
    expect(toDate('2017093011223')).toEqual(null);
    expect(toDate('201709301122331')).toEqual(null);
    expect(toDate('170930112233')).toEqual(null);
    expect(toDate('2017-09-30 11:22:33')).toEqual(null);
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

})();
(function(){
'use strict';




var toFiniteNumber = fav.type.toFiniteNumber;

describe('fav.type.toFiniteNumber', function() {

  it('Should return value as it is when value is a finite number', function() {
    expect(toFiniteNumber(0)).toEqual(0);
    expect(toFiniteNumber(1)).toEqual(1);
    expect(toFiniteNumber(-1)).toEqual(-1);
    expect(toFiniteNumber(123456789)).toEqual(123456789);
    expect(toFiniteNumber(-123456789)).toEqual(-123456789);
    expect(toFiniteNumber(Number.MAX_VALUE)).toEqual(Number.MAX_VALUE);
    expect(toFiniteNumber(-Number.MAX_VALUE)).toEqual(-Number.MAX_VALUE);
    expect(toFiniteNumber(0.1234)).toEqual(0.1234);
    expect(toFiniteNumber(-0.1234)).toEqual(-0.1234);
    expect(toFiniteNumber(12345.6789)).toEqual(12345.6789);
    expect(toFiniteNumber(-12345.6789)).toEqual(-12345.6789);
    expect(toFiniteNumber(Number.MIN_VALUE)).toEqual(Number.MIN_VALUE);
    expect(toFiniteNumber(-Number.MIN_VALUE)).toEqual(-Number.MIN_VALUE);
  });

  it('Should return a finite number when value is a numeric string',
  function() {
    expect(toFiniteNumber('0')).toEqual(0);
    expect(toFiniteNumber('1')).toEqual(1);
    expect(toFiniteNumber('-1')).toEqual(-1);
    expect(toFiniteNumber('123456789')).toEqual(123456789);
    expect(toFiniteNumber('-123456789')).toEqual(-123456789);
    expect(toFiniteNumber(String(Number.MAX_VALUE)))
      .toEqual(Number.MAX_VALUE);
    expect(toFiniteNumber(String(-Number.MAX_VALUE)))
      .toEqual(-Number.MAX_VALUE);
    expect(toFiniteNumber('0.1234')).toEqual(0.1234);
    expect(toFiniteNumber('-0.1234')).toEqual(-0.1234);
    expect(toFiniteNumber('12345.6789')).toEqual(12345.6789);
    expect(toFiniteNumber('-12345.6789')).toEqual(-12345.6789);
    expect(toFiniteNumber(String(Number.MIN_VALUE)))
      .toEqual(Number.MIN_VALUE);
    expect(toFiniteNumber(String(-Number.MIN_VALUE)))
      .toEqual(-Number.MIN_VALUE);
  });

  it('Should return NaN when value is a number but not finite', function() {
    expect(toFiniteNumber(NaN)).toEqual(NaN);
    expect(toFiniteNumber(Number.POSITIVE_INFINITY)).toEqual(NaN);
    expect(toFiniteNumber(Number.NEGATIVE_INFINITY)).toEqual(NaN);
  });

  it('Should return NaN when value is a string but not numeric', function() {
    expect(toFiniteNumber('')).toEqual(NaN);
    expect(toFiniteNumber('abc')).toEqual(NaN);
    expect(toFiniteNumber('１２３４５')).toEqual(NaN);
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toFiniteNumber(undefined)).toEqual(NaN);
    expect(toFiniteNumber(null)).toEqual(NaN);
    expect(toFiniteNumber(true)).toEqual(NaN);
    expect(toFiniteNumber(false)).toEqual(NaN);
    expect(toFiniteNumber([])).toEqual(NaN);
    expect(toFiniteNumber([1,2,3])).toEqual(NaN);
    expect(toFiniteNumber({})).toEqual(NaN);
    expect(toFiniteNumber({ a: 0 })).toEqual(NaN);
    expect(toFiniteNumber(/1/g)).toEqual(NaN);
    expect(toFiniteNumber(new RegExp('1', 'g'))).toEqual(NaN);
    expect(toFiniteNumber(function() {})).toEqual(NaN);
    expect(toFiniteNumber(new Date())).toEqual(NaN);
    expect(toFiniteNumber(new Error())).toEqual(NaN);

    if (typeof Symbol === 'function') {
      expect(toFiniteNumber(Symbol(123))).toEqual(NaN);
    }
  });
});

})();
(function(){
'use strict';




var toInteger = fav.type.toInteger;

describe('fav.type.toInteger', function() {

  it('Should return an integer when value is an integer', function() {
    expect(toInteger(0)).toEqual(0);
    expect(toInteger(1)).toEqual(1);
    expect(toInteger(-1)).toEqual(-1);
    expect(toInteger(1234567890)).toEqual(1234567890);
    expect(toInteger(-1234567890)).toEqual(-1234567890);
    expect(toInteger(Number.MAX_VALUE)).toEqual(Number.MAX_VALUE);
    expect(toInteger(-Number.MAX_VALUE)).toEqual(-Number.MAX_VALUE);
  });

  it('Should return an integer when value is a finite number', function() {
    expect(toInteger(0.1234)).toEqual(0);
    expect(toInteger(-0.1234)).toEqual(0);
    expect(toInteger(12345.67890)).toEqual(12345);
    expect(toInteger(-12345.67890)).toEqual(-12345);
    expect(toInteger(Number.MIN_VALUE)).toEqual(0);
    expect(toInteger(-Number.MIN_VALUE)).toEqual(0);
  });

  it('Should return NaN when value is not a finite number', function() {
    expect(toInteger(NaN)).toEqual(NaN);;
    expect(toInteger(Number.POSITIVE_INFINITY)).toEqual(NaN);
    expect(toInteger(Number.NEGATIVE_INFINITY)).toEqual(NaN);
  });

  it('Should return an integer when value is a numeric string', function() {
    expect(toInteger('0')).toEqual('0');
    expect(toInteger('1')).toEqual('1');
    expect(toInteger('-1')).toEqual('-1');
    expect(toInteger('1234567890')).toEqual('1234567890');
    expect(toInteger('-1234567890')).toEqual('-1234567890');
    expect(toInteger(String(Number.MAX_VALUE))).toEqual(Number.MAX_VALUE);
    expect(toInteger(String(-Number.MAX_VALUE))).toEqual(-Number.MAX_VALUE);
    expect(toInteger('0.1234')).toEqual(0);
    expect(toInteger('-0.1234')).toEqual(0);
    expect(toInteger('12345.67890')).toEqual(12345);
    expect(toInteger('-12345.67890')).toEqual(-12345);
    expect(toInteger(String(Number.MIN_VALUE))).toEqual(0);
    expect(toInteger(String(-Number.MIN_VALUE))).toEqual(0);
  });

  it('Should return NaN when value is a non-numeric string', function() {
    expect(toInteger('')).toEqual(NaN);
    expect(toInteger('abc')).toEqual(NaN);
    expect(toInteger('１２３４５')).toEqual(NaN);
  });

  it('Should return NaN when value is neither a number nor a string',
  function() {
    expect(toInteger(undefined)).toEqual(NaN);
    expect(toInteger(null)).toEqual(NaN);
    expect(toInteger(true)).toEqual(NaN);
    expect(toInteger(false)).toEqual(NaN);
    expect(toInteger([])).toEqual(NaN);
    expect(toInteger([1,2,3])).toEqual(NaN);
    expect(toInteger({})).toEqual(NaN);
    expect(toInteger({ a: 0 })).toEqual(NaN);
    expect(toInteger(/1/g)).toEqual(NaN);
    expect(toInteger(new RegExp('a', 'g'))).toEqual(NaN);
    expect(toInteger(function() {})).toEqual(NaN);
    expect(toInteger(new Date())).toEqual(NaN);
    expect(toInteger(new Error())).toEqual(NaN);

    if (typeof Symbol === 'function') {
      expect(toInteger(Symbol(123))).toEqual(NaN);
    }
  });
});


})();
