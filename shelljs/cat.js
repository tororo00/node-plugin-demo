const shell = require('shelljs')
const path = require('path')

// 查看文件的所有内容
// -n 对所有输出行进行编号
console.log(shell.cat('-n',path.join(__dirname,'./index.js')))

console.log(shell.cat(path.join(__dirname,'./index.js')))