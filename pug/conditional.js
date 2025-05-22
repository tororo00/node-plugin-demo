const pug = require('pug')
const path = require('path')

const render = pug.compileFile(path.join(__dirname,'./conditional.pug'))

const html = render({
})

console.log(html)