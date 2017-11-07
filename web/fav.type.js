(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).type = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var formatDate = require('@fav/type.format-date');
var formatNumber = require('@fav/type.format-number');
var isArray = require('@fav/type.is-array');
var isEmpty = require('@fav/type.is-empty');
var isFiniteNumber = require('@fav/type.is-finite-number');
var isFunction = require('@fav/type.is-function');
var isInteger = require('@fav/type.is-integer');
var isPlainObject = require('@fav/type.is-plain-object');
var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');
var toDate = require('@fav/type.to-date');
var toInteger = require('@fav/type.to-integer');
var toFiniteNumber = require('@fav/type.to-finite-number');

var type = {};

Object.defineProperties(type, {
  formatDate: { enumerable: true, value: formatDate },
  formatNumber: { enumerable: true, value: formatNumber },
  isArray: { enumerable: true, value: isArray },
  isEmpty: { enumerable: true, value: isEmpty },
  isFiniteNumber: { enumerable: true, value: isFiniteNumber },
  isFunction: { enumerable: true, value: isFunction },
  isInteger: { enumerable: true, value: isInteger },
  isPlainObject: { enumerable: true, value: isPlainObject },
  isString: { enumerable: true, value: isString },
  isValidDate: { enumerable: true, value: isValidDate },
  toDate: { enumerable: true, value: toDate },
  toFiniteNumber: { enumerable: true, value: toFiniteNumber },
  toInteger: { enumerable: true, value: toInteger },
});

module.exports = type;

},{"@fav/type.format-date":5,"@fav/type.format-number":16,"@fav/type.is-array":26,"@fav/type.is-empty":27,"@fav/type.is-finite-number":30,"@fav/type.is-function":31,"@fav/type.is-integer":32,"@fav/type.is-plain-object":33,"@fav/type.is-string":34,"@fav/type.is-valid-date":35,"@fav/type.to-date":36,"@fav/type.to-finite-number":51,"@fav/type.to-integer":54}],2:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function padLeft(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var pads = repeat(padding, padsNum).slice(0, padsLen);

  return pads + source;
}

module.exports = padLeft;

},{"@fav/text.repeat":4}],3:[function(require,module,exports){
'use strict';

var repeat = require('@fav/text.repeat');

function padRight(source, length, padding) {
  if (!length || length <= source.length) {
    return source;
  }

  if (!padding) {
    padding = ' ';
  }

  var padsLen = length - source.length;
  var padsNum = Math.ceil(padsLen / padding.length);
  var pads = repeat(padding, padsNum).slice(0, padsLen);

  return source + pads;
}

module.exports = padRight;

},{"@fav/text.repeat":4}],4:[function(require,module,exports){
'use strict';

function repeat(source, ntimes) {
  if (ntimes < 1) {
    return '';
  }

  var unitlen = source.length;
  var halftime = Math.ceil(ntimes / 2);

  for (var i = 1; i < halftime; i += i) {
    source += source;
  }

  return source + source.slice(0, (ntimes - i) * unitlen);;
}

module.exports = repeat;

},{}],5:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isFunction = require('@fav/type.is-function');
var isValidDate = require('@fav/type.is-valid-date');

var yearFormatter = require('./lib/year-formatter');
var monthFormatter = require('./lib/month-formatter');
var dayFormatter = require('./lib/day-formatter');
var hourFormatter = require('./lib/hour-formatter');
var minuteFormatter = require('./lib/minute-formatter');
var secondFormatter = require('./lib/second-formatter');
var millisecondFormatter = require('./lib/millisecond-formatter');
var weekFormatter = require('./lib/week-formatter');

function formatDate(format) {
  if (!isString(format)) {
    return noop;
  }

  var fmts = [];
  var arr = format.split(/(Y+|y+|Mmm|Month|M+|D+|H+|m+|s+|S+|Www|Week)/);
  for (var i = 0; i < arr.length; i++) {
    var elm = arr[i];

    switch (elm[0]) {
      case 'Y': {
        fmts.push(yearFormatter(elm));
        break;
      }
      case 'y': {
        fmts.push(yearFormatter.yearsOfCentury(elm));
        break;
      }
      case 'M': {
        switch (elm) {
          case 'Month': {
            fmts.push(monthFormatter.fullname);
            break;
          }
          case 'Mmm': {
            fmts.push(monthFormatter.abbreviation);
            break;
          }
          default: {
            fmts.push(monthFormatter(elm));
            break;
          }
        }
        break;
      }
      case 'D': {
        fmts.push(dayFormatter(elm));
        break;
      }
      case 'H': {
        fmts.push(hourFormatter(elm));
        break;
      }
      case 'm': {
        fmts.push(minuteFormatter(elm));
        break;
      }
      case 's': {
        fmts.push(secondFormatter(elm));
        break;
      }
      case 'S': {
        fmts.push(millisecondFormatter(elm));
        break;
      }
      case 'W': {
        switch (elm) {
          case 'Week': {
            fmts.push(weekFormatter.fullname);
            break;
          }
          default: {
            fmts.push(weekFormatter.abbreviation);
            break;
          }
        }
        break;
      }
      default: {
        fmts.push(elm);
      }
    }
  }
  
  return function(date) {
    if (!isValidDate(date)) {
      return '';
    }

    var str = '';
    for (var i = 0; i < fmts.length; i++) {
      var fmtElm = fmts[i];
      if (isFunction(fmtElm)) {
        str += fmtElm(date);
      } else {
        str += fmtElm;
      }
    }
    return str;
  };
}

function noop() {
  return '';
};

module.exports = formatDate;

},{"./lib/day-formatter":6,"./lib/hour-formatter":7,"./lib/millisecond-formatter":8,"./lib/minute-formatter":9,"./lib/month-formatter":10,"./lib/second-formatter":11,"./lib/week-formatter":12,"./lib/year-formatter":13,"@fav/type.is-function":31,"@fav/type.is-string":14,"@fav/type.is-valid-date":15}],6:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function dayFormatter(format) {
  return function(date) {
    return padLeft(String(date.getDate()), format.length, '0');
  };
}

module.exports = dayFormatter;

},{"@fav/text.pad-left":2}],7:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function hourFormatter(format) {
  return function(date) {
    return padLeft(String(date.getHours()), format.length, '0');
  };
}

module.exports = hourFormatter;

},{"@fav/text.pad-left":2}],8:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function millisecondFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMilliseconds()), format.length, '0');
  };
}

module.exports = millisecondFormatter;

},{"@fav/text.pad-left":2}],9:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function minuteFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMinutes()), format.length, '0');
  };
}

module.exports = minuteFormatter;

},{"@fav/text.pad-left":2}],10:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function monthFormatter(format) {
  return function(date) {
    return padLeft(String(date.getMonth() + 1), format.length, '0');
  };
}

function getFullname(date) {
  switch (date.getMonth()) {
    case 0: {
      return 'January';
    }
    case 1: {
      return 'February';
    }
    case 2: {
      return 'March';
    }
    case 3: {
      return 'April';
    }
    case 4: {
      return 'May';
    }
    case 5: {
      return 'June';
    }
    case 6: {
      return 'July';
    }
    case 7: {
      return 'August';
    }
    case 8: {
      return 'September';
    }
    case 9: {
      return 'October';
    }
    case 10: {
      return 'November';
    }
    case 11: {
      return 'December';
    }
  }
}

function getAbbreviation(date) {
  return getFullname(date).slice(0, 3);
}

monthFormatter.fullname = getFullname;
monthFormatter.abbreviation = getAbbreviation;

module.exports = monthFormatter;

},{"@fav/text.pad-left":2}],11:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function secondFormatter(format) {
  return function(date) {
    return padLeft(String(date.getSeconds()), format.length, '0');
  };
}

module.exports = secondFormatter;

},{"@fav/text.pad-left":2}],12:[function(require,module,exports){
'use strict';

function getFullname(date) {
  switch (date.getDay()) {
    case 0: {
      return 'Sunday';
    }
    case 1: {
      return 'Monday';
    }
    case 2: {
      return 'Tuesday';
    }
    case 3: {
      return 'Wednesday';
    }
    case 4: {
      return 'Thursday';
    }
    case 5: {
      return 'Friday';
    }
    case 6: {
      return 'Saturday';
    }
  }
}

function getAbbreviation(date) {
  return getFullname(date).slice(0, 3);
}

var weekFormatter = {
  fullname: getFullname,
  abbreviation: getAbbreviation,
};

module.exports = weekFormatter;

},{}],13:[function(require,module,exports){
'use strict';

var padLeft = require('@fav/text.pad-left');

function yearFormatter(format) {
  return function(date) {
    var year = date.getFullYear();
    var sign = (year < 0) ? '-' : '';
    return sign + padLeft(String(Math.abs(year)), format.length, '0');
  };
}

function yearsOfCentury(format) {
  return function(date) {
    var year = date.getFullYear();
    var sign = (year < 0) ? '-' : '';
    return sign + padLeft(String(Math.abs(year % 100)), format.length, '0');
  };
}

yearFormatter.yearsOfCentury = yearsOfCentury;

module.exports = yearFormatter;

},{"@fav/text.pad-left":2}],14:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

function isNotString(value) {
  return !isString(value);
}

Object.defineProperty(isString, 'not', {
  enumerable: true,
  value: isNotString,
});

module.exports = isString;

},{}],15:[function(require,module,exports){
'use strict';

function isValidDate(value) {
  if (!(value instanceof Date)) {
    return false;
  }

  var time = value.getTime();
  return time === time;
}

function isNotValidDate(value) {
  return !isValidDate(value);
}

Object.defineProperty(isValidDate, 'not', {
  enumerable: true,
  value: isNotValidDate,
});

module.exports = isValidDate;

},{}],16:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isFunction = require('@fav/type.is-function');
var isFiniteNumber = require('@fav/type.is-finite-number');
var toInteger = require('@fav/type.to-integer');

var parseFormat = require('./lib/parse-format');
var signFormatter = require('./lib/sign-formatter');
var integerFormatter = require('./lib/integer-formatter');
var decimalFormatter = require('./lib/decimal-formatter');
var formatEmpty = require('./lib/format-empty');

function formatNumber(format, rounding) {
  if (!isString(format)) {
    return formatEmpty;
  }

  if (!isFunction(rounding)) {
    rounding = Math.round;
  }

  var parsed = parseFormat(format);
  if (!parsed) {
    return formatEmpty;
  }

  var formatSign = signFormatter(parsed[1]);

  var formatDecimal, intRounding
  if (parsed[5]) {
    formatDecimal = decimalFormatter(parsed[5], parsed[6].length, rounding);
    intRounding = toInteger;
  } else {
    intRounding = rounding;
  }

  var formatInteger;
  if (parsed[2]) {
    formatInteger = integerFormatter(parsed[3], parsed[4].length, intRounding);
  } else {
    formatInteger = formatEmpty;
  }

  return function(num) {
    if (!isFiniteNumber(num)) {
      return '';
    }

    var sign = formatSign(num);

    if (!formatDecimal) {
      return sign + formatInteger(num, 0);
    }

    var decimal = formatDecimal(num);
    var integer = formatInteger(num, decimal.roundUp);
    return sign + integer + decimal.text;
  };
}

module.exports = formatNumber;

},{"./lib/decimal-formatter":17,"./lib/format-empty":18,"./lib/integer-formatter":19,"./lib/parse-format":20,"./lib/sign-formatter":21,"@fav/type.is-finite-number":30,"@fav/type.is-function":31,"@fav/type.is-string":22,"@fav/type.to-integer":23}],17:[function(require,module,exports){
'use strict';

var padRight = require('@fav/text.pad-right');

function decimalFormatter(decimalPoint, decimalLen, rounding) {
  return function(num) {
    var decimalPart = String(Math.abs(num)).split('.')[1] || '';
    if (!decimalLen) {
      if (!decimalPart) {
        return { roundUp: 0, text: '' };
      }
      return { roundUp: 0, text: decimalPoint + decimalPart };
    }

    if (decimalPart.length == decimalLen) {
      return { roundUp: 0, text: decimalPoint + decimalPart };
    }

    if (decimalPart.length < decimalLen) {
      return {
        roundUp: 0,
        text: decimalPoint + padRight(decimalPart, decimalLen, '0'),
      };
    }

    var s = decimalPart.slice(0, decimalLen) + '.' + decimalPart[decimalLen];
    if (num < 0) {
      s = '-' + s;
    }
    s = String(Math.abs(rounding(Number(s))));

    if (s.length > decimalLen) {
      return { roundUp: 1, text: decimalPoint + s.slice(-decimalLen) };
    }

    return { roundUp: 0, text: decimalPoint + s };
  };

}

module.exports = decimalFormatter;

},{"@fav/text.pad-right":3}],18:[function(require,module,exports){
'use strict';

function formatEmpty() {
  return '';
}

module.exports = formatEmpty;

},{}],19:[function(require,module,exports){
'use strict';

var formatEmpty = require('./format-empty');

function integerFormatter(sep, place, rounding) {
  return function(num, roundUp) {
    var str = String(Math.abs(rounding(num)) + roundUp);
    if (!sep || !place) {
      return str;
    }

    var ret = str.slice(-place);
    for (var i = str.length - place; i > 0; i -= place) {
      ret = str.slice(Math.max(0, i - place), i) + sep + ret;
    }
    return ret;
  };
}

module.exports = integerFormatter;

},{"./format-empty":18}],20:[function(require,module,exports){
'use strict';

function parseFormat(format) {
  var parsed = /^([\+\-]?)(9?)([^0-9]*)(9*)([^0-9]*)(0*)$/.exec(format); 
  if (!parsed) {
    return null;
  }
  if (parsed[3] && !parsed[4]) {
    // There is no case because parsed[3] and parsed[5] are combined
    // when parsed[4] is none.
    // if (parsed[5]) { return null; }

    parsed[5] = parsed[3];
    parsed[3] = '';
  }
  if (parsed[3] && !parsed[2]) {
    return null;
  }
  if (parsed[4] && (!parsed[2] || !parsed[3])) {
    return null;
  }
  return parsed;
}

module.exports = parseFormat;

},{}],21:[function(require,module,exports){
'use strict';

var formatEmpty = require('./format-empty');

function signFormatter(sign) {
  switch (sign) {
    case '+': {
      return plusMinus;
    }
    case '-': {
      return minusOnly;
    }
    default: {
      return formatEmpty;
    }
  }
}

function plusMinus(num) {
  return num < 0 ? '-' : '+';
}

function minusOnly(num) {
  return num < 0 ? '-' : '';
}

module.exports = signFormatter;

},{"./format-empty":18}],22:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"dup":14}],23:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isFiniteNumber = require('@fav/type.is-finite-number');

function toInteger(value) {
  if (isString(value)) {
    value = parseFloat(value);
  }

  if (isFiniteNumber(value)) {
    return value < 0 ? Math.ceil(value) : Math.floor(value);
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toInteger;

},{"@fav/type.is-finite-number":24,"@fav/type.is-string":25}],24:[function(require,module,exports){
'use strict';

function isFiniteNumber(value) {
  if (typeof value === 'number') {
    return isFinite(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return isFinite(value);
  }
  return false;
}

module.exports = isFiniteNumber;

},{}],25:[function(require,module,exports){
'use strict';

function isString(value) {
  if (typeof value === 'string') {
    return true;
  }
  if (Object.prototype.toString.call(value) === '[object String]') {
    return true;
  }
  return false;
}

module.exports = isString;

},{}],26:[function(require,module,exports){
'use strict';

function isArray(value) {
  return Array.isArray(value);
}

function isNotArray(value) {
  return !Array.isArray(value);
}

Object.defineProperty(isArray, 'not', {
  enumerable: true,
  value: isNotArray,
});

module.exports = isArray;

},{}],27:[function(require,module,exports){
'use strict';

var isArray = require('@fav/type.is-array');
var isPlainObject = require('@fav/type.is-plain-object');

function isEmpty(value) {
  if (value === undefined || value === null) {
    return true;
  }

  if (isArray(value) && value.length === 0) {
    return true;
  }

  if (isPlainObject(value)) {
    for (var key in value) {
      return false;
    }
    return true;
  }

  /* istanbul ignore next */
  switch (typeof HTMLCollection) {
    case 'object': // PhantomJS
    case 'function': {
      if(value instanceof HTMLCollection) {
        return value.length === 0;
      }
    }
  }

  /* istanbul ignore next */
  switch (typeof NodeList) {
    case 'object': // PhantomJS
    case 'function': {
      if (value instanceof NodeList) {
        return value.length === 0;
      }
    }
  }

  return false;
}

function isNotEmpty(value) {
  return !isEmpty(value);
}

Object.defineProperty(isEmpty, 'not', {
  enumerable: true,
  value: isNotEmpty,
});

module.exports = isEmpty;

},{"@fav/type.is-array":28,"@fav/type.is-plain-object":29}],28:[function(require,module,exports){
'use strict';

function isArray(value) {
  return Array.isArray(value);
}

module.exports = isArray;

},{}],29:[function(require,module,exports){
'use strict';

function isPlainObject(value) {
  if (typeof value !== 'object') {
    return false;
  }

  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  switch (Object.getPrototypeOf(value)) {
    case Object.prototype: {
      return true;
    }
    case null: {
      return true;
    }
    default: {
      return false;
    }
  }
}

module.exports = isPlainObject;

},{}],30:[function(require,module,exports){
'use strict';

function isFiniteNumber(value) {
  if (typeof value === 'number') {
    return isFinite(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return isFinite(value);
  }
  return false;
}

function isNotFiniteNumber(value) {
  return !isFiniteNumber(value);
}

Object.defineProperty(isFiniteNumber, 'not', {
  enumerable: true,
  value: isNotFiniteNumber,
});

module.exports = isFiniteNumber;

},{}],31:[function(require,module,exports){
'use strict';

function isFunction(value) {
  return (typeof value === 'function');
}

function isNotFunction(value) {
  return (typeof value !== 'function');
}

Object.defineProperty(isFunction, 'not', {
  enumerable: true,
  value: isNotFunction,
});

module.exports = isFunction;

},{}],32:[function(require,module,exports){
'use strict';

function isInteger(value) {
  if (typeof value === 'number') {
    return checkInteger(value);
  }
  if (Object.prototype.toString.call(value) === '[object Number]') {
    return checkInteger(Number(value));
  }
  return false;
}

function checkInteger(num) {
  /* istanbul ignore if */
  if (typeof Number.isInteger !== 'function') {
    if (!isFinite(num)) {
      return false;
    }
    return (num < 0 ? Math.ceil(num) : Math.floor(num)) === num;
  }
  return Number.isInteger(num);
}

function isNotInteger(value) {
  return !isInteger(value);
}

Object.defineProperty(isInteger, 'not', {
  enumerable: true,
  value: isNotInteger,
});

module.exports = isInteger;

},{}],33:[function(require,module,exports){
'use strict';

function isPlainObject(value) {
  if (typeof value !== 'object') {
    return false;
  }

  if (Object.prototype.toString.call(value) !== '[object Object]') {
    return false;
  }

  switch (Object.getPrototypeOf(value)) {
    case Object.prototype: {
      return true;
    }
    case null: {
      return true;
    }
    default: {
      return false;
    }
  }
}

function isNotPlainObject(value) {
  return !isPlainObject(value);
}

Object.defineProperty(isPlainObject, 'not', {
  enumerable: true,
  value: isNotPlainObject,
});

module.exports = isPlainObject;

},{}],34:[function(require,module,exports){
arguments[4][14][0].apply(exports,arguments)
},{"dup":14}],35:[function(require,module,exports){
arguments[4][15][0].apply(exports,arguments)
},{"dup":15}],36:[function(require,module,exports){
'use strict';

var newDate = require('./lib/new-date');
var fromHyphenedYmd = require('./lib/from-hyphened-ymd');
var fromHyphenedYmdAndHms = require('./lib/from-hyphened-ymd-and-hms');
var fromSlashedYmd = require('./lib/from-slashed-ymd');
var fromSlashedYmdAndHms = require('./lib/from-slashed-ymd-and-hms');
var fromYymmdd = require('./lib/from-yymmdd');
var fromYyyymmdd = require('./lib/from-yyyymmdd');
var fromYymmddhhmmss = require('./lib/from-yymmddhhmmss');
var fromYyyymmddhhmmss = require('./lib/from-yyyymmddhhmmss');
var fromRfc2822 = require('./lib/from-rfc2822');
var fromRfc3339 = require('./lib/from-rfc3339');
var fromIso8601 = require('./lib/from-iso8601');

var toDate = newDate;

Object.defineProperties(toDate, {
  'Y-M-D': { enumerable: true, value: fromHyphenedYmd },
  'Y-M-D H:m:s': { enumerable: true, value: fromHyphenedYmdAndHms },
  'Y/M/D': { enumerable: true, value: fromSlashedYmd },
  'Y/M/D H:m:s': { enumerable: true, value: fromSlashedYmdAndHms },
  'YYMMDD': { enumerable: true, value: fromYymmdd },
  'YYYYMMDD': { enumerable: true, value: fromYyyymmdd },
  'YYMMDDHHmmss': { enumerable: true, value: fromYymmddhhmmss },
  'YYYYMMDDHHmmss': { enumerable: true, value: fromYyyymmddhhmmss },
  'RFC2822': { enumerable: true, value: fromRfc2822 },
  'RFC3339': { enumerable: true, value: fromRfc3339 },
  'ISO8601': { enumerable: true, value: fromIso8601 },
});

module.exports = toDate;

},{"./lib/from-hyphened-ymd":38,"./lib/from-hyphened-ymd-and-hms":37,"./lib/from-iso8601":39,"./lib/from-rfc2822":40,"./lib/from-rfc3339":41,"./lib/from-slashed-ymd":43,"./lib/from-slashed-ymd-and-hms":42,"./lib/from-yymmdd":44,"./lib/from-yymmddhhmmss":45,"./lib/from-yyyymmdd":46,"./lib/from-yyyymmddhhmmss":47,"./lib/new-date":48}],37:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromHyphenedYmdAndHms(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([\+\-]?[0-9]+)-([0-9]+)-([0-9]+)\s+([0-9]+):([0-9]+):([0-9]+)(\.[0-9]+){0,1}$/.exec(text);
  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);
  var hour = parseInt(result[4], 10);
  var minute = parseInt(result[5], 10);
  var second = parseInt(result[6], 10);

  var millis;
  if (result[7]) {
    millis = parseInt((result[7].slice(1) + '000').slice(0, 3), 10);
  } else {
    millis = 0;
  }

  var date = newDate(year, month - 1, day, hour, minute, second, millis);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmdAndHms;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],38:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromHyphenedYmd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([\+\-]?[0-9]+)-([0-9]+)-([0-9]+)$/.exec(text);
  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var date = newDate(year, month - 1, day);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmd;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],39:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromIso8601(text) {
  if (!isString(text)) {
    return null;
  }

  var result;

  result = fromExtendedCalendarDate(text);
  if (result === result) {
    return result;
  }

  result = fromExtendedOrdinalDate(text);
  if (result === result) {
    return result;
  }

  result = fromExtendedWeekDate(text);
  if (result === result) {
    return result;
  }

  result = fromBasicCalendarDate(text);
  if (result === result) {
    return result;
  }

  result = fromBasicOrdinalDate(text);
  if (result === result) {
    return result;
  }

  result = fromBasicWeekDate(text);
  if (result === result) {
    return result;
  }

  return null;
}

/* time = [hour, minute, second], zone = [zone, sign, hour, minute] */
function parseBasicZone(time, zone) {
  var tz = newDate().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;

  time[0] -= tzHour;
  time[1] -= tzMinute;

  if (zone[0] !== 'Z') {
    var zSign = (zone[1] === '-') ? -1 : 1;
    var zHour = parseInt(zone[2], 10) * zSign;
    var zMinute = zone[3] ? parseInt(zone[3], 10) * zSign : 0; 

    time[0] -= zHour;
    time[1] -= zMinute;
  }
}
function parseExtendedZone(time, zone) {
  var tz = newDate().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;

  time[0] -= tzHour;
  time[1] -= tzMinute;

  if (zone[0] !== 'Z') {
    var zSign = (zone[1] === '-') ? -1 : 1;
    var zHour = parseInt(zone[2], 10) * zSign;
    var zMinute = zone[3] ? parseInt(zone[3].slice(1), 10) * zSign : 0; 

    time[0] -= zHour;
    time[1] -= zMinute;
  }
}

function fromExtendedCalendarDate(text) {
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})-([0-9]{2})-([0-9]{2})(T([0-9]{2}):([0-9]{2}):([0-9]{2})(Z|([\+\-])([0-9]{2})(:[0-9]{2})?|))?$/.exec(text);
  if (!result) {
    return NaN;
  }

  var ymd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseExtendedZone(tms, result.slice(8));
    }
  }

  var date = newDate(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromExtendedOrdinalDate(text) {
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})-([0-9]{3})(T([0-9]{2}):([0-9]{2}):([0-9]{2})(Z|([\+\-])([0-9]{2})(:[0-9]{2})?|))?$/.exec(text);
  if (!result) {
    return NaN;
  }

  var yd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
  ];

  var tms = [0, 0, 0];
  if (result[3]) {
    tms[0] = parseInt(result[4], 10);
    tms[1] = parseInt(result[5], 10);
    tms[2] = parseInt(result[6], 10);

    if (result[7]) {
      parseExtendedZone(tms, result.slice(7));
    }
  }

  var date = newDate(yd[0], 0, yd[1], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromExtendedWeekDate(text) {
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})-W([0-9]{2})-([0-9]{1})(T([0-9]{2}):([0-9]{2}):([0-9]{2})(Z|([\+\-])([0-9]{2})(:[0-9]{2})?|))?$/.exec(text);
  if (!result) {
    return NaN;
  }

  var ywd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseExtendedZone(tms, result.slice(8));
    }
  }

  var firstWeek = newDate(ywd[0], 0, 1).getDay();
  var day = (ywd[1] - 1) * 7 + ywd[2] - firstWeek + 1;

  var date = newDate(ywd[0], 0, day, tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromBasicCalendarDate(text) {
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})([0-9]{2})([0-9]{2})(T([0-9]{2})([0-9]{2})([0-9]{2})(Z|([\+\-])([0-9]{2})([0-9]{2})?|))?$/.exec(text);
  if (!result) {
    return NaN;
  }

  var ymd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseBasicZone(tms, result.slice(8));
    }
  }

  var date = newDate(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromBasicOrdinalDate(text) {
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})([0-9]{3})(T([0-9]{2})([0-9]{2})([0-9]{2})(Z|([\+\-])([0-9]{2})([0-9]{2})?|))?$/.exec(text);
  if (!result) {
    return NaN;
  }

  var yd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
  ];

  var tms = [0, 0, 0];
  if (result[3]) {
    tms[0] = parseInt(result[4], 10);
    tms[1] = parseInt(result[5], 10);
    tms[2] = parseInt(result[6], 10);

    if (result[7]) {
      parseBasicZone(tms, result.slice(7));
    }
  }

  var date = newDate(yd[0], 0, yd[1], tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

function fromBasicWeekDate(text) {
  var result = /^([\+\-][0-9]{4,}|[0-9]{4})W([0-9]{2})([0-9]{1})(T([0-9]{2})([0-9]{2})([0-9]{2})(Z|([\+\-])([0-9]{2})([0-9]{2})?|))?$/.exec(text);
  if (!result) {
    return NaN;
  }

  var ywd = [
    parseInt(result[1], 10),
    parseInt(result[2], 10),
    parseInt(result[3], 10),
  ];

  var tms = [0, 0, 0];
  if (result[4]) {
    tms[0] = parseInt(result[5], 10);
    tms[1] = parseInt(result[6], 10);
    tms[2] = parseInt(result[7], 10);

    if (result[8]) {
      parseBasicZone(tms, result.slice(8));
    }
  }

  var firstWeek = newDate(ywd[0], 0, 1).getDay();
  var day = (ywd[1] - 1) * 7 + ywd[2] - firstWeek + 1;

  var date = newDate(ywd[0], 0, day, tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromIso8601;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],40:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

function fromRfc2822(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^\s*(Mon,\s*|Tue,\s*|Wed,\s*|Thu,\s*|Fri,\s*|Sat,\s*|Sun,\s*|)([0-9]{1,2})\s+(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+([0-9]{4,})\s+([0-9]{2}):([0-9]{2}):([0-9]{2})\s+([\+\-])([0-9]{2})([0-9]{2})\s*$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[4], 10);
  var month;
  switch (result[3]) {
    case 'Jan': { month = 0; break; }
    case 'Feb': { month = 1; break; }
    case 'Mar': { month = 2; break; }
    case 'Apr': { month = 3; break; }
    case 'May': { month = 4; break; }
    case 'Jun': { month = 5; break; }
    case 'Jul': { month = 6; break; }
    case 'Aug': { month = 7; break; }
    case 'Sep': { month = 8; break; }
    case 'Oct': { month = 9; break; }
    case 'Nov': { month = 10; break; }
    case 'Dec': { month = 11; break; }
  }
  var day = parseInt(result[2], 10);
  var hour = parseInt(result[5], 10);
  var minute = parseInt(result[6], 10);
  var second = parseInt(result[7], 10);

  var zoneSign = result[8] === '-' ? -1 : 1;
  var zoneHour = parseInt(result[9], 10) * zoneSign;
  var zoneMinute = parseInt(result[10], 10) * zoneSign;

  var tz = new Date().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;

  hour -= zoneHour + tzHour;
  minute -= zoneMinute + tzMinute;

  var date = new Date(year, month, day, hour, minute, second);
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromRfc2822;

},{"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],41:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromRfc3339(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(\.[0-9]+)?(Z|([\+\-])([0-9]{2}):([0-9]{2}))$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);
  var hour = parseInt(result[4], 10);
  var minute = parseInt(result[5], 10);
  var second = parseInt(result[6], 10);

  var millis;
  if (result[7]) {
    millis = result[7].slice(1, 4);
    millis += '000'.slice(millis.length);
    millis = parseInt(millis, 10);
  } else {
    millis = 0;
  }

  var zone = result[8];

  if (zone !== 'Z') {
    var zoneSign = (result[9] === '-') ? -1 : 1;
    hour -= parseInt(result[10], 10) * zoneSign;
    minute -= parseInt(result[11], 10) * zoneSign;
  }

  var tz = newDate().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;
  hour -= tzHour;
  minute -= tzMinute;

  var date = newDate(year, month - 1, day, hour, minute, second, millis);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromRfc3339;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],42:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromHyphenedYmdAndHms(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([\+\-]?[0-9]+)\/([0-9]+)\/([0-9]+)\s+([0-9]+):([0-9]+):([0-9]+)(\.[0-9]+){0,1}$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);
  var hour = parseInt(result[4], 10);
  var minute = parseInt(result[5], 10);
  var second = parseInt(result[6], 10);

  var millis;
  if (result[7]) {
    millis = parseInt((result[7].slice(1) + '000').slice(0, 3), 10);
  } else {
    millis = 0;
  }

  var date = newDate(year, month - 1, day, hour, minute, second, millis);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmdAndHms;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],43:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromSlashedYmd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([\+\-]?[0-9]+)\/([0-9]+)\/([0-9]+)$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var date = newDate(year, month - 1, day);
  return isValidDate(date) ? date : null;
}

module.exports = fromSlashedYmd;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],44:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYymmdd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{2})([0-9]{2})([0-9]{2})$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var currentYear = newDate().getFullYear();
  year = currentYear - (currentYear % 100) + year;
  if (year >= currentYear + 50) {
    year -= 100;
  }

  var date = newDate(year, month - 1, day);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYymmdd;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],45:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYymmddhhmmss(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);
  var hour = parseInt(result[4], 10);
  var minute = parseInt(result[5], 10);
  var second = parseInt(result[6], 10);

  var currentYear = newDate().getFullYear();
  year = currentYear - (currentYear % 100) + year;
  if (year >= currentYear + 50) {
    year -= 100;
  }

  var date = newDate(year, month - 1, day, hour, minute, second);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYymmddhhmmss;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],46:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYyyymmdd(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{4})([0-9]{2})([0-9]{2})$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);

  var date = newDate(year, month - 1, day);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYyyymmdd;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],47:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

var newDate = require('./new-date');

function fromYyyymmddhhmmss(text) {
  if (!isString(text)) {
    return null;
  }

  var result = /^([0-9]{4})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})([0-9]{2})$/.exec(text);

  if (!result) {
    return null;
  }

  var year = parseInt(result[1], 10);
  var month = parseInt(result[2], 10);
  var day = parseInt(result[3], 10);
  var hour = parseInt(result[4], 10);
  var minute = parseInt(result[5], 10);
  var second = parseInt(result[6], 10);

  var date = newDate(year, month - 1, day, hour, minute, second);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYyyymmddhhmmss;

},{"./new-date":48,"@fav/type.is-string":49,"@fav/type.is-valid-date":50}],48:[function(require,module,exports){
'use strict';

function setDate(now, year, month, day, hour, min, sec, msec) {
  var existsLeadingElements = false;

  if (year != null) {
    existsLeadingElements = true;
  } else {
    year = now.getFullYear();
  }

  if (month != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    month = 0;
  } else {
    month = now.getMonth();
  }

  if (day != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    day = 1;
  } else {
    day = now.getDate();
  }

  if (hour != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    hour = 0;
  } else {
    hour = now.getHours();
  }

  if (min != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    min = 0;
  } else {
    min = now.getMinutes();
  }

  if (sec != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    sec = 0;
  } else {
    sec = now.getSeconds();
  }

  if (msec != null) {
    existsLeadingElements = true;
  } else if (existsLeadingElements) {
    msec = 0;
  } else {
    msec = now.getMilliseconds();
  }

  // Setting day to 2 is intentional.
  // If day is 1, date can become 12/31 by a locale.
  // After this, if month is set to a month which doesn't have 31 day,
  // the month becomes +1 automatically.
  var date = new Date(1900, 0, 2, 0, 0, 0);

  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);
  date.setHours(hour);
  date.setMinutes(min);
  date.setSeconds(sec);
  date.setMilliseconds(msec);
  return date;
}

function newDate(year, month, day, hour, min, sec, msec) {
  return setDate(new Date(), year, month, day, hour, min, sec, msec);
}

newDate.setDate = setDate;

module.exports = newDate;

},{}],49:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],50:[function(require,module,exports){
'use strict';

function isValidDate(value) {
  if (!(value instanceof Date)) {
    return false;
  }

  var time = value.getTime();
  return time === time;
}

module.exports = isValidDate;

},{}],51:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isFiniteNumber = require('@fav/type.is-finite-number');

function toFiniteNumber(value) {
  if (isString(value)) {
    value = parseFloat(value);
  }

  if (isFiniteNumber(value)) {
    return value;
  }

  if (arguments.length > 1) {
    return arguments[1];
  }

  return NaN;
}

module.exports = toFiniteNumber;


},{"@fav/type.is-finite-number":52,"@fav/type.is-string":53}],52:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],53:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}],54:[function(require,module,exports){
arguments[4][23][0].apply(exports,arguments)
},{"@fav/type.is-finite-number":55,"@fav/type.is-string":56,"dup":23}],55:[function(require,module,exports){
arguments[4][24][0].apply(exports,arguments)
},{"dup":24}],56:[function(require,module,exports){
arguments[4][25][0].apply(exports,arguments)
},{"dup":25}]},{},[1])(1)
});