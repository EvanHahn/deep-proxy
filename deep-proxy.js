var proxyHandler = {
  get: function (target, key) {
    if (!(key in target)) {
      target[key] = deepProxy({})
    }

    return target[key]
  }
}

function deepProxy (obj) {
  return new Proxy(obj, proxyHandler)
}

module.exports = deepProxy
