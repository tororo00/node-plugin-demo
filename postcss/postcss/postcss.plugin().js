const http = require("http")
const { Declaration } = require("postcss")
const postcss = require("postcss")

console.dir(postcss)

// 定义postcss插件
// 返回值是一个函数
const myPlugin = postcss.plugin("my-plugin", (options) => {
    return {
        // 钩子函数
        // 处理根节点时（仅一次）触发
        Once(root, helper){
            console.log(root)
            console.log(helper)
        },

        // 遍历每个声明时触发
        Declaration(decl, helper){
            console.log(decl)
            console.log(decl.prop, decl.value)
            console.log(helper)
        },

        // 遍历每个规则时触发
        Rule(rule, helper){
            console.log("-------rule钩子------")
            console.log(rule)
            console.log(helper)
        }
    }
})

console.log(myPlugin)

const css = `
    .box  {
        width: 100px;
        height: 100px;
    }
`

// 使用postcss插件
postcss(myPlugin).process(css).then((res) => {
    console.log(res)
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)