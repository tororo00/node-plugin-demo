const shell = require('shelljs')
const path = require('path')

console.log(shell.head({'-n': 3},path.join(__dirname,'./dist/demo.txt')))