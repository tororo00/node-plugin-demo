const postcss = require("postcss")
const postcssScss = require("postcss-scss")
const autoprefixer = require("autoprefixer")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "./index.scss"), (error, data) => {
    if(!error){
        const processor = postcss(autoprefixer({overrideBrowserslist: ["chrome 30"]}))
        processor.process(data, { from: path.join(__dirname, "./index.scss"), to: path.join(__dirname, "./index.scss"), syntax:  postcssScss}).then(res => {
            console.log(res.css)
        })
    }
})