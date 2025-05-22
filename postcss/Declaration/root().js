const http = require("http")
const postcss = require("postcss")

const css = `.box{width: 100px}`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[0]
const decl = rule.nodes[0]

// true
console.log(decl.root() === root)

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)