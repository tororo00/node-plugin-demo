const template = require('art-template')

const html = template.render('<span>{{value}}</span>',{value: 100})

console.log(html)