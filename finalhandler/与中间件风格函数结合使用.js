const finalhandler = require('finalhandler')
const http = require('http')
const serveStatic = require('serve-static')

// 提供静态服务器
const serve = serveStatic('public',{
    // index: ['index.html']
})

const server = http.createServer((req,res) => {
    const done = finalhandler(req,res)
    serve(req,res,done)
})

server.listen(3000,() => {
    console.log('server is running at 3000')
})