const mysql = require('mysql')
const http = require('http')

// 建立与MySQl数据库的连接关系 创建一个新的连接实例
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'yangYANG00',
    database: 'world'
})

db.connect((error) => {
    if (error) {
        console.warn("数据库链接失败", error)
    } else {
        console.log('数据库链接成功')
    }
})

// SELECT 字段名,字段名,... FROM 数据库表的名字
// SELECT * FROM 数据库表的名字 获取所有字段的数据
const server = http.createServer((req, res) => {
    db.query('SELECT * FROM country', (error, data,fields) => {
        console.log(fields)
        res.statusCode = 200
        // 开启跨域资源共享
        res.setHeader('Access-Control-Allow-Origin','*')
        res.setHeader('Access-Control-Allow-Headers','*')
        res.setHeader('Access-Control-Allow-Methods','POST,GET')
        // 设置响应头，响应结果是json数据
        res.setHeader('Content-Type','application/json')
        res.write(JSON.stringify(data))
        res.end()
    })
})

server.listen(4200, () => {
    console.log('service is running at http://localhost:4200')
})