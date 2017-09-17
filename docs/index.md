# [@fav/type][repo-url] API document

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

> This function always return false for other collections like Map, Set, typed-array, HTMLCollection and so on, because I think there are few needs to check them without knowing their data types. If data type of a collection is known, its own API to get size of itself should be used.

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
[repo-url]: https://github.com/sttk/fav-type/
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT

