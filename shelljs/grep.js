const shell = require('shelljs')
const path = require('path')

console.log(shell.grep('-vl','hello',path.join(__dirname,'./dist/demo.txt')))

console.log(shell.grep('-n','hello',path.join(__dirname,'./dist/demo.txt')))
