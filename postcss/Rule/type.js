const http = require("http")
const postcss = require("postcss")

const css = `.container {width: 100%;}`

const root = postcss.parse(css)
console.log(root)

const rule = root.nodes[0]

// root.walk((node) => {
//     console.log(`节点类型：${node.type}`)
//     if(node.type === "rule"){
//         console.log(`选择器：${node.selector}`)
//     }else if(node.type === "decl"){
//         console.log(`属性：${node.prop} = ${node.value}`)
//     }
// })

rule.walk((node) => {
    console.log(`节点类型：${node.type}`)
    if(node.type === "rule"){
        console.log(`选择器：${node.selector}`)
    }else if(node.type === "decl"){
        console.log(`属性：${node.prop} = ${node.value}`)
    }
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)