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
            res.write(data)
            res.end()
        }
    })
})

server.listen(6400,() => {
    console.log('server is running at 6400')
})