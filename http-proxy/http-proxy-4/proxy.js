const httpProxy = require("http-proxy")

const proxy = httpProxy.createProxyServer({
    forward: "http://localhost:4300",
    target: "http://localhost:4500",
    changeOrigin: true
    
})

proxy.listen(5400)