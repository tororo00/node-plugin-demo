const DotEnv = require('dotenv')
const obj = {}

// zhidingl
const res = DotEnv.config({
    processEnv: obj
})

console.log(obj)
console.log(process.env.foo)