const  svgCaptcha = require('svg-captcha')
const http = require('http')
const mimeTypes = require('mime-types')

const server = http.createServer()

server.on('request', (req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Methods','POST,GET')
    const type = mimeTypes.lookup('svg')
    console.log(type)
    const captcha = svgCaptcha.createMathExpr({
        color: true,
        size: 6,
        background: 'pink'
    })
    console.log(captcha)
    res.setHeader('Content-Type',type)
    res.write(captcha.data)
    res.end()
})

server.listen(4300, () => {
    console.log('http://localhost:4300')
})