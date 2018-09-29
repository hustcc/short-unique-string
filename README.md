# short-unique-string

> Generate short unique id string locally. Generate `7921` unique id string with only length <= `2`.

[![Build Status](https://travis-ci.org/hustcc/short-unique-string.svg?branch=master)](https://travis-ci.org/hustcc/short-unique-string)
[![Coverage Status](https://coveralls.io/repos/github/hustcc/short-unique-string/badge.svg)](https://coveralls.io/github/hustcc/short-unique-string)
[![npm](https://img.shields.io/npm/v/short-unique-string.svg)](https://www.npmjs.com/package/short-unique-string)



## Usage

> **npm i --save short-unique-string**


```js
var generator = require('short-unique-string');

var uniqueId = generator({
  number: true,
  symbol: true
})

uniqueId(); // '0'

// ...

uniqueId(); // 'aY'
```

Only one API `generator(opts)`, opts is the unique parameter which is a pure object:

 - `number`: contain number string, default is `false`.
 - `symbol`: contain symbol string, default is `false`.



## License

MIT@[hustcc](https://github.com/hustcc).

