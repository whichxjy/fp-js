const assert = require('assert').strict
const { describe, it } = require('mocha')
const { map, reduce, filter } = require('../fp/helper')

describe('helper', () => {
  const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  describe('map', () => {
    it('double', () => {
      const doubled = map(num => num * 2, nums)
      assert.deepEqual(doubled, [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20])
    })

    it('halved', () => {
      const halved = map(num => num / 2, nums)
      assert.deepEqual(halved, [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5])
    })
  })

  describe('reduce', () => {
    it('sum', () => {
      const sum = reduce((acc, val) => acc + val, 0, nums)
      assert.equal(sum, 55)
    })
  })

  describe('filter', () => {
    it('evens', () => {
      const evens = filter(num => num % 2 === 0, nums)
      assert.deepEqual(evens, [0, 2, 4, 6, 8, 10])
    })

    it('greater than four', () => {
      const greaterThanFour = filter(num => num > 4, nums)
      assert.deepEqual(greaterThanFour, [5, 6, 7, 8, 9, 10])
    })
  })
})
