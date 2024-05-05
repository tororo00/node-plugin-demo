const ejs = require('ejs')

// 定义全局分隔符
ejs.delimiter = '@'

ejs.renderFile('./全局自定义分隔符.html', {
    name: 'tom'
}, null, (error, data) => {
    console.log(error)
    console.log(data)
})