/* 
    标准语法：
    {{if value}} ... {{/if}}
    {{if v1}} ... {{else if v2}} ... {{/if}}
*/
const template = require('art-template')
const path = require('path')

const html = template(path.join(__dirname,'./条件.art'),{
    show: true,
    visible: false,
    show2: true,
    show1: false
})

console.log(html)