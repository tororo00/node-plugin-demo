const http = require("http")
const postcss = require("postcss")

const css = `
    .box {
        transform: translate(100px);
    }
`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[0]
const decl = rule.nodes[0]
const declClone = decl.clone({prop: `-webkit-${decl.prop}`})
console.log(declClone.prop)
// 将克隆的css声明添加到Rule.nodes最后
rule.append(declClone, {prop: "width", value: "100px"})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)