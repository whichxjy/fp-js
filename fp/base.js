const length = (lst) => lst.length

const isEmpty = (lst) => lst.length === 0

const first = (lst) => lst[0]

const rest = (lst) => lst.slice(1)

const slice = (lst, begin, end = length(lst)) => lst.slice(begin, end)

const append = (...lsts) => {
  if (isEmpty(lsts)) {
    return lsts
  } else {
    return [...first(lsts), ...append(...rest(lsts))]
  }
}

const cons = (item, lst) => append([item], lst)

module.exports = { length, isEmpty, first, rest, slice, append, cons }
