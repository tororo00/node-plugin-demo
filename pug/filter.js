const pug = require('pug')
const path = require('path')

const render = pug.compileFile(path.join(__dirname,'./index.html'),{
    filters: {
        'my-filter': function(text,options){
            console.log(text)
            console.log(options)
            text = `--${text}--`
            return text
        }
    }
})

const html = render({
    value: 123
})

console.log(html)