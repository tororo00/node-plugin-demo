const httpProxy  = require("http-proxy")

const proxy = httpProxy.createProxyServer({
    target: "http://localhost:4500",
    // changeOrigin: true
})

proxy.on("proxyReq", (proxyReq, req, res, options) => {
    // console.log(proxyReq)
    console.log(req.url)
    console.log(options)
    proxyReq.path = "/getCookie"
    req.url = "/getCookie"
    req.method = "post"
})

proxy.on("proxyRes", (proxyRes, req, res) => {
    console.log(proxyRes)
})

proxy.listen(4300,() => {
    console.log("server is running at 4300")
})