import { glob, sync } from "glob"

console.log(glob.sync)

console.log(glob.sync("./dir/**"))

console.log(sync("./dir/**"))

function fn(){}

console.log(Object.assign(fn, {
    a: "1",
    b: "2"
}))

console.log(fn.a)