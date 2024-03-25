const Dotenv = require('dotenv')
Dotenv.config()

console.log(process.env.foo)
console.log(process.env.name)
console.log(process.env.PRIVATE_KEY)