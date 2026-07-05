const proxyHandler = {
  get(target, key) {
    if (typeof key !== "symbol" && !(key in target)) {
      target[key] = deepProxy({});
    }

    return Reflect.get(target, key);
  },
};

export const deepProxy = (obj) => new Proxy(obj, proxyHandler);
