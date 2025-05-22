const http = require('http')
const cookie = require('cookie')
const chalk = require('chalk')

const server = http.createServer()

server.on('request',(req,res) => {
    res.setHeader('Set-Cookie', cookie.serialize('key','value',{
        // 客户端不可以通过documet.cookie操作cookie
        httpOnly: true,
        // 设置同一站点
        sateSite: true,
        // https访问
        secure: true
    }))
    res.write('hello world')
    res.end()
})

server.listen(4001,() => {
    console.log('server is running at ' + chalk.green('http://localhost:4001'))
})