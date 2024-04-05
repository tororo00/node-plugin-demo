const handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')

fs.readFile(path.join(__dirname,'./index.html'),'utf-8',(error,data) => {
    const render = handlebars.compile(data)
    const html = render({
        name: 'tom'
    })
    console.log(html)
})