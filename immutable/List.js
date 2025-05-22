const { List } = require("immutable")

console.log(List(new Set([1, 2])))

console.log(List(new Set([1, 2, 3])).push(4))

console.log(List(new Set([1, 2])).toJS())

console.log(List([1, 2, 3]).filter((value, index, list) => {
    console.log(value, index, list)
    return value > 1
}).toJS())