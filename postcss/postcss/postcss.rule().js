const http = require("http")
const postcss = require("postcss")

// 创建一个css
const rule = postcss.rule({
    selector: ".box",
    nodes: [{ prop: "width", value: "100px"}, {prop: "height", value: "200px"}]
})

console.log(rule)

// 创建根节点
const root = postcss.root()
root.append(rule)

console.log(root.toString())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)