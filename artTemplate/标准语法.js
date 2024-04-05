const artTemplate = require('art-template')
const path = require('path')

const hmtl = artTemplate(path.join(__dirname,'./标准语法.art'),{
    data: {
        name: 'tom',
        age: 10
    },
    a: 10,
    value: '<span>11</span>',
    show: true
})

console.log(hmtl)