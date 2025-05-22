const { List, getIn, hasIn, updateIn, merge, isList, Map: MyMap, Collection } = require("immutable")

/* 

List()创建一个新的不可变 List，其中包含所提供的类集合的值。

注意：List 是一个工厂函数，而不是一个类，在构建过程中不会使用 new 关键字。 

*/
console.log(List)

const list = List([1, 2, 3, 4])
console.log(list)
console.log(list.size)
list.forEach((item, index, list) => {
    console.log(item, index, list)
})
console.log(list.set(1, "hello"))
console.log(list.delete(1))
console.log(list.insert(1, 100))
console.log(list.clear())
console.log(list.push(99))
console.log(list.pop())
console.log(list.unshift(200).forEach(item => console.log(item)))
console.log(list.setSize(10))

const list1 = List([1,2, list])
console.log(list1)
console.log(list1.setIn([2,0],100).forEach(item => console.log(item)))
list1.deleteIn([2, 1]).forEach(item => console.log(item))

const list2 = List([{name: "tom"}])
list2.setIn([0, "name"], "jack").forEach(item => console.log(item))
list2.mergeIn([0], {age: 20}).forEach(item => console.log(item))

// withMutations
console.log(list2.withMutations((mutable) => {
    console.log(mutable, "---")
    return List()
}))

console.log(list2.wasAltered())

// getIn
console.log("===getIn===")
console.log(getIn({ a: { b: { c: 100 } } }, ["a", "b", "c"]))
console.log(getIn([1,2], [0]))

// hasIn
console.log("===hasIn===")
console.log(hasIn({ a: { b: { c: 100 } } }, ['a', 'b', 'c']))
console.log(hasIn({ a: { b: { c: 100 } } }, ['a', 'b', 'c', 'd']))

// removeIn

// updateIn
console.log(updateIn({ a: {b:{c:1}} }, ["a", "b", "c"], (value) => {
    console.log(value, "😀")
    return value * 100
}))

// merge
console.log(merge({a: 1}, {b:2}, {c:3}))
console.log(merge([0],[1,2]))

// isList()
console.log(isList(list1))
console.log(isList([]))

//concat 返回一个新 List，其中包含与该 List 连接的其他值或集合。
const list3 = List([1,2])
console.log(list3.concat(list, 100).forEach(item => console.log(item)) )

// map 返回一个新 List，其中包含通过映射函数传递的值。
console.log(list3.map((item, index, list) => {
    console.log(item, index, list)
    return [item * 10]
}))

// flatMap
console.log(list3.flatMap((item, index, list) => {
    console.log(item, index, list)
    return [item]
}))

// filter
console.log(list3.filter((item, index, list) => {
    console.log(item, index, list)
    return item > 1
}))

console.log("===========")

// partition
console.log(List([1,2,3,4]).partition((item, index, list) => {
    console.log(item, index, list)
    return item > 1
}))

/* 
    用提供的集合返回一个“压缩”的列表。

    类似于zipWith，但使用默认的zipper：创建一个数组。
*/
console.log(list3.zip(list).forEach(item => console.log(item)))

console.log(List([1,2]).zip([4,5,6]).forEach(item => console.log(item)))

console.log(List([1,2]).zip([1],[2]))

/* 
    创建一个新的不可变Map。

    创建时使用与所提供的 Collection.Keyed 或 JavaScript Object 相同的键值对，或期望使用 [K, V] 元组条目的集合。

    注意：Map 是一个工厂函数，而不是一个类，在构建过程中不会使用 new 关键字。
*/
console.log(MyMap({key: "value"}))
console.log(MyMap(([["key","value"]])))

// filterNot
console.log(list.filterNot((item, index, list) => {
    console.log(item, index, list)
    return item % 2 === 0
}))

// reverse()
console.log(list.reverse())

console.log(Collection())

const list4 = List([1,2,3])
console.log(list4.sort((a, b) => b - a))

const list5 = List([{age: 20}, {age: 10}])
console.log(list5.sortBy((item) => {
    return item.age
}).forEach(item => console.log(item)))

console.log(List([1]).toJS())
console.log(MyMap({a: 1}).toJS())

console.log(List([1]).toJSON())
console.log(MyMap({a: 1}).toJSON())