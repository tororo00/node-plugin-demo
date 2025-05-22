const http = require("http")
const postcss = require("postcss")

const root = postcss.root()

const rule = postcss.rule({selector: ".box"})

const decl1 = postcss.decl({prop: "width", value: "100px"})
const decl2 = postcss.decl({prop: "height", value: "200px"})

rule.append(decl1)
rule.append(decl2)

root.append(rule)

console.dir(postcss)
console.log(root)
console.log(root.toString())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)


