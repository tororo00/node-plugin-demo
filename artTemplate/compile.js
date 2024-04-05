const template = require('art-template')

const render = template.compile('<span>{{value}}</span>')
const html = render({
    value: 100
})
console.log(html)