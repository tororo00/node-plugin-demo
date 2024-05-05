const httpProxy = require('http-proxy')

const server = httpProxy.createProxyServer({
    target: 'http://localhost:5800',
    changeOrigin: true
})

server.listen(5900,() => {
    console.log('server is running at 5900')
})