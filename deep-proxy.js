(function () {
  const proxyHandler = {
    get(target, key) {
      if (!(key in target)) {
        target[key] = deepProxy({});
      }

      return target[key];
    },
  };

  function deepProxy(obj) {
    return new Proxy(obj, proxyHandler);
  }

  if (typeof module === "undefined") {
    this.deepProxy = deepProxy;
  } else {
    module.exports = deepProxy;
  }
})();
