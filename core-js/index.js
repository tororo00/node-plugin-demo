import $filter from "core-js-pure/actual/array/filter.js"

import $fill from "core-js-pure/actual/array/fill.js"

console.log($filter([1,2],(item => item > 1)))

console.log($fill(new Array(3), 100, 0, 2))