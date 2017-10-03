# [@fav/type.to-date][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url]

Convert a string in various date format to a date object.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.to-date
```

*When you use npm < 2.7.0 which is not support scoped package, you should install [fav-type][repo-url] from github.*

*When you want to use this on a Web browser, you can install [@fav/type][main-url] from npm and use `fav.type.toDate` in it.*

## Usage

For Node.js, when installing `@fav/type.to-date` from npm:

```js
var toDate = require('@fav/type.to-date');
toDate['Y-M-D']('2017-09-30'); // => new Date(2017, 8, 30)
toDate.YYYYMMDDHHmmss('20170930133000'); // => new Date(2017, 8, 30, 13, 30, 0)
toDate.RFC2822('Sat, 30 Sep 2017 13:30:00 +0900'); // => new Date(2017, 8, 30, 13, 30, 0) at Japan
toDate.RFC3339('20170930T133000Z'); // => new Date(2017, 8, 30, 13, 30, 0) in GMT
toDate.ISO8601('2017W406'); // => new Date(2017, 8, 30)
```

## API

### <u>toDate : object</u>

Is a set of functions to convert a date format string to a date object.

This function set provides functions supporting following date formats:

- [Y-M-D](#hyphened_ymd)
- [Y-M-D H:m:s](#hyphened_ymd_and_hms)
- [Y/M/D](#slashed_ymd)
- [Y/M/D H:m:s](#slashed_ymd_and_hms)
- [YYMMDD](#yymmdd)
- [YYMMDDHHmmss](#yymmddhhmmss)
- [YYYYMMDD](#yyyymmdd)
- [YYYYMMDDHHmmss](#yyyymmddhhmmss)
- [RFC2822](#rfc2822)
- [RFC3339](#rfc3339)
- [ISO8601](#iso8601)


<a name="hyphened_ymd"></a>

#### <u>toDate\['Y-M-D'\](value) : Date</u>

Convert a date format string separated by hyphens to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                  |
|-----------|:------:|----------------------------------------------|
| value     | string | The date format string like: `"2017-09-30"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="hyphened_ymd_and_hms"></a>

#### <u>toDate\['Y-M-D H:m:s'\](value) : Date</u>

Convert a date-time format string separated by hyphens and colons to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                          |
|-----------|:------:|------------------------------------------------------|
| value     | string | The date format string like: `"2017-9-30 1:22:3.4"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="slashed_ymd"></a>

#### <u>toDate\['Y/M/D'\](value) : Date</u>

Convert a date format string separated by slashes to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                   |
|-----------|:------:|-----------------------------------------------|
| value     | string | The date format string like: `"2017/09/30"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="slashed_ymd_and_hms"></a>

#### <u>toDate\['Y/M/D H:m:s'\](value) : Date</u>

Convert a date-time format string separated by slashes and colons to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                           |
|-----------|:------:|-------------------------------------------------------|
| value     | string | The date format string like: `"2017/9/30 1:22:3.45"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="yymmdd"></a>

#### <u>toDate.YYMMDD(value) : Date</u>

Convert a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                              |
|-----------|:------:|------------------------------------------|
| value     | string | The date format string like: `"170930"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

This format can represent a date within the range 100 years centered the current year.
(If the current year is 2017, the range is 1967〜2066).

**Type:** Date


<a name="yymmddhhmmss"></a>

#### <u>toDate.YYMMDDHHmmss(value) : Date</u>

Convert a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                    |
|-----------|:------:|------------------------------------------------|
| value     | string | The date format string like: `"170930010203"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

This format can represent a date within the range 100 years centered the current year.
(If the current year is 2017, the range is 1967〜2066).

**Type:** Date


<a name="yyyymmdd"></a>

#### <u>toDate.YYYYMMDD(value) : Date</u>

Convert a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| value     | string | The date format string like: `"20170930"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="yyyymmddhhmmss"></a>

#### <u>toDate.YYYYMMDDHHmmss(value) : Date</u>

Convert a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                      |
|-----------|:------:|--------------------------------------------------|
| value     | string | The date format string like: `"20170930010203"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="rfc2822"></a>

#### <u>toDate.RFC2822(value) : Date</u>

Convert a date format string according to RFC2822 to a data object.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"Sat, 30 Sep 2017 13:30:00 +0900"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="rfc3339"></a>

#### <u>toDate.RFC3339(value) : Date</u>

Convert a date format string according to RFC3339 to a data object.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"20170930T133000+0900"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="iso8601"></a>

#### <u>toDate.ISO8601(value) : Date</u>

Convert a date format string according to ISO8601 to a data object.

There are many formats in ISO8601: basic/extended, calendar-date/ordinal-date/week-date and expanded/non-expanded, and this function supports all formats of them.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"2017-09-30T13:30:00+09:00"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[npm-img]: https://img.shields.io/badge/npm-v0.6.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.is-valid-date
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[main-url]: https://www.npmjs.com/package/@fav/type

