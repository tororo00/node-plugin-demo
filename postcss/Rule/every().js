const http = require("http")
const postcss = require("postcss")


const css = `.box { /* 注释 */ width: 100px; height: 100px; background: red}`

const root = postcss.parse(css)

const rule = root.nodes[0]

const decl = rule.nodes[0]

rule.every((node, index) => {
    console.log(node, index)
    return true
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)