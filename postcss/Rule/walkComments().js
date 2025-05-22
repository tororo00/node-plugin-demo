const http = require("http")
const postcss = require("postcss")

const css = `/* 注释1 */.box { /* 注释2 */width: 100px; /* 注释3 */height: 100px; /* 注释4 */background: red}`

const root = postcss.parse(css)

root.walkComments((comment) => {
    console.log(comment)
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)