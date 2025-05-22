const http = require("http")
const postcss = require("postcss")

const root = postcss.root()

const rule = postcss.rule({selector: ".box"})

rule.append(postcss.comment({text: "注释1"}), postcss.decl({prop: "width", value: "100px"}))

root.append(rule)

console.log(root)
console.log(root.toString())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})
server.listen(4000)