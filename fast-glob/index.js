const fg = require('fast-glob')

console.log(fg.globSync('./dir/**'))

console.log(fg.globSync('./dir/**',{
    absolute: true
}))