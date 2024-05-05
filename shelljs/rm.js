const shell = require('shelljs')
const path = require('path')

/* 
    shell.rm([options,] file [, file ...])
    shell.rm([options,] file_array)

    有效的 options:

    -f: force
    -r, -R: recursive

    删除文件。返回 ShellString 表示成功或失败。
*/
// 删除demo目录
const res = shell.rm('-rf',path.join(__dirname,'./demo'))
console.log(res)