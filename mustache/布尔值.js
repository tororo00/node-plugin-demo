const mustache = require('mustache')
const fs = require('fs')
const path = require('path')

fs.readFile(path.join(__dirname,'./布尔值.html'),'utf-8',(error,data) => {
    const html = mustache.render(data,{
        show: false,
        visible:　true
    })
    console.log(html)
})