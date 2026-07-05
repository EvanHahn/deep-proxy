import assert from "node:assert/strict";
import { deepProxy } from "./deep-proxy.js";

// Deep property assignment
const obj = { foo: "boo" };
const proxy = deepProxy(obj);

assert.deepEqual(obj, { foo: "boo" });

proxy.very.deeply.nested.property = "wow";

assert.deepEqual(obj, {
  foo: "boo",
  very: {
    deeply: {
      nested: {
        property: "wow",
      },
    },
  },
});

// Deep property access
assert.deepEqual(deepProxy({}).deeply.nested.property, {});
