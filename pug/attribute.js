const pug = require('pug')
const path = require('path')

const render = pug.compileFile(path.join(__dirname,'./attribute.pug'))
const html = render({
    str: '😀',
    data: {
        name: 'tom'
    }
})
console.log(html)
