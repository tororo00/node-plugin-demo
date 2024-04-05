import fetch from 'node-fetch'
import http from 'node:http'

const server = http.createServer((req,res) => {
    res.write('hello world')
    res.end()
})

/**
 * 请求网页内容
 */
async function request(){
    const res = await fetch('https://github.com/')
    console.log(res)
    const body = await res.text()
    console.log(body)
}

request()

server.listen(5600)