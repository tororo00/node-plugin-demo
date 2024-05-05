const shell = require('shelljs')
const path = require('path')

console.log(shell.find(path.join(__dirname,'./dist')))