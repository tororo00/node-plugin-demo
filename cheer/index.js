const cheerio = require('cheerio');
const http = require('http')

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','applicaiton/json')
    res.write('hello world')
    res.end()
})

const $ = cheerio.load('<ul id="fruits">...</ul>')

console.log($('#fruits'))
console.log($('#fruits').attr('title','hello'))
console.log($('#fruits').attr('title'))

server.listen(4000,() => {

})