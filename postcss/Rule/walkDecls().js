const http = require("http")
const postcss = require("postcss")

const css = `.box {width: 100px; height: 100px; background: red}`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[0]

// rule.walkDecls((decl) => {
//     console.log(decl)
// })

// rule.walkDecls("width", (decl) => {
//     console.log(decl)
// })

// 遍历此rule下的所有css声明
rule.walkDecls(/width/, (decl) => {
    console.log(decl, "rule")
})

// 遍历root下所有的css声明
root.walkDecls((decl) => {
    console.log(decl, "root")
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)