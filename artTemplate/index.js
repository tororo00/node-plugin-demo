const artTemplate = require('art-template')
const path = require('path')

const hmtl = artTemplate(path.join(__dirname,'./index.art'),{
    data: {
        name: 'tom',
        age: 10
    },
    a: 10
})

console.log(hmtl)