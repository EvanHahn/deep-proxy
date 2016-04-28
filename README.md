Deep Proxy
==========
[![Build Status](https://travis-ci.org/EvanHahn/deep-proxy.svg?branch=master)](https://travis-ci.org/EvanHahn/deep-proxy)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

*Requires `Proxy` support. This is in newer browsers and Node 6+.*

Live this dream:

```js
let obj = {}

let proxy = deepProxy(obj)
proxy.very.deeply.nested.property = 'possible'

console.log(obj)
/*
{
  very: {
    deeply: {
      nested: {
        property: 'possible'
      }
    }
  }
}
*/
```

Use it in Node/Browserify/Webpack:

```js
let deepProxy = require('deep-proxy')

let proxy = deepProxy({})
```

Or use it in the browser:

```html
<script src="deep-proxy.js"></script>
<script>
var proxy = deepProxy({})
</script>
```
