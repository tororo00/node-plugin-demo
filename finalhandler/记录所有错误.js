const finalhandler = require('finalhandler')
const http = require('http')
const fs = require('fs')

function loggerError(error,req,res){
    console.log(res)
    console.log(res.statusMessage)
    console.log(error.stack || error.toString())
}

const server = http.createServer((req,res) => {
    const done = finalhandler(req,res,{onerror: loggerError})
    fs.readFile('index.html',(error,data) => {
        if(error){
            done(error)
        }else{
            res.setHeader('Content-Type','text/html')
            res.end(data)
        }
    })
})

server.listen(4100,() => {
    console.log('server is running at 4000')
})