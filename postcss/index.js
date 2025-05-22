const postcss = require("postcss")
const http = require("http")

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.end();
})

console.log(postcss)
console.log(postcss([]))
const css = 'body { color: red; }';
const root = postcss.parse(css, {from: "./index.css"});
console.log(root)
console.log(root.nodes)

// 遍历所有声明
root.walkDecls(decl => {
  console.log(`${decl.prop}: ${decl.value}`); // 输出: color: red
});

server.listen(4000, () => {
    console.log("server is running at 4000")
})