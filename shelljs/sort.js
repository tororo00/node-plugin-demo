const shell = require('shelljs')
const path = require('path')

console.log(shell.sort('-r',path.join(__dirname,'./cat.js')).toString())