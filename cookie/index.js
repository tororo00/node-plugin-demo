const cookie = require('cookie')
const http = require('http')
const chalk = require('chalk')

const server = http.createServer((req,res) => {
    res.setHeader('Set-Cookie',cookie.serialize('foo','bar',{
        maxAge: 10,
        priority: 'low'
    }))
    res.end('hello world')
})

server.listen(3000,() => {
    console.log('project is running at ' + chalk.green('http://localhost:3000'))
})