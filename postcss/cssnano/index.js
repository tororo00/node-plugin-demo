const postcss = require("postcss")
const cssnano = require("cssnano")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "./index.css"), (error, data) => {
    if(!error){
        const processor = postcss(cssnano)
        processor.process(data, { from: path.join(__dirname, "./index.css"), to: path.join(__dirname, "./index.css")}).then(res => {
            console.log(res.css)
        })
    }
})