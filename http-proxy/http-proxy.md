`httpProxy.createProxyServer`支持以下选项。

changeOrigin: true/false, Default: false - changes the origin of the host header to the target URL

changeOrigin: true/false, 默认值：false - 将host首部的来源更改为目标URL

当进行代理时，Host 的源默认会保留（即Host是浏览器发过来的host），如果将changeOrigin设置为true，则host会变成target的值

```js
const xhr = new XMLHttpRequest()

xhr.open('get',`http://localhost:4600/api/mmdb/movie/v3/list/hot.json?
ct=%E6%B1%95%E5%A4%B4&ci=117&channelId=4`)

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status === 200){
            // console.log(JSON.parse(xhr.response))
            console.log(xhr.responseText)
        }
    }
}

xhr.send()
```

```js
const http = require('http')
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer({})
const list = []

const server = http.createServer((req,res) => {
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET')
    /* 
        changeOrigin的作用：将localhost:4600更改为i.maoyan.com
    */
    proxy.web(req,res,{
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        secure: true,
        forward: 'kkk'
    })
    proxy.on('proxyRes',(proxyRes,_req,_res) => {
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
```

通过createProxyServer函数创建代理，然后传入可选的options对象

```js
const httpProxy = require('http-proxy')

const proxy = httpProxy.createProxyServer(options)
```

## 设置一个基本的独立代理服务器

代理服务器
```js
const httpProxy = require('http-proxy')

const server = httpProxy.createProxyServer({
    target: 'http://localhost:5800',
    changeOrigin: true
})

server.listen(5900,() => {
    console.log('proxy server is running at 5900')
})
```

目标服务器

```js
const http = require('http')

const server = http.createServer((req,res) => {
    // 设置允许跨域
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET')
    // 查看请求头中的host
    console.log(req.headers)
    res.end('hello world')
})

server.listen(5800,() => {
    console.log('target server is running at 5800')
})
```

## 使用自定义服务器逻辑设置独立的代理服务器