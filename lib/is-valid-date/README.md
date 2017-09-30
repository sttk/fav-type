# [@fav/type.is-valid-date][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url]

Checks whether a value is a valid date object or not.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports Node.js >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.is-valid-date
```

*When you use npm < 2.7.0 which is not support scoped package, you should install [fav-type][repo-url] from github.*

*When you want to use this on a Web browser, you can install [@fav/type][main-url] from npm and use `fav.type.isInteger` in it.*

## Usage

For Node.js, when installing `@fav/type.is-integer` from npm:

```js
var isValidDate = require('@fav/type.is-valid-date');
isValidDate(new Date(2017, 8, 30)); // => true
isValidDate(new Date(9999999999, 1, 1)); // => false
```

## API

### <u>isValidDate(value) : boolean</u>

Checks if *value* is a valid date object.

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a valid date.

**Type:** boolean


## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[npm-img]: https://img.shields.io/badge/npm-v0.6.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.is-valid-date
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[main-url]: https://www.npmjs.com/package/@fav/type

