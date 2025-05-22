const { pathToRegexp, TokenData, stringify, match, compile, parse } = require("path-to-regexp")

console.log(pathToRegexp("/foo/:bar"))

const data = new TokenData([
    { type: "text", value: "/" },
    { type: "param", name: "foo"}
])
console.log(data)

const path = stringify(data)
console.log(path)


const toPath1 = compile("\\user\\/:id", {
    delimiter: "\\"
})
console.log(toPath1({ id: "123" }))

const toPath2 = compile("user/*id")
console.log(toPath2({id: ["1", "2"]}))

const tokens = new TokenData([
    { type: "text", value: "/"},
    { type: "param", name: "foo"}
])
console.log(stringify(tokens))

console.log(parse("/user/:id"));

console.log("-------match函数-------");
(() => {
    const fn = match("/:foo/:bar")
    console.log(fn("/a/b").params)
})();

(() => {
    const fn = match("/:_/:__")
    console.log(fn("/user/bar"))
})();

(() => {
     const fn = match(["/:foo", "/:bar1/:bar2", "/user"])
     console.log(fn("/user"))
     console.log(fn("/user/123"))
})();

(() => {
    const fn = match(["/user", "/:foo", "/:bar1/:bar2"])
    console.log(fn("/user"))
    console.log("/user/123")
})();

console.log("-----pathToRegExp-----");
(() => {
    console.log(pathToRegexp("/user"))
    console.log(pathToRegexp("/user/:id"))
})();

(() => {
    console.log(pathToRegexp("/user", { sensitive: true }))
})()