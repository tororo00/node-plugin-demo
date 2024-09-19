const https = require('https')
const fs = require('fs')
const chalk = require('chalk')

const options = {
    // 
    key: fs.readFileSync('./server-key.pem'),
    // 
    ca: [fs.readFileSync('./ca-cert.pem')],
    // 
    cert: fs.readFileSync('./server-cert.pem')
};

// 创建https服务器
const server = https.createServer(options,(req,res) => {
    console.log(req.url)
    fs.readFile('./index.html',(error,data) => {
        res.statusCode = 200
        res.write(data)
        res.end()
    })
})

server.listen(4300, () => {
    console.log(chalk.green('project is running at https://localhost:4300'))
})