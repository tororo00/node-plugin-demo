const http = require("http")
const postcss = require("postcss")

const atRule = postcss.atRule({
    name: "media",
    params: "(min-width: 700px)"
})

console.log(atRule)

atRule.append(postcss.rule({selector: ".box", nodes: [{prop: "background", value: "red"}]}))

const root = postcss.root()
root.append(atRule)
console.log(root.toString())

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)