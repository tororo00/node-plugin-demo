const http = require("http")
const postcss = require("postcss")

const css = `.box{}`

const root = postcss.parse(css)
console.log(root)
console.dir(postcss)
console.log(postcss.Declaration)

const rule = root.nodes[0]

rule.append({prop: "width", value: "100px"}, 'height: 100px;')

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)