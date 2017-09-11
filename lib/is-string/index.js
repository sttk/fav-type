'use strict';

function isString(value) {
  switch (typeof value) {
    case 'string': {
      return true;
    }
    case 'object': {
      return Object.prototype.toString.call(value) === '[object String]';
    }
    default: {
      return false;
    }
  }
}

module.exports = isString;
