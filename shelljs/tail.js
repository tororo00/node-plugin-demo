const shell = require('shelljs')
const path = require('path')

console.log(shell.tail({
    '-n': 10
},path.join(__dirname,'./cat.js')))

console.log(shell.tail({
    '-n': 10
},path.join(__dirname,'./cat.js')).toString())