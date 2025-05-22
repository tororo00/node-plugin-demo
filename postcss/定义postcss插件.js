const http = require("http")
const postcss = require("postcss")

const myPlugin = postcss.plugin("my-plugin", (options) => {
    console.log(options)
    return {
        Once(root, helper){
            console.log(root)
            console.log(helper)
        }
    }
})

console.dir(myPlugin)

const css = `.box {width: 100px; height: 100px}`

postcss(myPlugin({name: "tom", age: 20})).process(css).then((res) => {
    console.log(res.css)
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)