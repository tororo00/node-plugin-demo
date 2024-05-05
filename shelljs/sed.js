const shell = require('shelljs')
const path = require('path')

// console.log(shell.sed('-i',/hello/g,'😊',path.resolve(__dirname,'./demo.js')))

console.log(shell.sed('-i','hello','😊',path.resolve(__dirname,'./dist/demo.txt')))