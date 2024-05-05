const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({})

console.log(proxy)

const list = []

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET')
    proxy.web(req,res,{
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        secure: true
    })
    proxy.on('proxyRes',(proxyRes,_req,_res) => {
        // console.log(proxyRes)
        console.log(_req.url)
        console.log(_req.headers)
        console.log(_res.getHeader('host'))
        proxyRes.on('data',(chunk) => {
            list.push(chunk)
        })
        proxyRes.on('end',() => {
            const buffer = Buffer.concat(list)
            res.end(JSON.stringify(buffer.toString()))
        })
    })
})

server.listen(4600,() => {
    console.log('project is running at 4600')
})