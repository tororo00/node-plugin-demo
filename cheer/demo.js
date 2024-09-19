const http = require("http")
const { load } = require('cheerio')

const $ = load(`<div class="box">
    <canvas id="canvas" width="500" height="500"></canvas>
</div>`, null ,false)

const server = http.createServer((req, res) => {
    res.end($.html())
})

server.listen(4300, () => {
    console.log("project is running at 4300")
})

