const { length, isEmpty, first, rest, slice, append, cons } = require('./base')
const { reduce, filter } = require('./helper')

// selection sort
const selectionSort = (lst) => {
  if (isEmpty(lst)) {
    return lst
  } else {
    const minItem = reduce(Math.min, first(lst), rest(lst))
    return append(
      filter(x => x === minItem, lst),
      selectionSort(filter(x => x !== minItem, lst))
    )
  }
}

// insertion sort
const insertionSort = (lst) => {
  const insert = (lst, item) => {
    if (isEmpty(lst)) {
      return [item]
    } else if (first(lst) < item) {
      return cons(first(lst), insert(rest(lst), item))
    } else {
      return cons(item, lst)
    }
  }

  if (isEmpty(lst)) {
    return lst
  } else {
    return insert(insertionSort(rest(lst)), first(lst))
  }
}

// merge sort
const mergeSort = (lst) => {
  const merge = (lhs, rhs) => {
    if (isEmpty(lhs)) {
      return rhs
    } else if (isEmpty(rhs)) {
      return lhs
    } else if (first(lhs) < first(rhs)) {
      return cons(first(lhs), merge(rest(lhs), rhs))
    } else {
      return cons(first(rhs), merge(lhs, rest(rhs)))
    }
  }

  if (length(lst) <= 1) {
    return lst
  } else {
    const mid = Math.ceil(length(lst) / 2)
    return merge(
      mergeSort(slice(lst, 0, mid)),
      mergeSort(slice(lst, mid))
    )
  }
}

// quick sort
const quickSort = (lst) => {
  if (length(lst) <= 1) {
    return lst
  } else {
    const pivot = first(lst)
    return append(
      quickSort(filter(x => x < pivot, lst)),
      filter(x => x === pivot, lst),
      quickSort(filter(x => x > pivot, lst))
    )
  }
}

module.exports = { selectionSort, insertionSort, mergeSort, quickSort }
