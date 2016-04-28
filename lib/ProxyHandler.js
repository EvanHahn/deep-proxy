const fs = require('fs')

class ProxyHandler {
  constructor (file) {
    this.file = file
  }

  get (target, key) {
    return target[key]
  }

  set (target, key, value) {
    const testTarget = Object.assign({}, target, {
      [key]: value
    })

    let json
    try {
      json = JSON.stringify(testTarget)
    } catch (err) {
      throw new Error(`Setting ${key} to ${value} would make this object unable to be serialized as JSON.`)
    }

    fs.writeFileSync(this.file, json, 'utf8')

    target[key] = value

    return value
  }

  deleteProperty (target, key) {
    const testTarget = Object.assign({}, target)
    delete testTarget[key]

    const json = JSON.stringify(testTarget)
    fs.writeFileSync(this.file, json, 'utf8')

    delete target[key]

    return true
  }
}

module.exports = ProxyHandler
