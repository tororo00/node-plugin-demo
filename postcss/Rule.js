const postcss = require("postcss")
const http = require("http")

const css = `.box {width: 100px; height: 100px; background-color: red;}`

const root = postcss.parse(css)

console.log("root", root)

const rule = root.nodes[0]
rule.cloneAfter()

console.log(rule)

const decl = root.nodes[0].nodes[0]
console.log(decl)
decl.assign({prop: "width", value: "200px"})
decl.before("box-sizing: border-box")

console.log(root.toString())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000, () => {

})