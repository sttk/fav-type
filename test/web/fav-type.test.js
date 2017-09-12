(function(){
'use strict';




var isArray = fav.type.isArray;

describe('fav.type.isArray', function() {

  it('Should return true when value is an array', function() {
    expect(isArray([])).toEqual(true);
    expect(isArray([0, 1, 2])).toEqual(true);
    expect(isArray(new Array('a', 'b'))).toEqual(true);
  });

  it('Should return true when value is not an array', function() {
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





var isPlainObject = fav.type.isPlainObject;

describe('fav.type.isPlainObject', function() {

  it('Should return true when value is a plain object', function() {
    expect(isPlainObject({})).toEqual(true);
    expect(isPlainObject({ a: 1 })).toEqual(true);
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