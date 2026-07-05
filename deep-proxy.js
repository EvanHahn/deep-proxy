const proxyHandler = {
  get(target, key) {
    if (!(key in target)) {
      target[key] = deepProxy({});
    }

    return target[key];
  },
};

export function deepProxy(obj) {
  return new Proxy(obj, proxyHandler);
}
