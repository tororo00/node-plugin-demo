const http = require("http")
const postcss = require("postcss")

const css = `
    @import 'reset.css';
    .container {
        width: 100%;
        @media(min-width: 700px) {
            width: 600px;
        }
    }
    @keyframes fade {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`

const root = postcss.parse(css)

console.log(root)

const rule = root.nodes[1]
// console.log(rule)

// 在rule下调用walkAtRules只会遍历到该
rule.walkAtRules((atRule) => {
    console.log(atRule, "rule")
})

// 在root下调用walkAtRules会遍历到所有at-rules规则
root.walkAtRules((atRule, index) => {
    console.log(atRule, index, "root")
})

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.end()
})

server.listen(4000)