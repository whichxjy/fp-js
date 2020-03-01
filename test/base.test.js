const assert = require('assert').strict
const { describe, it } = require('mocha')
const { append, cons } = require('../fp/base')

describe('helper', () => {
  describe('append', () => {
    it('[]', () => {
      const appended = append([])
      assert.deepEqual(appended, [])
    })

    it('[1]', () => {
      const appended = append([1])
      assert.deepEqual(appended, [1])
    })

    it('[1, 2, 3] + [4, 5, 6] + [7, 8, 9]', () => {
      const appended = append([1, 2, 3], [4, 5, 6], [7, 8, 9])
      assert.deepEqual(appended, [1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  })

  describe('cons', () => {
    it('123 + []', () => {
      assert.deepEqual(cons(123, []), [123])
    })

    it('123 + [456]', () => {
      assert.deepEqual(cons(123, [456]), [123, 456])
    })

    it('123 + [456, 789]', () => {
      assert.deepEqual(cons(123, [456, 789]), [123, 456, 789])
    })
  })
})
