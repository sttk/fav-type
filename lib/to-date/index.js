'use strict';

var fromHyphenedYmd = require('./from-hyphened-ymd');
var fromHyphenedYmdAndHms = require('./from-hyphened-ymd-and-hms');
var fromSlashedYmd = require('./from-slashed-ymd');
var fromSlashedYmdAndHms = require('./from-slashed-ymd-and-hms');
var fromYymmdd = require('./from-yymmdd');
var fromYyyymmdd = require('./from-yyyymmdd');
var fromYymmddhhmmss = require('./from-yymmddhhmmss');
var fromYyyymmddhhmmss = require('./from-yyyymmddhhmmss');
var fromRfc2822 = require('./from-rfc2822');
var fromRfc3339 = require('./from-rfc3339');
var fromIso8601 = require('./from-iso8601');

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
