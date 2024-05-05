const shell = require('shelljs')
const path = require('path')

console.log(shell.mv('-f',path.join(__dirname,'./cat.js'),path.join(__dirname,'./dist')))