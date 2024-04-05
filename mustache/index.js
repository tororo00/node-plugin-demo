const mustache = require('mustache')
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) => {
    res.write('hello')
    res.end()
})

console.log(mustache)

fs.readFile(path.join(__dirname,'./index.mustache'),'utf8',(error,data) => {
    const html = mustache.render(data,{
        arr: [
            {name:'小明',age:20,sex:'男'},
            {name:'tom',age:21,sex:'女'},
            {name:'jack',age:22,sex:'男'}
        ]
    })
    console.log(html)
})




server.listen(4500)