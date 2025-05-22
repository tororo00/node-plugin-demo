const http = require("http")
const postcss = require("postcss")

const css = `.box {} .box1{}`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[1]

console.log(rule.prev())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)