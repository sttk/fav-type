# [@fav/type.is-empty][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url]

Checks whether a value is *empty* or not.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports NodeJS >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.is-empty
```

*When you use npm < 2.7.0 which is not support scoped package, you should install [fav-type][repo-url] from github.*

*When you want to use this on a Web browser, you can install [@fav/type][main-url] from npm and use `fav.type.isEmpty` in it.*

## Usage

For Node.js, when installing `@fav/type.is-empty` from npm:

```js
var isEmpty = require('@fav/type.is-empty');

isEmpty([]); // => true
isEmpty(['a']); // => false

isEmpty({}); // => true
isEmpty({ a: 1 }); // => false
```

## API

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

## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[npm-img]: https://img.shields.io/badge/npm-v0.5.1-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.is-empty
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[main-url]: https://www.npmjs.com/package/@fav/type 
