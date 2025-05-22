const http = require("http")
const postcss = require("postcss")
const postcssAlias = require("postcss-alias")
const fs = require("fs")

fs.readFile("./index.css", (error, data) => {
    if(!error){
        postcss(postcssAlias).process(data, {from: "./index.css", to: "./dist/output.css"}).then(res => {
            fs.writeFile("./dist/output.css", res.css, (error) => {
                console.log(error)
            })
        })
    }
})