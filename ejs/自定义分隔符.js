const ejs = require('ejs')

// 对单个模板自定义分隔符
ejs.renderFile('./自定义分隔符.html',{
    name: 'tom'
},{
    delimiter: '?'
},(error,data) => {
    console.log(data)
})