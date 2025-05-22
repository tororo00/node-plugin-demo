const postcss = require("postcss")
const postcssNested = require("postcss-nested")
const postcssScss = require("postcss-scss")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "./index.scss"), (error, data) => {
    if (!error) {
        const processor = postcss(postcssNested)
        processor.process(data, { from: path.join(__dirname, "./index.scss"), syntax: postcssScss }).then((res) => {
            console.log(res.css)
        })
    }
})