const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer()

const server = http.createServer((req,res) => {
    proxy.web(req,res,{
        target: 'http://localhost:5900',
        // changeOrigin: true
    })
})

server.listen(5400,() => {
    console.log('proxy is running at 5400')
})