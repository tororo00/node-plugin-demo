const handlebars = require('handlebars')
const path = require('path')
const fs = require('fs')

fs.readFile(path.join(__dirname,'./demo.handlebars'),'utf8',(error,data) => {
    console.log(data)
    const template = handlebars.compile(data)

    console.log(template({
        name: 'tom'
    }))
})