# [@fav/type.to-finite-number][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url]

Convert a number or a string to a finite number.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports NodeJS >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.to-finite-number
```

*When you use npm < 2.7.0 which is not support scoped package, you should install [fav-type][repo-url] from github.*

*When you want to use this on a Web browser, you can install [@fav/type][main-url] from npm and use `fav.type.toFiniteNumber` in it.*

## Usage

For Node.js, when installing `@fav/type.to-finite-number` from npm:

```js
var toFiniteNumber = require('@fav/type.to-finite-number');
toFiniteNumber(123); // => 123
toFiniteNumber('45.6'); // => 45.6
toFiniteNumber(7.89); // => 7.89
```

## API

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

## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[npm-img]: https://img.shields.io/badge/npm-v0.6.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.to-finite-number
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[main-url]: https://www.npmjs.com/package/@fav/type

