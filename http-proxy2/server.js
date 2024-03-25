const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET')
    console.log(req.headers)
    res.write('hello world222')
    res.end()
})

server.listen(5900,() => {
    console.log('server is running at 5500')
})