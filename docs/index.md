# [@fav/type][repo-url] ver. 1.0.2 API document

----

### <u>formatDate(format [, opts]) : function</u>

Creates a date format function which convert a date to a string in the specified format.

Conversion of each element field in *format* can be customized with the parameter *opts*, which is a plain object of which keys are field characters and of which values are converting functions.

#### Parameters:

| Parameter |  Type  | Description                            |
|-----------|:------:|----------------------------------------|
| *format*  | string | A date format string, which consists of the following date element fields. |
| *opts*    | object | A plain object having pairs of a field character and a converting function. |

##### Date element fields:

| Character | Description                | Example                 |
|-----------|----------------------------|-------------------------|
| `'Y'*`    | Full year.                 | `'YYYY' => '2017'`      |
| `'y'*`    | Year of century (0〜±99). | `'yy' => '17'`          |
| `'M'*`    | Month (1〜12)              | `'MM' => '11'`          |
| `'Mmm'`   | Month abbreviation         | `'Mmm' => 'Nov'`        |
| `'Month'` | Month full name            | `'Month' => 'November'`   |
| `'D'*`    | Day of month (1〜31)       | `'DD' => '05'`            |
| `'H'*`    | Hours (0〜23)              | `'HH' => '14'`            |
| `'m'*`    | Minutes (0〜59)            | `'mm' => '45'`            |
| `'s'*`    | Seconds (0〜59)            | `'ss' => '06'`            |
| `'S'*`    | Hours (0〜59)              | `'SSS' => '023'`          |
| `'Www'`   | Week abbreviation          | `'Www' => 'Sun'`          |
| `'Week'`  | Week full name             | `'Week' => 'Sunday'`      |

#### Returns:

A formatted string which represents the specified date.

**Type:** string


----
### <u>formatNumber(format [, rounding]) : function</u>

Creates a number format function which convert a number to a string in the specified format.

#### Parameters:

| Parameter |   Type   | Description                                      |
|-----------|:--------:|--------------------------------------------------|
| format    | string   | A number format string as follows.               |
| rounding  | function | A rounding function. (Optional, and `Math.round` in default.) |

##### Number format

The regular expression of number format is as follows:

`/^([\+\-]?)(9?)([^0-9]*)(9*)([^0-9]*)(0*)$/`

* `([\+\-]?)` represents signs.
* `(9?)([^0-9]*)(9*)` represents integer part, and `([^0-9]*)` in it represents place separator.
* `([^0-9]*)(0*)` represents decimal part, and `([^0-9]*)` in it represents decimal point.

Following table is a set of examples of number formats:

| Format     | Example (positive) | Example (negative) |
|------------|--------------------|--------------------|
| `'+9'`     | `123.4 => '+123'`  | `-123.4 => '-123'` |
| `'-9'`     | `123.4 => '123'`   | `-123.4 => '-123'` |
| `'9'`      | `123.4 => '123'`   | `-123.4 => '123'`  |
| `'+9.000'` | `123.4 => '+123.400'` | `-123.4 => '-123.400'` |
| `'-9.000'` | `123.4 => '123.400'`  | `-123.4 => '-123.400'` |
| `'9.000'`  | `123.4 => '123.400'`  | `-123.4 => '123.400'`  |
| `'+9,999'` | `1234.1 => '+1,234'`  | `-1234.1 => '-1,234'`  |
| `'-9 99'`  | `1234.1 => '12 34'`   | `-1234.1 => '-12 34'`  |
| `'9_9999'` | `12345.1 => '1_2345'` | `-12345.1 => '1_2345'` |
| `'+9,999.000'` | `12345.1` => `'+12,345.100'` | `-12345.1 => '-12,345.100'` |
| `'-9.999,000'` | `12345.1` => `'12.345,100'`  | `-12345.1 => '-12.345,100'` |
| `'9 999.000'`  | `12345.1` => `'12 345.100'`  | `-12345.1 => '12 345.100'`  |

#### Returns:

A formatted string which represents the specified date.

**Type:** string


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

### <u>isArray.not(value) : boolean</u>

Checks if *value* is not an array.

> This function returns true for typed-arrays, e.g. Int16Array.

#### Parameter:

| Parameter |  Type  | Description               |
|-----------|:------:|---------------------------|
| value     | *any*  | The value to be checked.  |

#### Return:

True, if *value* is not an array.

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

> This function always returns false for other collections like Map, Set, typed-array and so on, because I think there are few needs to check them without knowing their data types. If data type of a collection is known, its own API to get size of itself should be used.

#### Parameter:

| Parameter |  Type  | Description             |
|-----------|:------:|-------------------------|
| value     | *any*  | The value to be checked |

#### Return:

True, if *value* is empty.

**Type:** boolean


### <u>isEmpty.not(value) : boolean</u>

Checks if *value* is not empty.

This function always returns a negative boolean of `isEmpty(value)`.

#### Parameter:

| Parameter |  Type  | Description             |
|-----------|:------:|-------------------------|
| value     | *any*  | The value to be checked |

#### Return:

True, if *value* is not empty.

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


### <u>isFiniteNumber.not(value) : boolean</u>

Checks if *value* is not a finite number.

This function always returns a negative boolean of `isFiniteNumber(value)`.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is not a finite number.

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


### <u>isFunction.not(value) : boolean</u>

Checks if *value* is not a function.

This function always returns a negative boolean of `isFunction(value)`.

#### Parameter:

| Parameter |  Type  | Description                 |
|-----------|:------:|-----------------------------|
| value     | *any*  | The value to be checked.    |

#### Return:

True, if *value* is not a function.

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


### <u>isInteger.not(value) : boolean</u>

Checks if *value* is not an integer.

This function always returns a negative boolean of `isInteger(value)`.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is not an integer.

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


### <u>isPlainObject.not(value) : boolean</u>

Checks if *value* is not a plain object.

This function always returns a negative boolean of `isPlainObject(value)`.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is not a plain object.

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


### <u>isString.not(value) : boolean</u>

Checks if *value* is not an string.

This function always returns a negative boolean of `isString(value)`.

#### Parameter:

| Parameter |  Type  | Description               |
|-----------|:------:|---------------------------|
| value     | *any*  | The value to be checked.  |

#### Return:

True, if *value* is not a string.

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


### <u>isValidDate.not(value) : boolean</u>

Checks if *value* is not a valid date object.

This function always returns a negative boolean of `isValidDate(value)`.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is not a valid date.

**Type:** boolean


----
### <u>toDate([ year ][, month ][, day ][, hour ][, min ][, sec ][, msec ])  : Date</u>

Creates a Date object which represents a moment in time.

#### Parameters:

| Parameter |  Type  | Description                              |
|-----------|:------:|------------------------------------------|
| year      | number | An integer value represents a full year. This can be specified a year before 1900. (Optional) |
| month     | number | An integer value represents a month, beginning with 0 for January to 11 for December. (Optional) |
| day       | number | An integer value represents a day. (Optional) |
| hour      | number | An integer value represents a hour. (Optional) |
| min       | number | An integer value represents a minute. (Optional) |
| sec       | number | An integer value represents a second. (Optional.) |
| msec      | number | An integer value represents a millisecond. (Optional.) | 

Each element of date and time is set to the first value (zero, or one) if any leading elements are specified but the element is not specified, or is set to the current value if every leading elements and the element are not specified.

#### Returns:

A date object which represents the specified date.

**Type:** Date


In addition, this function has a set of functions to convert a date format string to a date object as its properties.
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

Converts a date format string separated by hyphens to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                  |
|-----------|:------:|----------------------------------------------|
| value     | string | The date format string like: `"2017-09-30"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="hyphened_ymd_and_hms"></a>

#### <u>toDate\['Y-M-D H:m:s'\](value) : Date</u>

Converts a date-time format string separated by hyphens and colons to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                          |
|-----------|:------:|------------------------------------------------------|
| value     | string | The date format string like: `"2017-9-30 1:22:3.4"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="slashed_ymd"></a>

#### <u>toDate\['Y/M/D'\](value) : Date</u>

Converts a date format string separated by slashes to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                   |
|-----------|:------:|-----------------------------------------------|
| value     | string | The date format string like: `"2017/09/30"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="slashed_ymd_and_hms"></a>

#### <u>toDate\['Y/M/D H:m:s'\](value) : Date</u>

Converts a date-time format string separated by slashes and colons to a data object. 

##### Parameter:

| Parameter |  Type  | Description                                           |
|-----------|:------:|-------------------------------------------------------|
| value     | string | The date format string like: `"2017/9/30 1:22:3.45"`. |

##### Return:

A `Date` object, or null if failing to convert.

**Type:** Date


<a name="yymmdd"></a>

#### <u>toDate.YYMMDD(value) : Date</u>

Converts a date format string in fixed size to a data object.

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

Converts a date format string in fixed size to a data object.

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

Converts a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                |
|-----------|:------:|--------------------------------------------|
| value     | string | The date format string like: `"20170930"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="yyyymmddhhmmss"></a>

#### <u>toDate.YYYYMMDDHHmmss(value) : Date</u>

Converts a date format string in fixed size to a data object.

##### Parameter:

| Parameter |  Type  | Description                                      |
|-----------|:------:|--------------------------------------------------|
| value     | string | The date format string like: `"20170930010203"`. |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="rfc2822"></a>

#### <u>toDate.RFC2822(value) : Date</u>

Converts a date format string according to RFC2822 to a data object.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"Sat, 30 Sep 2017 13:30:00 +0900"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="rfc3339"></a>

#### <u>toDate.RFC3339(value) : Date</u>

Converts a date format string according to RFC3339 to a data object.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"2017-09-30T13:30:00+09:00"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


<a name="iso8601"></a>

#### <u>toDate.ISO8601(value) : Date</u>

Converts a date format string according to ISO8601 to a data object.

There are many formats in ISO8601: basic/extended, calendar-date/ordinal-date/week-date and expanded/non-expanded, and this function supports all formats of them.

##### Parameter:

| Parameter |  Type  | Description                                                     |
|-----------|:------:|-----------------------------------------------------------------|
| value     | string | The date format string like `"2017-09-30T13:30:00+09:00"` |

##### Return:
 
A `Date` object, or null if failing to convert.

**Type:** Date


----
### <u>toFiniteNumber(value [, defaultValue]): number</u>

Converts a number or a string to a finite number.
If *value* is neither a finite number nor a numeric string, this function returns NaN, or *defaultValue* if specified.

***NOTE:*** `Number('')` and `Number(' ')` return `0`. `parseInt(' 123')`,  `parseInt('123abc')`, `parseFloat(' 123')` and `parseFloat('123abc')` return `123`. However, this function returns `NaN` in all such cases.

#### Parameter:

| Parameter      |  Type  | Description                           |
|----------------|:------:|---------------------------------------|
| *value*        | *any*  | The number or string to be converted. |
| *defaultValue* | *any*  | Is returned when failing to convert. (Optional) | 

#### Returns:

The converted finite number, or NaN (or *defaultValue* if specified) when failing to convert.

**Type:** number


----
### <u>toInteger(value [, defaultValue]) : number</u>

Converts a number or a string to an integer.
If *value* is a floating point number, this function discard decimals.
If *value* is neither an integer nor a numeric string, this function returns NaN, or *defaultValue* if specified.

***NOTE:*** `Number('')` and `Number(' ')` return `0`. `parseInt(' 123')`,  `parseInt('123abc')`, `parseFloat(' 123')` and `parseFloat('123abc')` return `123`. However, this function returns `NaN` in all such cases.
#### Parameter:

| Parameter    |  Type  | Description                           |
|--------------|:------:|---------------------------------------|
| value        | *any*  | The number or string to be converted. |
| defaultValue | *any*  | Is returned when failing to convert. (Optional) |

#### Returns:

The converted integer value, or NaN (or *defaultValue* if specified) when failing to convert.

**Type:** number


----
### <u>toNumber(value [, defaultValue]): number</u>

Converts a number or a string to a number.
If *value* is neither a number nor a numeric string, this function returns NaN, or *defaultValue* if specified.

***NOTE:*** `Number('')` and `Number(' ')` return `0`. `parseInt(' 123')`,  `parseInt('123abc')`, `parseFloat(' 123')` and `parseFloat('123abc')` return `123`. However, this function returns `NaN` in all such cases.


#### Parameter:

| Parameter      |  Type  | Description                           |
|----------------|:------:|---------------------------------------|
| *value*        | *any*  | The number or string to be converted. |
| *defaultValue* | *any*  | Is returned when failing to convert. (Optional) | 

#### Returns:

The converted number, or NaN (or *defaultValue* if specified) when failing to convert.

**Type:** number


----
[repo-url]: https://github.com/sttk/fav-type/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT

