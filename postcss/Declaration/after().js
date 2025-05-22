const http = require("http")
const postcss = require("postcss")

const css = `.box {width: 100px; height: 100px;}`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[0]

const decl = rule.nodes[0]

decl.after("background-color: red")

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)