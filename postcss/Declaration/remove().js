const http = require("http")
const postcss = require("postcss")

const css = `
    .btn {
        -webkit-opacity: 0.5;
        opacity: 0.5
    }
`

const root = postcss.parse(css)
console.log(root)

root.walkDecls(decl => {
    const regexp = /^-webkit-/
    if(regexp.test(decl.prop)){
        const removeDecl = decl.remove()
        console.log("被移除的声明" + removeDecl.toString())
    }
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)