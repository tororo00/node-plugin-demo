const ws = require('ws')

console.dir(ws)

const wss = new ws.WebSocketServer({
    port: 4500
})

wss.on('connection',function(ws){
    ws.on('error',(error) => {
        console.log(error)
    })
    ws.on('message',(data) => {
        console.log(data)
        console.log(data.toString())
    })
    ws.send('hello world')
})