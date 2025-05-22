const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST,GET")
    res.write("hello")
    res.end()
})

server.listen(4500, () => {
    console.log("server is running at 4500")
})