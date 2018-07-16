# demo-mocha-phantomjs-core

[![Build Status](https://travis-ci.org/sutara79/demo-mocha-phantomjs-core.svg?branch=master)](https://travis-ci.org/sutara79/demo-mocha-phantomjs-core)

Unit testing for client side JavaScript with DOM.

## Demo for the testing target
https://sutara79.github.io/demo-mocha-phantomjs-core/

## Testing
### Browser
https://sutara79.github.io/demo-mocha-phantomjs-core/test/index.html

### CLI
```
$ npm test

> demo-mocha-phantomjs-core@0.0.1 test
> phantomjs ./node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/index.html

  jquery.set-year.js
    ✓ int_year should be above 2000
    ✓ length of int_year should be 4

  2 passing (9ms)
```

## Dependencies
- [phantomjs-prebuilt](https://github.com/Medium/phantomjs)
- [mocha-phantomjs-core](https://github.com/nathanboktae/mocha-phantomjs-core)
- [mocha](https://github.com/mochajs/mocha)
- [power-assert](https://github.com/power-assert-js/power-assert)