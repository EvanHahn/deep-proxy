const assert = require("node:assert");
const deepProxy = require("./deep-proxy");

// Deep property assignment
const obj = { foo: "boo" };
const proxy = deepProxy(obj);

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
