const postcss = require("postcss")
const autoprefixer = require("autoprefixer")
const fs = require("fs")
const path = require("path")

fs.readFile(path.join(__dirname, "./index.css"), (error, data) => {
    if(!error){
        postcss(autoprefixer({overrideBrowserslist: ["chrome 30"]})).process(data, {from: "./index.css"}).then(res => {
            fs.writeFile(path.join(__dirname, "./dist/output.css"), res.css, (error) => {
                console.log(error)
            })
        })
    }
})
