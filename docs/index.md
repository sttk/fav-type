# [@fav/type][repo-url] ver. 0.7.0 - API document

----

### <u>isArray(value) : boolean</u>

Checks if *value* is an array.

> This function returns false for typed-arrays, e.g. Int16Array.

#### Parameter:

| Parameter |  Type  | Description               |
|-----------|:------:|---------------------------|
| value     | *any*  | The value to be checked.  |

#### Return:

True, if *value* is an array.

**Type:** boolean


----
### <u>isEmpty(value) : boolean</u>

Checks if *value* is empty.

Definition of "empty" is different by data type.

* **undefined:** always empty.
* **null:** always empty.
* **array:** empty if it has no element.
* **plain object:** empty if it has no property. 
* **NodeList:** empty if it has no element.
* **HTMLCollection:** empty if it has no element.
* <i>**others:**</i> always not empty.

> This function always return false for other collections like Map, Set, typed-array and so on, because I think there are few needs to check them without knowing their data types. If data type of a collection is known, its own API to get size of itself should be used.

#### Parameter:

| Parameter |  Type  | Description             |
|-----------|:------:|-------------------------|
| value     | *any*  | The value to be checked |

#### Return:

True, if *value* is empty.

**Type:** boolean


----
### <u>isFiniteNumber(value) : boolean</u>

Checks if *value* is a number, which is neither a positive/negative infinity nor NaN. 

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a finite number.

**Type:** boolean


----
### <u>isFunction(value) : boolean</u>

Checks if *value* is a function.

#### Parameter:

| Parameter |  Type  | Description                 |
|-----------|:------:|-----------------------------|
| value     | *any*  | The value to be checked.    |

#### Return:

True, if *value* is a function.

**Type:** boolean


----
### <u>isInteger(value) : boolean</u>

Checks if *value* is an integer, which has no dicimal place and is neither a positive/negative infinity, nor NaN.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is an integer.

**Type:** boolean


----
### <u>isPlainObject(value) : boolean</u>

Checks if *value* is a plain object.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a plain object.

**Type:** boolean


----
### <u>isString(value) : boolean</u>

Checks if *value* is an string.

#### Parameter:

| Parameter |  Type  | Description               |
|-----------|:------:|---------------------------|
| value     | *any*  | The value to be checked.  |

#### Return:

True, if *value* is a string.

**Type:** boolean


----
### <u>isValidDate(value) : boolean</u>

Checks if *value* is a valid date object.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a valid date.

**Type:** boolean


----
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
| value     | string | The date format string like `"2017-09-30T13:30:00+09:00"` |

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


----
### <u>toFiniteNumber(value): number</u>

Convert a number or a string to a finite number.
If *value* is a floating point number, this function discards decimals.
If *value* is neither a finite number, a numeric string nor other type, this function returns NaN.

#### Parameter:

| Parameter |  Type  | Description                           |
|-----------|:------:|---------------------------------------|
| value     | *any*  | The number or string to be converted. |

#### Returns:

The converted finite number, or NaN if failing to convert.

**Type:** number


----
### <u>toInteger(value [, defaultValue]): number</u>

Convert a number or a string to an integer.
If *value* is a floating point number, this function discard decimals.
If *value* is neither a finite number, a numeric string nor other data type, this function returns NaN or *defaultValue* if it is specified.

#### Parameter:

| Parameter    |  Type  | Description                           |
|--------------|:------:|---------------------------------------|
| value        | *any*  | The number or string to be converted. |
| defaultValue | *any*  | The default value if *value* is invalid. (Optional) |

#### Returns:

The converted integer value. If failing to convert, NaN or *defaultValue* (if specified) is returned. 

**Type:** number


----
[repo-url]: https://github.com/sttk/fav-type/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT

