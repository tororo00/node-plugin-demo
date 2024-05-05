const shell = require('shelljs')

console.log(shell.echo('-e','hello\"'))
console.log(shell.echo('-n','hello\n'))
console.log(shell.echo('hello\"'))