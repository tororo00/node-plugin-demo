const pug = require('pug')
const path = require('path')

const render = pug.compileFile(path.join(__dirname,'./index.pug'))

const html = render({
    num: 100
})

console.log(html)