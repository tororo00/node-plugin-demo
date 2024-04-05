const artTemplate = require('art-template')
const path = require('node:path')

const html = artTemplate(path.join(__dirname,'./原始语法.art'),{
    data: {
        user: 'jack'
    },
    value: '😀'
})

console.log(html)