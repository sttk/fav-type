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
