const http = require("http")
const postcss = require("postcss")

const css = `.box {width: 100px; height: 100px; background: red}`

const root = postcss.parse(css)

const rule = root.nodes[0]

rule.insertAfter(rule.nodes[0], {prop: "max-width", value: "100%"})

console.log(root)

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)