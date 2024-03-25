const http = require('http')

const server = http.createServer((req,res) => {
    console.log(req.headers)
    console.log(req.url)
    res.end('hello')
})

server.listen(6200,() => {
    console.log('server is running at 6200')
})