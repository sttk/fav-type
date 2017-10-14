(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}(g.fav || (g.fav = {})).type = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var isEmpty = require('@fav/type.is-empty');
var isArray = require('@fav/type.is-array');
var isString = require('@fav/type.is-string');
var isFunction = require('@fav/type.is-function');
var isPlainObject = require('@fav/type.is-plain-object');
var isInteger = require('@fav/type.is-integer');
var isFiniteNumber = require('@fav/type.is-finite-number');
var isValidDate = require('@fav/type.is-valid-date');
var toInteger = require('@fav/type.to-integer');
var toFiniteNumber = require('@fav/type.to-finite-number');
var toDate = require('@fav/type.to-date');

var type = {};

Object.defineProperties(type, {
  isEmpty: { enumerable: true, value: isEmpty },
  isArray: { enumerable: true, value: isArray },
  isString: { enumerable: true, value: isString },
  isFunction: { enumerable: true, value: isFunction },
  isPlainObject: { enumerable: true, value: isPlainObject },
  isInteger: { enumerable: true, value: isInteger },
  isFiniteNumber: { enumerable: true, value: isFiniteNumber },
  isValidDate: { enumerable: true, value: isValidDate },
  toInteger: { enumerable: true, value: toInteger },
  toFiniteNumber: { enumerable: true, value: toFiniteNumber },
  toDate: { enumerable: true, value: toDate },
});

module.exports = type;

},{"@fav/type.is-array":2,"@fav/type.is-empty":3,"@fav/type.is-finite-number":4,"@fav/type.is-function":5,"@fav/type.is-integer":6,"@fav/type.is-plain-object":7,"@fav/type.is-string":8,"@fav/type.is-valid-date":9,"@fav/type.to-date":10,"@fav/type.to-finite-number":22,"@fav/type.to-integer":23}],2:[function(require,module,exports){
'use strict';

function isArray(value) {
  return Array.isArray(value);
}

module.exports = isArray;

},{}],3:[function(require,module,exports){
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

module.exports = isEmpty;

},{"@fav/type.is-array":2,"@fav/type.is-plain-object":7}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
'use strict';

function isFunction(value) {
  return (typeof value === 'function');
}

module.exports = isFunction;

},{}],6:[function(require,module,exports){
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

module.exports = isInteger;

},{}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

},{}],9:[function(require,module,exports){
'use strict';

function isValidDate(value) {
  if (!(value instanceof Date)) {
    return false;
  }

  var time = value.getTime();
  return time === time;
}

module.exports = isValidDate;

},{}],10:[function(require,module,exports){
'use strict';

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

var toDate = {};

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

},{"./lib/from-hyphened-ymd":12,"./lib/from-hyphened-ymd-and-hms":11,"./lib/from-iso8601":13,"./lib/from-rfc2822":14,"./lib/from-rfc3339":15,"./lib/from-slashed-ymd":17,"./lib/from-slashed-ymd-and-hms":16,"./lib/from-yymmdd":18,"./lib/from-yymmddhhmmss":19,"./lib/from-yyyymmdd":20,"./lib/from-yyyymmddhhmmss":21}],11:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var date = new Date(year, month - 1, day, hour, minute, second, millis);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmdAndHms;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],12:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var date = new Date(year, month - 1, day);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmd;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],13:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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
  var tz = new Date().getTimezoneOffset();
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
  var tz = new Date().getTimezoneOffset();
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

  var date = new Date(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], tms[2]);
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

  var date = new Date(yd[0], 0, yd[1], tms[0], tms[1], tms[2]);
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

  var firstWeek = new Date(ywd[0], 0, 1).getDay();
  var day = (ywd[1] - 1) * 7 + ywd[2] - firstWeek + 1;

  var date = new Date(ywd[0], 0, day, tms[0], tms[1], tms[2]);
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

  var date = new Date(ymd[0], ymd[1] - 1, ymd[2], tms[0], tms[1], tms[2]);
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

  var date = new Date(yd[0], 0, yd[1], tms[0], tms[1], tms[2]);
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

  var firstWeek = new Date(ywd[0], 0, 1).getDay();
  var day = (ywd[1] - 1) * 7 + ywd[2] - firstWeek + 1;

  var date = new Date(ywd[0], 0, day, tms[0], tms[1], tms[2]);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromIso8601;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],14:[function(require,module,exports){
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

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],15:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var tz = new Date().getTimezoneOffset();
  var tzMinute = tz % 60;
  var tzHour = (tz - tzMinute) / 60;
  hour -= tzHour;
  minute -= tzMinute;

  var date = new Date(year, month - 1, day, hour, minute, second, millis);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromRfc3339;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],16:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var date = new Date(year, month - 1, day, hour, minute, second, millis);
  return isValidDate(date) ? date : null;
}

module.exports = fromHyphenedYmdAndHms;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],17:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var date = new Date(year, month - 1, day);
  return isValidDate(date) ? date : null;
}

module.exports = fromSlashedYmd;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],18:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var currentYear = new Date().getFullYear();
  year = currentYear - (currentYear % 100) + year;
  if (year >= currentYear + 50) {
    year -= 100;
  }

  var date = new Date(year, month - 1, day);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYymmdd;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],19:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var currentYear = new Date().getFullYear();
  year = currentYear - (currentYear % 100) + year;
  if (year >= currentYear + 50) {
    year -= 100;
  }

  var date = new Date(year, month - 1, day, hour, minute, second);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYymmddhhmmss;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],20:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var date = new Date(year, month - 1, day);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYyyymmdd;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],21:[function(require,module,exports){
'use strict';

var isString = require('@fav/type.is-string');
var isValidDate = require('@fav/type.is-valid-date');

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

  var date = new Date(year, month - 1, day, hour, minute, second);
  /* istanbul ignore if */
  if (!isValidDate(date)) {
    return null;
  }
  return date;
}

module.exports = fromYyyymmddhhmmss;

},{"@fav/type.is-string":8,"@fav/type.is-valid-date":9}],22:[function(require,module,exports){
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


},{"@fav/type.is-finite-number":4,"@fav/type.is-string":8}],23:[function(require,module,exports){
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

},{"@fav/type.is-finite-number":4,"@fav/type.is-string":8}]},{},[1])(1)
});