# Deep Proxy

_Requires `Proxy` support. This is in newer browsers and Node 6+._

Live this dream:

```js
import { deepProxy } from "deep-proxy";

let obj = {};

let proxy = deepProxy(obj);
proxy.very.deeply.nested.property = "possible";

console.log(obj);
/*
{
  very: {
    deeply: {
      nested: {
        property: "possible"
      }
    }
  }
}
*/
```
