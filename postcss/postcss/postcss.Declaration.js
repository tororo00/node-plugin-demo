const http = require("http")
const postcss = require("postcss")

const decl = new postcss.Declaration({prop: "width", value: "100px", important: true})

console.log(decl)

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)
