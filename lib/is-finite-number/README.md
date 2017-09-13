# [@fav/type.is-finite-number][repo-url] [![NPM version][npm-img]][npm-url] [![MIT License][mit-img]][mit-url]

Checks whether a value is a finite number or not.

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports NodeJS >= v0.10 and major Web browsers: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

To install from npm:

```sh
$ npm install --save @fav/type.is-finite-number
```

*When you use npm < 2.7.0 which is not support scoped package, you should install [fav-type][repo-url] from github.*

*When you want to use this on a Web browser, you can install [@fav/type][main-url] from npm and use `fav.type.isFiniteNumber` in it.*

## Usage

For Node.js, when installing `@fav/type.is-finite-number` from npm:

```js
var isFiniteNumber = require('@fav/type.is-finite-number');
isFiniteNumber(123); // => true
isFiniteNumber(4.56); // => true
isFiniteNumber(Infinity); // => false
isFiniteNumber(NaN); // => false
```

## API

### <u>isFiniteNumber(value) : boolean</u>

Checks if *value* is a number, which is neither a positive/negative infinity nor NaN. 

#### Parameter:

| Parameter |  Type  | Description              |
|-----------|:------:|--------------------------|
| value     | *any*  | The value to be checked. |

#### Return:

True, if *value* is a finite number.

**Type:** boolean

## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[npm-img]: https://img.shields.io/badge/npm-v0.4.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type.is-finite-number
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[main-url]: https://www.npmjs.com/package/@fav/type
