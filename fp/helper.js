const { isEmpty, first, rest, cons } = require('./base')

const map = (mappingFn, lst) => {
  if (isEmpty(lst)) {
    return lst
  } else {
    return cons(mappingFn(first(lst)), map(mappingFn, rest(lst)))
  }
}

const reduce = (reducerFn, initialValue, lst) => {
  if (isEmpty(lst)) {
    return initialValue
  } else {
    return reduce(reducerFn, reducerFn(initialValue, first(lst)), rest(lst))
  }
}

const filter = (predicateFn, lst) => {
  if (isEmpty(lst)) {
    return lst
  } else if (predicateFn(first(lst))) {
    return cons(first(lst), filter(predicateFn, rest(lst)))
  } else {
    return filter(predicateFn, rest(lst))
  }
}

module.exports = { map, reduce, filter }
