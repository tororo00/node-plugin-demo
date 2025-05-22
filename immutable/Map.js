const { Map } = require("immutable")

const map1 = Map([[1,2],[3,4]])
console.log(map1.toJS())

console.log(Map({name: "tom", age: 20}).get("name"))

console.log(Map({}).get("name", "jack"))

console.log(Map({name: "tom", age: 20}).delete("age").toJS())
