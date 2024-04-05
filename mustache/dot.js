const mustache = require('mustache')
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'./dot.mustache'),'utf8',(error,data) => {
    const html = mustache.render(data,'heloo')
    console.log(html)
})