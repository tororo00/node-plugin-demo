const ws = require('nodejs-websocket')
const http = require('http')

console.log(ws)

const server = ws.createServer((conn) => {
    console.log('已经链接',conn)
    conn.on('text',(text) => {
        console.log(text)
    })
    
    conn.on('error',(err) => {
        console.log(err)
    })

    conn.on('connection',() => {
        console.log('pp')
        conn.sendText('hello')
    })

    conn.sendText('hello')
})

server.listen(4000)

// const server = http.createServer((req,res) => {
//     res.end('')
// })

// server.listen(3000)