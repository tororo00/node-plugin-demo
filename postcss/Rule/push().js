const http = require("http")
const postcss = require("postcss")

const css = `.box {}`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[0]

rule.push({prop: "width", value: "100px"})
rule.push({prop: "height", value: "200px"})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)

