const mustache = require('mustache')
const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request',(reqr,res) => {
    fs.readFile(path.join(__dirname,'./index.html'),'utf-8',(error,data) => {
        const html = mustache.render(data,{
            arr: [
                {name: 'tom',brr:[1,2]},
                {name: 'jack',brr: [3,4]}
            ]
        })
        res.write(html)
        res.end()
        console.log(html)
    })
})

server.listen(4300,() =>  {
    console.log('project is running at 4300')
})