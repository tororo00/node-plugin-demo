const shell = require('shelljs')
const http = require('http')

const server = http.createServer((req,res) => {
    res.end('')
})

console.log(shell.pwd())
console.log(shell.pwd().toString())

console.log(typeof shell.pwd())

server.listen(4000,() => {})

console.log('99')