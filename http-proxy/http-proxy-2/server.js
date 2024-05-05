const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET')
    console.log(req.headers)
    res.end('hello world222')
})

server.listen(5800,() => {
    console.log('server is running at 5800')
})