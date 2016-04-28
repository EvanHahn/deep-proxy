const deepProxy = require('..')

const assert = require('assert')

describe('deepProxy', function () {
  it('lets you do deep property assignment', function () {
    const obj = { foo: 'boo' }
    const proxy = deepProxy(obj)

    proxy.very.deeply.nested.property = 'wow'

    assert.deepEqual(obj, {
      foo: 'boo',
      very: {
        deeply: {
          nested: {
            property: 'wow'
          }
        }
      }
    })
  })

  it('lets you do deep property access', function () {
    assert.deepEqual(deepProxy({}).deeply.nested.property, {})
  })
})
