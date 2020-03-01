const assert = require('assert').strict
const { describe, it } = require('mocha')
const { selectionSort, insertionSort, mergeSort, quickSort } = require('../fp/sort')

describe('sort', () => {
  const tests = {
    'selection sort': selectionSort,
    'insertion sort': insertionSort,
    'merge sort': mergeSort,
    'quick sort': quickSort
  }

  for (const [sortName, sort] of Object.entries(tests)) {
    describe(sortName, () => {
      it('[]', () => {
        const sorted = sort([])
        assert.deepEqual(sorted, [])
      })

      it('[123]', () => {
        const sorted = sort([123])
        assert.deepEqual(sorted, [123])
      })

      it('[12, 13, 5, 6, 7]', () => {
        const sorted = sort([12, 13, 5, 6, 7])
        assert.deepEqual(sorted, [5, 6, 7, 12, 13])
      })

      it('[12, 11, 13, 5, 12, 6, 7]', () => {
        const sorted = sort([12, 11, 13, 5, 12, 6, 7])
        assert.deepEqual(sorted, [5, 6, 7, 11, 12, 12, 13])
      })
    })
  }
})
