const template = require('art-template')
const path = require('path')

const html = template(path.join(__dirname,'./循环.art'),{
    arr: [{a:1},{a:2},{a:3}]
})

console.log(html)