const postcss = require("postcss")
const http = require("http")

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end();
})

server.listen(4000)

const css = `.box {font-size: 14px; color: red}`

const root = postcss.parse(css, {to: "./index.css"})

/* 
    Root对象中的nodes数组元素是Rule对象，Rule对象中的nodes数组元素是Declaration对象
    Rule对象中包含css选择器
    Rule#selector
    Declaration对象中包含css属性声明，prop是css属性名，value是属性值
    Declaration#prop
    Declaration#value
    #表示是实例对象调用
*/

console.log(root)
console.log(root.append({selector: ".box1"}))
// 包含 CSS 文档中所有顶级节点
console.log(root.nodes)
console.log(root.nodes.length)
// css选择器
console.log(root.nodes[0].selector)
// css属性名
console.log(root.nodes[0].nodes[0].prop)
// css属性值
console.log(root.nodes[0].nodes[0].value)
// 在Rule对象上添加Declaration对象
root.nodes[0].append({prop: "color", value: "black"})
// 包含原始 CSS 文件的位置信息（如 file、start、end）。
console.log(root.source)
// 输出css文件路径
console.log(root.source.file)
// 将root节点转成字符串
console.log(root.toString())
console.log(root.append)