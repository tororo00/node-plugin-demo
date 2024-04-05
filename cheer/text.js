const http = require('http')
const cheerio = require('cheerio')
const chalk = require('chalk')

console.log(cheerio)

const server = http.createServer()

const $ = cheerio.load(`<div>
    <span></span>
</div`,null,false)
console.log('$',$)
console.log($('span'))

/* 
    const $ = cheerio.load(content, options?, isDocument?)

    创建一个查询函数，绑定到根据提供的标签创建的文档上

    请注意，与网络浏览器上下文类似，此操作可能会引入<html>、 <head> 和<body>元素；将isDocument设为false可切换到片段模式并禁用此操作。

    Parameters
    Name	Type	Default value	Description
    content	string | AnyNode | AnyNode[] | Buffer	undefined	 要加载的biaoqian.
    options?	null | CheerioOptions	undefined	为创建的实例提供的选项.
    isDocument?	boolean	true	允许将解析器切换为片段模式。

    Returns
    CheerioAPI
    已加载的document
*/

server.on('request',(req,res) => {
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers','*')
    res.setHeader('Access-Control-Allow-Methods','*')
    $('div').addClass('box')
    res.write($.html())
    // res.write($.toString())
    res.end()
})

server.listen(4001,() => {
    console.log(chalk.green('project is running at 5000'))
})