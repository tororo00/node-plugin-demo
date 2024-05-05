const mysql = require('mysql')
const http = require('http')

// 建立与MySQl数据库的连接关系 创建一个新的连接实例
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'yangyang'
})

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log('connected')
    }
})

const server = http.createServer((req, res) => {
    db.query('SELECT name,password FROM users', (error, data,fields) => {
        console.log(fields)
        res.statusCode = 200
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Headers','*')
        res.setHeader('Access-Control-Allow-Methods','POST,GET')
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify(data))
        res.end()
    })
})

server.listen(4200, () => {
    console.log('http://localhost:4200')
})