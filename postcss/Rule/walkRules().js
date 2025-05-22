const http = require("http")
const postcss = require("postcss")

const css = `.box {width: 100px; height: 100px; background: red; .inner {width: 100px; height: 200px;}}; .box1 {width: 200px; height: 200px; background: skyblue}`

const root = postcss.parse(css)
console.log(root)

// 一个Rule对象记录的是一个css选择器及其所有的css声明
const rule = root.nodes[0]

// 遍历此rule下的所有rule
rule.walkRules((rule) => {
    console.log(rule, "rule")
})

// 遍历root下的所有rule
root.walkRules((rule) => {
    console.log(rule, "root")
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)