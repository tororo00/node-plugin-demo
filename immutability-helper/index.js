const update = require("immutability-helper")

console.log(update.extend)
console.log(update.isEquals)

// $push
const arr = [1,2]
const obj = {
    name: "tom",
    age: 20
}

// 将数组中的元素都添加到目标数组的末尾
console.log(update(arr, { $push: [3] }))
console.log(update(arr, { $push: [3] }) === arr)

// 将数组中的元素都添加到目标数组的开头
console.log(update(arr, { $unshift: [4, 5]}))

// 
console.log(update(arr, { $splice: [[1, 1, 5, 6]] }))

console.log(update(arr, { $set: [3, 4]}))
console.log(update(obj, { $set: { name: "jack", age: 30 } }))

console.log(update({a: true, b: false}, { $toggle: ["a", "b"]}))

console.log(update({a: "a",b: "b"}, { $unset: ["a"]}))

console.log(update({a: "a", b: "b"}, { $merge: {a: 1}}))

console.log(update({ a: 1, b: 2 }, { b: { $apply: (value) => value * 10} }))

console.log(update(new Set([1,2]), { $remove: [1] }))
console.log(update(new Map([["a", 1], ["b", 2]]), { $remove: ["a"] }))

console.log(update(new Set([]), { $add: [2]}))
console.log(update(new Map(), { $add: [["a", 1]]}))

console.log(update([1,2,3], { $splice: [[2]]}))