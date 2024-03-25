const finalhandler = require('finalhandler')
const http = require('http')

const server = http.createServer((req,res) => {
    const done = finalhandler(req,res)
    done()
})

server.listen(6300,() => {
    console.log('server is running at 6300')
})