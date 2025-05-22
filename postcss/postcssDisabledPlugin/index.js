const http = require("http")
const postcss = require("postcss")
const postcssDisabled = require("postcss-disabled")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "./index.css"), (error, data) => {
    if(!error){
        const processor = postcss(postcssDisabled)
        processor.process(data, {from: "./index.css"}).then(res => {
            console.log(res.root)
            fs.writeFile(path.join(__dirname, "./dist/output.css"), res.css, (_error) => {
                console.log(_error)
            })
        })
    }
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)