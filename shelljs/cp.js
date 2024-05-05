const shell = require('shelljs')
const path = require('path')

// 拷贝文件到dist目录下
shell.cp(path.join(__dirname,'./index.js'),path.join(__dirname,'./dist'))