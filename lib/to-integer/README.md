# [@fav/type.to-integer][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url]

Convert a number or a string to an integer.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports NodeJS >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.to-integer
```

*When you use npm < 2.7.0 which is not support scoped package, you should install [fav-type][repo-url] from github.*

*When you want to use this on a Web browser, you can install [@fav/type][main-url] from npm and use `fav.type.toInteger` in it.*

## Usage

For Node.js, when installing `@fav/type.to-integer` from npm:

```js
var toInteger = require('@fav/type.to-integer');
toInteger(123); // => 123
toInteger('456'); // => 456
toInteger(7.89); // => 7
```

## API

### <u>toInteger(value): number</u>

Convert a number or a string to an integer.
If *value* is a floating point number, this function discard decimals.
If *value* is neither a finite number, a numeric string nor other data type, this function returns NaN.

#### Parameter:

| Parameter |  Type  | Description                           |
|-----------|:------:|---------------------------------------|
| value     | *any*  | The number or string to be converted. |

#### Returns:

The converted integer value, or NaN if failing to convert.

**Type:** number

## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[npm-img]: https://img.shields.io/badge/npm-v0.6.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.to-integer
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[main-url]: https://www.npmjs.com/package/@fav/type

