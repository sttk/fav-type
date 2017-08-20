# [@fav/type][repo-url] [![Github.io][io-img]][io-url] [![NPM][npm-img]][npm-url] [![MIT License][mit-img]][mit-url] [![Build Status][travis-img]][travis-url] [![Build Status][appveyor-img]][appveyor-url] [![Coverage status][coverage-img]][coverage-url]

Function set related to data types for all versions of nodejs and major browsers

> "fav" is an abbreviation of "favorite" and also the acronym of "for all versions".
> This package is intended to support all Node.js versions and many browsers as possible.
> At least, this package supports NodeJS >= v0.10 and major Web browser: Chrome, Firefox, IE11, Edge, Vivaldi and Safari.

## Install

For Node.js:

```sh
$ npm install --save @fav/type
```

Or (when npm < 2.7.0 which is not support scoped package)

```sh
$ npm install --save sttk/fav-type
```

For Web browsers:

```html
<script src="fav.type.min.js"></script>
```

## Usage

For Node.js:

```js
const type = require('@fav/type');

const isString = type.isString
isString('abc') // => true
```

For Web browsers:

```js
const isString = fav.type.isString
isString('abc') // => true
```

## API

This package provides API documents created with [JsDoc](https://github.com/jsdoc3/jsdoc).

See [API on Github.io][api-url] or `docs/fav.type.html` in this package.

## Checked

### Node.js (4〜8)

| Platform  |   4    |   5    |   6    |   7    |   8    |
|:---------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### io.js (1〜3)

| Platform  |   1    |   2    |   3    |
|:---------:|:------:|:------:|:------:|
| macOS     |&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|

### Node.js (0.8〜0.12)

| Platform  |  0.7   |  0.8   |  0.9   |  0.10  |  0.11  |  0.12  |
|:---------:|:------:|:------:|:------:|:------:|:------:|:------:|
| macOS     |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Windows10 |        |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|&#x25ef;|

### Web browsers

| Platform  | Chrome | Firefox | Vivaldi | Safari |  Edge  | IE11   |
|:---------:|:------:|:-------:|:-------:|:------:|:------:|:------:| 
| macOS     |&#x25ef;|&#x25ef; |&#x25ef; |&#x25ef;|   --   |   --   |
| Windows10 |&#x25ef;|&#x25ef; |&#x25ef; |   --   |&#x25ef;|&#x25ef;|
| Linux     |&#x25ef;|&#x25ef; |&#x25ef; |   --   |   --   |   --   |

## License

Copyright (C) 2017 Takayuki Sato

This program is free software under [MIT][mit-url] License.
See the file LICENSE in this distribution for more details.

[repo-url]: https://github.com/sttk/fav-type/
[api-url]: https://sttk.github.io/fav-type/fav.type.html
[io-img]: http://img.shields.io/badge/HP-github.io-ff99cc.svg
[io-url]: https://sttk.github.io/fav-type/index.html
[npm-img]: https://img.shields.io/badge/npm-v0.1.0-blue.svg
[npm-url]: https://www.npmjs.com/package/@fav/type
[mit-img]: https://img.shields.io/badge/license-MIT-green.svg
[mit-url]: https://opensource.org/licenses/MIT
[travis-img]: https://travis-ci.org/sttk/fav-type.svg?branch=master
[travis-url]: https://travis-ci.org/sttk/fav-type
[appveyor-img]: https://ci.appveyor.com/api/projects/status/github/sttk/fav-type?branch=master&svg=true
[appveyor-url]: https://ci.appveyor.com/project/sttk/fav-type
[coverage-img]: https://coveralls.io/repos/github/sttk/fav-type/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/sttk/fav-type?branch=master
