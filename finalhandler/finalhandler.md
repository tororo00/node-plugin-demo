# Node.js HTTP请求的终极处理者: finalhandler模块解析

finalhandler 是 Node.js 的一个模块，用于 HTTP 服务中作为最后一步响应 HTTP 请求。本文将详细介绍如何安装和在项目中有效地使用 finalhandler。

## 🚀安装指南

要开始使用 finalhandler，你需要通过 npm 将其安装到你的项目中。以下是安装命令：

```bash
npm install finalhandler

yarn add finalhandler

pnpm install finalhandler
```

安装完成后，你可以按照下面的示例将 finalhandler 集成到你的 Node.js 应用程序中。

# 📦使用API

首先，你需要在项目中引入finalhandler：

```js
const finalhandler = require('finalhandler')
```

finalhandler(req, res, [options])

使用 finalhandler 创建一个函数，它将作为req（请求）和res（响应）的最终阶段被调用。你应该调用这个函数并传递 error 参数。如果没有错误（error 为 falsy），它会向客户端发送一个 404 响应。如果存在错误（error 为 truthy），将根据错误写入响应或者如果响应已经开始，则结束响应。

当错误被写入时，以下信息会被添加到响应中：

* res.statusCode 会从 err.status 或 err.statusCode 中设置。如果这个值不在 4xx 或 5xx 范围内，它将被设置为 500。
* res.statusMessage 会根据状态码来设置。
* 如果 env 为 'production'，正文将是状态代码消息的 HTML；否则会是 err.stack。
* 任何在 err.headers 对象中指定的头信息。

当 finalhandler 被调用时，它还会从 req 中取消管道(pipeline)中的任何内容。

options.env

默认情况下，环境由 NODE_ENV 变量决定，但可以通过此选项覆盖。

options.onerror

提供一个当存在错误时调用的函数。可以用于将错误写入中心位置而无需生成过多的函数。调用时使用 onerror(err, req, res)。

## 🧩实战示例

以下是 finalhandler 在几种常见情况下的使用示例。

总是返回404

```js
const finalhandler = require('finalhandler')
const http = require('http')

const server = http.createServer((req,res) => {
    const done = finalhandler(req,res)
    done()
})
```

执行简单操作

```js
const finalhandler = require('finalhandler')
const http = require('http')
const fs = require('fs')

const server = http.createServer((req,res) => {
    const done = finalhandler(req,res)
    fs.readFile('index.html',(error,data) => {
        if(error){
            done(error)
        }else{
            res.setHeader('Content-Type','text/html')
            res.end()
        }
    })
})

server.listen(3000,() => {})
```

与中间件风格函数结合使用

```js
const finalhanlder = require('finalhandler')
const http = require('node:http')
const serveStatic = require('serve-static')

// 设置静态文件服务器，参数public表示文件夹,在文件夹中的文件为静态服务器的内容
const serve = serveStatic('public')

const server = http.createServer((req,res) => {
    const done = finalhanlder(req,res)
    serve(req,res,done)
})

server.listen(3000,() => {})
```

```
访问静态文件服务器的内容:

http:localhost:3000/文件全名

http:localhost:3000 默认访问　index.html

http:localhost:3000/index.html

http:localhost:3000/图片文件名
```

记录所有错误

```js
const finalhandler = require('finalhandler')
const fs = require('fs')
const http = require('http')

function loggerError(error){
    console.error(error.stack || error.toString())
}

const server = http.createServer((req,res) => {
    const done = finalhandler(req,res,{
        onerror: loggerError
    })
    fs.readFile('index.html',(error,data) => {
        if(error){
            done(error)
        }else{
            res.setHeader('Content-Type','text/html')
            res.write(data)
            res.end()
        }
    })
})
```
仓库地址：

https://github.com/pillarjs/finalhandler

通过这些实例的详细讲解，希望你已经掌握如何在你的 Node.js 项目中使用 finalhandler 以提供优雅的错误处理和404响应。